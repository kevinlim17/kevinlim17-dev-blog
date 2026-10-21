(function () {
  var cfg = window.ACTIVITY || {};

  // 일시·장소
  var meta = document.getElementById('event-meta');
  var parts = [cfg.EVENT_DATE_TEXT, cfg.EVENT_PLACE_TEXT].filter(Boolean);
  meta.textContent = parts.length ? parts.join('\n') : '일시와 장소는 확정되는 대로 이 페이지에 알립니다.';


  // 서울 자치구 지도: GeoJSON → SVG (경도·위도를 위도 보정 후 평면에 투영)
  var svg = document.getElementById('seoul-map');
  fetch('assets/seoul.geojson').then(function (r) { return r.json(); }).then(function (g) {
    var k = Math.cos(37.55 * Math.PI / 180), pts = [];
    function rings(geom) { return geom.type === 'Polygon' ? geom.coordinates : [].concat.apply([], geom.coordinates); }
    g.features.forEach(function (f) { rings(f.geometry).forEach(function (r) { r.forEach(function (p) { pts.push(p); }); }); });
    var x0 = Math.min.apply(null, pts.map(function (p) { return p[0]; })), x1 = Math.max.apply(null, pts.map(function (p) { return p[0]; }));
    var y0 = Math.min.apply(null, pts.map(function (p) { return p[1]; })), y1 = Math.max.apply(null, pts.map(function (p) { return p[1]; }));
    var s = 300 / ((x1 - x0) * k), H = (y1 - y0) * s;
    svg.setAttribute('viewBox', '0 0 300 ' + H.toFixed(0));
    function xy(p) { return ((p[0] - x0) * k * s).toFixed(1) + ',' + ((y1 - p[1]) * s).toFixed(1); }
    var NS = 'http://www.w3.org/2000/svg';
    g.features.forEach(function (f) {
      var p = document.createElementNS(NS, 'path');
      p.setAttribute('d', rings(f.geometry).map(function (r) { return 'M' + r.map(xy).join('L') + 'Z'; }).join(''));
      p.setAttribute('class', f.properties.name === '마포구' ? 'gu mapo' : 'gu');
      svg.appendChild(p);
    });
  });

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
