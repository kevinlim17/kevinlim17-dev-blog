(function () {
  var cfg = window.ACTIVITY || {};
  // Supabase 프로젝트 루트 주소로 정리한다. 대시보드에서 복사한 값 끝에 /rest/v1 이 붙어 있어도 동작하도록.
  function projectUrl(u) {
    return String(u || '').trim().replace(/\/+$/, '').replace(/\/rest\/v1$/, '');
  }
  var L = window.LABELS;

  var gridEl = document.getElementById('grid');
  var emptyEl = document.getElementById('empty');
  var liveEl = document.getElementById('live');
  var summaryEl = document.getElementById('summary');
  var filtersEl = document.getElementById('filters');

  var rows = [];
  var seen = {};
  var firstLoad = true;
  var filter = '';

  // 사용자가 쓴 글은 반드시 textContent로만 넣는다. (프로젝터에 걸리는 화면이라 HTML 주입을 허용하면 안 된다.)
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function card(r) {
    var lv = L.ai_level[r.ai_level] || { name: '', short: '' };
    var a = el('article', 'practice');
    a.setAttribute('data-level', r.ai_level);

    var meta = el('div', 'meta');
    meta.appendChild(el('span', null, r.school_level + ' · ' + r.subject));
    a.appendChild(meta);

    a.appendChild(el('p', 'friction', '“' + r.friction + '”'));

    var dl = el('dl');
    function item(term, desc) {
      var d = el('div');
      d.appendChild(el('dt', null, term));
      d.appendChild(el('dd', null, desc));
      dl.appendChild(d);
    }
    item('실천', r.practice);
    if (r.failure) item('실패와 한계', r.failure);
    item('마찰을 지키려면', L.sustain_by[r.sustain_by] || '');
    a.appendChild(dl);

    var tags = el('div', 'tags');
    var t = el('span', 'tag');
    var dot = el('span', 'dot');
    dot.setAttribute('data-level', r.ai_level);
    t.appendChild(dot);
    t.appendChild(document.createTextNode(lv.name + ' · ' + lv.short));
    tags.appendChild(t);
    (r.functions || []).forEach(function (f) {
      tags.appendChild(el('span', 'tag', L.functions[f] || f));
    });
    a.appendChild(tags);

    if (!firstLoad && !seen[r.id]) a.className += ' is-new';
    return a;
  }

  function count(list, keyFn) {
    var c = {};
    list.forEach(function (r) {
      var ks = keyFn(r);
      (Array.isArray(ks) ? ks : [ks]).forEach(function (k) {
        c[k] = (c[k] || 0) + 1;
      });
    });
    return c;
  }

  function fillSummary(ulId, counts, order, labelFn) {
    var ul = document.getElementById(ulId);
    ul.innerHTML = '';
    order.forEach(function (k) {
      var li = el('li');
      li.appendChild(el('span', null, labelFn(k)));
      li.appendChild(el('b', null, String(counts[k] || 0)));
      ul.appendChild(li);
    });
  }

  function render() {
    var list = filter
      ? rows.filter(function (r) {
          return r.ai_level === filter;
        })
      : rows;

    gridEl.innerHTML = '';
    list.forEach(function (r) {
      gridEl.appendChild(card(r));
    });
    emptyEl.hidden = rows.length > 0;
    summaryEl.hidden = filtersEl.hidden = rows.length === 0;

    fillSummary(
      'sum-level',
      count(rows, function (r) {
        return r.ai_level;
      }),
      ['red', 'yellow', 'green'],
      function (k) {
        return L.ai_level[k].name + ' · ' + L.ai_level[k].short;
      }
    );
    fillSummary(
      'sum-fn',
      count(rows, function (r) {
        return r.functions || [];
      }),
      ['qualification', 'socialization', 'subjectification'],
      function (k) {
        return L.functions[k];
      }
    );
    fillSummary(
      'sum-sustain',
      count(rows, function (r) {
        return r.sustain_by;
      }),
      ['private', 'public', 'both'],
      function (k) {
        return L.sustain_by[k];
      }
    );

    rows.forEach(function (r) {
      seen[r.id] = true;
    });
    firstLoad = false;
  }

  function setLive(text) {
    liveEl.textContent = text;
  }

  function load() {
    return fetch(
      projectUrl(cfg.SUPABASE_URL) + '/rest/v1/practices?select=*&approved=eq.true&order=created_at.desc',
      { headers: { apikey: cfg.SUPABASE_ANON_KEY, Authorization: 'Bearer ' + cfg.SUPABASE_ANON_KEY } }
    )
      .then(function (res) {
        if (!res.ok) throw new Error(String(res.status));
        return res.json();
      })
      .then(function (data) {
        rows = data;
        render();
        setLive('카드 ' + rows.length + '장 · 새 카드는 자동으로 나타납니다');
      })
      .catch(function () {
        setLive('불러오지 못했습니다. 잠시 뒤 다시 시도합니다.');
      });
  }

  // ── 필터 ─────────────────────────────
  filtersEl.addEventListener('click', function (e) {
    var b = e.target.closest('button[data-level]');
    if (!b) return;
    filter = b.getAttribute('data-level');
    Array.prototype.forEach.call(filtersEl.querySelectorAll('button'), function (x) {
      x.setAttribute('aria-pressed', x === b ? 'true' : 'false');
    });
    render();
  });

  // ── 시작 ─────────────────────────────
  if (!cfg.SUPABASE_URL || !cfg.SUPABASE_ANON_KEY) {
    setLive('아직 연결되지 않았습니다.');
    emptyEl.hidden = false;
    return;
  }

  load();

  // 운영자가 approved를 켜면 Realtime이 알려 준다. 알림을 놓쳐도 되도록 주기적으로도 다시 읽는다.
  if (window.supabase && window.supabase.createClient) {
    try {
      var client = window.supabase.createClient(projectUrl(cfg.SUPABASE_URL), cfg.SUPABASE_ANON_KEY);
      client
        .channel('practices-board')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'practices' }, load)
        .subscribe();
    } catch (e) {
      /* 폴링이 대신한다 */
    }
  }
  setInterval(load, 15000);
})();
