/**
 * THE LOCBUSTERS Main JavaScript
 * Handles: Header scroll, Mobile menu, Scroll reveal, Language switching
 */

'use strict';

const LANG_STORAGE_KEY = 'locbusters-lang';

/* ----------------------------------------------------------
   TRANSLATION DATA
   ---------------------------------------------------------- */
const TRANSLATIONS = {
  en: {
    // Navigation
    'nav.services':  'Services',
    'nav.rentals':   'Rentals',
    'nav.about':     'About',
    'nav.contact':   'Get in Touch',

    // Breadcrumbs
    'breadcrumb.home':    'Home',
    'breadcrumb.about':   'About',
    'breadcrumb.services':'Services',
    'breadcrumb.rentals': 'Rentals',
    'breadcrumb.contact': 'Get in Touch',

    // Hero (homepage)
    'hero.eyebrow':  'Athens, Greece · Production Support Company',
    'hero.line1':    'Production support services',
    'hero.line3':    'in Greece.',
    'hero.subtitle': 'Unit Services · Production Equipment Rental · On-Set Intelligence',
    'hero.body1':    'We are a boutique production support company operating in Greece.',
    'hero.body2':    'We combine production experience, unit expertise, and location intelligence with high-end equipment solutions, ensuring that every shoot runs with precision, efficiency, and complete operational clarity.',
    'hero.body3':    'We are trusted by Production & Location Teams across the country, offering responsive, sustainable and budget friendly solutions & services from prep to strike.',
    'hero.cta1':     'Explore Services',
    'hero.cta2':     'Get in Touch',

    // Trust (homepage)
    'trust.statement': 'Built for production companies.\nDesigned for execution.\nTrusted by crews.',
    'trust.line1':     'We don\'t separate services we integrate them. Every department, every decision, every piece of equipment operates as part of one coordinated structure.',
    'trust.line2':     'From basecamp to final wrap, we are the operational layer that keeps production moving.',

    // Services (homepage preview)
    'services.label':    'Services',
    'services.title':    'Production support services in Greece.',
    'services.s1.title': 'Unit & Facilities Management',
    'services.s1.desc':  'Operational coordination and production base setup, ensuring efficient and fully equipped working environments from prep to wrap.',
    'services.s2.title': 'Location & Production Logistics',
    'services.s2.desc':  'Coordination of locations, teams, and infrastructure for complex productions, ensuring seamless operational flow across all stages of Production.',
    'services.s3.title': 'Traffic Control',
    'services.s3.desc':  'Access, movement and safety coordination for cast, crew and production vehicles.',
    'services.s4.title': 'Green Filming & Sustainability Management',
    'services.s4.desc':  'Practical on-set sustainability solutions aligned with ALBERT and European guidelines, supporting efficient and budget-conscious green production workflows.',
    'services.s5.title': 'Custom Solutions',
    'services.s5.desc':  'Flexible production support built through a trusted network of collaborators, scalable to meet any production requirement.',
    'services.viewAll':  'View All Services',

    // Rentals (homepage preview)
    'rentals.label':    'Production Equipment Rental',
    'rentals.title':    'Essential on-set equipment\nsupporting every stage of production.',
    'rentals.r1.title': 'Basecamp',
    'rentals.r1.desc':  'Infrastructure for crew support, comfort, and preparation.',
    'rentals.r2.title': 'On-Set Operations',
    'rentals.r2.desc':  'Practical tools for movement, safety, and daily workflow efficiency on set.',
    'rentals.r3.title': 'Technical & Power',
    'rentals.r3.desc':  'Reliable energy and technical equipment ensuring uninterrupted production flow.',
    'rentals.r4.title': 'Production Vehicles',
    'rentals.r4.desc':  'Production Equipment Transport Solutions',
    'rentals.viewAll':  'View All Equipment',

    // About (homepage snapshot)
    'about.label':  'About Us',
    'about.title':  'We work where\nproduction happens.',
    'about.body1':  'We are a boutique production support company based in Athens, Greece. We were built from within the industry, as professionals who have spent years working on international & domestic sets in real production environments.',
    'about.body2':  'Our focus is on integrating services. Unit support, equipment rental, location & unit logistics - operating as one coordinated system. Our role is to ensure that your production is supported with clarity, precision, and reliability, so that every decision on the ground translates into a smoother, more controlled production process.',
    'about.cta':    'About Us',

    // Clients
    'clients.label': 'Productions & Partners',

    // CTA
    'cta.label': 'Get in Touch',
    'cta.title': 'Precision. Experience. Execution.',
    'cta.sub':   'For international & domestic productions seeking reliable unit services, equipment support and on-set operational intelligence, we provide the structure that keeps production moving.',
    'cta.body':  'From basecamp to execution, we ensure every production is fully supported, equipped, and under control.',
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
    'footer.copy':     '© 2026 The Locbusters. All rights reserved.',

    // About page
    'aboutPage.title':    'About Us',
    'aboutPage.subtitle': 'Built from within production.\nDesigned for execution.\nTrusted by crews.',
    'aboutPage.heroBody': 'We are a boutique production support company based in Athens, Greece. We were built from within the industry, as professionals who have spent years working on international & domestic sets in real production environments.',
    'aboutPage.abtLabel': 'About',
    'aboutPage.abtHeading':'About Us',
    'aboutPage.abt.p1':   'We are a boutique production support company based in Athens, Greece.',
    'aboutPage.abt.p2':   'We were built from within the industry, as professionals who have spent years working on international & domestic sets in real production environments. Our focus is on integrating services. Unit support, equipment rental , location & unit logistics - operating as one coordinated system.',
    'aboutPage.abt.p3':   '',
    'aboutPage.abt.p4':   'We work where production happens.',
    'aboutPage.abt.p5':   'Our role is to ensure that your production is supported with clarity, precision, and reliability, so that every decision on the ground translates into a smoother, more controlled production process.',
    'aboutPage.storyLabel': 'Our Story',
    'aboutPage.storyHeading':'How we got here.',
    'aboutPage.story.p1': 'Founded in 2024, The Locbusters was created from within the production world. Built on years of shared work across international and domestic productions in Greece, the founders have collaborated repeatedly - both as a full team and in varying configurations - on projects ranging from independent feature & short films to large-scale studio productions. This long-standing working relationship existed well before the company itself and was shaped through real production environments where time matters and pressure, complexity and precision define every decision.',
    'aboutPage.story.p1b': '',
    'aboutPage.story.p2': 'As Greece has become a major destination for global filming, and also domestic production has become more demanding, the need for a trusted operational layer has become essential. We built that layer. What unified us was a consistent way of working: trust, respect, precision and a shared understanding of what production support must deliver on the ground.',
    'aboutPage.story.p2b': '',
    'aboutPage.story.p3': 'Each also operates independently within the industry, bringing specialized expertise across unit, production and location departments. The company is a natural extension of this existing network, combining complementary experience into a single - coordinated structure.',
    'aboutPage.story.p4': 'Our approach is simple: production works best when support is invisible, precise, and reliable.',
    'aboutPage.story.p5': 'It is not a formation of convenience, but of practice-built from real production experience and shaped by the way we have always worked: focused on execution.',
    'aboutPage.teamLabel': 'The Team',
    'aboutPage.teamHeading': 'Real on-set expertise.\nIntegrated execution.\nProven reliability.',
    'aboutPage.giorgos.name': 'Giorgos Georganas',
    'aboutPage.giorgos.role': 'Unit Manager',
    'aboutPage.giorgos.bio1': 'Giorgos is a highly experienced Unit Manager with a long track record in major international studio and service productions in Greece. He has worked closely with leading global studios and production companies, managing complex on-location operations and large-scale shoots from prep through wrap.',
    'aboutPage.giorgos.bio2': 'His expertise lies in high-level unit coordination, logistical execution, and on-set problem solving within fast-paced productions. With a deep understanding of operational flow and production demands, he ensures that equipment, crew, and locations function as a single, efficient system.',
    'aboutPage.giorgos.bio3': 'Known for reliability, efficiency, and precision, he is a trusted professional that delivers demanding work to the highest standards.',
    'aboutPage.giorgos.bio4': 'He is also a founding member of the Greek Society of Location and Unit Department (GSLUD).',
    'aboutPage.maria.name': 'Maria Repousi',
    'aboutPage.maria.role': 'Production Specialist',
    'aboutPage.maria.bio1': 'Maria is a Production professional with more than 10 years of experience in complex domestic and international film productions. She has worked with leading global studios as well as international and domestic production companies, managing Productions from development through delivery.',
    'aboutPage.maria.bio2': 'Her expertise spans budgeting, scheduling, and production operations at scale, with a strong ability to anticipate risks, oversee production processes and coordinate teams and staff across demanding environments.',
    'aboutPage.maria.bio3': 'In recent years, she has participated in specialized masterclasses and training in sustainability for the audiovisual industry, focusing on developing and implementing environmental strategies to reduce production carbon footprint, waste, and resource consumption.',
    'aboutPage.maria.bio4': '',
    'aboutPage.maria.bio5': 'She is also a founding member and Treasurer of the Board of the Greek Society of Location and Unit Department (GSLUD).',
    'aboutPage.giannis.name': 'Giannis Sotiropoulos',
    'aboutPage.giannis.role': 'Location Manager',
    'aboutPage.giannis.bio1': 'Giannis Sotiropoulos is a Location Manager and Scouter working across major international film and television productions in Greece. Since 2018, he has supported high-profile studio productions for global platforms including Netflix, Amazon, and Disney.',
    'aboutPage.giannis.bio2': 'His expertise ensures precise location execution, smooth logistics, and full alignment with international production standards.',
    'aboutPage.giannis.bio3': 'He is an Associate Member of the Location Managers Guild International (LMGI) and an active member of the LMGI UK, Europe and Africa Committee. He is also a founding member and Vice President of the Greek Society of Location and Unit Department (GSLUD).',
    'aboutPage.michalis.name': 'Michalis Vrachliotis',
    'aboutPage.michalis.role': 'Production & Location Specialist',
    'aboutPage.michalis.bio1': 'Michalis is a Production professional with over 10 years of experience across Production and Location Departments in international and domestic audiovisual productions. He has contributed to feature films, television series, independent productions, and international photo shoots.',
    'aboutPage.michalis.bio2': 'His dual experience across production and location workflows, allows him to operate fluidly across departments, supporting complex shoots in dynamic environments.',
    'aboutPage.michalis.bio3': 'He brings adaptability, operational stability, and consistent on-set value to every production he supports.',
    'aboutPage.michalis.bio4': 'He is also a founding member of the Greek Society of Location and Unit Department (GSLUD).',

    // Services page
    'servicesPage.title':    'Services',
    'servicesPage.subtitle': 'Integrated production support services for international & domestic shoots in Greece.',
    'servicesPage.indexLabel': 'On This Page',
    'servicesPage.s1.title': 'Unit & Facilities Management',
    'servicesPage.s1.desc':  'Operational coordination and production base setup, ensuring efficient and fully equipped working environments from prep to wrap.',
    'servicesPage.s2.title': 'Location & Production Logistics',
    'servicesPage.s2.desc':  'Coordination of locations, teams, and infrastructure for complex productions, ensuring seamless operational flow across all stages of Production.',
    'servicesPage.s3.title': 'Set & Location Management',
    'servicesPage.s3.desc':  'On-set and on-location operational support, ensuring continuity, efficiency, and execution. Delivered in collaboration with experienced professional teams.',
    'servicesPage.s4.title': 'Traffic Control',
    'servicesPage.s4.desc':  'Access, movement and safety coordination for cast, crew and production vehicles.',
    'servicesPage.s5.title': 'Green Filming & Sustainability Management',
    'servicesPage.s5.desc':  'Practical on-set sustainability solutions aligned with ALBERT and European guidelines, supporting efficient and budget-conscious green production workflows.',
    'servicesPage.s6.title': 'Safety & Risk Intelligence',
    'servicesPage.s6.desc':  'We identify, assess, and manage risk across locations and set environments. Through detailed evaluations and practical solutions, we ensure productions operate with safety, before and during every shoot.',
    'servicesPage.s7.title': 'Event Planning',
    'servicesPage.s7.desc':  'End-to-end execution of events, combining production-level structure with a curated network of premium collaborators. Includes catering, styling, logistics, transportation, VIP drivers, and location sourcing with permit acquisition for unique spaces.',
    'servicesPage.s8.title': 'Custom Solutions',
    'servicesPage.s8.desc':  'Flexible production support built through a trusted network of collaborators, scalable to meet any production requirement.',
    'servicesPage.enquire':  'Enquire about this service',

    // Rentals page
    'rentalsPage.title':    'Production\nEquipment\nRental',
    'rentalsPage.subtitle': 'Essential on-set equipment supporting every stage of production.',
    'rentalsPage.indexLabel': 'Equipment Categories',
    'rentalsPage.r1.title': 'Basecamp',
    'rentalsPage.r1.desc':  'Infrastructure for crew support, comfort, and preparation.\nShelter, seating, dining, and make-up/wardrobe stations fully equipped for every production needs.',
    'rentalsPage.r2.title': 'On-Set Operations',
    'rentalsPage.r2.desc':  'Practical tools for movement, safety, and daily workflow efficiency on set.',
    'rentalsPage.r3.title': 'Technical & Power',
    'rentalsPage.r3.desc':  'Reliable energy and technical equipment ensuring uninterrupted production flow.',
    'rentalsPage.r4.title': 'Production Vehicles',
    'rentalsPage.r4.desc':  'Production Equipment Transport Solutions',
    'rentalsPage.cta1':     'Get in Touch',
    'rentalsPage.cta2':     'Browse Categories',
    'rentalsPage.heroBody': 'Reliable, production-ready equipment available for international and domestic shoots across Greece. Everything you need on set - configured, delivered, and supported.',
    'rentalsPage.pos.statement': 'The infrastructure that keeps production running on time and on set.',
    'rentalsPage.pos.line1':     'We provide the essential equipment and tools that keep production running smoothly on set and on location. Every item is maintained, production-ready, and available with direct operational support.',
    'rentalsPage.pos.line2':     'We don\'t ship a box of kit. We configure and deploy what you actually need, when you need it.',
    'rentalsPage.how.label':  'Process',
    'rentalsPage.how.title':  'How It Works',
    'rentalsPage.how.s1.title': 'Define Your Needs',
    'rentalsPage.how.s1.desc':  'Tell us your shoot dates, location, crew size, and what you need on set. The more context, the better we can configure.',
    'rentalsPage.how.s2.title': 'We Prepare & Configure',
    'rentalsPage.how.s2.desc':  'We prepare, check, and configure every item to production standard - no improvisation on the day.',
    'rentalsPage.how.s3.title': 'Delivery & Setup',
    'rentalsPage.how.s3.desc':  'Equipment is delivered and set up at your location. Basecamp is operational before your crew arrives.',
    'rentalsPage.how.s4.title': 'On-Set Support',
    'rentalsPage.how.s4.desc':  'We remain available throughout the shoot. If something changes, we adapt. Production doesn\'t stop - neither do we.',
    'rentalsPage.index.i1': '01 Basecamp',
    'rentalsPage.index.i2': '02 On-Set Operations',
    'rentalsPage.index.i3': '03 Technical & Power',
    'rentalsPage.index.i4': '04 Production Vehicles',
    'rentalsPage.placeholder.power': 'Power & Technical',
    'rentalsPage.r1.g1.title': 'Shelter & Climate',
    'rentalsPage.r1.g1.i1': 'Pop-up tents',
    'rentalsPage.r1.g1.i2': 'Rain gutters',
    'rentalsPage.r1.g1.i3': 'Sandbags',
    'rentalsPage.r1.g1.i4': 'Iron weights',
    'rentalsPage.r1.g1.i5': 'Umbrellas',
    'rentalsPage.r1.g1.i6': 'Heaters',
    'rentalsPage.r1.g1.i7': 'A/C units',
    'rentalsPage.r1.g2.title': 'Seating & Dining',
    'rentalsPage.r1.g2.i1': 'Folding chairs',
    'rentalsPage.r1.g2.i2': 'Director\'s chairs',
    'rentalsPage.r1.g2.i3': 'Stools',
    'rentalsPage.r1.g2.i4': 'Folding tables',
    'rentalsPage.r1.g2.i5': 'Table stretch cloths',
    'rentalsPage.r1.g3.title': 'Make-Up & Wardrobe',
    'rentalsPage.r1.g3.i1': 'Make-up mirrors',
    'rentalsPage.r1.g3.i2': 'Full body mirrors',
    'rentalsPage.r1.g3.i3': 'Racks',
    'rentalsPage.r1.g3.i4': 'Ironing sets',
    'rentalsPage.r1.g3.i5': 'Steamers',
    'rentalsPage.r1.g3.i6': 'Towels',
    'rentalsPage.r1.g3.i7': 'Blankets',
    'rentalsPage.r1.g3.i8': 'Make-up chairs',
    'rentalsPage.r2.g1.title': 'Movement & Workflow',
    'rentalsPage.r2.g1.i1': 'Ladders',
    'rentalsPage.r2.g1.i2': 'Trolleys',
    'rentalsPage.r2.g1.i3': 'Fold-it carts',
    'rentalsPage.r2.g1.i4': 'Hand trucks',
    'rentalsPage.r2.g1.i5': 'Clamps',
    'rentalsPage.r2.g1.i6': 'Printers',
    'rentalsPage.r2.g2.title': 'Safety & Access',
    'rentalsPage.r2.g2.i1': 'Traffic cones',
    'rentalsPage.r2.g2.i2': 'Barriers',
    'rentalsPage.r2.g2.i3': 'Reflective vests',
    'rentalsPage.r2.g2.i4': 'Warning flags',
    'rentalsPage.r2.g2.i5': 'Camouflage nets',
    'rentalsPage.r2.g3.title': 'On-Set Essentials',
    'rentalsPage.r2.g3.i1': 'Megaphones',
    'rentalsPage.r2.g3.i2': 'Coolers',
    'rentalsPage.r2.g3.i3': 'Cleaning sets',
    'rentalsPage.r2.g3.i4': 'Toolboxes',
    'rentalsPage.r2.g3.i5': 'Fire extinguishers',
    'rentalsPage.r2.g3.i6': 'Blackout cloths',
    'rentalsPage.r3.g1.title': 'Power',
    'rentalsPage.r3.g1.i1': 'Portable generators',
    'rentalsPage.r3.g1.i2': 'EcoFlow systems & solar panels',
    'rentalsPage.r3.g1.i3': 'Power strips & extension cords',
    'rentalsPage.r3.g2.title': 'Lighting & Climate',
    'rentalsPage.r3.g2.i1': 'LED working lights',
    'rentalsPage.r3.g2.i2': 'LED tapes',
    'rentalsPage.r3.g2.i3': 'Fans',
    'rentalsPage.r3.g2.i4': 'Blowers',
    'rentalsPage.r3.g2.i5': 'Air compressors',
    'rentalsPage.r3.g2.i6': 'Portable heaters',
    'rentalsPage.r3.g2.i7': 'Portable gas heaters',
    'rentalsPage.r3.g2.i8': 'Pop-up bins',

    // Services page - extra sections
    'servicesPage.heroBody': 'Every service we offer is designed to function as part of a single, coordinated system - not a menu of separate options. Precision, integration, and execution are built into how we work, not added on top.',
    'servicesPage.index.i1': '01 Unit & Facilities',
    'servicesPage.index.i2': '02 Location Logistics',
    'servicesPage.index.i3': '03 Set & Location',
    'servicesPage.index.i4': '04 Traffic Control',
    'servicesPage.index.i5': '05 Green Filming',
    'servicesPage.index.i6': '06 Safety & Risk',
    'servicesPage.index.i7': '07 Event Planning',
    'servicesPage.index.i8': '08 Custom Solutions',
    'servicesPage.pos.statement': 'Built for production companies.\nDesigned for execution.',
    'servicesPage.pos.line1':     'We don\'t separate services - we integrate them. Every department, every decision, every piece of equipment operates as part of one coordinated structure.',
    'servicesPage.pos.line2':     'From basecamp to final wrap, we are the operational layer that keeps production moving.',
    'servicesPage.how.label':  'How We Operate',
    'servicesPage.how.title':  'The structure behind\nevery successful shoot.',
    'servicesPage.how.p1.title': 'Integrated System',
    'servicesPage.how.p1.desc':  'Every service connects. Unit support, location logistics, and equipment operate as one coordinated structure - not separate departments.',
    'servicesPage.how.p2.title': 'On-Set Experience',
    'servicesPage.how.p2.desc':  'Built from within the industry. Our team has worked across international and domestic productions - we understand what sets demand.',
    'servicesPage.how.p3.title': 'Precision Execution',
    'servicesPage.how.p3.desc':  'Every decision on the ground translates into a smoother, more controlled production process. Detail is not optional - it\'s the product.',
    'servicesPage.how.p4.title': 'Reliable Delivery',
    'servicesPage.how.p4.desc':  'Production doesn\'t stop. Neither do we. 24/7 responsive support wherever and whenever it\'s needed - before, during, and after every shoot.',

    // Contact page
    'contactPage.title':    'Get in Touch',
    'contactPage.subtitle': 'Always on.\nAlways present.',
    'contactPage.body':     'Production doesn\'t stop. Neither do we.\n24/7 support, wherever and whenever it\'s needed.',
    'contactPage.formLabel':'Send a Message',
    'contactPage.formTitle':'Tell us about\nyour project.',
    'contactPage.formSub':  'We\'ll come back with a clear, structured response fast.',
    'contactPage.trust':    'Μας εμπιστεύονται ομάδες παραγωγής σε όλη την Ελλάδα',
    'contactPage.label.name':    'Name',
    'contactPage.label.email':   'Email',
    'contactPage.label.company': 'Production / Company',
    'contactPage.label.optional':'(optional)',
    'contactPage.label.message': 'Message',
    'contactPage.placeholder.name':    'Your name',
    'contactPage.placeholder.email':   'your@email.com',
    'contactPage.placeholder.company': 'Production company or project name',
    'contactPage.placeholder.message': 'Tell us about your shoot dates, location, what you need.',
    'contactPage.submit':   'Send Message',
    'contactPage.sending':  'Sending…',
    'contactPage.note':     'We typically respond within a few hours.',
    'contactPage.success':  'Message received. We\'ll be in touch shortly.',
    'contactPage.error.name':       'Please enter your name.',
    'contactPage.error.email':      'Please enter your email address.',
    'contactPage.error.emailInvalid':'Please enter a valid email address.',
    'contactPage.error.message':    'Please enter your message.',
    'contactPage.info.direct':      'Direct Contact',
    'contactPage.info.directNote':  'Direct communication is always preferred for urgent production needs.',
    'contactPage.info.location':    'Location',
    'contactPage.info.locationVal': 'Athens, Greece',
    'contactPage.info.locationText':'Operating nationwide across all Greek locations.',
    'contactPage.info.follow':      'Follow',
  },

  gr: {
    // Navigation
    'nav.services':  'Υπηρεσίες',
    'nav.rentals':   'Ενοικιάσεις',
    'nav.about':     'Σχετικά',
    'nav.contact':   'Επικοινωνία',

    // Breadcrumbs
    'breadcrumb.home':    'Αρχική',
    'breadcrumb.about':   'Σχετικά',
    'breadcrumb.services':'Υπηρεσίες',
    'breadcrumb.rentals': 'Ενοικιάσεις',
    'breadcrumb.contact': 'Επικοινωνία',

    // Hero (homepage)
    'hero.eyebrow':  'Αθήνα, Ελλάδα · Εταιρεία Υποστήριξης Παραγωγής',
    'hero.line1':    'Υπηρεσίες υποστήριξης',
    'hero.line3':    'παραγωγής στην Ελλάδα.',
    'hero.subtitle': 'Υπηρεσίες Διαχείρισης & Εγκατάστασης Βάσης · Ενοικίαση Εξοπλισμού Παραγωγής · Επιχειρησιακή Υποστήριξη Γυρίσματος',
    'hero.body1':    'Είμαστε οι Locbusters. Μια εταιρεία εξειδικευμένη στην υποστήριξη οπτικοακουστικών παραγωγών που δραστηριοποιείται στην Ελλάδα.',
    'hero.body2':    'Συνδυάζουμε εμπειρία, εξειδίκευση και βαθιά γνώση της διαχείρισης χώρων γυρίσματος, βάσεων, βοηθητικών χώρων και προσωρινών υποδομών, με προηγμένες λύσεις εξοπλισμού κορυφαίας ποιότητας, διασφαλίζοντας ότι κάθε παραγωγή εκτελείται με ακρίβεια, αποτελεσματικότητα και πλήρη επιχειρησιακό έλεγχο.',
    'hero.body3':    'Μας εμπιστεύονται επαγγελματίες Παραγωγής και Διαχείρισης Βάσεων και Τοποθεσιών, σε ολόκληρη τη χώρα, προσφέροντας ευέλικτες, βιώσιμες και οικονομικά αποδοτικές υπηρεσίες και λύσεις, από την προετοιμασία έως την ολοκλήρωση της κάθε παραγωγής.',
    'hero.cta1':     'Οι Υπηρεσίες μας',
    'hero.cta2':     'Επικοινωνήστε',

    // Trust (homepage)
    'trust.statement': 'Η επιλογή των επαγγελματιών του κλάδου.',
    'trust.line1':     'Δεν διαχωρίζουμε τις υπηρεσίες - τις ενοποιούμε. Κάθε τμήμα, κάθε απόφαση, κάθε εξοπλισμός λειτουργεί ως μέρος μιας συντονισμένης δομής.',
    'trust.line2':     'Από τη βάση γυρίσματος έως την ολοκλήρωση, είμαστε το επιχειρησιακό επίπεδο που κρατά την παραγωγή σε κίνηση.',

    // Services (homepage preview)
    'services.label':    'Υπηρεσίες',
    'services.title':    'Υπηρεσίες υποστήριξης παραγωγής στην Ελλάδα.',
    'services.s1.title': 'Διαχείριση και Εγκατάσταση Προσωρινών Υποδομών Υποστήριξης Παραγωγής & Διαχείρισης Στόλου Τεχνικών Οχημάτων',
    'services.s1.desc':  'Επιχειρησιακός συντονισμός και πλήρης οργάνωση βάσεων παραγωγής, διασφαλίζοντας αποδοτικά και πλήρως εξοπλισμένα περιβάλλοντα εργασίας από την προετοιμασία έως την ολοκλήρωση.',
    'services.s2.title': 'Διαχείριση Παραγωγής & Τοποθεσιών',
    'services.s2.desc':  'Συντονισμός τοποθεσιών, ομάδων και υποδομών για σύνθετες παραγωγές, εξασφαλίζοντας απρόσκοπτη επιχειρησιακή ροή σε όλα τα στάδια της παραγωγής.',
    'services.s3.title': 'Διαχείριση Κυκλοφορίας',
    'services.s3.desc':  'Συντονισμός πρόσβασης, κυκλοφορίας και ασφάλειας για συνεργεία, ηθοποιούς και οχήματα παραγωγής.',
    'services.s4.title': 'Πράσινα Γυρίσματα & Διαχείριση Βιωσιμότητας',
    'services.s4.desc':  'Πρακτικές λύσεις βιωσιμότητας, εναρμονισμένες με τις κατευθυντήριες γραμμές του ALBERT και της Ευρωπαϊκής Ένωσης, υποστηρίζοντας αποδοτικές και οικονομικά βιώσιμες πράσινες παραγωγές.',
    'services.s5.title': 'Εξατομικευμένες Λύσεις',
    'services.s5.desc':  'Ευέλικτες υπηρεσίες υποστήριξης παραγωγής και δράσεων, μέσω ενός αξιόπιστου δικτύου συνεργατών, προσαρμοσμένες στις ανάγκες κάθε έργου.',
    'services.viewAll':  'Όλες οι Υπηρεσίες',

    // Rentals (homepage preview)
    'rentals.label':    'Ενοικίαση Εξοπλισμού Παραγωγής',
    'rentals.title':    'Κορυφαίας ποιότητας εξοπλισμός υποστήριξης,\nγια κάθε στάδιο της παραγωγής - από το στήσιμο της βάσης παραγωγής έως την εκτέλεση.',
    'rentals.r1.title': 'Βάση Γυρίσματος',
    'rentals.r1.desc':  'Υποδομές για την υποστήριξη, άνεση και προετοιμασία του συνεργείου.',
    'rentals.r2.title': 'Λειτουργίες Χώρου Γυρίσματος',
    'rentals.r2.desc':  'Πρακτικός εξοπλισμός για μετακινήσεις, ασφάλεια και καθημερινή λειτουργική υποστήριξη.',
    'rentals.r3.title': 'Τεχνικός Εξοπλισμός & Παροχή Ρεύματος',
    'rentals.r3.desc':  'Αξιόπιστα ενεργειακά συστήματα και τεχνικός εξοπλισμός που διασφαλίζουν την αδιάλειπτη λειτουργία της παραγωγής.',
    'rentals.r4.title': 'Οχήματα Παραγωγής',
    'rentals.r4.desc':  'Οχήματα ειδικά διαμορφωμένα για μεταφορά εξοπλισμού παραγωγής.',
    'rentals.viewAll':  'Όλος ο Εξοπλισμός',

    // About (homepage snapshot)
    'about.label':  'Σχετικά με εμάς',
    'about.title':  'Εργαζόμαστε εκεί\nπου γίνεται η παραγωγή.',
    'about.body1':  'Είμαστε μια εταιρεία εξειδικευμένη στην υποστήριξη οπτικοακουστικών παραγωγών και κάθε είδους δράσεων, με έδρα την Αθήνα. Δημιουργηθήκαμε από επαγγελματίες του κλάδου, ανθρώπους που έχουν περάσει χρόνια δουλεύοντας σε διεθνή και εγχώρια κινηματογραφικά και τηλεοπτικά γυρίσματα, κάτω από πραγματικές συνθήκες παραγωγής.',
    'about.body2':  'Εστιάζουμε στην ενοποίηση υπηρεσιών, διαχειριζόμενές τες ως ένα ενιαίο και συντονισμένο σύστημα: Διαχείριση βάσεων, προσωρινών υποδομών και τοποθεσιών γυρίσματος, ενοικίαση εξοπλισμού, επιχειρησιακή οργάνωση. Στόχος μας είναι να διασφαλίζουμε ότι κάθε παραγωγή υποστηρίζεται με σαφήνεια, ακρίβεια και αξιοπιστία, ώστε κάθε απόφαση στο πεδίο να μεταφράζεται σε μια πιο ομαλή και ελεγχόμενη διαδικασία παραγωγής.',
    'about.cta':    'Σχετικά με εμάς',

    // Clients
    'clients.label': 'Παραγωγές & Συνεργάτες',

    // CTA
    'cta.label': 'Επικοινωνήστε μαζί μας',
    'cta.title': 'Ακρίβεια. Εμπειρία. Εκτέλεση.',
    'cta.sub':   'Για διεθνείς και εγχώριες παραγωγές που αναζητούν αξιόπιστες υπηρεσίες διαχείρισης βάσης, υποστήριξη μέσω ενοικίασης υψηλής ποιότητας εξοπλισμού και επιχειρησιακή οργάνωση στο πεδίο, παρέχουμε τη δομή που "τρέχει" την παραγωγή.',
    'cta.body':  'Από τη βάση γυρίσματος έως την εκτέλεση, διασφαλίζουμε ότι κάθε παραγωγή διαθέτει την υποστήριξη, τον εξοπλισμό και τον έλεγχο που απαιτείται για την επιτυχημένη ολοκλήρωσή της.',
    'cta.btn':   'Επικοινωνήστε',

    // Footer
    'footer.tagline':       'Υποστήριξη Παραγωγής στην Ελλάδα.\nΑπό την προετοιμασία έως την ολοκλήρωση.',
    'footer.servicesTitle': 'Υπηρεσίες',
    'footer.rentalsTitle':  'Ενοικιάσεις',
    'footer.companyTitle':  'Εταιρεία',
    'footer.s1':  'Διαχείριση & Εγκατάσταση Βάσης',
    'footer.s2':  'Διαχείριση Παραγωγής & Τοποθεσιών',
    'footer.s3':  'Διαχείριση Χώρου Γυρίσματος & Τοποθεσιών',
    'footer.s4':  'Διαχείριση Κυκλοφορίας',
    'footer.s5':  'Πράσινα Γυρίσματα & Βιωσιμότητα',
    'footer.s6':  'Ασφάλεια & Διαχείριση Κινδύνου',
    'footer.s7':  'Διοργάνωση Εκδηλώσεων',
    'footer.s8':  'Εξατομικευμένες Λύσεις',
    'footer.r1':  'Βάση Γυρίσματος',
    'footer.r2':  'Λειτουργίες Χώρου Γυρίσματος',
    'footer.r3':  'Τεχνικός Εξοπλισμός & Παροχή Ρεύματος',
    'footer.r4':  'Οχήματα Παραγωγής',
    'footer.about':    'Σχετικά με εμάς',
    'footer.team':     'Η Ομάδα',
    'footer.contact':  'Επικοινωνία',
    'footer.location': 'Αθήνα, Ελλάδα',
    'footer.copy':     '© 2026 The Locbusters. Με επιφύλαξη παντός δικαιώματος.',

    // About page
    'aboutPage.title':    'Σχετικά με εμάς',
    'aboutPage.subtitle': 'Δημιουργηθήκαμε από μέσα στην παραγωγή.\nΣχεδιασμένο για εκτέλεση.\nΑξιόπιστο από τα συνεργεία.',
    'aboutPage.heroBody': 'Είμαστε μια εταιρεία εξειδικευμένη στην υποστήριξη οπτικοακουστικών παραγωγών και κάθε είδους δράσεων, με έδρα την Αθήνα. Δημιουργηθήκαμε από επαγγελματίες του κλάδου, ανθρώπους που έχουν περάσει χρόνια δουλεύοντας σε διεθνή και εγχώρια κινηματογραφικά και τηλεοπτικά γυρίσματα, κάτω από πραγματικές συνθήκες παραγωγής.',
    'aboutPage.abtLabel': 'Σχετικά',
    'aboutPage.abtHeading':'Σχετικά με εμάς',
    'aboutPage.abt.p1':   'Είμαστε μια εταιρεία εξειδικευμένη στις υπηρεσίες υποστήριξης οπτικοακουστικών παραγωγών και κάθε είδους δράσεων.',
    'aboutPage.abt.p2':   'Δημιουργηθήκαμε από επαγγελματίες του κλάδου, ανθρώπους που έχουν περάσει χρόνια δουλεύοντας σε διεθνή και εγχώρια κινηματογραφικά και τηλεοπτικά γυρίσματα, κάτω από πραγματικές συνθήκες παραγωγής. Εστιάζουμε στην ενοποίηση υπηρεσιών διαχειρίζοντάς τες ως ένα ενιαίο και συντονισμένο σύστημα: Διαχείριση βάσεων, προσωρινών υποδομών και τοποθεσιών γυρίσματος, ενοικίαση εξοπλισμού, επιχειρησιακή οργάνωση.',
    'aboutPage.abt.p3':   '',
    'aboutPage.abt.p4':   '',
    'aboutPage.abt.p5':   'Στόχος μας είναι να διασφαλίζουμε ότι κάθε παραγωγή υποστηρίζεται με σαφήνεια, ακρίβεια και αξιοπιστία, ώστε κάθε απόφαση στο πεδίο να μεταφράζεται σε μια πιο ομαλή και ελεγχόμενη διαδικασία παραγωγής.',
    'aboutPage.storyLabel': 'Η Ιστορία μας',
    'aboutPage.storyHeading':'Πώς φτάσαμε εδώ.',
    'aboutPage.story.p1': 'Η The Locbusters ιδρύθηκε το 2024 Βασισμένη σε χρόνια κοινής επαγγελματικής πορείας σε διεθνείς και εγχώριες παραγωγές στην Ελλάδα, οι ιδρυτές της έχουν συνεργαστεί επανειλημμένα - τόσο ως ομάδα όσο και σε διαφορετικές συνθέσεις - σε παραγωγές που κυμαίνονται από ανεξάρτητες ταινίες μεγάλου και μικρού μήκους έως μεγάλες παραγωγές διεθνών στούντιο. Αυτή η μακροχρόνια επαγγελματική σχέση προϋπήρχε της εταιρείας και διαμορφώθηκε μέσα από πραγματικές συνθήκες παραγωγής, όπου ο χρόνος είναι κρίσιμος και η πίεση, η πολυπλοκότητα και η ακρίβεια καθορίζουν κάθε απόφαση.',
    'aboutPage.story.p1b': '',
    'aboutPage.story.p2': 'Καθώς η Ελλάδα εξελίσσεται σε σημαντικό προορισμό για διεθνή γυρίσματα και οι εγχώριες παραγωγές γίνονται ολοένα και πιο απαιτητικές, η ανάγκη για ένα αξιόπιστο επιχειρησιακό επίπεδο υποστήριξης έχει καταστεί απαραίτητη. Οι Locbusters είναι αυτό το επίπεδο υποστήριξης κάθε παραγωγής. Αυτό που μας ενώνει είναι ο κοινός τρόπος εργασίας: η εμπιστοσύνη, ο σεβασμός, η ακρίβεια και μια κοινή αντίληψη για το τι οφείλει να προσφέρει η υποστήριξη παραγωγής στο πεδίο.',
    'aboutPage.story.p2b': '',
    'aboutPage.story.p3': 'Παράλληλα, κάθε μέλος της εταιρείας δραστηριοποιείται ανεξάρτητα στον οπτικοακουστικό χώρο, φέρνοντας εξειδικευμένη εμπειρία μέσα από την εμπειρία του στα τμήματα: Παραγωγής, Διαχείρισης χώρων γυρίσματος καθώς και Διαχείρισης και εγκατάστασης βάσεων και προσωρινών υποδομών υποστήριξης. Η εταιρεία αποτελεί φυσική προέκταση αυτού του δικτύου συνεργασίας, συνδυάζοντας όλες τις αναγκαίες για μια παραγωγή υπηρεσίες, σε μία ενιαία και συντονισμένη δομή.',
    'aboutPage.story.p4': 'Η φιλοσοφία μας είναι απλή: η παραγωγή λειτουργεί καλύτερα όταν η υποστήριξη είναι αόρατη, ακριβής και αξιόπιστη.',
    'aboutPage.story.p5': 'Η The Locbusters δεν δημιουργήθηκε τυχαία. Βασίζεται σε πραγματική εμπειρία και έχει διαμορφωθεί από τον τρόπο με τον οποίο εμείς τα μέλη της, εργαζόμαστε πάντα: με απόλυτη προσήλωση στην εκτέλεση και σεβασμό στον κάθε συνεργάτη.',
    'aboutPage.teamLabel': 'Η Ομάδα',
    'aboutPage.teamHeading': 'Πραγματική εμπειρία στον οπτικοακουστικό χώρο.\nΆμεση εκτέλεση.\nΑποδεδειγμένη αξιοπιστία.',
    'aboutPage.giorgos.name': 'Γιώργος Γεωργανάς',
    'aboutPage.giorgos.role': 'Unit Manager',
    'aboutPage.giorgos.bio1': 'Ο Γιώργος έχει πολυετή εμπειρία ως Unit Manager σε εγχώριες και διεθνείς παραγωγές στην Ελλάδα. Έχει συνεργαστεί με κορυφαία διεθνή στούντιο και εταιρείες παραγωγής, αναλαμβάνοντας αποτελεσματικά από την προετοιμασία έως την ολοκλήρωση, σύνθετες επιχειρησιακές λειτουργίες και μεγάλης κλίμακας γυρίσματα.',
    'aboutPage.giorgos.bio2': 'Η εξειδίκευσή του εστιάζει στον συντονισμό υψηλού επιπέδου υπηρεσιών διαχείρισης και εγκατάστασης βάσεων και στόλου τεχνικών οχημάτων, μέσα από την επιχειρησιακή οργάνωση και την επίλυση προβλημάτων στα πιο απαιτητικά περιβάλλοντα παραγωγής. Με βαθιά κατανόηση της επιχειρησιακής ροής και των αναγκών μιας παραγωγής, διασφαλίζει ότι εξοπλισμός, συνεργείο και τοποθεσίες, λειτουργούν ως ένα ενιαίο και αποδοτικό σύστημα.',
    'aboutPage.giorgos.bio3': 'Είναι ιδρυτικό μέλος του Σωματείου Εργαζομένων Κινηματογράφου, Τηλεόρασης, Οπτικοακουστικών Έργων στο Location & Unit Department (GSLUD).',
    'aboutPage.giorgos.bio4': 'Γνωστός για την αξιοπιστία, την αποτελεσματικότητα και την ακρίβειά του, αποτελεί έναν επαγγελματία που ανταποκρίνεται στις πιο απαιτητικές παραγωγές, με τα υψηλότερα πρότυπα ποιότητας.',
    'aboutPage.maria.name': 'Μάρια Ρεπούση',
    'aboutPage.maria.role': 'Ειδικός Παραγωγής',
    'aboutPage.maria.bio1': 'Η Μάρια είναι επαγγελματίας παραγωγής με περισσότερα από 10 χρόνια εμπειρίας. Έχει συνεργαστεί με ελληνικές και ξένες εταιρείες παραγωγής, καθώς και με διεθνή στούντιο, διαχειριζόμενη κάθε είδους παραγωγή από το στάδιο της ανάπτυξής της έως την τελική παράδοση.',
    'aboutPage.maria.bio2': 'Η εμπειρία της καλύπτει διάφορα στάδια της παραγωγής, όπως, τον προϋπολογισμό, τον προγραμματισμό και τη διαχείριση παραγωγής μεγάλης κλίμακας, με ιδιαίτερη ικανότητα στην πρόβλεψη κινδύνων, την επίβλεψη όλων των παραγωγικών διαδικασιών, την οικονομική διαχείριση και τον συντονισμό ομάδων και προσωπικού σε απαιτητικά περιβάλλοντα.',
    'aboutPage.maria.bio3': 'Τα τελευταία χρόνια έχει παρακολουθήσει εξειδικευμένα προγράμματα εκπαίδευσης και masterclasses για τη βιωσιμότητα στον οπτικοακουστικό κλάδο, με έμφαση στην ανάπτυξη και εφαρμογή περιβαλλοντικών στρατηγικών που μειώνουν το ανθρακικό αποτύπωμα, τα απόβλητα και την κατανάλωση πόρων στις παραγωγές.',
    'aboutPage.maria.bio4': 'Ζει και εργάζεται στην Αθήνα, σε διάφορες θέσεις της Παραγωγής, όπως Line Producer, Διευθύντρια Παραγωγής και Υπεύθυνη Οργάνωσης Χώρων Γυρίσματος.',
    'aboutPage.maria.bio5': 'Είναι επίσης ιδρυτικό μέλος και Ταμίας του Διοικητικού Συμβουλίου του Σωματείου Εργαζομένων Κινηματογράφου, Τηλεόρασης, Οπτικοακουστικών Έργων στο Location & Unit Department (GSLUD).',
    'aboutPage.giannis.name': 'Γιάννης Σωτηρόπουλος',
    'aboutPage.giannis.role': 'Υπεύθυνος Τοποθεσιών',
    'aboutPage.giannis.bio1': 'Ο Γιάννης είναι Υπεύθυνος εύρεσης και διαχείρισης χώρων γυρίσματος, με εμπειρία σε ελληνικές και διεθνείς κινηματογραφικές και τηλεοπτικές παραγωγές στην Ελλάδα. Από το 2018 έχει συμμετάσχει σε μεγάλες παραγωγές διεθνών στούντιο και πλατφορμών όπως το Netflix, η Amazon και η Disney.',
    'aboutPage.giannis.bio2': 'Η εξειδίκευσή του διασφαλίζει ακριβή διαχείριση τοποθεσιών, ομαλή επιχειρησιακή λειτουργία και πλήρη εναρμόνιση με τα διεθνή πρότυπα παραγωγής.',
    'aboutPage.giannis.bio3': 'Είναι Μέλος του Location Managers Guild International (LMGI) και ενεργό μέλος της Επιτροπής Ηνωμένου Βασιλείου, Ευρώπης και Αφρικής του LMGI. Παράλληλα, είναι ιδρυτικό μέλος και Αντιπρόεδρος του Σωματείου Εργαζομένων Κινηματογράφου, Τηλεόρασης, Οπτικοακουστικών Έργων στο Location & Unit Department (GSLUD).',
    'aboutPage.michalis.name': 'Μιχάλης Βραχλιώτης',
    'aboutPage.michalis.role': 'Ειδικός Παραγωγής & Τοποθεσιών',
    'aboutPage.michalis.bio1': 'Ο Μιχάλης είναι επαγγελματίας παραγωγής με περισσότερα από 10 χρόνια εμπειρίας στα Τμήματα Παραγωγής και Διαχείρισης & Εύρεσης Τοποθεσιών σε διεθνείς και εγχώριες οπτικοακουστικές παραγωγές.',
    'aboutPage.michalis.bio2': 'Έχει συμμετάσχει σε ταινίες μεγάλου & μικρού μήκους, τηλεοπτικές σειρές, ανεξάρτητες παραγωγές και διεθνείς φωτογραφίσεις και παραγωγές στούντιο. Η διπλή εμπειρία του στους τομείς της παραγωγής και των τοποθεσιών, του επιτρέπει να κινείται με άνεση ανάμεσα στα τμήματα, έχοντας βαθιά κατανόηση της δουλειάς. Υποστηρίζοντας σύνθετες παραγωγές σε απαιτητικά και διαρκώς μεταβαλλόμενα περιβάλλοντα.',
    'aboutPage.michalis.bio3': 'Προσφέρει προσαρμοστικότητα, επιχειρησιακή σταθερότητα και αξία σε κάθε παραγωγή που συμμετέχει.',
    'aboutPage.michalis.bio4': 'Είναι επίσης ιδρυτικό μέλος του Σωματείου Εργαζομένων Κινηματογράφου, Τηλεόρασης, Οπτικοακουστικών Έργων στο Location & Unit Department (GSLUD).',

    // Services page
    'servicesPage.title':    'Υπηρεσίες',
    'servicesPage.subtitle': 'Ολοκληρωμένες υπηρεσίες υποστήριξης παραγωγών για διεθνή και εγχώρια γυρίσματα στην Ελλάδα.',
    'servicesPage.indexLabel': 'Σε αυτή τη σελίδα',
    'servicesPage.s1.title': 'Διαχείριση και Εγκατάσταση Προσωρινών Υποδομών Υποστήριξης Παραγωγής & Διαχείρισης Στόλου Τεχνικών Οχημάτων',
    'servicesPage.s1.desc':  'Επιχειρησιακός συντονισμός και πλήρης οργάνωση βάσεων παραγωγής, διασφαλίζοντας αποδοτικά και πλήρως εξοπλισμένα περιβάλλοντα εργασίας από την προετοιμασία έως την ολοκλήρωση.',
    'servicesPage.s2.title': 'Διαχείριση Παραγωγής & Τοποθεσιών',
    'servicesPage.s2.desc':  'Συντονισμός τοποθεσιών, ομάδων και υποδομών για σύνθετες παραγωγές, εξασφαλίζοντας απρόσκοπτη επιχειρησιακή ροή σε όλα τα στάδια της παραγωγής.',
    'servicesPage.s3.title': 'Διαχείριση Χώρου Γυρίσματος & Τοποθεσιών',
    'servicesPage.s3.desc':  'Υποστήριξη λειτουργιών στο set και στις υπόλοιπες τοποθεσίες γυρισμάτων, εξασφαλίζοντας συνέχεια, αποτελεσματικότητα και άρτια εκτέλεση, σε συνεργασία με έμπειρες επαγγελματικές ομάδες.',
    'servicesPage.s4.title': 'Διαχείριση Κυκλοφορίας',
    'servicesPage.s4.desc':  'Συντονισμός πρόσβασης, κυκλοφορίας και ασφάλειας για συνεργεία, ηθοποιούς και οχήματα παραγωγής.',
    'servicesPage.s5.title': 'Πράσινα Γυρίσματα & Διαχείριση Βιωσιμότητας',
    'servicesPage.s5.desc':  'Πρακτικές λύσεις βιωσιμότητας, εναρμονισμένες με τις κατευθυντήριες γραμμές του ALBERT και της Ευρωπαϊκής Ένωσης, υποστηρίζοντας αποδοτικές και οικονομικά βιώσιμες πράσινες παραγωγές.',
    'servicesPage.s6.title': 'Ασφάλεια & Διαχείριση Κινδύνου',
    'servicesPage.s6.desc':  'Αναγνωρίζουμε, αξιολογούμε και διαχειριζόμαστε την ύπαρξη κινδύνου σε τοποθεσίες και χώρους γυρισμάτων. Μέσω λεπτομερών αξιολογήσεων και πρακτικών λύσεων, διασφαλίζουμε ότι οι παραγωγές λειτουργούν με ασφάλεια πριν και κατά τη διάρκεια κάθε γυρίσματος.',
    'servicesPage.s7.title': 'Διοργάνωση Εκδηλώσεων',
    'servicesPage.s7.desc':  'Ολοκληρωμένη υλοποίηση εκδηλώσεων μέσω ενός επιλεγμένου δικτύου εξειδικευμένων συνεργατών. Ενδεικτικά οι υπηρεσίες περιλαμβάνουν: catering, styling, logistics, μεταφορές, VIP οδηγούς, εύρεση τοποθεσιών και εξασφάλιση αδειών για μοναδικούς χώρους.',
    'servicesPage.s8.title': 'Εξατομικευμένες Λύσεις',
    'servicesPage.s8.desc':  'Ευέλικτες υπηρεσίες υποστήριξης παραγωγής και δράσεων, μέσω ενός αξιόπιστου δικτύου συνεργατών, προσαρμοσμένες στις ανάγκες κάθε έργου.',
    'servicesPage.enquire':  'Επικοινωνήστε για αυτή την υπηρεσία',

    // Rentals page
    'rentalsPage.title':    'Ενοικίαση\nΕξοπλισμού\nΠαραγωγής',
    'rentalsPage.subtitle': 'Κορυφαίας ποιότητας εξοπλισμός υποστήριξης, για κάθε στάδιο της παραγωγής - από το στήσιμο της βάσης παραγωγής έως την εκτέλεση.',
    'rentalsPage.indexLabel': 'Κατηγορίες Εξοπλισμού',
    'rentalsPage.r1.title': 'Βάση Γυρίσματος',
    'rentalsPage.r1.desc':  'Υποδομές για την υποστήριξη, άνεση και προετοιμασία του συνεργείου.\nΣτέγαστρα, καθίσματα, χώροι εστίασης, σταθμοί μακιγιάζ και βεστιαρίου, πλήρως εξοπλισμένοι για τις ανάγκες κάθε παραγωγής.',
    'rentalsPage.r2.title': 'Λειτουργίες Χώρου Γυρίσματος',
    'rentalsPage.r2.desc':  'Πρακτικός εξοπλισμός για μετακινήσεις, ασφάλεια και καθημερινή λειτουργική υποστήριξη.',
    'rentalsPage.r3.title': 'Τεχνικός Εξοπλισμός & Παροχή Ρεύματος',
    'rentalsPage.r3.desc':  'Αξιόπιστα ενεργειακά συστήματα και τεχνικός εξοπλισμός που διασφαλίζουν την αδιάλειπτη λειτουργία της παραγωγής.',
    'rentalsPage.r4.title': 'Οχήματα Παραγωγής',
    'rentalsPage.r4.desc':  'Οχήματα ειδικά διαμορφωμένα για μεταφορά εξοπλισμού παραγωγής.',
    'rentalsPage.cta1':     'Επικοινωνήστε',
    'rentalsPage.cta2':     'Κατηγορίες Εξοπλισμού',
    'rentalsPage.heroBody': 'Αξιόπιστος, έτοιμος για παραγωγή εξοπλισμός για διεθνή και εγχώρια γυρίσματα σε όλη την Ελλάδα. Ό,τι χρειάζεστε στο set - διαμορφωμένο, παραδομένο και υποστηριγμένο.',
    'rentalsPage.pos.statement': 'Η υποδομή που κρατά την παραγωγή στην ώρα της και στο set.',
    'rentalsPage.pos.line1':     'Παρέχουμε τον απαραίτητο εξοπλισμό και τα εργαλεία που διατηρούν την παραγωγή σε ομαλή λειτουργία στο set και στις τοποθεσίες. Κάθε είδος συντηρείται, είναι έτοιμο για παραγωγή και διατίθεται με άμεση επιχειρησιακή υποστήριξη.',
    'rentalsPage.pos.line2':     'Δεν στέλνουμε απλώς ένα κιτ. Διαμορφώνουμε και αναπτύσσουμε ακριβώς ό,τι χρειάζεστε, όταν το χρειάζεστε.',
    'rentalsPage.how.label':  'Διαδικασία',
    'rentalsPage.how.title':  'Πώς Λειτουργεί',
    'rentalsPage.how.s1.title': 'Καθορίστε τις Ανάγκες σας',
    'rentalsPage.how.s1.desc':  'Πείτε μας τις ημερομηνίες γυρίσματος, την τοποθεσία, το μέγεθος του συνεργείου και τι χρειάζεστε στο set. Όσο περισσότερο πλαίσιο, τόσο καλύτερα μπορούμε να διαμορφώσουμε την πρόταση.',
    'rentalsPage.how.s2.title': 'Προετοιμάζουμε & Διαμορφώνουμε',
    'rentalsPage.how.s2.desc':  'Προετοιμάζουμε, ελέγχουμε και διαμορφώνουμε κάθε είδος σύμφωνα με πρότυπα παραγωγής - χωρίς αυτοσχεδιασμό την ημέρα του γυρίσματος.',
    'rentalsPage.how.s3.title': 'Παράδοση & Στήσιμο',
    'rentalsPage.how.s3.desc':  'Ο εξοπλισμός παραδίδεται και στήνεται στην τοποθεσία σας. Η βάση γυρίσματος είναι έτοιμη πριν φτάσει το συνεργείο.',
    'rentalsPage.how.s4.title': 'Υποστήριξη στο Set',
    'rentalsPage.how.s4.desc':  'Παραμένουμε διαθέσιμοι καθ\' όλη τη διάρκεια του γυρίσματος. Αν κάτι αλλάξει, προσαρμοζόμαστε. Η παραγωγή δεν σταματά - ούτε εμείς.',
    'rentalsPage.index.i1': '01 Βάση Γυρίσματος',
    'rentalsPage.index.i2': '02 Λειτουργίες Χώρου Γυρίσματος',
    'rentalsPage.index.i3': '03 Τεχνικός Εξοπλισμός & Ρεύμα',
    'rentalsPage.index.i4': '04 Οχήματα Παραγωγής',
    'rentalsPage.placeholder.power': 'Ρεύμα & Τεχνικός Εξοπλισμός',
    'rentalsPage.r1.g1.title': 'Στέγαστρα & Κλιματισμός',
    'rentalsPage.r1.g1.i1': 'Σκηνές Pop-up',
    'rentalsPage.r1.g1.i2': 'Υδρορροές',
    'rentalsPage.r1.g1.i3': 'Σάκοι άμμου',
    'rentalsPage.r1.g1.i4': 'Σιδερένια βαρίδια',
    'rentalsPage.r1.g1.i5': 'Ομπρέλες',
    'rentalsPage.r1.g1.i6': 'Θερμαντικά σώματα',
    'rentalsPage.r1.g1.i7': 'Μονάδες κλιματισμού',
    'rentalsPage.r1.g2.title': 'Καθίσματα & Εστίαση',
    'rentalsPage.r1.g2.i1': 'Πτυσσόμενες καρέκλες',
    'rentalsPage.r1.g2.i2': 'Καρέκλες σκηνοθέτη',
    'rentalsPage.r1.g2.i3': 'Σκαμπό',
    'rentalsPage.r1.g2.i4': 'Πτυσσόμενα τραπέζια',
    'rentalsPage.r1.g2.i5': 'Υφάσματα κάλυψης τραπεζιών',
    'rentalsPage.r1.g3.title': 'Μακιγιάζ & Βεστιάριο',
    'rentalsPage.r1.g3.i1': 'Καθρέφτες μακιγιάζ',
    'rentalsPage.r1.g3.i2': 'Ολόσωμοι καθρέφτες',
    'rentalsPage.r1.g3.i3': 'Κρεμάστρες ρούχων',
    'rentalsPage.r1.g3.i4': 'Σετ σιδερώματος',
    'rentalsPage.r1.g3.i5': 'Ατμοκαθαριστές ρούχων',
    'rentalsPage.r1.g3.i6': 'Πετσέτες',
    'rentalsPage.r1.g3.i7': 'Κουβέρτες',
    'rentalsPage.r1.g3.i8': 'Καρέκλες μακιγιάζ',
    'rentalsPage.r2.g1.title': 'Μετακινήσεις & Ροή Εργασίας',
    'rentalsPage.r2.g1.i1': 'Σκάλες',
    'rentalsPage.r2.g1.i2': 'Τρόλεϊ',
    'rentalsPage.r2.g1.i3': 'Αναδιπλούμενα καρότσια',
    'rentalsPage.r2.g1.i4': 'Καρότσια μεταφοράς',
    'rentalsPage.r2.g1.i5': 'Σφιγκτήρες',
    'rentalsPage.r2.g1.i6': 'Εκτυπωτές',
    'rentalsPage.r2.g2.title': 'Ασφάλεια & Πρόσβαση',
    'rentalsPage.r2.g2.i1': 'Κώνοι κυκλοφορίας',
    'rentalsPage.r2.g2.i2': 'Μπαριέρες',
    'rentalsPage.r2.g2.i3': 'Ανακλαστικά γιλέκα',
    'rentalsPage.r2.g2.i4': 'Σημαίες προειδοποίησης',
    'rentalsPage.r2.g2.i5': 'Δίχτυα παραλλαγής',
    'rentalsPage.r2.g3.title': 'Απαραίτητα στο Set',
    'rentalsPage.r2.g3.i1': 'Μεγάφωνα',
    'rentalsPage.r2.g3.i2': 'Φορητά ψυγεία',
    'rentalsPage.r2.g3.i3': 'Εξοπλισμός καθαρισμού',
    'rentalsPage.r2.g3.i4': 'Εργαλειοθήκες',
    'rentalsPage.r2.g3.i5': 'Πυροσβεστήρες',
    'rentalsPage.r2.g3.i6': 'Μαύρα υφάσματα συσκότισης',
    'rentalsPage.r3.g1.title': 'Παροχή Ρεύματος',
    'rentalsPage.r3.g1.i1': 'Φορητές γεννήτριες',
    'rentalsPage.r3.g1.i2': 'Συστήματα EcoFlow και ηλιακά πάνελ',
    'rentalsPage.r3.g1.i3': 'Πολύπριζα και καλώδια επέκτασης',
    'rentalsPage.r3.g2.title': 'Φωτισμός & Κλιματισμός',
    'rentalsPage.r3.g2.i1': 'LED φώτα εργασίας',
    'rentalsPage.r3.g2.i2': 'LED ταινίες φωτισμού',
    'rentalsPage.r3.g2.i3': 'Ανεμιστήρες',
    'rentalsPage.r3.g2.i4': 'Φυσητήρες',
    'rentalsPage.r3.g2.i5': 'Αεροσυμπιεστές',
    'rentalsPage.r3.g2.i6': 'Φορητές θερμάστρες',
    'rentalsPage.r3.g2.i7': 'Φορητές θερμάστρες υγραερίου',
    'rentalsPage.r3.g2.i8': 'Αναδιπλούμενοι κάδοι απορριμμάτων',
    'servicesPage.heroBody': 'Κάθε υπηρεσία που προσφέρουμε σχεδιάζεται να λειτουργεί ως μέρος ενός ενιαίου, συντονισμένου συστήματος - όχι ως μενού ξεχωριστών επιλογών. Η ακρίβεια, η ενοποίηση και η εκτέλεση είναι ενσωματωμένες στον τρόπο που εργαζόμαστε.',
    'servicesPage.index.i1': '01 Διαχείριση Βάσης',
    'servicesPage.index.i2': '02 Διαχείριση Τοποθεσιών',
    'servicesPage.index.i3': '03 Χώρος & Τοποθεσίες',
    'servicesPage.index.i4': '04 Κυκλοφορία',
    'servicesPage.index.i5': '05 Πράσινα Γυρίσματα',
    'servicesPage.index.i6': '06 Ασφάλεια & Κίνδυνος',
    'servicesPage.index.i7': '07 Εκδηλώσεις',
    'servicesPage.index.i8': '08 Εξατομικευμένες Λύσεις',
    'servicesPage.pos.statement': 'Σχεδιασμένο για εταιρείες παραγωγής.\nΥλοποιημένο για εκτέλεση.',
    'servicesPage.pos.line1':     'Δεν διαχωρίζουμε τις υπηρεσίες - τις ενοποιούμε. Κάθε τμήμα, κάθε απόφαση, κάθε εξοπλισμός λειτουργεί ως μέρος μιας συντονισμένης δομής.',
    'servicesPage.pos.line2':     'Από τη βάση γυρίσματος έως την ολοκλήρωση, είμαστε το επιχειρησιακό επίπεδο που κρατά την παραγωγή σε κίνηση.',
    'servicesPage.how.label':  'Πώς Εργαζόμαστε',
    'servicesPage.how.title':  'Η δομή πίσω από\nκάθε επιτυχημένο γύρισμα.',
    'servicesPage.how.p1.title': 'Ενοποιημένο Σύστημα',
    'servicesPage.how.p1.desc':  'Κάθε υπηρεσία συνδέεται. Υποστήριξη βάσης, διαχείριση τοποθεσιών και εξοπλισμός λειτουργούν ως μία συντονισμένη δομή - όχι ως ξεχωριστά τμήματα.',
    'servicesPage.how.p2.title': 'Εμπειρία στο Set',
    'servicesPage.how.p2.desc':  'Χτισμένοι από μέσα στον κλάδο. Η ομάδα μας έχει εργαστεί σε διεθνείς και εγχώριες παραγωγές - κατανοούμε τι απαιτούν τα γυρίσματα.',
    'servicesPage.how.p3.title': 'Ακριβής Εκτέλεση',
    'servicesPage.how.p3.desc':  'Κάθε απόφαση στο πεδίο μεταφράζεται σε πιο ομαλή, πιο ελεγχόμενη διαδικασία παραγωγής. Η λεπτομέρεια δεν είναι προαιρετική - είναι το προϊόν.',
    'servicesPage.how.p4.title': 'Αξιόπιστη Παράδοση',
    'servicesPage.how.p4.desc':  'Η παραγωγή δεν σταματά. Ούτε εμείς. Υποστήριξη 24/7, όπου και όποτε χρειάζεται - πριν, κατά τη διάρκεια και μετά από κάθε γύρισμα.',

    // Contact page
    'contactPage.title':    'Επικοινωνήστε μαζί μας',
    'contactPage.subtitle': 'Πάντα διαθέσιμοι.\nΠάντα παρόντες.',
    'contactPage.body':     'Η παραγωγή δεν σταματά ποτέ. Ούτε κι εμείς.\nΥποστήριξη 24/7, όπου και όποτε χρειαστεί.',
    'contactPage.formLabel':'Στείλτε μήνυμα',
    'contactPage.formTitle':'Πείτε μας για\nτο έργο σας.',
    'contactPage.formSub':  'Θα επικοινωνήσουμε μαζί σας σύντομα.',
    'contactPage.trust':    'Μας εμπιστεύονται ομάδες παραγωγής σε όλη την Ελλάδα',
    'contactPage.label.name':    'Όνομα',
    'contactPage.label.email':   'Email',
    'contactPage.label.company': 'Παραγωγή / Εταιρεία',
    'contactPage.label.optional':'(προαιρετικό)',
    'contactPage.label.message': 'Μήνυμα',
    'contactPage.placeholder.name':    'Το όνομά σας',
    'contactPage.placeholder.email':   'email@example.com',
    'contactPage.placeholder.company': 'Εταιρεία παραγωγής ή όνομα έργου',
    'contactPage.placeholder.message': 'Πείτε μας για τις ημερομηνίες γυρίσματος, την τοποθεσία και τις ανάγκες σας.',
    'contactPage.submit':   'Αποστολή Μηνύματος',
    'contactPage.sending':  'Αποστολή…',
    'contactPage.note':     'Συνήθως απαντάμε εντός λίγων ωρών.',
    'contactPage.success':  'Το μήνυμά σας ελήφθη. Θα επικοινωνήσουμε σύντομα μαζί σας.',
    'contactPage.error.name':       'Παρακαλούμε εισάγετε το όνομά σας.',
    'contactPage.error.email':      'Παρακαλούμε εισάγετε τη διεύθυνση email σας.',
    'contactPage.error.emailInvalid':'Παρακαλούμε εισάγετε έγκυρη διεύθυνση email.',
    'contactPage.error.message':    'Παρακαλούμε εισάγετε το μήνυμά σας.',
    'contactPage.info.direct':      'Άμεση Επικοινωνία',
    'contactPage.info.directNote':  'Η άμεση επικοινωνία προτιμάται πάντα για επείγουσες ανάγκες παραγωγής.',
    'contactPage.info.location':    'Τοποθεσία',
    'contactPage.info.locationVal': 'Αθήνα, Ελλάδα',
    'contactPage.info.locationText':'Δραστηριοποιούμαστε σε όλη την Ελλάδα.',
    'contactPage.info.follow':      'Ακολουθήστε μας',
  }
};

/* Keys with official Greek copy in the client PDF (THE LOCBUSTERS SITE MAP GR_ENG.pdf) */
const PDF_GR_KEYS = new Set([
  'nav.services', 'nav.rentals', 'nav.about', 'nav.contact',
  'hero.eyebrow', 'hero.cta1', 'hero.cta2',
  'hero.line1', 'hero.line3', 'hero.subtitle', 'hero.body1', 'hero.body2', 'hero.body3',
  'trust.statement',
  'services.label', 'services.title',
  'services.s1.title', 'services.s1.desc',
  'services.s2.title', 'services.s2.desc',
  'services.s3.title', 'services.s3.desc',
  'services.s4.title', 'services.s4.desc',
  'services.s5.title', 'services.s5.desc',
  'services.viewAll',
  'rentals.label', 'rentals.title',
  'rentals.r1.title', 'rentals.r1.desc',
  'rentals.r2.title', 'rentals.r2.desc',
  'rentals.r3.title', 'rentals.r3.desc',
  'rentals.r4.title', 'rentals.r4.desc',
  'cta.label', 'cta.title', 'cta.sub', 'cta.body', 'cta.btn',
  'footer.servicesTitle', 'footer.rentalsTitle',
  'footer.s1', 'footer.s2', 'footer.s3', 'footer.s4', 'footer.s5', 'footer.s6', 'footer.s7', 'footer.s8',
  'footer.r1', 'footer.r2', 'footer.r3', 'footer.r4',
  'footer.about', 'footer.team',
  'aboutPage.title', 'aboutPage.abtHeading',
  'aboutPage.abt.p1', 'aboutPage.abt.p2', 'aboutPage.abt.p3', 'aboutPage.abt.p4', 'aboutPage.abt.p5',
  'aboutPage.storyLabel',
  'aboutPage.story.p1', 'aboutPage.story.p1b', 'aboutPage.story.p2', 'aboutPage.story.p2b', 'aboutPage.story.p3', 'aboutPage.story.p4', 'aboutPage.story.p5',
  'aboutPage.teamLabel', 'aboutPage.teamHeading',
  'aboutPage.giorgos.name', 'aboutPage.giorgos.bio1', 'aboutPage.giorgos.bio2', 'aboutPage.giorgos.bio3', 'aboutPage.giorgos.bio4',
  'aboutPage.maria.name', 'aboutPage.maria.bio1', 'aboutPage.maria.bio2', 'aboutPage.maria.bio3', 'aboutPage.maria.bio4', 'aboutPage.maria.bio5',
  'aboutPage.giannis.name', 'aboutPage.giannis.bio1', 'aboutPage.giannis.bio2', 'aboutPage.giannis.bio3',
  'aboutPage.michalis.name', 'aboutPage.michalis.bio1', 'aboutPage.michalis.bio2', 'aboutPage.michalis.bio3', 'aboutPage.michalis.bio4',
  'servicesPage.title', 'servicesPage.subtitle',
  'servicesPage.s1.title', 'servicesPage.s1.desc',
  'servicesPage.s2.title', 'servicesPage.s2.desc',
  'servicesPage.s3.title', 'servicesPage.s3.desc',
  'servicesPage.s4.title', 'servicesPage.s4.desc',
  'servicesPage.s5.title', 'servicesPage.s5.desc',
  'servicesPage.s6.title', 'servicesPage.s6.desc',
  'servicesPage.s7.title', 'servicesPage.s7.desc',
  'servicesPage.s8.title', 'servicesPage.s8.desc',
  'rentalsPage.title', 'rentalsPage.subtitle',
  'rentalsPage.r1.title', 'rentalsPage.r1.desc',
  'rentalsPage.r2.title', 'rentalsPage.r2.desc',
  'rentalsPage.r3.title', 'rentalsPage.r3.desc',
  'rentalsPage.r4.title', 'rentalsPage.r4.desc',
  'rentalsPage.r1.g1.title', 'rentalsPage.r1.g2.title', 'rentalsPage.r1.g3.title',
  'rentalsPage.r2.g1.title', 'rentalsPage.r2.g2.title', 'rentalsPage.r2.g3.title',
  'rentalsPage.r3.g1.title', 'rentalsPage.r3.g2.title',
  'rentalsPage.r1.g1.i1', 'rentalsPage.r1.g1.i2', 'rentalsPage.r1.g1.i3', 'rentalsPage.r1.g1.i4',
  'rentalsPage.r1.g1.i5', 'rentalsPage.r1.g1.i6', 'rentalsPage.r1.g1.i7',
  'rentalsPage.r1.g2.i1', 'rentalsPage.r1.g2.i2', 'rentalsPage.r1.g2.i3', 'rentalsPage.r1.g2.i4', 'rentalsPage.r1.g2.i5',
  'rentalsPage.r1.g3.i1', 'rentalsPage.r1.g3.i2', 'rentalsPage.r1.g3.i3', 'rentalsPage.r1.g3.i4',
  'rentalsPage.r1.g3.i5', 'rentalsPage.r1.g3.i6', 'rentalsPage.r1.g3.i7', 'rentalsPage.r1.g3.i8',
  'rentalsPage.r2.g1.i1', 'rentalsPage.r2.g1.i2', 'rentalsPage.r2.g1.i3', 'rentalsPage.r2.g1.i4',
  'rentalsPage.r2.g1.i5', 'rentalsPage.r2.g1.i6',
  'rentalsPage.r2.g2.i1', 'rentalsPage.r2.g2.i2', 'rentalsPage.r2.g2.i3', 'rentalsPage.r2.g2.i4', 'rentalsPage.r2.g2.i5',
  'rentalsPage.r2.g3.i1', 'rentalsPage.r2.g3.i2', 'rentalsPage.r2.g3.i3', 'rentalsPage.r2.g3.i4',
  'rentalsPage.r2.g3.i5', 'rentalsPage.r2.g3.i6',
  'rentalsPage.r3.g1.i1', 'rentalsPage.r3.g1.i2', 'rentalsPage.r3.g1.i3',
  'rentalsPage.r3.g2.i1', 'rentalsPage.r3.g2.i2', 'rentalsPage.r3.g2.i3', 'rentalsPage.r3.g2.i4',
  'rentalsPage.r3.g2.i5', 'rentalsPage.r3.g2.i6', 'rentalsPage.r3.g2.i7', 'rentalsPage.r3.g2.i8',
  'contactPage.title', 'contactPage.subtitle', 'contactPage.body',
  'contactPage.formLabel', 'contactPage.formTitle', 'contactPage.formSub',
  'contactPage.label.name', 'contactPage.label.email', 'contactPage.label.company',
  'contactPage.label.optional', 'contactPage.label.message',
  'contactPage.placeholder.name', 'contactPage.placeholder.email',
  'contactPage.placeholder.company', 'contactPage.placeholder.message',
  'contactPage.submit', 'contactPage.sending', 'contactPage.note',
  'contactPage.success',
  'contactPage.error.name', 'contactPage.error.email',
  'contactPage.error.emailInvalid', 'contactPage.error.message',
  'contactPage.info.direct', 'contactPage.info.directNote',
  'contactPage.info.location', 'contactPage.info.locationVal', 'contactPage.info.locationText',
  'contactPage.info.follow',
]);

/* Greek-only strings (no English in the PDF); shown in both language modes */
const GREEK_ONLY_KEYS = new Set([
  'contactPage.trust',
]);

function getTranslation(lang, key) {
  const en = TRANSLATIONS.en;
  const gr = TRANSLATIONS.gr;

  if (GREEK_ONLY_KEYS.has(key)) {
    return gr[key] ?? en[key] ?? '';
  }
  if (lang === 'gr' && PDF_GR_KEYS.has(key)) {
    return gr[key] ?? en[key] ?? '';
  }
  return en[key] ?? '';
}

/* ----------------------------------------------------------
   STATE
   ---------------------------------------------------------- */
function getStoredLang() {
  try {
    return localStorage.getItem(LANG_STORAGE_KEY) === 'gr' ? 'gr' : 'en';
  } catch {
    return 'en';
  }
}

function storeLang(lang) {
  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch {
    /* localStorage unavailable */
  }
}

let currentLang = getStoredLang();

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
  onScroll();
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

  mobileMenu.querySelectorAll('.mobile-menu__link').forEach(link => {
    link.addEventListener('click', () => toggle(false));
  });

  document.addEventListener('click', (e) => {
    if (
      mobileMenu.classList.contains('is-open') &&
      !mobileMenu.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      toggle(false);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
      toggle(false);
    }
  });
}

/* ----------------------------------------------------------
   SCROLL REVEAL
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
function setLangButtons(lang) {
  document.querySelectorAll('.lang-switch__btn').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-lang') === lang);
  });
}

function applyTranslations(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key   = el.getAttribute('data-i18n');
    const value = getTranslation(lang, key);

    if (value === '') {
      el.hidden = true;
      return;
    }
    el.hidden = false;

    if (value.includes('\n')) {
      el.innerHTML = value.replace(/\n/g, '<br>');
    } else {
      el.textContent = value;
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const value = getTranslation(lang, key);
    if (value) el.placeholder = value;
  });

  document.documentElement.lang = lang === 'gr' ? 'el' : 'en';
}

function setLanguage(lang) {
  if (!TRANSLATIONS[lang] || lang === currentLang) return;
  currentLang = lang;
  storeLang(lang);
  setLangButtons(lang);
  applyTranslations(lang);
}

function refreshLanguageFromStorage() {
  currentLang = getStoredLang();
  setLangButtons(currentLang);
  applyTranslations(currentLang);
}

let languageButtonsBound = false;

function bindLanguageButtons() {
  if (languageButtonsBound) return;
  languageButtonsBound = true;

  document.querySelectorAll('.lang-switch__btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const mobileMenu = document.getElementById('mobileMenu');
      const hamburger  = document.getElementById('hamburger');
      const isMobileMenuOpen = mobileMenu && mobileMenu.classList.contains('is-open');

      setLanguage(btn.getAttribute('data-lang'));

      if (isMobileMenuOpen) {
        mobileMenu.classList.remove('is-open');
        if (hamburger) {
          hamburger.classList.remove('is-open');
          hamburger.setAttribute('aria-expanded', 'false');
        }
        mobileMenu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });
}

/* ----------------------------------------------------------
   SMOOTH SCROLL
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
let appInitialized = false;

function init() {
  if (appInitialized) return;
  appInitialized = true;

  initHeader();
  initMobileMenu();
  initScrollReveal();
  initHeroAnimation();
  bindLanguageButtons();
  initSmoothScroll();
}

window.getLocbustersTranslation = function (key) {
  return getTranslation(currentLang, key);
};

window.getLocbustersLang = function () {
  return currentLang;
};

/* Re-sync after back/forward cache restore (in-memory state can be stale). */
window.addEventListener('pageshow', (event) => {
  if (event.persisted) {
    refreshLanguageFromStorage();
  }
});

/* Script is at end of <body> — apply stored language before DOMContentLoaded. */
refreshLanguageFromStorage();

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
