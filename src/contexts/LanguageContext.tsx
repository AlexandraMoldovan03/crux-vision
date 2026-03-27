import { createContext, useContext, useState, type ReactNode } from "react";

type Lang = "en" | "ro";

const translations = {
  en: {
    // Navbar
    about: "About",
    services: "Services",
    projects: "Projects",
    process: "Process",
    contact: "Contact",
    startProject: "Start a Project",

    // Hero
    heroLine1: "Build Digital Power.",
    heroLine2: "Shape Vision.",
    heroLine3: "Dominate Online.",
    heroDesc: "Crux Vision Media Network delivers high-performance digital platforms for sports brands, tournaments, businesses and modern entrepreneurs.",
    viewProjects: "View Projects",

    // About
    aboutLabel: "About Us",
    aboutTitle: "Who We",
    aboutTitleAccent: "Are",
    aboutDesc: "We are builders of digital ecosystems. From presentation websites to booking systems, from sports platforms to e-commerce engines — we design scalable, modern, high-performance digital experiences.",

    // Services
    servicesLabel: "What We Do",
    servicesTitle: "Full Service",
    servicesTitleAccent: "Agency",
    servicesDesc: "No matter where you're starting from — we've got you covered. Pick what you need, or let us put together a package.",
    agencyBadge: "Marketing · Web · Branding · PR · Events",
    svcCat1Title: "Marketing & Ads",
    svcCat1Desc: "We run paid campaigns on Google, Meta and TikTok to bring you real customers and sales — not just clicks.",
    svcCat2Title: "Social Media",
    svcCat2Desc: "We handle your Instagram, Facebook and TikTok so you don't have to — posting, growing your audience and engaging daily.",
    svcCat3Title: "Content & Video",
    svcCat3Desc: "Photos, videos, reels and ads — we create everything you need to look great and get noticed online.",
    svcCat4Title: "Logo & Design",
    svcCat4Desc: "Logo, business cards, flyers, menus — everything that makes your business look professional and trustworthy.",
    svcCat5Title: "Website & Apps",
    svcCat5Desc: "We build your website, online store or app from scratch — fast, good-looking and easy to use.",
    svcCat6Title: "PR & Events",
    svcCat6Desc: "We organise your events, write press releases and get your brand talked about in the right places.",
    // keep old keys for backwards compat (not displayed anymore)
    svc1Title: "Premium Presentation Websites",
    svc1Desc: "Modern, responsive, visually striking brand platforms.",
    svc2Title: "Booking & Reservation Systems",
    svc2Desc: "Custom booking systems for sports clubs, coaches, tournaments.",
    svc3Title: "Sports Tournament Platforms",
    svc3Desc: "Registration, brackets, rankings, player management.",
    svc4Title: "E-Commerce Solutions",
    svc4Desc: "Online stores with payment integration and advanced dashboards.",
    svc5Title: "Custom Digital Platforms",
    svc5Desc: "Tailor-made systems built for growth and performance.",
    svc6Title: "Performance & Optimization",
    svc6Desc: "Speed optimization, SEO structure, scalable backend architecture.",

    // Projects
    projectsLabel: "Portfolio",
    projectsTitle: "Featured",
    projectsTitleAccent: "Projects",
    proj1Title: "TriggerForm",
    proj1Desc: "AI-powered mobile health app for identifying trigger points and muscle pain. Features a full exercise library, pain body scanner, nutrition coach, and personalised recovery programs.",
    proj1Tag: "Mobile App",
    proj2Title: "SunTennis",
    proj2Desc: "Full-stack tennis tournament management platform with live elimination brackets, match scheduling, and real-time rankings — built for clubs and organisers.",
    proj2Tag: "Sports Platform",
    proj3Title: "DisTim",
    proj3Desc: "Cultural discovery platform for Timișoara — interactive map of literary and artistic landmarks, event listings, and QR-based city exploration for visitors in transit.",
    proj3Tag: "Cultural Platform",
    proj4Title: "Prof & Coach Anca",
    proj4Desc: "Personal brand website for educator and life coach Anca Farkas-Rusu — featuring course listings, session booking, an online shop, and a virtual tour experience.",
    proj4Tag: "Coaching Website",
    viewCaseStudy: "View Case Study",
    featuredBadge: "Featured",

    // Stats
    statsLabel: "Results",
    statsTitle: "Why",
    statsTitleAccent: "Crux Vision",
    stat1Label: "Projects Delivered",
    stat2Label: "Client Satisfaction",
    stat3Label: "High-Performance Architecture",
    stat4Label: "Clean Scalable Code",

    // Process
    processLabel: "How We Work",
    processTitle: "Our",
    processTitleAccent: "Process",
    step1Title: "Strategy & Vision",
    step1Desc: "Understanding your goals, audience, and competitive landscape.",
    step2Title: "Design & Architecture",
    step2Desc: "Crafting the visual identity and technical blueprint.",
    step3Title: "Development",
    step3Desc: "Building with modern technologies and clean code practices.",
    step4Title: "Optimization",
    step4Desc: "Performance tuning, testing, and quality assurance.",
    step5Title: "Launch & Scale",
    step5Desc: "Deployment, monitoring, and growth support.",

    // Clients
    clientsLabel: "Trusted By",
    clientsTitle: "Brands We've",
    clientsTitleAccent: "Worked With",
    clientsDesc: "From local businesses to well-known events — here are some of the brands that trusted us.",

    // Social Proof
    socialProofLabel: "Real Results",
    socialProofTitle: "Organic",
    socialProofTitleAccent: "Growth",
    socialProofDesc: "Real numbers, zero paid ads. This is what we deliver for our clients.",
    socialProofStat1: "Organic Instagram Views",
    socialProofStat2: "Views per post Facebook",
    socialProofStat3: "Reach Growth",
    socialProofStat4: "Likes per Reel",

    // CTA
    ctaTitle: "Ready to Build Something",
    ctaTitleAccent: "Powerful?",
    ctaButton: "Start Your Digital Evolution",

    // Footer / Contact
    footerDesc: "Building digital power for brands that refuse to be ordinary. High-performance platforms, designed to dominate.",
    contactLabel: "Contact",
    contactTitle: "Let's Build",
    contactTitleAccent: "Together",
    contactSubtitle: "Fill in the form and we'll get back to you within 24 hours. Not sure what you need? Choose the free consultation — that's what it's for.",
    formName: "Full Name",
    formCompany: "Company Name (optional)",
    formEmail: "Email Address",
    formPhone: "Phone Number",
    formServices: "How can we help you?",
    formServicesPlaceholder: "Select one or more services…",
    formServicesSelected: "services selected",
    formNote: "Additional notes (optional)",
    formNotePlaceholder: "Anything else you'd like us to know…",
    yourName: "Full Name",
    yourEmail: "Email Address",
    tellUs: "Tell us about your project",
    sendMessage: "Send Message",
    sending: "Sending…",
    successTitle: "Message sent!",
    successDesc: "Thanks for reaching out. We'll get back to you within 24 hours.",
    errorTitle: "Something went wrong.",
    errorDesc: "Please try again or email us directly.",
    sendAnother: "Send another message",
    contactPhone: "Phone",
    contactEmail: "Email",
    contactAvailability: "Mon – Fri, 9:00 – 18:00",
    // Service options for multi-select
    svcOpt0: "🎯 Free Consultation",
    svcOpt1: "📱 Social Media Management",
    svcOpt2: "📣 Marketing & Ads",
    svcOpt3: "🎬 Content & Video",
    svcOpt4: "🎨 Logo & Design",
    svcOpt5: "🌐 Website or App",
    svcOpt6: "📰 PR & Events",
    svcOpt7: "💰 Pricing & Packages",
    svcOpt8: "🤔 Not sure yet — let's talk",
    copyright: "© 2026 Crux Vision Media Network. All rights reserved.",
  },
  ro: {
    about: "Despre Noi",
    services: "Servicii",
    projects: "Proiecte",
    process: "Proces",
    contact: "Contact",
    startProject: "Începe un Proiect",

    heroLine1: "Construiește Putere Digitală.",
    heroLine2: "Modelează Viziunea.",
    heroLine3: "Domină Online.",
    heroDesc: "Crux Vision Media Network livrează platforme digitale de înaltă performanță pentru branduri, turnee, afaceri și antreprenori moderni.",
    viewProjects: "Vezi Proiectele",

    aboutLabel: "Despre Noi",
    aboutTitle: "Cine",
    aboutTitleAccent: "Suntem",
    aboutDesc: "Suntem constructori de ecosisteme digitale. De la site-uri de prezentare la sisteme de rezervări, de la platforme sportive la motoare de e-commerce — proiectăm experiențe digitale scalabile, moderne și de înaltă performanță.",

    servicesLabel: "Ce Oferim",
    servicesTitle: "Agenție",
    servicesTitleAccent: "Full Service",
    servicesDesc: "Indiferent de unde pornești — te acoperim noi. Alege ce ai nevoie sau lasă-ne să facem un pachet pentru tine.",
    agencyBadge: "Marketing · Web · Branding · PR · Evenimente",
    svcCat1Title: "Marketing & Reclame",
    svcCat1Desc: "Rulăm campanii plătite pe Google, Meta și TikTok ca să îți aducă clienți reali și vânzări — nu doar vizualizări.",
    svcCat2Title: "Social Media",
    svcCat2Desc: "Ne ocupăm de Instagram, Facebook și TikTok în locul tău — postăm, creștem audiența și interacționăm zilnic.",
    svcCat3Title: "Conținut & Video",
    svcCat3Desc: "Poze, videoclipuri, reels și reclame — creăm tot ce ai nevoie ca să arăți bine și să fii observat online.",
    svcCat4Title: "Logo & Design",
    svcCat4Desc: "Logo, cărți de vizită, pliante, meniuri — tot ce face afacerea ta să arate profesionist și de încredere.",
    svcCat5Title: "Site Web & Aplicații",
    svcCat5Desc: "Îți construim site-ul, magazinul online sau aplicația de la zero — rapid, arătos și ușor de folosit.",
    svcCat6Title: "PR & Evenimente",
    svcCat6Desc: "Organizăm evenimentele tale, scriem comunicate de presă și facem brandul tău să fie vorbit în locurile potrivite.",
    // keep old keys for backwards compat (not displayed anymore)
    svc1Title: "Website-uri Premium de Prezentare",
    svc1Desc: "Platforme moderne, dinamice, cu un aesthetic potrivit gusturilor tale.",
    svc2Title: "Sisteme de Booking & Rezervări",
    svc2Desc: "Sisteme personalizate de rezervări pentru cluburi sportive, antrenori, turnee.",
    svc3Title: "Platforme pentru Turnee Sportive",
    svc3Desc: "Înregistrare, grupe, clasamente, management jucători.",
    svc4Title: "Soluții E-Commerce",
    svc4Desc: "Magazine online cu integrare plăți și dashboard-uri avansate.",
    svc5Title: "Platforme Digitale Personalizate",
    svc5Desc: "Sisteme la comandă construite pentru creștere și performanță.",
    svc6Title: "Performanță & Optimizare",
    svc6Desc: "Optimizare viteză, structură SEO, arhitectură backend scalabilă.",

    projectsLabel: "Portofoliu",
    projectsTitle: "Proiecte",
    projectsTitleAccent: "Recente",
    proj1Title: "TriggerForm",
    proj1Desc: "Aplicație mobilă de sănătate bazată pe AI pentru identificarea trigger points și dureri musculare. Include o bibliotecă de exerciții, scanner corporal pentru durere, coach de nutriție și programe personalizate de recuperare.",
    proj1Tag: "Aplicație Mobilă",
    proj2Title: "SunTennis",
    proj2Desc: "Platformă full-stack de management turnee de tenis cu bracket-uri eliminatorii live, program meciuri și clasamente în timp real — construită pentru cluburi și organizatori.",
    proj2Tag: "Platformă Sportivă",
    proj3Title: "DisTim",
    proj3Desc: "Platformă de descoperire culturală pentru Timișoara — hartă interactivă a reperelor literare și artistice, listing-uri de evenimente și explorare a orașului prin QR pentru vizitatorii în tranzit.",
    proj3Tag: "Platformă Culturală",
    proj4Title: "Prof & Coach Anca",
    proj4Desc: "Website de brand personal pentru educatoarea și life coach-ul Anca Farkas-Rusu — cu listing-uri de cursuri, rezervare sesiuni, magazin online și tur virtual.",
    proj4Tag: "Website Coaching",
    viewCaseStudy: "Vezi Studiul de Caz",
    featuredBadge: "Recomandat",

    statsLabel: "Rezultate",
    statsTitle: "De Ce",
    statsTitleAccent: "Crux Vision",
    stat1Label: "Proiecte Livrate",
    stat2Label: "Satisfacția Clienților",
    stat3Label: "Arhitectură de Înaltă Performanță",
    stat4Label: "Cod Curat și Scalabil",

    processLabel: "Cum Lucrăm",
    processTitle: "Procesul",
    processTitleAccent: "Nostru",
    step1Title: "Strategie & Viziune",
    step1Desc: "Înțelegerea obiectivelor, audienței și peisajului competitiv.",
    step2Title: "Design & Arhitectură",
    step2Desc: "Crearea identității vizuale și a planului tehnic.",
    step3Title: "Dezvoltare",
    step3Desc: "Construire cu tehnologii moderne și practici de cod curat.",
    step4Title: "Optimizare",
    step4Desc: "Tunare performanță, testare și asigurarea calității.",
    step5Title: "Lansare & Scalare",
    step5Desc: "Deployment, monitorizare și suport pentru creștere.",

    // Clients
    clientsLabel: "Colaborări",
    clientsTitle: "Branduri cu Care",
    clientsTitleAccent: "Am Lucrat",
    clientsDesc: "De la afaceri locale la evenimente cunoscute — iată câteva dintre brandurile care ne-au acordat încrederea lor.",

    // Social Proof
    socialProofLabel: "Rezultate Reale",
    socialProofTitle: "Creștere",
    socialProofTitleAccent: "Organică",
    socialProofDesc: "Cifre reale, zero reclame plătite. Asta livrăm pentru clienții noștri.",
    socialProofStat1: "Vizualizări organice Instagram",
    socialProofStat2: "Views per post Facebook",
    socialProofStat3: "Creștere reach",
    socialProofStat4: "Like-uri per Reel",

    ctaTitle: "Gata să Construiești Ceva",
    ctaTitleAccent: "Puternic?",
    ctaButton: "Începe Evoluția Ta Digitală",

    // Footer / Contact
    footerDesc: "Construim putere digitală pentru branduri care refuză să fie obișnuite. Platforme de înaltă performanță, create pentru a domina.",
    contactLabel: "Contact",
    contactTitle: "Hai să Construim",
    contactTitleAccent: "Împreună",
    contactSubtitle: "Completează formularul și te contactăm în maxim 24 de ore. Nu știi exact ce ai nevoie? Alege consultanța gratuită — pentru asta există.",
    formName: "Nume / Prenume",
    formCompany: "Denumire Companie (opțional)",
    formEmail: "Adresă de Email",
    formPhone: "Număr de Telefon",
    formServices: "Cu ce te putem ajuta?",
    formServicesPlaceholder: "Selectează unul sau mai multe servicii…",
    formServicesSelected: "servicii selectate",
    formNote: "Mesaj adițional (opțional)",
    formNotePlaceholder: "Orice altceva ce vrei să știm…",
    yourName: "Nume / Prenume",
    yourEmail: "Adresă de Email",
    tellUs: "Spune-ne despre proiectul tău",
    sendMessage: "Trimite Mesajul",
    sending: "Se trimite…",
    successTitle: "Mesaj trimis!",
    successDesc: "Mulțumim că ne-ai contactat. Te vom contacta în maxim 24 de ore.",
    errorTitle: "Ceva nu a mers bine.",
    errorDesc: "Te rugăm să încerci din nou sau să ne scrii direct.",
    sendAnother: "Trimite alt mesaj",
    contactPhone: "Telefon",
    contactEmail: "Email",
    contactAvailability: "Lun – Vin, 9:00 – 18:00",
    // Service options for multi-select
    svcOpt0: "🎯 Doresc Consultanță GRATUITĂ",
    svcOpt1: "📱 Social Media Management",
    svcOpt2: "📣 Marketing & Reclame",
    svcOpt3: "🎬 Conținut & Video",
    svcOpt4: "🎨 Logo & Design",
    svcOpt5: "🌐 Site Web sau Aplicație",
    svcOpt6: "📰 PR & Evenimente",
    svcOpt7: "💰 Bugete & Prețuri",
    svcOpt8: "🤔 Nu știu exact, vreau să discutăm",
    copyright: "© 2026 Crux Vision Media Network. Toate drepturile rezervate.",
  },
} as const;

type Translations = Record<keyof typeof translations.en, string>;

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: translations.en,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
