import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import sharkLogo from "@/assets/logo1.png";

const PrivacyPolicy = () => {
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
              Politică de Confidențialitate
            </h1>
            <p className="text-muted-foreground text-sm">
              Ultima actualizare: <span className="text-foreground">[DATA ULTIMEI ACTUALIZĂRI]</span>
            </p>
          </div>

          {/* Body */}
          <div className="prose prose-invert max-w-none space-y-8 text-sm md:text-base leading-relaxed text-muted-foreground">

            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">1. Cine suntem</h2>
              <p>
                <strong className="text-foreground">[DENUMIRE FIRMĂ]</strong>, cu sediul în <strong className="text-foreground">[ADRESĂ COMPLETĂ]</strong>,
                înregistrată cu CUI/CIF <strong className="text-foreground">[CUI]</strong> la Registrul Comerțului sub nr. <strong className="text-foreground">[NR. REG. COM.]</strong>,
                este operatorul de date cu caracter personal în sensul Regulamentului (UE) 2016/679 (GDPR).
              </p>
              <p className="mt-2">
                Ne puteți contacta la adresa de e-mail: <strong className="text-foreground">contact@cruxvision.ro</strong> sau telefonic la <strong className="text-foreground">+40 700 000 000</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">2. Ce date colectăm și de ce</h2>
              <p>Prin intermediul formularului de contact de pe site-ul nostru, colectăm următoarele date:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li><strong className="text-foreground">Nume și prenume</strong> — pentru a vă identifica și adresa corespunzător.</li>
                <li><strong className="text-foreground">Adresă de e-mail</strong> — pentru a vă răspunde la solicitare.</li>
                <li><strong className="text-foreground">Număr de telefon</strong> (opțional) — pentru a putea lua legătura direct cu dumneavoastră.</li>
                <li><strong className="text-foreground">Denumire companie</strong> (opțional) — pentru a înțelege contextul solicitării.</li>
                <li><strong className="text-foreground">Serviciile de interes</strong> — pentru a vă oferi un răspuns relevant.</li>
                <li><strong className="text-foreground">Mesaj / notă</strong> (opțional) — orice informație suplimentară furnizată de dumneavoastră.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">3. Temeiul legal al prelucrării</h2>
              <p>
                Prelucrarea datelor dumneavoastră se bazează pe <strong className="text-foreground">interesul legitim</strong> al operatorului (Art. 6(1)(f) GDPR) de a răspunde solicitărilor primite și de a stabili o relație comercială, precum și pe <strong className="text-foreground">consimțământul</strong> dumneavoastră (Art. 6(1)(a) GDPR) exprimat prin completarea și trimiterea formularului.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">4. Cât timp păstrăm datele</h2>
              <p>
                Datele colectate prin formular sunt păstrate pe o perioadă de maximum <strong className="text-foreground">2 ani</strong> de la data transmiterii, după care sunt șterse în mod securizat, cu excepția cazului în care există o relație contractuală în derulare sau o obligație legală de păstrare mai îndelungată.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">5. Cu cine partajăm datele</h2>
              <p>
                Datele din formular sunt transmise prin serviciul <strong className="text-foreground">Formspree</strong> (formspree.io), un procesor de date extern cu care operatorul are un acord de prelucrare conform GDPR. Nu vindem, nu închiriem și nu divulgăm datele dumneavoastră altor terțe părți, cu excepția cazurilor prevăzute de lege.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">6. Drepturile dumneavoastră</h2>
              <p>Conform GDPR, beneficiați de următoarele drepturi:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li><strong className="text-foreground">Dreptul de acces</strong> — puteți solicita o copie a datelor pe care le deținem despre dumneavoastră.</li>
                <li><strong className="text-foreground">Dreptul la rectificare</strong> — puteți solicita corectarea datelor inexacte.</li>
                <li><strong className="text-foreground">Dreptul la ștergere</strong> — puteți solicita ștergerea datelor ("dreptul de a fi uitat").</li>
                <li><strong className="text-foreground">Dreptul la restricționarea prelucrării</strong> — puteți solicita limitarea prelucrării datelor.</li>
                <li><strong className="text-foreground">Dreptul la portabilitate</strong> — puteți solicita datele într-un format structurat și lizibil.</li>
                <li><strong className="text-foreground">Dreptul de opoziție</strong> — vă puteți opune prelucrării bazate pe interesul legitim.</li>
              </ul>
              <p className="mt-3">
                Pentru exercitarea acestor drepturi, ne puteți contacta la: <strong className="text-foreground">contact@cruxvision.ro</strong>. Vă vom răspunde în termen de maximum 30 de zile.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">7. Dreptul de a depune plângere</h2>
              <p>
                Dacă considerați că drepturile dumneavoastră au fost încălcate, puteți depune o plângere la <strong className="text-foreground">Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)</strong>, cu sediul în B-dul G-ral. Gheorghe Magheru nr. 28-30, București, sau pe site-ul <strong className="text-foreground">www.dataprotection.ro</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">8. Securitatea datelor</h2>
              <p>
                Implementăm măsuri tehnice și organizatorice adecvate pentru protejarea datelor dumneavoastră împotriva accesului neautorizat, pierderii sau distrugerii. Comunicarea datelor se realizează prin conexiuni criptate (HTTPS).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">9. Modificări ale politicii</h2>
              <p>
                Ne rezervăm dreptul de a actualiza această politică periodic. Versiunea actualizată va fi publicată pe această pagină cu data ultimei modificări.
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

export default PrivacyPolicy;
