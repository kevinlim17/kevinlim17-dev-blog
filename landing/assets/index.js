(function () {
  var cfg = window.ACTIVITY || {};

  // 일시·장소
  var meta = document.getElementById('event-meta');
  var parts = [cfg.EVENT_DATE_TEXT, cfg.EVENT_PLACE_TEXT].filter(Boolean);
  meta.textContent = parts.length ? parts.join(' · ') : '일시와 장소는 확정되는 대로 이 페이지에 알립니다.';

  // Tally 임베드: 폼 ID가 있을 때만 연다.
  if (!cfg.TALLY_FORM_ID) return;

  var frame = document.getElementById('tally-frame');
  var box = document.getElementById('tally-box');
  var fallback = document.getElementById('tally-fallback');

  frame.setAttribute(
    'data-tally-src',
    'https://tally.so/embed/' +
      encodeURIComponent(cfg.TALLY_FORM_ID) +
      '?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1'
  );
  box.hidden = false;
  fallback.hidden = true;

  var s = document.createElement('script');
  s.src = 'https://tally.so/widgets/embed.js';
  s.async = true;
  s.onload = function () {
    if (window.Tally && window.Tally.loadEmbeds) window.Tally.loadEmbeds();
  };
  // 스크립트가 막힌 환경(광고 차단 등)에서는 iframe을 직접 연결하고 새 탭 링크를 함께 준다.
  s.onerror = function () {
    frame.src = frame.getAttribute('data-tally-src');
    fallback.hidden = false;
    fallback.innerHTML = '';
    var a = document.createElement('a');
    a.href = 'https://tally.so/r/' + encodeURIComponent(cfg.TALLY_FORM_ID);
    a.textContent = '신청서가 보이지 않으면 새 탭에서 여세요.';
    fallback.appendChild(a);
  };
  document.body.appendChild(s);
})();
