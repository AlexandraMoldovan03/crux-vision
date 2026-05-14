import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import sharkLogo from "@/assets/logo1.png";

const TermsAndConditions = () => {
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
              Termeni și Condiții
            </h1>
            <p className="text-muted-foreground text-sm">
              Ultima actualizare: <span className="text-foreground">14.05.2026</span>
            </p>
          </div>

          {/* Body */}
          <div className="space-y-8 text-sm md:text-base leading-relaxed text-muted-foreground">

            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">1. Preambul</h2>
              <p>
                Prezentele Termene și Condiții guvernează utilizarea site-ului web <strong className="text-foreground">cruxvision.ro</strong> și relația dintre <strong className="text-foreground">[DENUMIRE FIRMĂ]</strong> (denumită în continuare „Prestator") și orice persoană care vizitează sau utilizează site-ul (denumită în continuare „Utilizator" sau „Client").
              </p>
              <p className="mt-2">
                Prin accesarea sau utilizarea site-ului, confirmați că ați citit, înțeles și acceptat acești termeni. Dacă nu sunteți de acord, vă rugăm să nu utilizați site-ul.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">2. Servicii oferite</h2>
              <p>
                Crux Vision oferă servicii de marketing digital, social media management, creație de conținut, design grafic, dezvoltare web, PR și organizare de evenimente. Detaliile complete ale serviciilor, prețurile și condițiile specifice sunt stabilite prin ofertă comercială individuală și/sau contract separat.
              </p>
              <p className="mt-2">
                Informațiile prezentate pe site au caracter pur informativ și nu constituie o ofertă contractuală fermă. Angajamentele comerciale se nasc exclusiv prin semnarea unui contract sau confirmarea scrisă a unei oferte.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">3. Utilizarea formularului de contact</h2>
              <p>
                Formularul de contact de pe site este destinat exclusiv transmiterii de solicitări comerciale. Prin completarea acestuia, Utilizatorul declară că:
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>Datele furnizate sunt corecte și îi aparțin.</li>
                <li>Este de acord cu prelucrarea datelor conform Politicii de Confidențialitate.</li>
                <li>Are cel puțin 18 ani sau dispune de consimțământul unui tutore legal.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">4. Prețuri și plăți</h2>
              <p>
                Prețurile serviciilor sunt stabilite individual, în funcție de volumul și complexitatea proiectului, și sunt comunicate prin ofertă scrisă. Nu există prețuri fixe afișate pe site. Plata se efectuează conform termenelor convenite contractual (de regulă, avans la semnarea contractului și sold la livrare sau lunar, după caz).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">5. Proprietate intelectuală</h2>
              <p>
                Tot conținutul acestui site — texte, imagini, logo-uri, grafice, cod sursă — este proprietatea <strong className="text-foreground">[DENUMIRE FIRMĂ]</strong> sau este utilizat cu permisiunea deținătorilor de drepturi. Este interzisă reproducerea, distribuirea sau utilizarea comercială a oricărui conținut fără acordul scris prealabil al Prestatorului.
              </p>
              <p className="mt-2">
                Materialele livrate Clientului în baza unui contract devin proprietatea acestuia doar după achitarea integrală a prețului convenit, conform clauzelor contractuale specifice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">6. Limitarea răspunderii</h2>
              <p>
                Prestatorul nu garantează că site-ul va fi disponibil neîntrerupt sau lipsit de erori. Informațiile publicate au caracter orientativ și pot fi modificate fără notificare prealabilă.
              </p>
              <p className="mt-2">
                Prestatorul nu este responsabil pentru daune indirecte, pierderi de profit, pierdere de date sau alte prejudicii rezultate din utilizarea sau imposibilitatea utilizării site-ului ori a serviciilor, în limitele permise de legislația în vigoare.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">7. Link-uri externe</h2>
              <p>
                Site-ul poate conține link-uri către site-uri terțe. Aceste link-uri sunt furnizate exclusiv pentru confortul Utilizatorului. Prestatorul nu controlează conținutul acestor site-uri și nu își asumă nicio responsabilitate față de acestea.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">8. Legea aplicabilă și litigii</h2>
              <p>
                Prezentele Termene și Condiții sunt guvernate de legislația română. Orice litigiu apărut în legătură cu utilizarea site-ului sau a serviciilor va fi soluționat, în primul rând, pe cale amiabilă. În caz de eșec, litigiul va fi deferit instanțelor judecătorești competente de la sediul Prestatorului.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">9. Modificarea termenilor</h2>
              <p>
                Ne rezervăm dreptul de a modifica acești termeni în orice moment. Versiunea actualizată va fi publicată pe această pagină, cu indicarea datei ultimei modificări. Continuarea utilizării site-ului după publicarea modificărilor constituie acceptarea noilor termeni.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">10. Contact</h2>
              <p>
                Pentru orice întrebare referitoare la acești termeni, ne puteți contacta la:
              </p>
              <ul className="mt-3 space-y-1 list-disc list-inside">
                <li>E-mail: <strong className="text-foreground">danicrucita60@gmail.com</strong></li>
                <li>Telefon: <strong className="text-foreground">+40 733 853 653</strong></li>
                <li>Adresă: <strong className="text-foreground">Alba Iulia, Alba, Str. George Baritiu , Bloc J5, Ap.20</strong></li>
              </ul>
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

export default TermsAndConditions;
