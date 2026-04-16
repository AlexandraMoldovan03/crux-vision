import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { Phone, Mail, Clock, ChevronDown, Check } from "lucide-react";
import { Link } from "react-router-dom";
import sharkLogo from "@/assets/shark-logo.png";
import { useLanguage } from "../contexts/LanguageContext";

type FormStatus = "idle" | "loading" | "success" | "error";

// ─── Multi-Select Dropdown ────────────────────────────────────────────────────
interface MultiSelectProps {
  options: { value: string; label: string; featured?: boolean }[];
  selected: string[];
  onChange: (val: string[]) => void;
  placeholder: string;
  selectedLabel: string;
  disabled?: boolean;
}

const MultiSelect = ({
  options,
  selected,
  onChange,
  placeholder,
  selectedLabel,
  disabled,
}: MultiSelectProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const toggle = (val: string) => {
    onChange(
      selected.includes(val) ? selected.filter((s) => s !== val) : [...selected, val]
    );
  };

  const triggerLabel =
    selected.length === 0
      ? placeholder
      : selected.length === 1
      ? options.find((o) => o.value === selected[0])?.label ?? placeholder
      : `${selected.length} ${selectedLabel}`;

  return (
    <div ref={ref} className="relative">
      {/* Trigger */}
      <button
        type="button"
        disabled={disabled}
        onClick={() => setOpen((p) => !p)}
        className={`w-full glass-card px-5 py-3.5 rounded-xl text-left flex items-center justify-between gap-3 border border-glass-border transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
          open ? "ring-1 ring-primary/50 border-primary/30" : "hover:border-white/20"
        } ${selected.length > 0 ? "text-foreground" : "text-muted-foreground"}`}
      >
        <span className="text-sm truncate">{triggerLabel}</span>
        <ChevronDown
          size={16}
          className={`flex-shrink-0 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute top-full mt-2 left-0 right-0 z-50 rounded-2xl overflow-hidden shadow-2xl shadow-black/80 border border-white/10"
            style={{ background: "hsl(225 25% 10%)" }}
          >
            {options.map((opt) => {
              const checked = selected.includes(opt.value);
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => toggle(opt.value)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-sm text-left transition-colors duration-150 ${
                    opt.featured
                      ? "bg-primary/15 hover:bg-primary/25 border-b border-primary/20"
                      : "hover:bg-white/8"
                  } ${checked ? "text-foreground" : "text-white/70"}`}
                >
                  {/* Checkbox */}
                  <span
                    className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 border transition-all duration-150 ${
                      checked
                        ? "bg-primary border-primary"
                        : opt.featured
                        ? "border-primary/50 bg-primary/10"
                        : "border-white/20 bg-white/5"
                    }`}
                  >
                    {checked && <Check size={12} className="text-white" strokeWidth={3} />}
                  </span>

                  <span className={`flex-1 ${opt.featured ? "font-semibold text-foreground" : ""}`}>
                    {opt.label}
                  </span>

                  {opt.featured && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/30 flex-shrink-0">
                      FREE
                    </span>
                  )}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ─── Contact Info Item ────────────────────────────────────────────────────────
const ContactItem = ({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}) => (
  <div className="flex items-start gap-3">
    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 bg-primary/10 border border-primary/20">
      <Icon size={16} className="text-primary" />
    </div>
    <div>
      <p className="text-xs text-muted-foreground mb-0.5">{label}</p>
      {href ? (
        <a href={href} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
          {value}
        </a>
      ) : (
        <p className="text-sm font-medium text-foreground">{value}</p>
      )}
    </div>
  </div>
);

// ─── Main Footer ──────────────────────────────────────────────────────────────
const FooterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { t } = useLanguage();

  const { pendingService, consumePendingService } = useLanguage();

  const [name, setName]           = useState("");
  const [company, setCompany]     = useState("");
  const [email, setEmail]         = useState("");
  const [phone, setPhone]         = useState("");
  const [services, setServices]   = useState<string[]>([]);
  const [note, setNote]           = useState("");
  const [status, setStatus]       = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg]   = useState("");
  const [formHighlight, setFormHighlight] = useState(false);

  // When a service is selected from the Services section, pre-fill the form
  useEffect(() => {
    if (pendingService) {
      const val = consumePendingService();
      if (val) {
        setServices((prev) => prev.includes(val) ? prev : [...prev, val]);
        setFormHighlight(true);
        setTimeout(() => setFormHighlight(false), 1800);
      }
    }
  }, [pendingService, consumePendingService]);

  const FORMSPREE_ID = "xvzwwwlz";

  // Service options — recomputed from translations
  const serviceOptions = [
    { value: "consultation", label: t.svcOpt0, featured: true },
    { value: "social-media",  label: t.svcOpt1 },
    { value: "marketing",     label: t.svcOpt2 },
    { value: "content",       label: t.svcOpt3 },
    { value: "design",        label: t.svcOpt4 },
    { value: "web",           label: t.svcOpt5 },
    { value: "pr-events",     label: t.svcOpt6 },
    { value: "pricing",       label: t.svcOpt7 },
    { value: "not-sure",      label: t.svcOpt8 },
  ];

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setStatus("loading");
    setErrorMsg("");

    const selectedLabels = services.map(
      (v) => serviceOptions.find((o) => o.value === v)?.label ?? v
    );

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name,
          company: company || "—",
          email,
          phone: phone || "—",
          services: selectedLabels.join(", ") || "—",
          note: note || "—",
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setName(""); setCompany(""); setEmail("");
        setPhone(""); setServices([]); setNote("");
      } else {
        setErrorMsg(data?.errors?.[0]?.message || t.errorDesc);
        setStatus("error");
      }
    } catch {
      setErrorMsg(t.errorDesc);
      setStatus("error");
    }
  }, [name, company, email, phone, services, note, t, serviceOptions]);

  const inputClass =
    "w-full glass-card px-5 py-3.5 rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 border border-glass-border transition-all duration-300 bg-transparent disabled:opacity-50 disabled:cursor-not-allowed";

  const isLoading  = status === "loading";
  const canSubmit  = name.trim() && email.trim() && !isLoading;

  return (
    <footer id="contact" className="relative section-padding border-t border-border overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/4 rounded-full blur-[160px]" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-5 px-4 py-1.5 rounded-full border border-primary/25 bg-primary/8">
            {t.contactLabel}
          </span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            {t.contactTitle}{" "}
            <span className="gradient-text">{t.contactTitleAccent}</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            {t.contactSubtitle}
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">

          {/* ── Left: Contact info ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={sharkLogo} alt="Crux Vision" className="w-10 h-10" />
                <span className="font-display font-bold text-xl text-foreground">
                  CRUX <span className="gradient-text">VISION</span>
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                {t.footerDesc}
              </p>
            </div>

            {/* Contact details */}
            <div className="flex flex-col gap-4">
              <ContactItem
                icon={Phone}
                label={t.contactPhone}
                value="+40 700 000 000"
                href="tel:+40700000000"
              />
              <ContactItem
                icon={Mail}
                label={t.contactEmail}
                value="contact@cruxvision.ro"
                href="mailto:contact@cruxvision.ro"
              />
              <ContactItem
                icon={Clock}
                label="Program"
                value={t.contactAvailability}
              />
            </div>

            {/* Response time badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-green-500/20 bg-green-500/8 self-start">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
              <span className="text-xs font-medium text-green-400">
                {t.successDesc.split(".")[0]}
              </span>
            </div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {status === "success" ? (
              /* Success state */
              <div className="glass-card p-10 rounded-2xl flex flex-col items-center justify-center text-center gap-4 min-h-[400px]">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-2"
                  style={{
                    background: "linear-gradient(135deg, hsl(var(--primary)/0.15), hsl(var(--secondary)/0.15))",
                    border: "1px solid hsl(var(--primary)/0.3)",
                  }}
                >
                  ✓
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">{t.successTitle}</h3>
                <p className="text-muted-foreground max-w-xs">{t.successDesc}</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 text-sm font-medium text-primary hover:text-foreground transition-colors underline underline-offset-4"
                >
                  {t.sendAnother}
                </button>
              </div>
            ) : (
              /* Form */
              <form
                className={`glass-card p-7 rounded-2xl flex flex-col gap-4 transition-all duration-700 ${
                  formHighlight ? "ring-2 ring-primary/50 shadow-[0_0_40px_-8px_hsl(var(--primary)/0.4)]" : ""
                }`}
                onSubmit={handleSubmit}
                noValidate
              >
                {/* Row 1: Name + Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder={t.formName}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={isLoading}
                    required
                    className={inputClass}
                  />
                  <input
                    type="text"
                    placeholder={t.formCompany}
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    disabled={isLoading}
                    className={inputClass}
                  />
                </div>

                {/* Row 2: Email + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder={t.formEmail}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                    required
                    className={inputClass}
                  />
                  <input
                    type="tel"
                    placeholder={t.formPhone}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    disabled={isLoading}
                    className={inputClass}
                  />
                </div>

                {/* Row 3: Multi-select */}
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-2 ml-1">
                    {t.formServices}
                  </label>
                  <div className={`rounded-xl transition-all duration-700 ${formHighlight ? "ring-1 ring-primary/40" : ""}`}>
                    <MultiSelect
                      options={serviceOptions}
                      selected={services}
                      onChange={setServices}
                      placeholder={t.formServicesPlaceholder}
                      selectedLabel={t.formServicesSelected}
                      disabled={isLoading}
                    />
                  </div>
                </div>

                {/* Row 4: Optional note */}
                <textarea
                  placeholder={t.formNotePlaceholder}
                  rows={3}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  disabled={isLoading}
                  className={`${inputClass} resize-none`}
                />

                {/* Error */}
                {status === "error" && (
                  <div className="flex items-start gap-3 text-sm px-4 py-3 rounded-xl bg-destructive/10 border border-destructive/30 text-destructive">
                    <span className="mt-0.5">⚠</span>
                    <span>{errorMsg || t.errorDesc}</span>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={!canSubmit}
                  className="w-full py-4 rounded-xl font-display font-semibold text-primary-foreground transition-all duration-500 hover-glow disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-1"
                  style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))" }}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      {t.sending}
                    </>
                  ) : (
                    t.sendMessage
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Copyright + Legal links */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-3">
            <Link
              to="/politica-confidentialitate"
              className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Politică de Confidențialitate
            </Link>
            <span className="text-muted-foreground/30 text-xs hidden sm:inline">|</span>
            <Link
              to="/termeni-si-conditii"
              className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Termeni și Condiții
            </Link>
            <span className="text-muted-foreground/30 text-xs hidden sm:inline">|</span>
            <Link
              to="/politica-cookie"
              className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Politică Cookie
            </Link>
          </div>
          <p className="text-muted-foreground text-sm">{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
