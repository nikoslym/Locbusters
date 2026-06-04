/**
 * THE LOCBUSTERS Main JavaScript
 * Handles: Header scroll, Mobile menu, Scroll reveal, Language switching
 */

'use strict';

/* ----------------------------------------------------------
   TRANSLATION DATA
   Structure: { [langCode]: { [dotNotationKey]: value } }
   Add Greek translations under 'gr' key when ready.
   ---------------------------------------------------------- */
const TRANSLATIONS = {
  en: {
    // Navigation
    'nav.services':  'Services',
    'nav.rentals':   'Rentals',
    'nav.about':     'About',
    'nav.contact':   'Get in Touch',

    // Hero
    'hero.eyebrow':  'Athens, Greece · Production Support Company',
    'hero.line1':    'Production Support',
    'hero.line2':    'Production Support',
    'hero.line3':    'in Greece.',
    'hero.subtitle': 'Unit Services · Production Equipment Rental · On-Set Intelligence',
    'hero.body1':    'We are a boutique production support company operating at the core of audiovisual production in Greece.',
    'hero.body2':    'We combine production experience, unit expertise, and location intelligence with high-end equipment solutions, ensuring that every shoot runs with precision, efficiency, and complete operational clarity.',
    'hero.body3':    'We are trusted by Production & Location Teams across the country, offering responsive, sustainable and budget-friendly solutions & services from prep to strike.',
    'hero.cta1':     'Explore Services',
    'hero.cta2':     'Get in Touch',

    // Trust
    'trust.statement': 'Built for production companies.\nDesigned for execution.\nTrusted by crews.',
    'trust.pillar1':   'Trusted by international and domestic productions operating across Greece.',
    'trust.pillar2':   'Responsive, sustainable, and budget-conscious from prep to wrap.',
    'trust.pillar3':   'An integrated system not fragmented services. One coordinated structure.',

    // Services
    'services.label':    'What We Do',
    'services.title':    'Integrated production support\nfor every stage of your shoot.',
    'services.s1.title': 'Unit & Facilities Management',
    'services.s1.desc':  'Operational coordination and full production base setup, ensuring efficient and fully equipped working environments from prep to wrap.',
    'services.s2.title': 'Location & Production Logistics',
    'services.s2.desc':  'Coordination of locations, teams, and infrastructure for complex productions, ensuring seamless operational flow across all stages of Production.',
    'services.s3.title': 'Traffic Control',
    'services.s3.desc':  'Access, movement and safety coordination for cast, crew and production vehicles.',
    'services.s4.title': 'Green Filming & Sustainability Management',
    'services.s4.desc':  'Practical on-set sustainability solutions aligned with ALBERT and European guidelines, supporting efficient and budget-conscious green production workflows.',
    'services.s5.title': 'Custom Solutions',
    'services.s5.desc':  'Flexible production support built through a trusted network of collaborators, scalable to meet any production requirement.',
    'services.viewAll':  'View All Services',

    // Rentals
    'rentals.label':    'Production Equipment Rental',
    'rentals.title':    'Essential on-set equipment.\nReady when you are.',
    'rentals.r1.title': 'Basecamp',
    'rentals.r1.desc':  'Shelter, seating, dining, and prep infrastructure for crew support.',
    'rentals.r2.title': 'On-Set Operations',
    'rentals.r2.desc':  'Movement, safety, and workflow tools for daily on-set execution.',
    'rentals.r3.title': 'Technical & Power',
    'rentals.r3.desc':  'Reliable power supply, lighting, and climate support systems.',
    'rentals.r4.title': 'Production Vehicles',
    'rentals.r4.desc':  'Production vans and transport solutions configured for set logistics.',
    'rentals.viewAll':  'View All Equipment',

    // About
    'about.label':  'About Us',
    'about.title':  'We work where\nproduction happens.',
    'about.body1':  'We are a boutique production support company based in Athens, Greece, operating at the core of audiovisual production. We were built from within the industry, as professionals who have spent years working on international & domestic sets in real production environments.',
    'about.body2':  'Our focus is not on separating services, but on integrating them. Unit support, equipment rental, location & unit logistics - operating as one coordinated system. Our role is to ensure that your production is supported with clarity, precision, and reliability.',
    'about.cta':    'About Us',
    'about.stat1':  'Founding Professionals',
    'about.stat2':  'Years Combined Experience',
    'about.stat3':  'LMGI & GSLUD Members',
    'about.stat4':  'Commitment to Execution',

    // How We Work
    'how.label':    'How We Work',
    'how.title':    'The structure behind\nevery successful shoot.',
    'how.p1.title': 'Integrated System',
    'how.p1.desc':  'Not fragmented services. One coordinated structure unit support, equipment, and location logistics operating as a single, efficient system.',
    'how.p2.title': 'Precision & Reliability',
    'how.p2.desc':  'Every decision on the ground translates into a smoother, more controlled production process. No surprises. No gaps.',
    'how.p3.title': 'Invisible Support',
    'how.p3.desc':  'Production works best when support is invisible. We ensure everything behind the camera runs as smoothly as what\'s in front of it.',
    'how.p4.title': 'Always Present',
    'how.p4.desc':  'Production doesn\'t stop. Neither do we. Responsive, 24/7 support wherever and whenever it\'s needed before, during, and after every shoot.',

    // Clients
    'clients.label': 'Productions & Partners',

    // CTA
    'cta.label': 'Get in Touch',
    'cta.title': 'Precision. Experience. Execution.',
    'cta.sub':   'For international & domestic productions seeking reliable unit services, equipment support, and on-set operational intelligence, we provide the structure that keeps production moving.',
    'cta.body':  'From basecamp to execution, we ensure every production is fully supported, fully equipped, and fully under control.',
    'cta.btn':   'Get in Touch',

    // Footer
    'footer.tagline':       'Production Support in Greece.\nFrom prep to strike.',
    'footer.servicesTitle': 'Services',
    'footer.rentalsTitle':  'Rentals',
    'footer.companyTitle':  'Company',
    'footer.s1':  'Unit & Facilities Management',
    'footer.s2':  'Location & Production Logistics',
    'footer.s3':  'Set & Location Management',
    'footer.s4':  'Traffic Control',
    'footer.s5':  'Green Filming & Sustainability',
    'footer.s6':  'Safety & Risk Intelligence',
    'footer.s7':  'Event Planning',
    'footer.s8':  'Custom Solutions',
    'footer.r1':  'Basecamp',
    'footer.r2':  'On-Set Operations',
    'footer.r3':  'Technical & Power',
    'footer.r4':  'Production Vehicles',
    'footer.about':    'About Us',
    'footer.team':     'The Team',
    'footer.contact':  'Get in Touch',
    'footer.location': 'Athens, Greece',
    'footer.copy':     '© 2024 The Locbusters. All rights reserved.',
  },

  gr: {
    // Navigation
    'nav.services':  'Υπηρεσίες',
    'nav.rentals':   'Ενοικιάσεις',
    'nav.about':     'Σχετικά',
    'nav.contact':   'Επικοινωνία',

    // Hero
    'hero.eyebrow':  'Αθήνα, Ελλάδα · Εταιρεία Υποστήριξης Παραγωγής',
    'hero.line1':    'Υποστήριξη Παραγωγής',
    'hero.line2':    'Υποστήριξη Παραγωγής',
    'hero.line3':    'στην Ελλάδα.',
    'hero.subtitle': 'Υπηρεσίες Unit · Ενοικίαση Εξοπλισμού · Επιτόπια Διαχείριση',
    'hero.body1':    'Είμαστε μια boutique εταιρεία υποστήριξης παραγωγής στον πυρήνα της οπτικοακουστικής παραγωγής στην Ελλάδα.',
    'hero.body2':    'Συνδυάζουμε εμπειρία παραγωγής, unit expertise και location intelligence με λύσεις high-end εξοπλισμού, εξασφαλίζοντας ακρίβεια, αποτελεσματικότητα και πλήρη επιχειρησιακή σαφήνεια σε κάθε γύρισμα.',
    'hero.body3':    'Εμπιστεύονται σε εμάς Production & Location Teams σε όλη τη χώρα, προσφέροντας responsive, βιώσιμες και οικονομικές λύσεις & υπηρεσίες από το prep έως το strike.',
    'hero.cta1':     'Οι Υπηρεσίες μας',
    'hero.cta2':     'Επικοινωνήστε',

    // Trust
    'trust.statement': 'Σχεδιασμένο για εταιρείες παραγωγής.\nΥλοποιημένο για αποτελέσματα.\nΑξιόπιστο από τα συνεργεία.',
    'trust.pillar1':   'Αξιόπιστοι από διεθνείς και εγχώριες παραγωγές σε όλη την Ελλάδα.',
    'trust.pillar2':   'Αποτελεσματικοί, βιώσιμοι και οικονομικά συνετοί από το prep έως το wrap.',
    'trust.pillar3':   'Ένα ενοποιημένο σύστημα όχι κατακερματισμένες υπηρεσίες. Μία συντονισμένη δομή.',

    // Services
    'services.label':    'Τι Κάνουμε',
    'services.title':    'Ενοποιημένη υποστήριξη παραγωγής\nσε κάθε φάση του γυρίσματος.',
    'services.s1.title': 'Διαχείριση Unit & Εγκαταστάσεων',
    'services.s1.desc':  'Πλήρης εγκατάσταση βάσης παραγωγής και επιχειρησιακός συντονισμός. Αποτελεσματικά, πλήρως εξοπλισμένα περιβάλλοντα.',
    'services.s2.title': 'Διαχείριση Τοποθεσιών & Logistics',
    'services.s2.desc':  'Συντονισμός τοποθεσιών, ομάδων και υποδομής για σύνθετες παραγωγές.',
    'services.s3.title': 'Ρύθμιση Κυκλοφορίας',
    'services.s3.desc':  'Συντονισμός πρόσβασης, κίνησης και ασφάλειας για cast, crew και οχήματα παραγωγής.',
    'services.s4.title': 'Πράσινα Γυρίσματα & Βιωσιμότητα',
    'services.s4.desc':  'Πρακτικές λύσεις βιωσιμότητας on-set σύμφωνα με τις οδηγίες ALBERT και της Ευρώπης.',
    'services.s5.title': 'Προσαρμοσμένες Λύσεις',
    'services.s5.desc':  'Ευέλικτη υποστήριξη παραγωγής μέσω ενός αξιόπιστου δικτύου συνεργατών.',
    'services.viewAll':  'Όλες οι Υπηρεσίες',

    // Rentals
    'rentals.label':    'Ενοικίαση Εξοπλισμού Παραγωγής',
    'rentals.title':    'Βασικός εξοπλισμός on-set.\nΈτοιμος όταν τον χρειάζεστε.',
    'rentals.r1.title': 'Basecamp',
    'rentals.r1.desc':  'Υποδομές shelter, seating, dining και prep για πλήρη υποστήριξη crew.',
    'rentals.r2.title': 'On-Set Operations',
    'rentals.r2.desc':  'Εξοπλισμός κίνησης, ασφάλειας και workflow για καθημερινή on-set εκτέλεση.',
    'rentals.r3.title': 'Technical & Power',
    'rentals.r3.desc':  'Αξιόπιστα συστήματα ισχύος, φωτισμού και κλιματικής υποστήριξης.',
    'rentals.r4.title': 'Production Vehicles',
    'rentals.r4.desc':  'Βαν παραγωγής και λύσεις μεταφοράς εξοπλισμού για set logistics.',
    'rentals.viewAll':  'Όλος ο Εξοπλισμός',

    // About
    'about.label':  'Σχετικά με εμάς',
    'about.title':  'Εργαζόμαστε εκεί\nπου γίνεται η παραγωγή.',
    'about.body1':  'Είμαστε μια boutique εταιρεία υποστήριξης παραγωγής με έδρα την Αθήνα, χτισμένη από μέσα από τον κλάδο. Οι ιδρυτές μας έχουν περάσει χρόνια εργαζόμενοι σε διεθνείς και εγχώριες παραγωγές.',
    'about.body2':  'Η εστίασή μας δεν είναι στον διαχωρισμό υπηρεσιών, αλλά στην ενοποίησή τους υποστήριξη unit, ενοικίαση εξοπλισμού, logistics λειτουργώντας ως ένα συντονισμένο σύστημα.',
    'about.cta':    'Σχετικά με εμάς',
    'about.stat1':  'Ιδρυτικά Μέλη',
    'about.stat2':  'Χρόνια Εμπειρίας',
    'about.stat3':  'Μέλη LMGI & GSLUD',
    'about.stat4':  'Δέσμευση στην Εκτέλεση',

    // How We Work
    'how.label':    'Πώς Εργαζόμαστε',
    'how.title':    'Η δομή πίσω από\nκάθε επιτυχημένο γύρισμα.',
    'how.p1.title': 'Ενοποιημένο Σύστημα',
    'how.p1.desc':  'Όχι κατακερματισμένες υπηρεσίες. Μία συντονισμένη δομή υποστήριξη unit, εξοπλισμός και logistics σε ένα αποτελεσματικό σύστημα.',
    'how.p2.title': 'Ακρίβεια & Αξιοπιστία',
    'how.p2.desc':  'Κάθε απόφαση στο πεδίο μεταφράζεται σε πιο ομαλή, πιο ελεγχόμενη διαδικασία παραγωγής.',
    'how.p3.title': 'Αόρατη Υποστήριξη',
    'how.p3.desc':  'Η παραγωγή λειτουργεί καλύτερα όταν η υποστήριξη είναι αόρατη. Εξασφαλίζουμε ότι όλα πίσω από την κάμερα τρέχουν ομαλά.',
    'how.p4.title': 'Πάντα Παρόντες',
    'how.p4.desc':  'Η παραγωγή δεν σταματά. Ούτε εμείς. Υποστήριξη 24/7, όπου και όποτε χρειάζεται πριν, κατά τη διάρκεια και μετά από κάθε γύρισμα.',

    // Clients
    'clients.label': 'Παραγωγές & Συνεργάτες',

    // CTA
    'cta.label': 'Επικοινωνήστε',
    'cta.title': 'Ακρίβεια. Εμπειρία. Εκτέλεση.',
    'cta.sub':   'Για διεθνείς και εγχώριες παραγωγές που αναζητούν αξιόπιστες υπηρεσίες unit, υποστήριξη εξοπλισμού και on-set operational intelligence, παρέχουμε τη δομή που κρατά την παραγωγή σε κίνηση.',
    'cta.body':  'Από το basecamp έως την εκτέλεση, εξασφαλίζουμε ότι κάθε παραγωγή είναι πλήρως υποστηριγμένη, πλήρως εξοπλισμένη και πλήρως υπό έλεγχο.',
    'cta.btn':   'Επικοινωνήστε',

    // Footer
    'footer.tagline':       'Υποστήριξη Παραγωγής στην Ελλάδα.\nΑπό το prep έως το strike.',
    'footer.servicesTitle': 'Υπηρεσίες',
    'footer.rentalsTitle':  'Ενοικιάσεις',
    'footer.companyTitle':  'Εταιρεία',
    'footer.s1':  'Διαχείριση Unit & Εγκαταστάσεων',
    'footer.s2':  'Διαχείριση Τοποθεσιών & Logistics',
    'footer.s3':  'Set & Location Management',
    'footer.s4':  'Ρύθμιση Κυκλοφορίας',
    'footer.s5':  'Πράσινα Γυρίσματα & Βιωσιμότητα',
    'footer.s6':  'Safety & Risk Intelligence',
    'footer.s7':  'Event Planning',
    'footer.s8':  'Προσαρμοσμένες Λύσεις',
    'footer.r1':  'Basecamp',
    'footer.r2':  'On-Set Operations',
    'footer.r3':  'Technical & Power',
    'footer.r4':  'Production Vehicles',
    'footer.about':    'Σχετικά με εμάς',
    'footer.team':     'Η Ομάδα',
    'footer.contact':  'Επικοινωνήστε',
    'footer.location': 'Αθήνα, Ελλάδα',
    'footer.copy':     '© 2024 The Locbusters. Με επιφύλαξη παντός δικαιώματος.',
  }
};

/* ----------------------------------------------------------
   STATE
   ---------------------------------------------------------- */
let currentLang = 'en';

/* ----------------------------------------------------------
   HEADER Scroll behaviour
   ---------------------------------------------------------- */
function initHeader() {
  const header = document.getElementById('header');
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 20);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // Run once on init
}

/* ----------------------------------------------------------
   MOBILE MENU
   ---------------------------------------------------------- */
function initMobileMenu() {
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (!hamburger || !mobileMenu) return;

  const toggle = (open) => {
    hamburger.classList.toggle('is-open', open);
    mobileMenu.classList.toggle('is-open', open);
    hamburger.setAttribute('aria-expanded', String(open));
    mobileMenu.setAttribute('aria-hidden', String(!open));
    document.body.style.overflow = open ? 'hidden' : '';
  };

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.contains('is-open');
    toggle(!isOpen);
  });

  // Close on link click
  mobileMenu.querySelectorAll('.mobile-menu__link').forEach(link => {
    link.addEventListener('click', () => toggle(false));
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (
      mobileMenu.classList.contains('is-open') &&
      !mobileMenu.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      toggle(false);
    }
  });

  // Close on escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
      toggle(false);
    }
  });
}

/* ----------------------------------------------------------
   SCROLL REVEAL Intersection Observer
   ---------------------------------------------------------- */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -60px 0px'
    }
  );

  elements.forEach(el => observer.observe(el));
}

/* ----------------------------------------------------------
   HERO Animate in on load
   ---------------------------------------------------------- */
function initHeroAnimation() {
  const hero = document.querySelector('.hero__content');
  if (!hero) return;

  // Stagger hero children on load
  const children = hero.querySelectorAll('.hero__eyebrow, .hero__title, .hero__subtitle, .hero__body, .hero__ctas');
  children.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.8s ease ${i * 0.12}s, transform 0.8s ease ${i * 0.12}s`;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      });
    });
  });
}

/* ----------------------------------------------------------
   LANGUAGE SWITCHING
   ---------------------------------------------------------- */
function applyTranslations(lang) {
  const t = TRANSLATIONS[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key   = el.getAttribute('data-i18n');
    const value = t[key];
    if (value === undefined) return;

    // Preserve HTML for br tags by converting \n to <br>
    if (value.includes('\n')) {
      el.innerHTML = value.replace(/\n/g, '<br>');
    } else {
      el.textContent = value;
    }
  });

  // Update html lang attribute
  document.documentElement.lang = lang === 'gr' ? 'el' : 'en';
}

function initLanguageSwitch() {
  document.querySelectorAll('.lang-switch__btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (lang === currentLang) return;

      currentLang = lang;

      // Update all lang buttons
      document.querySelectorAll('.lang-switch__btn').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-lang') === lang);
      });

      applyTranslations(lang);
    });
  });
}

/* ----------------------------------------------------------
   SMOOTH SCROLL for anchor links
   ---------------------------------------------------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href   = anchor.getAttribute('href');
      const target = href === '#' ? null : document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      const headerH = parseInt(getComputedStyle(document.documentElement)
        .getPropertyValue('--header-h')) || 72;

      const top = target.getBoundingClientRect().top + window.scrollY - headerH;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* ----------------------------------------------------------
   INIT
   ---------------------------------------------------------- */
function init() {
  initHeader();
  initMobileMenu();
  initScrollReveal();
  initHeroAnimation();
  initLanguageSwitch();
  initSmoothScroll();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
