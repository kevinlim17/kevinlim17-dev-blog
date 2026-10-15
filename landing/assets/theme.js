(function () {
  var root = document.documentElement;
  try { var saved = localStorage.getItem('theme'); if (saved) root.dataset.theme = saved; } catch (e) {}
  var dark = function () {
    return root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
  };
  document.addEventListener('DOMContentLoaded', function () {
    var nav = document.querySelector('.bar nav');
    if (!nav) return;
    var b = document.createElement('button');
    b.className = 'theme-toggle';
    b.type = 'button';
    var paint = function () {
      b.dataset.mode = dark() ? 'dark' : 'light';
      b.setAttribute('aria-label', dark() ? '라이트 모드로 전환' : '다크 모드로 전환');
    };
    b.onclick = function () {
      root.dataset.theme = dark() ? 'light' : 'dark';
      try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
      paint();
    };
    paint();
    nav.appendChild(b);
  });
})();
