/* ══════════════════════════════════════════
   GSAA - Index / Home Page Scripts
   Ghana Sociological & Anthropological Association
══════════════════════════════════════════ */

(function () {
  'use strict';

  // Boot shared components
  GSAA.init({ page: 'index.html' });
  GSAA.initCounters();

  /* ─── Stat counter targets ─── */
  document.querySelectorAll('.stat-num').forEach(function (el) {
    var text = el.textContent.trim();
    var suffix = text.includes('+') ? '+' : '';
    var num = parseInt(text.replace('+', ''));
    if (!isNaN(num)) {
      el.setAttribute('data-target', num);
      el.setAttribute('data-suffix', suffix);
    }
  });

  /* ─── Adinkra tooltips ─── */
  var adinkraData = {
    'Gye Nyame':    'Supremacy of God \u2014 the most popular Adinkra symbol, expressing the omnipotence of God over all things.',
    'Sankofa':      'Return and fetch it \u2014 a symbol of learning from the past to build a better future. Central to African thought.',
    'Dwennimmen':   "Ram\u2019s horns \u2014 a symbol of humility and strength, reminding us that the strong must also be humble.",
    'Nyansapo':     'Wisdom knot \u2014 a symbol of wisdom, ingenuity, intelligence and patience. It emphasises that a wise person has the capacity to choose the best means to attain a goal.',
    'Aya':          'Fern \u2014 a symbol of endurance, resourcefulness and the ability to survive in difficult conditions.',
    'Funtunfunefu': 'Siamese crocodiles \u2014 sharing one stomach, they symbolise democracy, unity in diversity and shared destiny.'
  };

  var tooltip      = document.getElementById('adinkraTooltip');
  var tooltipTitle = document.getElementById('tooltipTitle');
  var tooltipText  = document.getElementById('tooltipText');

  function positionTooltip(e) {
    var x = e.clientX + 16;
    var y = e.clientY - 10;
    var w = tooltip.offsetWidth;
    tooltip.style.left = (x + w > window.innerWidth ? x - w - 32 : x) + 'px';
    tooltip.style.top  = y + 'px';
  }

  document.querySelectorAll('.adinkra-card').forEach(function (card, index) {
    var nameEl = card.querySelector('.adinkra-name');
    var name   = nameEl ? nameEl.textContent : '';
    if (!name || !tooltip) return;

    // Floating animation with staggered delay
    card.classList.add('animate-float');
    card.style.animationDelay = (index * 0.4) + 's';

    card.addEventListener('mouseenter', function (e) {
      tooltipTitle.textContent = name;
      tooltipText.textContent  = adinkraData[name] || '';
      positionTooltip(e);
      tooltip.classList.add('show');
    });
    card.addEventListener('mousemove', positionTooltip);
    card.addEventListener('mouseleave', function () {
      tooltip.classList.remove('show');
    });

    // Keyboard Accessibility
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        tooltipTitle.textContent = name;
        tooltipText.textContent  = adinkraData[name] || '';
        
        // Position relative to card for keyboard users
        const rect = card.getBoundingClientRect();
        tooltip.style.left = (rect.left + rect.width / 2 - tooltip.offsetWidth / 2) + 'px';
        tooltip.style.top  = (rect.top - tooltip.offsetHeight - 10) + 'px';
        tooltip.classList.toggle('show');
      }
    });

    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', 'View meaning of ' + name);
  });

  /* ─── Floating Adinkra background symbols ─── */
  var adinkraPaths = [
    // Adinkrahene - concentric circles
    '<circle cx="30" cy="30" r="26"/><circle cx="30" cy="30" r="16"/><circle cx="30" cy="30" r="6"/>',
    // Sankofa - stylised spiral
    '<path d="M30 8 C52 8 56 32 40 42 C26 50 12 38 20 26 C26 20 36 22 30 30"/>',
    // Nyansapo - nested diamond knot
    '<path d="M30 4 L56 30 L30 56 L4 30 Z"/><path d="M30 16 L44 30 L30 44 L16 30 Z"/>',
    // Musuyidee - cross with ring
    '<line x1="30" y1="6" x2="30" y2="54"/><line x1="6" y1="30" x2="54" y2="30"/><circle cx="30" cy="30" r="14"/>',
    // Aya - fern
    '<path d="M30 6 L30 54 M18 16 L30 28 M42 16 L30 28 M14 34 L30 44 M46 34 L30 44"/>'
  ];

  var greenSections = document.querySelectorAll('.hero, .events, .join');
  greenSections.forEach(function (section) {
    var container = document.createElement('div');
    container.className = 'floating-adinkra';
    container.setAttribute('aria-hidden', 'true');

    for (var i = 0; i < 8; i++) {
      var size  = 36 + Math.random() * 54;
      var dur   = 18 + Math.random() * 16;
      var delay = Math.random() * dur;
      var rotS  = Math.floor(Math.random() * 12 - 6);
      var rotE  = Math.floor(Math.random() * 12 - 6);

      var markup = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">' +
        adinkraPaths[i % adinkraPaths.length] + '</svg>';
      var svg = new DOMParser().parseFromString(markup, 'image/svg+xml').documentElement;
      svg.setAttribute('width',  size);
      svg.setAttribute('height', size);
      svg.classList.add('adinkra-drift');
      svg.style.cssText =
        'left:'  + (Math.random() * 92) + '%;' +
        'top:'   + (Math.random() * 88) + '%;' +
        '--dur:'       + dur  + 's;' +
        '--delay:'     + delay + 's;' +
        '--rot-start:' + rotS + 'deg;' +
        '--rot-end:'   + rotE + 'deg;';
      container.appendChild(svg);
    }

    section.appendChild(container);
  });

  /* ─── Focus card "read more" ─── */
  var fullTexts = {
    'Chieftaincy':  "Research explores how traditional rulers navigate constitutional roles, mediate land disputes, and serve as custodians of cultural identity across Ghana\u2019s 16 regions.",
    'Kinship':      "Studies examine how lineage systems shape inheritance, childcare, and marriage \u2014 and how urbanisation is reshaping these age-old structures.",
    'Religion':     "Scholars investigate how pluralistic religious landscapes co-exist and compete in shaping public morality and political participation in Ghana.",
    'Urbanization': "Research tracks rural-urban migration patterns, informal settlements, and the social capital networks migrants build in Ghanaian cities.",
    'Development':  "Work bridges ethnography with policy analysis to assess the social impact of national programmes including LEAP, NHIS, and Free SHS.",
    'Identity':     "Studies interrogate how ethnic identities are mobilised in politics, how diaspora communities negotiate belonging, and pan-African solidarity today."
  };

  document.querySelectorAll('.focus-card').forEach(function (card) {
    var textEl    = card.querySelector('.focus-text');
    var titleEl   = card.querySelector('.focus-title');
    var titleText = titleEl ? titleEl.textContent : '';
    var key       = Object.keys(fullTexts).find(function (k) { return titleText.includes(k); });

    if (key && textEl) {
      var shortText = textEl.textContent;
      var expanded  = false;

      var readMore       = document.createElement('span');
      readMore.textContent = ' Read more \u2192';
      readMore.className   = 'focus-read-more';
      textEl.appendChild(readMore);

      readMore.addEventListener('click', function (e) {
        e.stopPropagation();
        expanded = !expanded;
        textEl.childNodes[0].textContent = expanded ? fullTexts[key] : shortText;
        readMore.textContent = expanded ? ' Read less \u2191' : ' Read more \u2192';
        card.setAttribute('aria-expanded', expanded);
      });

      // Keyboard support for expansion
      card.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          if (document.activeElement === card) {
            e.preventDefault();
            readMore.click();
          }
        }
      });
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-expanded', 'false');
    }
  });

  /* ─── Hero Carousel Slide Transitions ─── */
  var slides = document.querySelectorAll('.hero-carousel-slide');
  if (slides.length > 0) {
    var currentSlide = 0;
    setInterval(function () {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }, 5000);
  }
})();
