/* ============================================================
   MMOF · Field (2C) — shared nav + footer injection + polish
   Zero-build: plain script, no fetch (file:// safe).
   Each page: <body data-page="team"> and <div id="page">…</div>
   ============================================================ */
(function () {
  var NAV = [
    ['Investment', 'field-investment.html', 'investment'],
    ['Venture Building', 'field-venture-building.html', 'venture'],
    ['Impact', 'field-impact.html', 'impact'],
    ['Stories', 'field-stories.html', 'stories'],
    ['Team', 'field-team.html', 'team']
  ];

  function mark(size, fill) {
    var p = 'M46,6 L26,6 A20,20 0 0 0 6,26 L6,46 L26,46 L26,26 L46,26 Z';
    var g = ['', 'rotate(90 50 50)', 'rotate(180 50 50)', 'rotate(270 50 50)'].map(function (t) {
      return '<path d="' + p + '"' + (t ? ' transform="' + t + '"' : '') + '/>';
    }).join('');
    return '<svg class="mmof-mark" width="' + size + '" height="' + size + '" viewBox="0 0 100 100" ' +
      'role="img" aria-label="MMOF"><g fill="' + fill + '">' + g + '</g></svg>';
  }

  var cur = document.body.getAttribute('data-page') || '';

  function navHTML() {
    var links = NAV.map(function (n) {
      return '<a href="' + n[1] + '"' + (n[2] === cur ? ' class="active"' : '') + '>' + n[0] + '</a>';
    }).join('');
    return '<div class="nav" id="nav">' +
      '<a class="nav-brand" href="field.html">' + mark(27, '#8C2344') + '<span class="wordmark">MMOF</span></a>' +
      '<nav class="nav-links">' + links + '</nav>' +
      '<div class="nav-cta">' +
        '<a href="#" style="font-size:13.5px;font-weight:500;color:#6a7178;text-decoration:none">Investor login</a>' +
        '<a class="btn btn-primary btn-sm" href="field-get-in-touch.html">Talk to us</a>' +
      '</div>' +
    '</div>';
  }

  function footHTML() {
    var explore = NAV.map(function (n) { return '<a href="' + n[1] + '">' + n[0] + '</a>'; }).join('');
    return '<footer class="site-footer">' +
      '<div class="cols">' +
        '<div>' +
          '<a class="nav-brand" href="field.html" style="text-decoration:none">' + mark(22, '#F7F0EC') +
            '<span class="wordmark" style="color:#F7F0EC">MMOF</span></a>' +
          '<p class="tag">Growth capital and hands-on operating support under one roof — for Africa’s most ambitious small and mid-sized companies.</p>' +
        '</div>' +
        '<div class="fcol"><h4>Explore</h4>' + explore + '</div>' +
        '<div class="fcol"><h4>Get in touch</h4>' +
          '<a href="field-get-in-touch.html">Start a conversation</a>' +
          '<a href="mailto:hello@mmof.example">hello@mmof.example</a>' +
          '<a href="#">LinkedIn</a>' +
        '</div>' +
      '</div>' +
      '<div class="bottom"><span>© ' + new Date().getFullYear() + ' MMOF. Concept design — placeholder content.</span>' +
        '<span>Investment · Venture Building · Impact · Stories · Team</span></div>' +
    '</footer>';
  }

  var page = document.getElementById('page');
  if (page) {
    page.insertAdjacentHTML('afterbegin', navHTML());
    page.insertAdjacentHTML('beforeend', footHTML());
  }

  /* ---- polish: sticky shadow, scroll-reveal, hover tagging ---- */
  var rm = matchMedia('(prefers-reduced-motion:reduce)').matches;
  var nav = document.getElementById('nav');
  if (nav) {
    var f = function () { nav.classList.toggle('nav-scrolled', (window.scrollY || 0) > 10); };
    f(); addEventListener('scroll', f, { passive: true });
  }
  if (page) {
    if (!rm && 'IntersectionObserver' in window) {
      var vh = window.innerHeight || 800;
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
      }, { threshold: 0.08, rootMargin: '0px 0px -7% 0px' });
      Array.prototype.slice.call(page.children).forEach(function (s) {
        if (s.getBoundingClientRect().top > vh * 0.85) { s.classList.add('reveal'); io.observe(s); }
      });
    }
    Array.prototype.forEach.call(page.querySelectorAll('div,span,a'), function (el) {
      var s = el.getAttribute('style') || '', t = (el.textContent || '').trim();
      if (el.children.length === 0 && t && t.length < 28 && /padding:1[0-9]px/.test(s) &&
          /background:#(8C2344|000000|1E4440|F7F0EC)/.test(s) && /border-radius/.test(s)) el.classList.add('enh-btn');
      if (el.children.length > 0 && /box-shadow/.test(s) && /border-radius:([789]|1[0-9])px/.test(s) &&
          !el.querySelector('img')) el.classList.add('enh-card');
    });
  }
})();
