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
    heroDesc: "We build brands that mean business. Websites, apps, social media, paid campaigns, video content, design and events — Crux Vision is your entire digital team, under one roof.",
    viewProjects: "View Projects",

    // About
    aboutLabel: "About Us",
    aboutTitle: "Who We",
    aboutTitleAccent: "Are",
    aboutDesc: "We're a full-service digital agency that builds and grows brands from the ground up. High-performance websites, custom apps, social media management, paid campaigns, video content, branding, PR and events — everything your brand needs to show up, stand out and dominate online. One team. Total coverage.",

    // Services
    servicesLabel: "What We Do",
    servicesTitle: "Full Service",
    servicesTitleAccent: "Agency",
    servicesDesc: "From your first impression to your final sale — we handle every layer of your digital presence. Pick individual services or let us build you a complete strategy.",
    agencyBadge: "Marketing · Web · Branding · PR · Events",
    svcCat1Title: "Marketing & Ads",
    svcCat1Desc: "We design and run high-converting campaigns on Google, Meta and TikTok — from creative to targeting to budget. You focus on your business. We bring the customers.",
    svcCat2Title: "Social Media",
    svcCat2Desc: "Content calendars, daily posts, community management, audience growth — we run your socials like they're our own brand on the line.",
    svcCat3Title: "Content & Video",
    svcCat3Desc: "Scroll-stopping photos, videos, reels and ad creatives — all produced in-house, built to perform on every platform where your audience lives.",
    svcCat4Title: "Logo & Design",
    svcCat4Desc: "Your identity, crafted to last. Logo systems, brand guidelines, print collateral — design that earns trust before you even say a word.",
    svcCat5Title: "Website & Apps",
    svcCat5Desc: "Fast, scalable, conversion-focused. Brand site, online store or custom web app — we build it right, the first time.",
    svcCat6Title: "PR & Events",
    svcCat6Desc: "From press releases to full event production — we put your brand in the spotlight and make sure the right people are talking about it.",
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
    stat3Label: "Performance-First Architecture",
    stat4Label: "Zero Compromise on Quality",

    // Process
    processLabel: "How We Work",
    processTitle: "Our",
    processTitleAccent: "Process",
    step1Title: "Discovery & Strategy",
    step1Desc: "We dig into your brand, your market and your goals — and come back with a clear plan that leaves nothing to chance.",
    step2Title: "Design & Concept",
    step2Desc: "Visual identity meets technical blueprint. Every pixel and every system is designed before a single line of code is written.",
    step3Title: "Build",
    step3Desc: "Developed with modern technology and clean, maintainable code — built to scale from day one, not just to launch.",
    step4Title: "Test & Refine",
    step4Desc: "Speed audits, cross-device reviews and feedback loops — we polish until everything is ready to impress.",
    step5Title: "Launch & Grow",
    step5Desc: "We don't disappear at go-live. Deploy, monitor, iterate — we're with you for the long run.",

    // Clients
    clientsLabel: "Trusted By",
    clientsTitle: "Brands We've",
    clientsTitleAccent: "Worked With",
    clientsDesc: "Real brands. Real results. A selection of businesses and events that chose Crux Vision to represent them online.",

    // Social Proof
    socialProofLabel: "Real Results",
    socialProofTitle: "Organic",
    socialProofTitleAccent: "Growth",
    socialProofDesc: "Numbers don't lie. This is the organic growth we generated — no paid reach, no shortcuts. Just strategy and consistency.",
    socialProofStat1: "Organic Instagram Views",
    socialProofStat2: "Views per post Facebook",
    socialProofStat3: "Reach Growth",
    socialProofStat4: "Likes per Reel",

    // CTA
    ctaTitle: "Your Brand Deserves to",
    ctaTitleAccent: "Dominate.",
    ctaButton: "Let's Build Something Powerful",

    // Footer / Contact
    footerDesc: "Marketing, web, branding, content and events — one agency, total coverage. Built for brands that play to win.",
    contactLabel: "Contact",
    contactTitle: "Let's Build",
    contactTitleAccent: "Together",
    contactSubtitle: "Tell us where you are and where you want to be — we'll map out the rest. First consultation is always free.",
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
    heroDesc: "Transformăm ideile în site-uri, video-uri și campanii care contează. La Crux Vision, nu facem doar publicitate, ci punem brandurile în mișcare.",
    viewProjects: "Vezi Proiectele",

    aboutLabel: "Despre Noi",
    aboutTitle: "Cine",
    aboutTitleAccent: "Suntem",
    aboutDesc: "Depășim barierele unei agenții clasice. Nu facem lucruri izolate, ci construim sisteme: de la site-uri și aplicații, la campanii și evenimente. Totul este conectat pentru a genera impact, nu doar prezență.",

    servicesLabel: "Ce Oferim",
    servicesTitle: "Agenție",
    servicesTitleAccent: "Full Service",
    servicesDesc: "Fie că pornești de la zero sau ai deja ceva de crescut — îți acoperim tot ce ține de prezența online. Alege un serviciu anume sau lasă-ne să vedem împreună ce are sens.",
    agencyBadge: "Marketing · Web · Branding · PR · Evenimente",
    svcCat1Title: "Marketing & Reclame",
    svcCat1Desc: "Campanii pe Google, Meta și TikTok care aduc clienți reali, nu cifre frumoase în rapoarte. Ne ocupăm de tot — creative, targetare, buget — tu te ocupi de afacerea ta.",
    svcCat2Title: "Social Media",
    svcCat2Desc: "Postăm, răspundem, creștem audiența și ne ocupăm de tot ce mișcă pe conturile tale. Îți gestionăm social media ca și cum ar fi al nostru — cu cap, cu strategie, în fiecare zi.",
    svcCat3Title: "Conținut & Video",
    svcCat3Desc: "Fotografii, video, reels, reclame vizuale — totul creat de echipa noastră, gândit să oprească scrollul și să facă oamenii să dea click. Nu facem conținut de umplutură.",
    svcCat4Title: "Logo & Design",
    svcCat4Desc: "Logo, ghid de brand, cărți de vizită, pliante, meniuri — tot ce face ca afacerea ta să inspire încredere la prima vedere. Identitate vizuală care se ține minte.",
    svcCat5Title: "Site Web & Aplicații",
    svcCat5Desc: "Site de prezentare, magazin online sau aplicație web la comandă — facem ce ai nevoie, cum trebuie, fără scurtături. Rapid, arătos și construit să reziste.",
    svcCat6Title: "PR & Evenimente",
    svcCat6Desc: "Organizăm evenimentele tale de la A la Z, scriem comunicatele de presă și ne asigurăm că brandul tău ajunge la oamenii potriviți — în media, pe rețele și în comunitate.",
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
    stat3Label: "Performanță la Fiecare Nivel",
    stat4Label: "Calitate Fără Scuze",

    processLabel: "Cum Lucrăm",
    processTitle: "Procesul",
    processTitleAccent: "Nostru",
    step1Title: "Descoperire & Strategie",
    step1Desc: "Înțelegem cum funcționează afacerea ta, cine e clientul tău și ce vrei să construiești — și venim cu un plan concret, nu cu prezentări umflate.",
    step2Title: "Design & Concept",
    step2Desc: "Proiectăm totul înainte să scriem un singur rând de cod. Design, structură, experiența utilizatorului — nimic nu e lăsat la voia întâmplării.",
    step3Title: "Construcție",
    step3Desc: "Scriem cod curat, folosim tehnologii moderne și construim lucruri care durează — nu doar care arată bine la lansare.",
    step4Title: "Testare & Rafinare",
    step4Desc: "Testăm viteza, comportamentul pe mobile și desktop, experiența utilizatorului. Nu livrăm până nu suntem mândri de ce vedem.",
    step5Title: "Lansare & Creștere",
    step5Desc: "Lansăm, monitorizăm și îmbunătățim continuu. Nu dispărem după go-live — suntem partenerul tău pe termen lung.",

    // Clients
    clientsLabel: "Colaborări",
    clientsTitle: "Branduri cu Care",
    clientsTitleAccent: "Am Lucrat",
    clientsDesc: "Câteva dintre afacerile și evenimentele care au ales Crux Vision ca partener digital. Rezultatele vorbesc de la sine.",

    // Social Proof
    socialProofLabel: "Rezultate Reale",
    socialProofTitle: "Creștere",
    socialProofTitleAccent: "Organică",
    socialProofDesc: "Cifrele de mai jos sunt reale și 100% organice — zero buget de promovare. Asta face o strategie de social media pusă la punct cu cap.",
    socialProofStat1: "Vizualizări organice Instagram",
    socialProofStat2: "Views per post Facebook",
    socialProofStat3: "Creștere reach",
    socialProofStat4: "Like-uri per Reel",

    ctaTitle: "Gata să Faci",
    ctaTitleAccent: "Pasul Următor?",
    ctaButton: "Lasă-ne Să Te Ducem Mai Departe",

    // Footer / Contact
    footerDesc: "Marketing, web, branding, video și evenimente — totul într-un singur loc, pentru brandurile care nu acceptă mediocritatea.",
    contactLabel: "Contact",
    contactTitle: "Hai să Construim",
    contactTitleAccent: "Împreună",
    contactSubtitle: "Completează formularul și te contactăm în maxim 24 de ore. Nu știi exact ce ai nevoie? Alege consultanța gratuită — stabilim noi împreună ce are sens.",
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
