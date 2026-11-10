/* ==========================================================================
   NEON STUDIO — INTERACTIVITY, FULL-PAGE ROUTING & VIEW TRANSITIONS
   ========================================================================== */

const CASE_STUDIES = {
  digdir: {
    id: 'digdir',
    client: 'Digitaliseringsdirektoratet (Digdir)',
    year: '2023 – 2024',
    role: 'Interaksjonsdesigner',
    title: 'Felles datakatalog & Digital gravferdsmelding',
    summary:
      'Brukersentrert redesign og utvikling av nasjonale fellesløsninger for deling av offentlige data og livshendelsen «Dødsfall og arv».',
    challenge:
      'Offentlige og private virksomheter trengte en oversiktlig måte å dele og registrere datasett og begreper i tråd med EU-krav (DCAT-AP-NO / SKOS-AP-NO). Samtidig krevde livshendelsen «Dødsfall og arv» en skjemaløsning i Altinn som minimerer kognitiv belastning for etterlatte i en krevende livssituasjon.',
    solution:
      'Gjennomførte innsiktsarbeid, brukertester og iterativ prototyping i Figma basert på Digdirs designsystem og strenge krav til universell utforming (WCAG). Utformet ny forside for data.norge.no, virksomhetsintern begrepskatalog i samarbeid med Skatteetaten og Brønnøysundregistrene, samt nytt gravferdsskjema i Altinn og informasjonsside for Statsforvalteren.',
    result:
      'En produksjonssatt registreringsløsning og begrepskatalog som forenkler tverretatlig datadeling, samt mer empatiske, oversiktlige og brukervennlige tjenester for innbyggere ved gravferd.',
    deliverables: [
      'Innsikt, behovsanalyse og brukertesting',
      'Konsept og redesign av data.norge.no',
      'Registreringsløsning og virksomhetsintern begrepskatalog',
      'Prototyper og skjemaflyt i Altinn for Digital gravferdsmelding',
      'Informasjonsside om gravferd for Statsforvalteren i Vestfold og Telemark',
      'Designsystem-komponenter og universell utforming'
    ],
    tags: ['Offentlig sektor', 'Interaksjonsdesign', 'Universell utforming', 'Designsystem', 'Innsikt'],
    images: [
      { src: 'assets/images/digdir-datanorge.jpg', alt: 'Forslag til ny nettside for data.norge.no' },
      { src: 'assets/images/digdir-begrepskatalog.jpg', alt: 'Virksomhetsintern begrepskatalog i produksjon' },
      { src: 'assets/images/digdir-gravferd.jpg', alt: 'Informasjonsside om gravferd for Statsforvalteren' },
      { src: 'assets/images/digdir-altinn.jpg', alt: 'Melding om ansvar for gravferd i Altinn' }
    ]
  },
  around: {
    id: 'around',
    client: 'Around',
    year: '2025 – d.d.',
    role: 'Konseptutvikler & UX designer',
    title: 'Design og AI drevet utvikling av smart kommunikasjonsplattform',
    summary:
      'Fra idé og visuell identitet til interaktiv prototype og fungerende MVP for en rolig, personvernvennlig gruppechattjeneste uten støy og algoritmer.',
    challenge:
      'Tradisjonelle sosiale plattformer preges av støy, algoritmestyrte feeds og omfattende datainnsamling. Målet med Around var å skape et trygt, inkluderende digitalt rom for nære relasjoner og grupper med høy grad av tillit og personvern.',
    solution:
      'Utviklet konsept, visuell identitet, språkprofil og mikrotekster med fokus på ro, tillit og universell utforming. Brukte Figma Make til interaktiv prototyping på tvers av flater, lanserte nettsiden aroundroom.com via Figma Sites, og bygget en fungerende MVP ved hjelp av AI agenter i Antigravity.',
    result:
      'Lansert nettside med ventelistefunksjonalitet og en fungerende MVP som brukertestes kontinuerlig med svært gode tilbakemeldinger på både brukervennlighet og atmosfære.',
    deliverables: [
      'Konseptutvikling og produktstrategi',
      'Visuell identitet, fargepalett og mikrotekster',
      'UX/UI-design og universell utforming',
      'Interaktiv prototyping i Figma Make',
      'Nettside (aroundroom.com) publisert i Figma Sites',
      'MVP utviklet med AI agenter i Antigravity'
    ],
    tags: ['Produktutvikling', 'UX/UI', 'AI assistert MVP', 'Visuell identitet', 'Figma Make'],
    images: [
      { src: 'assets/images/around-mobile.jpg', alt: 'Around mobilapp i bruk' },
      { src: 'assets/images/around-laptop.jpg', alt: 'Around nettside aroundroom.com på laptop' }
    ]
  },
  skatteetaten: {
    id: 'skatteetaten',
    client: 'Skatteetaten',
    year: '2025 – 2026',
    role: 'Interaksjonsdesigner / innholdsdesigner',
    title: 'Redesign og informasjonsarkitektur for 29 intranettsider',
    summary:
      'Helhetlig forbedring av navigasjon, innholdsstruktur og brukeropplevelse på interne kompetanse og SharePoint-områder.',
    challenge:
      'Ansatte i Skatteetaten hadde behov for mer oversiktlig navigasjon, tydeligere klarspråk og raskere tilgang til verktøy og faglig informasjon innenfor rammene av etatens eksisterende SharePoint-plattform.',
    solution:
      'Kartla og analyserte brukerbehov og tekniske rammebetingelser i tett samarbeid med kompetanseansvarlig og endringsleder. Planla brukertester, omstrukturerte informasjonsarkitekturen, skrev brukervennlige tekster og designet nye sidemaler i tråd med etatens metoder og designsystem.',
    result:
      'Redesignet og forbedret informasjonsstrukturen på totalt 29 intranettsider. Løsningene dekket reelle brukerbehov og ble svært godt mottatt i organisasjonen.',
    deliverables: [
      'Behovsanalyse og interessentavklaringer',
      'Informasjonsarkitektur og navigasjonsstruktur',
      'Innholdsdesign og klarspråk for 29 intranettsider',
      'Planlegging og gjennomføring av brukertester',
      'Design og oppsett i SharePoint etter etatens designsystem'
    ],
    tags: ['Offentlig sektor', 'Interaksjonsdesign', 'Innholdsdesign', 'Informasjonsarkitektur', 'Brukertesting'],
    images: [
      { src: 'assets/images/skatteetaten-intranett.jpg', alt: 'Skatteetaten — Kunnskaps og metodeportal på intranett' },
      { src: 'assets/images/skatteetaten-dap.jpg', alt: 'Skatteetaten — Data og analyseplattformen (DAP)' }
    ]
  },
  itc: {
    id: 'itc',
    client: 'Itc AS',
    year: '2022 – 2026',
    role: 'Designer & Community / Branding Coordinator',
    title: 'Ny visuell identitet, nettside, intranett og merkevarebygging',
    summary:
      'Innsiktsbasert rebranding, ny nettside, intranett og helhetlig merkevareopplevelse for konsulenthuset Itc.',
    challenge:
      'Itc ønsket å fornye sin visuelle identitet og digitale tilstedeværelse slik at merkevaren gjenspeiler selskapets unike posisjon: fleksibiliteten til et lite selskap kombinert med gjennomføringsevnen til et stort konsulenthus.',
    solution:
      'Gjennomførte dybdeintervjuer med ansatte, analyserte funn og utviklet en komplett ny visuell identitet, ny hjemmeside og ny brukervennlig intranettside. Utformet retningslinjer, malverk, kontorbranding ved flytting til nye lokaler, samt årlig LinkedIn og employer branding-strategi.',
    result:
      'En helhetlig og varm merkevareprofil som ble svært positivt mottatt av både ansatte, konsulenter og kunder, samt styrket synlighet og internkultur.',
    deliverables: [
      'Dybdeintervjuer med ansatte og innsiktsanalyse',
      'Komplett visuell identitet (logo, farger, typografi, retningslinjer)',
      'Design av ny hjemmeside (itc.no) og nytt intranett',
      'Malverk for PowerPoint, Keynote, Word, Figma og e-postsignaturer',
      'Kontorbranding, skilting og LinkedIn-strategi'
    ],
    tags: ['Merkevarebygging', 'Visuell identitet', 'UX/UI', 'Innsikt', 'Employer branding'],
    images: [
      { src: 'assets/images/itc-web.jpg', alt: 'Itc ny nettside på laptop' },
      { src: 'assets/images/itc-brand.jpg', alt: 'Itc visuell identitet og visittkort' }
    ]
  },
  vegvesen: {
    id: 'vegvesen',
    client: 'Statens vegvesen',
    year: '2025',
    role: 'Designer og interaksjonsdesigner',
    title: 'Intern merkevarebygging av skyplattform & skjemadesign',
    summary:
      'Visuell identitet og merkevarebygging for Statens vegvesens interne skyplattform, samt brukervennlige registreringsskjemaer.',
    challenge:
      'Skyplattform-teamet i Statens vegvesen trengte en tydelig intern identitet og brukervennlige registreringsskjemaer for å skape gjenkjennelse, eierskap og enkel innmelding på tvers av etaten.',
    solution:
      'Utviklet navneforslag, ny logo, illustrasjoner, brand guidelines, Teams-bakgrunner og presentasjonsmaler, samt Figma-skisser for et intuitivt registreringsskjema som oppfyller krav til universell utforming.',
    result:
      'En samlende visuell profil som ga skyplattformen en tydelig posisjon internt i etaten, støttet av tilgjengelige og brukervennlige skjemaer.',
    deliverables: [
      'Logo, visuell identitet og brand guidelines',
      'Figma-skisser for brukervennlig registreringsskjema (UU)',
      'PowerPoint, Word, Keynote og Figma-maler',
      'Illustrasjoner og Teams-bakgrunner'
    ],
    tags: ['Offentlig sektor', 'Merkevarebygging', 'Skjemadesign', 'Universell utforming'],
    images: [
      { src: 'assets/images/vegvesen-logo.jpg', alt: 'Statens vegvesen skyplattform logo' },
      { src: 'assets/images/vegvesen-laptop.jpg', alt: 'Profilering og merkevareelementer for skyplattform' }
    ]
  },
  gapper: {
    id: 'gapper',
    client: 'Gapper & Ultra Training Inc.',
    year: '2020 – 2025',
    role: 'Interaksjonsdesigner og designansvarlig',
    title: 'Digitale booking og treningsplattformer (web, mobil og TV-app)',
    summary:
      'Designledelse, visuell identitet og brukergrensesnitt for skalerbare markedsplasser innen booking (Gapper) og personlig trening (Ultra Training).',
    challenge:
      'Både Gapper (formidling av ledige og avbestilte timer hos bedrifter) og Ultra Training (global plattform for personlige trenere) trengte gjennomarbeidede brukerreiser, høy konvertering og tydelige merkevarer på tvers av mobil, web og TV.',
    solution:
      'Ledet designprosessene etter Double Diamond-metodikk i tett samarbeid med utviklere og forretningsutviklere. Utviklet personas, brukerreiser, komplette designsystemer og interaktive prototyper i Figma med fokus på universell utforming, samt full visuell identitet.',
    result:
      'Solide produktkonsepter og prototyper kontinuerlig raffinert gjennom tilbakemeldinger fra pilotkunder og sluttbrukere.',
    deliverables: [
      'Designledelse og Double Diamond-prosess',
      'UX/UI-design for web, mobilapp og Apple TV / Smart-TV',
      'Designsystem, komponenter og universell utforming',
      'Visuell identitet, logo, fargepalett og presentasjonsmateriell',
      'Forretningsutvikling, personas og markedsføringsmateriell'
    ],
    tags: ['Produktutvikling', 'Designledelse', 'UX/UI', 'Designsystem', 'Double Diamond'],
    images: [
      { src: 'assets/images/gapper-desktop.jpg', alt: 'Gapper bookingplattform på desktop' },
      { src: 'assets/images/ultra-laptop.jpg', alt: 'Ultra Training plattform på laptop' },
      { src: 'assets/images/ultra-phones.jpg', alt: 'Ultra Training mobilskjermer' },
      { src: 'assets/images/ultra-tv.jpg', alt: 'Ultra Training TV-app konsept' }
    ]
  }
};

const PROJECT_ORDER = ['digdir', 'around', 'skatteetaten', 'itc', 'vegvesen', 'gapper'];

/* --------------------------------------------------------------------------
   1. ROUTING & PARSING
   -------------------------------------------------------------------------- */

function parseRoute(rawHash) {
  const clean = (rawHash || '').replace(/^#\/?/, '').trim();

  if (!clean || clean === 'forside') {
    return { view: 'forside', projectId: null, hash: 'forside' };
  }
  if (clean === 'prosjekter') {
    return { view: 'prosjekter', projectId: null, hash: 'prosjekter' };
  }
  if (clean === 'erfaring') {
    return { view: 'erfaring', projectId: null, hash: 'erfaring' };
  }
  if (clean === 'kontakt') {
    return { view: 'kontakt', projectId: null, hash: 'kontakt' };
  }

  // Handle case study page: "#prosjekt-itc" or "#prosjekt/itc" or direct key "#itc"
  const projectKey = clean.replace(/^prosjekt[-/]/, '');
  if (CASE_STUDIES[projectKey]) {
    return { view: 'prosjekt', projectId: projectKey, hash: `prosjekt-${projectKey}` };
  }

  return { view: 'forside', projectId: null, hash: 'forside' };
}

/* --------------------------------------------------------------------------
   2. RENDER FULL-PAGE CASE STUDY
   -------------------------------------------------------------------------- */

function renderProjectDetailPage(projectId) {
  const data = CASE_STUDIES[projectId];
  if (!data) return;

  // Title and Header
  const titleEl = document.getElementById('projectDetailTitle');
  if (titleEl) titleEl.textContent = data.title;

  const metaPillEl = document.getElementById('projectDetailMetaPill');
  if (metaPillEl) {
    metaPillEl.textContent = data.role;
  }

  const leadEl = document.getElementById('projectDetailLead');
  if (leadEl) leadEl.textContent = data.summary;

  // 4-Column Meta Bar
  const clientEl = document.getElementById('projectDetailClient');
  if (clientEl) clientEl.textContent = data.client;

  const yearEl = document.getElementById('projectDetailYear');
  if (yearEl) yearEl.textContent = data.year;

  const roleEl = document.getElementById('projectDetailRole');
  if (roleEl) roleEl.textContent = data.role;

  const tagsEl = document.getElementById('projectDetailTags');
  if (tagsEl) {
    tagsEl.innerHTML = data.tags
      .map((tag) => `<span class="meta-tag">${tag}</span>`)
      .join('<span class="meta-tag-sep" aria-hidden="true"> · </span>');
  }

  // Full-Width Visual Gallery
  const galleryEl = document.getElementById('projectDetailGallery');
  if (galleryEl) {
    galleryEl.innerHTML = data.images
      .map(
        (img) => `
        <figure class="project-full-gallery__item">
          <img src="${img.src}" alt="${img.alt}" loading="lazy" />
          <figcaption class="project-full-gallery__caption">${img.alt}</figcaption>
        </figure>`
      )
      .join('');
  }

  // 3 Wide Columns: Challenge, Solution, Result
  const challengeEl = document.getElementById('projectDetailChallenge');
  if (challengeEl) challengeEl.textContent = data.challenge;

  const solutionEl = document.getElementById('projectDetailSolution');
  if (solutionEl) solutionEl.textContent = data.solution;

  const resultEl = document.getElementById('projectDetailResult');
  if (resultEl) resultEl.textContent = data.result;

  // Deliverables List
  const deliverablesEl = document.getElementById('projectDetailDeliverables');
  if (deliverablesEl) {
    deliverablesEl.innerHTML = data.deliverables
      .map((item) => `<li>${item}</li>`)
      .join('');
  }
}

/* --------------------------------------------------------------------------
   3. DOM VIEW SWITCHER & FOCUS ROUTING
   -------------------------------------------------------------------------- */

function applyViewDOM(route) {
  const activeViewId = route.view;

  document.querySelectorAll('.view').forEach((section) => {
    const isMatch = section.id === `view-${activeViewId}`;
    section.classList.toggle('is-active', isMatch);
    section.hidden = !isMatch;
  });

  // If entering the dedicated project page, render its contents
  if (activeViewId === 'prosjekt' && route.projectId) {
    renderProjectDetailPage(route.projectId);
  }

  // Header active navigation indicator
  document.querySelectorAll('[data-nav-target]').forEach((link) => {
    const target = link.getAttribute('data-nav-target');
    if (link.classList.contains('nav-link') || link.classList.contains('mobile-nav-item')) {
      const isCurrent =
        target === activeViewId ||
        (activeViewId === 'prosjekt' && target === 'prosjekter');
      if (isCurrent) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    }
  });

  window.scrollTo({ top: 0, behavior: 'instant' });
  revealVisibleElementsInActiveView();
}

function focusActiveViewHeading(viewId) {
  const activeSection = document.getElementById(`view-${viewId}`);
  const heading = activeSection?.querySelector('.view-heading');
  heading?.focus({ preventScroll: true });
}

function navigateToRoute(route, { pushHash = true, initial = false } = {}) {
  const targetHash = `#${route.hash}`;

  if (pushHash && window.location.hash !== targetHash) {
    try {
      history.pushState({ hash: route.hash }, '', targetHash);
    } catch {
      window.location.hash = route.hash;
    }
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (initial || prefersReducedMotion || !document.startViewTransition) {
    applyViewDOM(route);
    if (!initial) {
      focusActiveViewHeading(route.view);
    }
    return;
  }

  try {
    const transition = document.startViewTransition(() => {
      applyViewDOM(route);
    });

    // Sikre at eventuelle avbrutte overganger (f.eks. endring i viewport-størrelse,
    // mobilrotering eller rask navigering) ikke kaster ubehandlede promise-feil i konsollen.
    transition.ready?.catch(() => {});
    transition.finished
      .catch(() => {})
      .finally(() => {
        focusActiveViewHeading(route.view);
      });
  } catch {
    applyViewDOM(route);
    focusActiveViewHeading(route.view);
  }
}

function navigateToHash(hash, options = {}) {
  const route = parseRoute(hash);
  navigateToRoute(route, options);
}

/* --------------------------------------------------------------------------
   4. PORTFOLIO FILTER (På #prosjekter-siden)
   -------------------------------------------------------------------------- */

function filterProjects(category) {
  document.querySelectorAll('.filter-pill').forEach((btn) => {
    const isSelected = btn.getAttribute('data-filter') === category;
    btn.classList.toggle('is-active', isSelected);
    btn.setAttribute('aria-pressed', String(isSelected));
  });

  const applyFilter = () => {
    document.querySelectorAll('#portfolioGrid .project-card').forEach((card) => {
      const cats = (card.getAttribute('data-category') || '').split(' ');
      const show = category === 'alle' || cats.includes(category);
      card.hidden = !show;
      card.style.display = show ? 'flex' : 'none';
    });
  };

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion || !document.startViewTransition) {
    applyFilter();
  } else {
    try {
      const transition = document.startViewTransition(() => applyFilter());
      transition.ready?.catch(() => {});
      transition.finished?.catch(() => {});
    } catch {
      applyFilter();
    }
  }
}

/* --------------------------------------------------------------------------
   5. INITIALIZATION & EVENT LISTENERS
   -------------------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
  // Mobilmeny (Hamburger) logikk med WCAG-fokus og tastaturnavigasjon
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuClose = document.getElementById('mobileMenuClose');
  const mobileMenuBackdrop = document.getElementById('mobileMenuBackdrop');
  const mobileNavItems = document.querySelectorAll('.mobile-nav-item');

  function openMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.hidden = false;
    menuToggle?.setAttribute('aria-expanded', 'true');
    menuToggle?.setAttribute('aria-label', 'Lukk meny');
    document.body.classList.add('menu-open');
    setTimeout(() => {
      mobileMenuClose?.focus();
    }, 50);
  }

  function closeMobileMenu() {
    if (!mobileMenu || mobileMenu.hidden) return;
    mobileMenu.hidden = true;
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.setAttribute('aria-label', 'Åpne navigasjonsmeny');
    document.body.classList.remove('menu-open');
    menuToggle?.focus();
  }

  menuToggle?.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  mobileMenuClose?.addEventListener('click', closeMobileMenu);
  mobileMenuBackdrop?.addEventListener('click', closeMobileMenu);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobileMenu && !mobileMenu.hidden) {
      closeMobileMenu();
    }
  });

  mobileNavItems.forEach((link) => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // Tilgjengelighet: Skip-link fokuserer aktiv sides overskrift
  const skipLink = document.querySelector('.skip-link');
  skipLink?.addEventListener('click', (e) => {
    e.preventDefault();
    const activeView = document.querySelector('.view:not([hidden])');
    const heading = activeView?.querySelector('.view-heading');
    if (heading) {
      heading.focus();
      heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  // Global click delegate for navigation targets
  document.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-nav-target]');
    if (!trigger) return;

    // Allow normal command-click or middle click to open new tabs
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) {
      return;
    }

    event.preventDefault();
    const target = trigger.getAttribute('data-nav-target');
    navigateToHash(target);
  });

  // Project cards (Forside and Prosjekter) navigate to dedicated project page
  document.addEventListener('click', (event) => {
    const card = event.target.closest('[data-project-id]');
    if (!card) return;

    // If clicking a sub-link directly, let that handle it
    if (event.target.closest('a')) return;

    const projectId = card.getAttribute('data-project-id');
    if (projectId) {
      navigateToHash(`prosjekt-${projectId}`);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    const card = event.target.closest('[data-project-id]');
    if (card && document.activeElement === card) {
      event.preventDefault();
      const projectId = card.getAttribute('data-project-id');
      if (projectId) {
        navigateToHash(`prosjekt-${projectId}`);
      }
    }
  });

  // Browser back/forward navigation
  window.addEventListener('popstate', () => {
    navigateToHash(window.location.hash, { pushHash: false });
  });

  // Initial load
  navigateToHash(window.location.hash, { pushHash: false, initial: true });

  // Category filter pills on projects view
  document.querySelectorAll('.filter-pill').forEach((btn) => {
    btn.addEventListener('click', () => {
      filterProjects(btn.getAttribute('data-filter'));
    });
  });

  // Kopier e-post til utklippstavle med tilgjengelig tilbakemelding
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const copyEmailFeedback = document.getElementById('copyEmailFeedback');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', async () => {
      const email = copyEmailBtn.getAttribute('data-copy-val') || 'mateus.furuloekken@gmail.com';
      const textSpan = copyEmailBtn.querySelector('.copy-btn-text');
      const copyIcon = copyEmailBtn.querySelector('.copy-icon');
      const checkIcon = copyEmailBtn.querySelector('.check-icon');

      const setCopiedState = () => {
        copyEmailBtn.classList.add('is-copied');
        if (textSpan) textSpan.textContent = 'Kopiert!';
        if (copyIcon) copyIcon.hidden = true;
        if (checkIcon) checkIcon.hidden = false;
        if (copyEmailFeedback) {
          copyEmailFeedback.textContent = 'E-postadresse kopiert til utklippstavlen.';
        }

        setTimeout(() => {
          copyEmailBtn.classList.remove('is-copied');
          if (textSpan) textSpan.textContent = 'Kopier';
          if (copyIcon) copyIcon.hidden = false;
          if (checkIcon) checkIcon.hidden = true;
          if (copyEmailFeedback) {
            copyEmailFeedback.textContent = '';
          }
        }, 2200);
      };

      if (navigator.clipboard && navigator.clipboard.writeText) {
        try {
          await navigator.clipboard.writeText(email);
          setCopiedState();
          return;
        } catch {
          // Faller tilbake til input-metoden under
        }
      }

      // Fallback for eldre nettlesere
      const tempInput = document.createElement('input');
      tempInput.value = email;
      document.body.appendChild(tempInput);
      tempInput.select();
      try {
        document.execCommand('copy');
        setCopiedState();
      } catch {
        if (textSpan) textSpan.textContent = 'Feil';
      }
      document.body.removeChild(tempInput);
    });
  }

  // CV Accordions — Åpne alle / Lukk alle
  const toggleAllCvBtn = document.getElementById('toggleAllCvBtn');
  const toggleAllCvText = document.getElementById('toggleAllCvBtnText');
  const cvAccordions = Array.from(document.querySelectorAll('.cv-accordion'));

  function updateToggleAllBtnState() {
    if (!toggleAllCvBtn || cvAccordions.length === 0) return;
    const allOpen = cvAccordions.every((acc) => acc.open);
    if (toggleAllCvText) {
      toggleAllCvText.textContent = allOpen ? 'Lukk alle seksjoner' : 'Åpne alle seksjoner';
    }
    toggleAllCvBtn.setAttribute('aria-expanded', String(allOpen));
  }

  // Lytt på native toggle-event på hver accordion slik at knappens tilstand ALLTID er 100% synkronisert
  cvAccordions.forEach((acc) => {
    acc.addEventListener('toggle', updateToggleAllBtnState);
  });

  updateToggleAllBtnState();

  toggleAllCvBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    const allOpen = cvAccordions.every((acc) => acc.open);
    const targetState = !allOpen;

    cvAccordions.forEach((acc) => {
      acc.open = targetState;
    });

    updateToggleAllBtnState();
  });

  // Initier behagelig scroll reveal
  initScrollReveal();
});

/* --------------------------------------------------------------------------
   6. SCROLL REVEAL & INNLASTINGSEFFEKTER (Subtil, rolig animasjon)
   -------------------------------------------------------------------------- */

let scrollRevealObserver = null;

function initScrollReveal() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  // Merk: .cv-accordion holdes utenfor reveal-on-scroll slik at interaktive elementer aldri blokkeres
  const revealTargets = document.querySelectorAll(
    '.service-card, .project-card, .competency-box, .contact-page-info, .contact-form-card, .narrative-block, .project-deliverables-box, .project-cta-banner'
  );

  revealTargets.forEach((el) => {
    el.classList.add('reveal-on-scroll');
  });

  if (scrollRevealObserver) {
    scrollRevealObserver.disconnect();
  }

  scrollRevealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          scrollRevealObserver.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      threshold: 0.08,
      rootMargin: '0px 0px -30px 0px',
    }
  );

  revealTargets.forEach((el) => scrollRevealObserver.observe(el));
  revealVisibleElementsInActiveView();
}

function revealVisibleElementsInActiveView() {
  const activeView = document.querySelector('.view.is-active');
  if (!activeView) return;
  activeView.querySelectorAll('.reveal-on-scroll').forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 50) {
      el.classList.add('is-revealed');
    }
  });
}
