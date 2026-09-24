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
    '@media (max-width:767px){',
    '  [style*="padding: 38px 40px 30px"]{padding:22px 14px 18px!important}',
    '  [style*="height: 280px"][style*="align-items: flex-end"]{gap:3px!important;height:230px!important}',
    '  [style*="height: 280px"][style*="align-items: flex-end"] > *{min-width:0!important;gap:7px!important}',
    '  [style*="height: 280px"][style*="align-items: flex-end"] span{font-size:11px!important;letter-spacing:-.02em!important;white-space:normal!important;overflow-wrap:anywhere;text-align:center}',
    '  [style*="padding: 38px 40px 30px"] [style*="white-space: nowrap"]{white-space:normal!important}',
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

(function () {
  var enc = encodeURIComponent;
  var ov, lastFocus;
  function close() { if (ov) { ov.remove(); ov = null; if (lastFocus) lastFocus.focus(); } }
  function open(EMAIL, SUBJECT, TITLE) {
    var q = SUBJECT ? '?subject=' + enc(SUBJECT) : '';
    var opts = [
      ['Open in App', 'mailto:' + EMAIL + q],
      ['Open in Gmail', 'https://mail.google.com/mail/?view=cm&fs=1&to=' + enc(EMAIL) + (SUBJECT ? '&su=' + enc(SUBJECT) : '')],
      ['Copy email address', null]
    ];
    lastFocus = document.activeElement;
    ov = document.createElement('div');
    ov.setAttribute('role', 'dialog'); ov.setAttribute('aria-modal', 'true'); ov.setAttribute('aria-labelledby', 'cbgm-intro-t');
    ov.style.cssText = 'position:fixed;inset:0;z-index:9999;background:rgba(14,35,64,.5);display:flex;align-items:center;justify-content:center;padding:20px';
    var box = document.createElement('div');
    box.style.cssText = 'background:#fff;border-radius:12px;max-width:400px;width:100%;padding:30px 28px 24px;box-shadow:0 24px 60px rgba(14,35,64,.28);position:relative;font-family:Inter,sans-serif';
    box.innerHTML = '<div style="height:3px;width:36px;background:linear-gradient(90deg,#38B34B,#1F3E6E);margin-bottom:18px"></div>' +
      '<h2 id="cbgm-intro-t" style="font:500 21px/1.3 Montserrat,sans-serif;color:#1F3E6E;margin:0 0 8px;letter-spacing:-.02em"></h2>' +
      '<p style="font:300 14px/1.6 Inter,sans-serif;color:#3D3E44;margin:0 0 20px;overflow-wrap:anywhere">Email us at <strong style="font-weight:500"></strong></p>';
    box.querySelector('h2').textContent = TITLE;
    box.querySelector('strong').textContent = EMAIL;
    var list = document.createElement('div');
    list.style.cssText = 'display:grid;gap:8px';
    opts.forEach(function (o) {
      var el = document.createElement(o[1] ? 'a' : 'button');
      el.textContent = o[0];
      el.style.cssText = 'display:block;width:100%;box-sizing:border-box;text-align:left;padding:14px 16px;border:1px solid #DDE4EC;border-radius:6px;background:#fff;font:400 14px/1.2 Inter,sans-serif;color:#1F3E6E;cursor:pointer;text-decoration:none';
      el.onmouseenter = function () { el.style.borderColor = '#38B34B'; };
      el.onmouseleave = function () { el.style.borderColor = '#DDE4EC'; };
      if (o[1]) {
        el.href = o[1];
        el.setAttribute('data-cbgm-direct', '');
        if (o[1].indexOf('http') === 0) { el.target = '_blank'; el.rel = 'noopener noreferrer'; el.referrerPolicy = 'no-referrer'; }
        el.addEventListener('click', function () { setTimeout(close, 50); });
      } else {
        el.type = 'button';
        el.addEventListener('click', function () {
          var done = function () { el.textContent = 'Copied to clipboard'; el.style.color = '#27842F'; el.style.borderColor = '#38B34B'; };
          var fallback = function () {
            var ta = document.createElement('textarea');
            ta.value = EMAIL; ta.setAttribute('readonly', '');
            ta.style.cssText = 'position:fixed;top:0;left:0;opacity:0;pointer-events:none';
            box.appendChild(ta); ta.focus(); ta.select(); ta.setSelectionRange(0, EMAIL.length);
            var ok = false; try { ok = document.execCommand('copy'); } catch (err) {}
            ta.remove();
            if (ok) done(); else { el.textContent = EMAIL; el.style.userSelect = 'all'; }
          };
          if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(EMAIL).then(done, fallback);
          else fallback();
        });
      }
      list.appendChild(el);
    });
    box.appendChild(list);
    var x = document.createElement('button');
    x.type = 'button'; x.setAttribute('aria-label', 'Close'); x.innerHTML = '&times;';
    x.style.cssText = 'position:absolute;top:12px;right:12px;width:36px;height:36px;border:0;background:none;font:300 26px/1 Inter,sans-serif;color:#6B6F79;cursor:pointer';
    x.onclick = close;
    box.appendChild(x);
    ov.appendChild(box);
    ov.addEventListener('click', function (e) { if (e.target === ov) close(); });
    document.body.appendChild(ov);
    list.firstChild.focus();
  }
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href^="mailto:"]');
    if (!a || a.hasAttribute('data-cbgm-direct')) return;
    var raw = a.getAttribute('href').slice(7), parts = raw.split('?');
    var email = decodeURIComponent(parts[0]);
    var subject = '';
    if (parts[1]) { var m = parts[1].match(/(?:^|&)subject=([^&]*)/i); if (m) subject = decodeURIComponent(m[1].replace(/\+/g, ' ')); }
    var intro = /Request an Introduction/i.test(a.textContent || '');
    if (intro && !subject) subject = 'Request an Introduction';
    e.preventDefault();
    open(email, subject, intro ? 'Request an Introduction' : 'Get in touch');
  }, true);
})();
