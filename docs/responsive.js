(function () {
  var CSS = [
    '@media (max-width:1024px){',
    '  [style*="max-width: 1240px"]{padding-left:24px!important;padding-right:24px!important}',
    '  [style*="grid-template-columns"]{grid-template-columns:minmax(0,1fr)!important}',
    '  [style*="grid-template-columns"] > *{border-right:0!important;border-left:0!important}',
    '  [style*="grid-template-columns"] > *:not([style*="background"]):not([style*="border-radius"]){padding-left:0!important;padding-right:0!important}',
    '  [style*="grid-template-columns"] > [style*="border-right"]{border-bottom:1px solid rgba(255,255,255,.18)!important;padding-bottom:22px!important}',
    '  [style*="justify-content: space-between"]{flex-wrap:wrap!important}',
    '  [style*="position: sticky"][style*="top: 120px"]{position:static!important}',
    '  h1{font-size:38px!important;line-height:1.12!important}',
    '  h2{font-size:28px!important;line-height:1.2!important}',
    '  h3{font-size:19px!important}',
    '  section img[style*="object-fit: cover"][style*="position: absolute"]{object-position:center}',
    '}',
    '@media (max-width:767px){',
    '  [style*="max-width: 1240px"]{padding-left:20px!important;padding-right:20px!important}',
    '  h1{font-size:32px!important}',
    '  h2{font-size:24px!important}',
    '  [style*="font-size: 104px"]{font-size:64px!important}',
    '  blockquote{padding:20px 22px!important}',
    '  [style*="padding: 96px"],[style*="padding: 92px"],[style*="padding: 88px"]{padding-top:56px!important;padding-bottom:56px!important}',
    '}',
    '@media (max-width:1024px){',
    '  [data-om-navlinks]{display:none!important}',
    '  [data-om-hamburger]{display:flex!important}',
    '}',
    '[data-om-hamburger]{display:none;position:fixed;top:22px;right:20px;z-index:60;width:44px;height:44px;',
    '  align-items:center;justify-content:center;flex-direction:column;gap:5px;background:rgba(39,132,47,1);',
    '  border:0;border-radius:4px;cursor:pointer;padding:0}\n[data-om-hamburger]:focus-visible{outline:3px solid #fff;outline-offset:2px}',
    '[data-om-hamburger] i{display:block;width:18px;height:1.5px;background:#fff}',
    '[data-om-menu]{position:fixed;inset:0;z-index:59;background:#0B1B33;display:none;flex-direction:column;',
    '  gap:4px;padding:96px 24px 40px;overflow:auto}',
    '[data-om-menu][data-open="1"]{display:flex}',
    '[data-om-menu] a{font:300 17px/1 Inter,sans-serif;color:#fff;padding:16px 0;',
    '  border-bottom:1px solid rgba(255,255,255,.14);text-decoration:none}'
  ].join('\n');

  function injectCss() {
    if (document.getElementById('om-responsive-css')) return;
    var s = document.createElement('style');
    s.id = 'om-responsive-css';
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  function build() {
    var links = document.querySelector('[data-om-navlinks]');
    if (!links) {
      var bar = document.querySelector('div[style*="position: sticky"][style*="z-index: 30"]');
      if (!bar) return false;
      links = bar.querySelector('div[style*="margin-left: auto"]');
      if (!links) return false;
      links.setAttribute('data-om-navlinks', '');
    }

    var menu = document.querySelector('[data-om-menu]');
    if (!menu) {
      menu = document.createElement('nav');
      menu.setAttribute('data-om-menu', '');
      menu.setAttribute('aria-label', 'Mobile');
      document.body.appendChild(menu);
    }
    menu.innerHTML = '';
    Array.prototype.forEach.call(links.querySelectorAll('a'), function (a) {
      var c = document.createElement('a');
      c.href = a.getAttribute('href') || '#';
      c.textContent = (a.textContent || '').trim();
      c.addEventListener('click', function () { menu.setAttribute('data-open', '0'); });
      menu.appendChild(c);
    });

    var btn = document.querySelector('[data-om-hamburger]');
    if (!btn) {
      btn = document.createElement('button');
      btn.setAttribute('data-om-hamburger', '');
      btn.setAttribute('aria-label', 'Menu');
      btn.setAttribute('aria-expanded', 'false');
      btn.innerHTML = '<i></i><i></i><i></i>';
      btn.addEventListener('click', function () {
        var open = menu.getAttribute('data-open') === '1';
        menu.setAttribute('data-open', open ? '0' : '1');
        btn.setAttribute('aria-expanded', open ? 'false' : 'true');
      });
      document.body.appendChild(btn);
    }
    return true;
  }

  function start() {
    injectCss();
    if (build()) return;
    var tries = 0;
    var t = setInterval(function () {
      if (build() || ++tries > 40) clearInterval(t);
    }, 150);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
