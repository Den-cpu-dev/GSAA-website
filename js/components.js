/* ══════════════════════════════════════════
   GSAA — Shared Components
   Navigation, Footer, Modals, Search
══════════════════════════════════════════ */

const GSAA = (function () {
  'use strict';

  /* ─── NAV HTML ─── */
  const NAV_HTML = `
  <div class="scroll-progress-container"><div id="scrollProgressBar" class="scroll-progress-bar"></div></div>
  <nav id="mainNav">
    <a href="index.html" class="nav-logo">
      <img src="images/logo.jpg" alt="GSAA logo" class="nav-logo-img">
      <div class="nav-wordmark">GSAA<span>Ghana Sociological &amp; Anthropological Association</span></div>
    </a>
    <ul class="nav-links" id="navLinks">
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="research.html">Research</a></li>
      <li><a href="events.html">Events</a></li>
      <li><a href="journal.html">Journal</a></li>
      <li><a href="membership.html">Membership</a></li>
      <li><a href="contact.html">Contact</a></li>
      <li>
        <button class="nav-theme-btn" id="navThemeBtn" aria-label="Toggle theme">
          <svg class="sun-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
          <svg class="moon-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:none"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        </button>
      </li>
      <li>
        <button class="nav-search-btn" id="navSearchBtn" aria-label="Search">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
          <span class="search-shortcut">⌘K</span>
        </button>
      </li>
      <li><a href="membership.html" class="nav-cta">Join GSAA</a></li>
    </ul>
    <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Open menu">
      <span></span><span></span><span></span>
    </button>
  </nav>
  <div id="mobileNav" class="mobile-nav">
    <button id="mobileNavClose" class="mobile-nav-close" aria-label="Close menu">&times;</button>
    <ul class="mobile-nav-links">
      <li><a href="index.html" class="mobile-nav-link">Home</a></li>
      <li><a href="about.html" class="mobile-nav-link">About</a></li>
      <li><a href="research.html" class="mobile-nav-link">Research</a></li>
      <li><a href="events.html" class="mobile-nav-link">Events</a></li>
      <li><a href="journal.html" class="mobile-nav-link">Journal</a></li>
      <li><a href="membership.html" class="mobile-nav-link">Membership</a></li>
      <li><a href="contact.html" class="mobile-nav-link">Contact</a></li>
      <li><a href="membership.html" class="mobile-nav-link mobile-nav-cta">Join GSAA</a></li>
    </ul>
  </div>`;

  /* ─── FOOTER HTML ─── */
  const FOOTER_HTML = `
  <div class="kente-footer"></div>
  <footer>
    <div class="footer-top">
      <div class="footer-brand">
        <div class="footer-logo">
          <img src="images/logo.jpg" alt="GSAA logo" class="footer-logo-img">
          <div class="footer-name">GSAA<small>Ghana Sociological &amp; Anthropological Association</small></div>
        </div>
        <p class="footer-tagline">Advancing the understanding of Ghanaian society through scholarly inquiry, community engagement, and academic excellence since 1974.</p>
        <div class="footer-social">
          <a href="#" aria-label="Twitter" class="social-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="#" aria-label="LinkedIn" class="social-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="#" aria-label="Facebook" class="social-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
        </div>
      </div>
      <div class="footer-col">
        <div class="footer-col-title">Organisation</div>
        <ul>
          <li><a href="about.html">History &amp; Mission</a></li>
          <li><a href="about.html#leadership">Leadership</a></li>
          <li><a href="about.html#constitution">Constitution</a></li>
          <li><a href="about.html#reports">Annual Reports</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <div class="footer-col-title">Scholarship</div>
        <ul>
          <li><a href="journal.html">GSAA Journal</a></li>
          <li><a href="research.html">Research Areas</a></li>
          <li><a href="journal.html#working-papers">Working Papers</a></li>
          <li><a href="journal.html#cfp">Call for Papers</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <div class="footer-col-title">Engage</div>
        <ul>
          <li><a href="membership.html">Join GSAA</a></li>
          <li><a href="events.html">Events</a></li>
          <li><a href="contact.html">Contact Us</a></li>
          <li><a href="contact.html#media">Media Centre</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <div class="footer-col-title">Legal</div>
        <ul>
          <li><a href="privacy.html">Privacy Policy</a></li>
          <li><a href="terms.html">Terms of Use</a></li>
          <li><a href="cookies.html">Cookie Policy</a></li>
          <li><a href="accessibility.html">Accessibility</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; <span id="footerYear"></span> Ghana Sociological &amp; Anthropological Association. All rights reserved.</span>
      <span>Accra, Ghana &middot; <a href="mailto:info@gsaa.org.gh">info@gsaa.org.gh</a></span>
    </div>
  </footer>`;

  /* ─── SEARCH OVERLAY ─── */
  const SEARCH_HTML = `
  <div id="searchOverlay" class="search-overlay" role="dialog" aria-modal="true" aria-label="Site search">
    <div class="search-box">
      <div class="search-input-wrap">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(229,184,76,0.7)" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
        <input type="text" class="search-input" id="searchInput" placeholder="Search GSAA…" autocomplete="off" spellcheck="false">
        <span class="search-close-hint" id="searchClose">ESC</span>
      </div>
      <div class="search-hint">Press Enter to jump · Esc to close</div>
      <div class="search-results" id="searchResults"></div>
    </div>
  </div>`;

  /* ─── TOAST ─── */
  const TOAST_HTML = `<div id="toast" class="toast" role="status" aria-live="polite"></div>`;

  /* ─── BACK TO TOP ─── */
  const BACKTOP_HTML = `
  <button id="backToTop" class="back-to-top" aria-label="Back to top">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="18 15 12 9 6 15"/></svg>
  </button>`;

  /* ─── COOKIE BANNER ─── */
  const COOKIE_HTML = `
  <div id="cookieBanner" class="cookie-banner" role="complementary" aria-label="Cookie notice">
    <div class="cookie-inner">
      <p class="cookie-text">We use essential cookies to keep the site running. By continuing you accept our <a href="cookies.html">Cookie Policy</a>.</p>
      <div class="cookie-actions">
        <button class="btn-ghost" id="cookieDeny" style="font-size:0.78rem;padding:0.5rem 1rem">Decline</button>
        <button class="btn-primary" id="cookieAccept" style="font-size:0.78rem;padding:0.5rem 1.2rem">Accept</button>
      </div>
    </div>
  </div>`;

  /* ─── SEARCH INDEX ─── */
  let searchIndex = [];
  async function loadSearchIndex() {
    try {
      const res = await fetch('data/search-index.json');
      searchIndex = await res.json();
    } catch (e) {
      console.warn('GSAA: Search index failed to load. Falling back to basics.');
      searchIndex = [{ section: 'Home', title: 'GSAA — Home', url: 'index.html' }];
    }
  }

  /* ─── INIT FUNCTION ─── */
  function init(options = {}) {
    const { page = '' } = options;

    // Inject shared HTML if not already present
    if (!document.getElementById('mainNav')) {
      document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
    }
    if (!document.querySelector('footer')) {
      document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);
    }
    if (!document.getElementById('searchOverlay')) {
      document.body.insertAdjacentHTML('beforeend', SEARCH_HTML);
    }
    if (!document.getElementById('toast')) {
      document.body.insertAdjacentHTML('beforeend', TOAST_HTML);
    }
    if (!document.getElementById('backToTop')) {
      document.body.insertAdjacentHTML('beforeend', BACKTOP_HTML);
    }
    
    if (!localStorage.getItem('gsaa_cookie_consent') && !document.getElementById('cookieBanner')) {
      document.body.insertAdjacentHTML('beforeend', COOKIE_HTML);
    }

    // Set footer year
    const fy = document.getElementById('footerYear');
    if (fy) fy.textContent = new Date().getFullYear();

    // Mark active nav
    document.querySelectorAll('#navLinks a, .mobile-nav-link').forEach(a => {
      if (a.getAttribute('href') === page || (page && a.getAttribute('href')?.includes(page))) {
        a.classList.add('nav-active');
      }
    });

    // Boot all functionality
    loadSearchIndex();
    initTheme();
    initScrollProgress();
    initReveal();
    initNav();
    initMobileNav();
    initSearch();
    initBackToTop();
    initCookieBanner();
    initSmoothScroll();
  }

  function initTheme() {
    const btn = document.getElementById('navThemeBtn');
    if (!btn) return;
    const sun = btn.querySelector('.sun-icon');
    const moon = btn.querySelector('.moon-icon');
    
    const setTheme = (theme) => {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('gsaa_theme', theme);
      if (theme === 'dark') {
        sun.style.display = 'none';
        moon.style.display = 'block';
      } else {
        sun.style.display = 'block';
        moon.style.display = 'none';
      }
    };

    const currentTheme = localStorage.getItem('gsaa_theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(currentTheme);

    btn.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      setTheme(isDark ? 'light' : 'dark');
    });
  }

  function initScrollProgress() {
    const bar = document.getElementById('scrollProgressBar');
    if (!bar) return;
    window.addEventListener('scroll', () => {
      const st = window.scrollY;
      const dh = document.documentElement.scrollHeight - window.innerHeight;
      if (dh <= 0) return;
      bar.style.width = (st / dh * 100) + '%';
    }, { passive: true });
  }

  function initReveal() {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.08 });
    els.forEach(el => obs.observe(el));
  }

  function initNav() {
    const nav = document.getElementById('mainNav');
    window.addEventListener('scroll', () => {
      nav?.classList.toggle('nav-scrolled', window.scrollY > 60);
    }, { passive: true });
  }

  function initMobileNav() {
    const btn = document.getElementById('mobileMenuBtn');
    const nav = document.getElementById('mobileNav');
    const close = document.getElementById('mobileNavClose');
    if (!btn || !nav) return;
    btn.addEventListener('click', () => { 
      nav.classList.add('open'); 
      btn.classList.add('open');
      document.body.style.overflow = 'hidden'; 
    });
    const closeFn = () => { 
      nav.classList.remove('open'); 
      btn.classList.remove('open');
      document.body.style.overflow = ''; 
    };
    close?.addEventListener('click', closeFn);
    nav.querySelectorAll('.mobile-nav-link').forEach(l => l.addEventListener('click', closeFn));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeFn(); });
  }

  function initSearch() {
    const overlay = document.getElementById('searchOverlay');
    const input = document.getElementById('searchInput');
    const results = document.getElementById('searchResults');
    const closeBtn = document.getElementById('searchClose');
    const navBtn = document.getElementById('navSearchBtn');
    if (!overlay) return;

    const open = () => { 
      overlay.classList.add('open'); 
      document.body.style.overflow = 'hidden'; 
      setTimeout(() => input?.focus(), 100);
      // Accessibility: Trap focus or at least set initial focus
      input.setAttribute('aria-expanded', 'true');
    };
    const close = () => { 
      overlay.classList.remove('open'); 
      document.body.style.overflow = ''; 
      if (input) {
        input.value = '';
        input.setAttribute('aria-expanded', 'false');
      }
      if (results) results.innerHTML = ''; 
      navBtn?.focus(); // Return focus to the button that opened it
    };

    navBtn?.addEventListener('click', open);
    closeBtn?.addEventListener('click', close);
    overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
    document.addEventListener('keydown', e => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); open(); }
      if (e.key === 'Escape' && overlay.classList.contains('open')) close();
    });

    input?.addEventListener('input', () => {
      const q = input.value.toLowerCase().trim();
      results.innerHTML = '';
      if (!q) return;
      const matches = searchIndex.filter(i => i.title.toLowerCase().includes(q) || i.section.toLowerCase().includes(q));
      if (!matches.length) { results.innerHTML = '<div class="search-no-results">No results found.</div>'; return; }
      matches.slice(0, 8).forEach(item => {
        const div = document.createElement('div');
        div.className = 'search-result-item';
        div.innerHTML = `<div class="search-result-section">${item.section}</div><div class="search-result-title">${item.title}</div>`;
        div.addEventListener('click', () => { close(); window.location.href = item.url; });
        results.appendChild(div);
      });
    });
  }

  function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;
    window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 400), { passive: true });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  function initCookieBanner() {
    const banner = document.getElementById('cookieBanner');
    if (!banner) return;
    document.getElementById('cookieAccept')?.addEventListener('click', () => {
      localStorage.setItem('gsaa_cookie_consent', 'accepted');
      banner.classList.remove('show');
      setTimeout(() => banner.remove(), 400);
    });
    document.getElementById('cookieDeny')?.addEventListener('click', () => {
      localStorage.setItem('gsaa_cookie_consent', 'denied');
      banner.classList.remove('show');
      setTimeout(() => banner.remove(), 400);
    });
    setTimeout(() => banner.classList.add('show'), 1500);
  }

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const id = a.getAttribute('href').slice(1);
        const target = document.getElementById(id);
        if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
      });
    });
  }

  /* ─── COUNTER ANIMATION ─── */
  function initCounters() {
    document.querySelectorAll('.stat-num[data-target]').forEach(el => {
      const target = +el.getAttribute('data-target');
      const suffix = el.getAttribute('data-suffix') || '';
      const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          let v = 0;
          const step = target / (target > 1000 ? 1800 : 900) * 16;
          const t = setInterval(() => {
            v = Math.min(v + step, target);
            el.textContent = Math.floor(v) + suffix;
            if (v >= target) clearInterval(t);
          }, 16);
          obs.unobserve(el);
        });
      }, { threshold: 0.5 });
      obs.observe(el);
    });
  }

  /* ─── FORM VALIDATION ─── */
  function validateForm(formEl) {
    let valid = true;
    formEl.querySelectorAll('[required]').forEach(field => {
      const err = field.parentElement.querySelector('.form-error-msg');
      field.classList.remove('error');
      if (err) err.classList.remove('show');
      const empty = field.type === 'checkbox' ? !field.checked : !field.value.trim();
      if (empty) {
        field.classList.add('error');
        if (err) err.classList.add('show');
        valid = false;
      }
    });
    return valid;
  }

  /* ─── TOAST UTILITY ─── */
  let toastTimer;
  function showToast(msg, type = 'info') {
    const el = document.getElementById('toast');
    if (!el) return;
    el.textContent = msg;
    el.style.borderLeftColor = type === 'success' ? 'var(--green-accent)' : type === 'error' ? 'var(--red-kente)' : 'var(--gold)';
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 3500);
  }

  return { init, initCounters, validateForm, showToast };
})();
