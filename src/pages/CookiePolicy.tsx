import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import sharkLogo from "@/assets/logo1.png";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Simple top bar */}
      <header className="sticky top-0 z-50 glass-card border-b border-glass-border">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={sharkLogo} alt="Crux Vision" className="w-10 h-10 object-contain mix-blend-screen" />
            <span className="font-display font-bold text-base text-foreground">
              CRUX <span className="gradient-text">VISION</span>
            </span>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} />
            Înapoi acasă
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="glass-card rounded-2xl border border-glass-border p-8 md:p-12">
          {/* Header */}
          <div className="mb-10 pb-8 border-b border-glass-border">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-4 px-3 py-1.5 rounded-full border border-primary/25 bg-primary/8">
              Legal
            </span>
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-3">
              Politică Cookie
            </h1>
            <p className="text-muted-foreground text-sm">
              Ultima actualizare: <span className="text-foreground">[DATA ULTIMEI ACTUALIZĂRI]</span>
            </p>
          </div>

          {/* Body */}
          <div className="space-y-8 text-sm md:text-base leading-relaxed text-muted-foreground">

            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">1. Ce sunt cookie-urile?</h2>
              <p>
                Cookie-urile sunt fișiere de mici dimensiuni stocate pe dispozitivul dumneavoastră (calculator, telefon, tabletă) atunci când vizitați un site web. Acestea permit site-ului să vă recunoască la vizitele ulterioare și să rețină anumite preferințe sau informații.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">2. Ce cookie-uri folosim</h2>

              <div className="space-y-4 mt-3">
                {/* Cookie type card */}
                <div className="glass-card border border-glass-border rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                    <h3 className="text-foreground font-semibold">Cookie-uri strict necesare</h3>
                  </div>
                  <p>Sunt esențiale pentru funcționarea de bază a site-ului (de exemplu, menținerea sesiunii). Nu pot fi dezactivate. Nu colectează date în scop de marketing.</p>
                </div>

                <div className="glass-card border border-glass-border rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-primary inline-block" />
                    <h3 className="text-foreground font-semibold">Cookie-uri de analiză / performanță</h3>
                  </div>
                  <p>
                    Ne ajută să înțelegem cum interacționează vizitatorii cu site-ul (pagini vizitate, timp petrecut, sursa traficului). Datele sunt anonimizate sau pseudonimizate. Pot include instrumente precum <strong className="text-foreground">Google Analytics</strong> sau altele similare.
                  </p>
                </div>

                <div className="glass-card border border-glass-border rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-secondary inline-block" />
                    <h3 className="text-foreground font-semibold">Cookie-uri de preferințe</h3>
                  </div>
                  <p>Rețin preferințele dumneavoastră (de exemplu, limba selectată) pentru a personaliza experiența la vizitele viitoare.</p>
                </div>

                <div className="glass-card border border-glass-border rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-yellow-500 inline-block" />
                    <h3 className="text-foreground font-semibold">Cookie-uri de marketing / terțe</h3>
                  </div>
                  <p>
                    Pot fi plasate de parteneri terți (ex. Meta Pixel, Google Ads) pentru a afișa reclame relevante și a măsura eficiența campaniilor. Aceste cookie-uri sunt activate doar cu consimțământul dumneavoastră explicit.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">3. Durata de stocare</h2>
              <p>
                Cookie-urile de sesiune sunt șterse automat la închiderea browserului. Cookie-urile persistente rămân pe dispozitivul dumneavoastră pentru o perioadă determinată (de obicei între 30 de zile și 2 ani), în funcție de tipul și furnizorul lor.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">4. Cum gestionați cookie-urile</h2>
              <p>Aveți control deplin asupra cookie-urilor prin mai multe metode:</p>

              <div className="mt-4 space-y-3">
                <div className="flex gap-3">
                  <span className="text-primary font-bold shrink-0">→</span>
                  <p><strong className="text-foreground">Setările browserului</strong> — Puteți configura browserul să blocheze sau să șteargă cookie-urile. Consultați documentația browserului dvs. (Chrome, Firefox, Safari, Edge etc.).</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold shrink-0">→</span>
                  <p><strong className="text-foreground">Optare Google Analytics</strong> — Puteți dezactiva urmărirea Google Analytics instalând extensia <strong className="text-foreground">Google Analytics Opt-out Browser Add-on</strong>.</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold shrink-0">→</span>
                  <p><strong className="text-foreground">Setările de publicitate</strong> — Puteți gestiona preferințele de publicitate personalizată la <strong className="text-foreground">adssettings.google.com</strong> și <strong className="text-foreground">www.youronlinechoices.eu</strong>.</p>
                </div>
              </div>

              <p className="mt-4">
                <strong className="text-foreground">Atenție:</strong> Dezactivarea unor cookie-uri poate afecta funcționalitatea și experiența de utilizare a site-ului.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">5. Cookie-uri terțe</h2>
              <p>
                Site-ul nostru poate include conținut sau widget-uri de la terți (ex. butoane de social media, hărți, videoclipuri embed). Acești terți pot plasa propriile cookie-uri pe dispozitivul dumneavoastră, care sunt guvernate de politicile lor de confidențialitate, nu de a noastră.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">6. Consimțământ</h2>
              <p>
                La prima vizită pe site, vă prezentăm un banner de informare privind utilizarea cookie-urilor. Prin continuarea navigării sau apăsarea butonului „Accept", vă exprimați consimțământul pentru plasarea cookie-urilor non-esențiale. Vă puteți retrage consimțământul oricând prin setările browserului sau contactându-ne.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">7. Contact</h2>
              <p>
                Pentru orice întrebări legate de utilizarea cookie-urilor pe site-ul nostru, ne puteți contacta la <strong className="text-foreground">danicrucita60@gmail.com</strong>.
              </p>
            </section>

          </div>
        </div>
      </main>

      {/* Simple footer */}
      <footer className="border-t border-border py-6 text-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Crux Vision. Toate drepturile rezervate.
        </p>
      </footer>
    </div>
  );
};

export default CookiePolicy;
