(function () {
  var cfg = window.ACTIVITY || {};
  var form = document.getElementById('card-form');
  var submitBtn = document.getElementById('submit');
  var errorBox = document.getElementById('error');
  var doneBox = document.getElementById('done');
  var closedBox = document.getElementById('closed');

  // ── 글자 수 표시 ─────────────────────────────
  Array.prototype.forEach.call(form.querySelectorAll('textarea[data-max]'), function (ta) {
    var out = ta.parentNode.querySelector('.count span');
    function update() {
      out.textContent = String(ta.value.length);
    }
    ta.addEventListener('input', update);
    update();
  });

  // ── 접수 시간 안내 (실제 차단은 DB가 한다) ─────────────────────────────
  function windowState() {
    var now = Date.now();
    var o = cfg.OPENS_AT ? Date.parse(cfg.OPENS_AT) : NaN;
    var c = cfg.CLOSES_AT ? Date.parse(cfg.CLOSES_AT) : NaN;
    if (!isNaN(o) && now < o) return 'before';
    if (!isNaN(c) && now > c) return 'after';
    return 'open';
  }

  function showClosed(kind) {
    closedBox.hidden = false;
    closedBox.innerHTML = '';
    var h = document.createElement('h2');
    h.textContent = kind === 'before' ? '아직 카드를 받는 시간이 아닙니다' : '카드 접수가 끝났습니다';
    var p = document.createElement('p');
    p.textContent =
      kind === 'before'
        ? '행사가 시작되면 이 페이지에서 카드를 쓸 수 있습니다.'
        : '지금까지 올라온 카드는 실천 보드에서 볼 수 있습니다.';
    closedBox.appendChild(h);
    closedBox.appendChild(p);
    form.hidden = true;
  }

  var ws = windowState();
  if (ws !== 'open') showClosed(ws);

  // ── 검증 ─────────────────────────────
  function setError(name, msg) {
    var el = form.querySelector('[data-error-for="' + name + '"]');
    if (!el) return;
    el.textContent = msg || '';
    el.hidden = !msg;
  }

  // 고치는 즉시 해당 항목의 오류 문구를 지운다.
  function clearOnEdit(e) {
    if (e.target && e.target.name) setError(e.target.name, '');
  }
  form.addEventListener('input', clearOnEdit);
  form.addEventListener('change', clearOnEdit);

  function collect() {
    var fd = new FormData(form);
    var failure = String(fd.get('failure') || '').trim();
    return {
      honeypot: String(fd.get('website') || ''),
      payload: {
        school_level: fd.get('school_level') || '',
        subject: fd.get('subject') || '',
        friction: String(fd.get('friction') || '').trim(),
        practice: String(fd.get('practice') || '').trim(),
        failure: failure ? failure : null,
        sustain_by: fd.get('sustain_by') || '',
        ai_level: fd.get('ai_level') || '',
        functions: fd.getAll('functions'),
      },
    };
  }

  function validate(p) {
    var firstBad = null;
    function bad(name, msg) {
      setError(name, msg);
      if (!firstBad) firstBad = name;
    }
    ['school_level', 'subject', 'friction', 'practice', 'sustain_by', 'ai_level', 'functions'].forEach(function (n) {
      setError(n, '');
    });
    if (!p.school_level) bad('school_level', '학교급을 선택해 주세요.');
    if (!p.subject) bad('subject', '과목을 선택해 주세요.');
    if (!p.friction) bad('friction', '지키려는 마찰을 적어 주세요.');
    if (!p.practice) bad('practice', '실천을 적어 주세요.');
    if (!p.sustain_by) bad('sustain_by', '하나를 골라 주세요.');
    if (!p.ai_level) bad('ai_level', 'AI 사용 수준을 골라 주세요.');
    if (!p.functions.length) bad('functions', '닿는 기능을 하나 이상 골라 주세요.');
    return firstBad;
  }

  function focusField(name) {
    var el = form.querySelector('[name="' + name + '"]');
    if (el && el.focus) el.focus();
  }

  // ── 제출 ─────────────────────────────
  function showError(msg) {
    errorBox.hidden = false;
    errorBox.textContent = msg;
    errorBox.focus();
  }

  function mapFailure(status, body) {
    var code = body && body.code;
    if (status === 401 || status === 403 || code === '42501') {
      return '지금은 카드를 받는 시간이 아닙니다. 행사 시간 중이라면 운영진에게 알려 주세요.';
    }
    if (status === 400 || status === 422) {
      return '입력 내용 중 저장할 수 없는 값이 있습니다. 글자 수와 선택 항목을 확인한 뒤 다시 제출해 주세요.';
    }
    if (status === 429) {
      return '잠시 뒤에 다시 시도해 주세요.';
    }
    return '저장하지 못했습니다. 작성한 내용은 그대로 남아 있습니다. 잠시 뒤 다시 제출해 주세요.';
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    errorBox.hidden = true;

    var data = collect();
    var bad = validate(data.payload);
    if (bad) {
      focusField(bad);
      return;
    }

    // 숨김 칸이 채워졌다면 봇이다. 성공한 것처럼 보이게 하고 저장하지 않는다.
    if (data.honeypot) {
      finish();
      return;
    }

    if (!cfg.SUPABASE_URL || !cfg.SUPABASE_ANON_KEY) {
      showError('카드 접수가 아직 연결되지 않았습니다. 운영진에게 알려 주세요.');
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = '제출하는 중';

    fetch(cfg.SUPABASE_URL.replace(/\/$/, '') + '/rest/v1/practices', {
      method: 'POST',
      headers: {
        apikey: cfg.SUPABASE_ANON_KEY,
        Authorization: 'Bearer ' + cfg.SUPABASE_ANON_KEY,
        'Content-Type': 'application/json',
        // 익명은 select 권한이 없으므로 저장된 행을 돌려받지 않는다.
        Prefer: 'return=minimal',
      },
      body: JSON.stringify(data.payload),
    })
      .then(function (res) {
        if (res.ok) return finish();
        return res
          .json()
          .catch(function () {
            return null;
          })
          .then(function (body) {
            showError(mapFailure(res.status, body));
          });
      })
      .catch(function () {
        showError('연결할 수 없습니다. 네트워크를 확인한 뒤 다시 제출해 주세요. 작성한 내용은 그대로 남아 있습니다.');
      })
      .then(function () {
        submitBtn.disabled = false;
        submitBtn.textContent = '카드 제출하기';
      });
  });

  function finish() {
    form.reset();
    Array.prototype.forEach.call(form.querySelectorAll('.count span'), function (s) {
      s.textContent = '0';
    });
    form.hidden = true;
    doneBox.hidden = false;
    doneBox.focus();
  }

  document.getElementById('again').addEventListener('click', function () {
    doneBox.hidden = true;
    form.hidden = false;
    window.scrollTo({ top: form.offsetTop - 16 });
    var first = form.querySelector('input[name="school_level"]');
    if (first) first.focus();
  });
})();
