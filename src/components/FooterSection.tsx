import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import sharkLogo from "@/assets/shark-logo.png";
import { useLanguage } from "../contexts/LanguageContext";

type FormStatus = "idle" | "loading" | "success" | "error";

const FooterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const { t } = useLanguage();

  const FORMSPREE_ID = "xvzwwwlz";

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!name.trim() || !email.trim() || !message.trim()) return;

  setStatus("loading");
  setErrorMsg("");

  try {
    const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await res.json();

    if (res.ok) {
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setErrorMsg(data?.errors?.[0]?.message || t.errorDesc);
      setStatus("error");
    }
  } catch {
    setErrorMsg(t.errorDesc);
    setStatus("error");
  }
};

  const inputClass =
    "w-full glass-card px-5 py-3.5 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all duration-300 bg-transparent border border-glass-border disabled:opacity-50 disabled:cursor-not-allowed";

  return (
    <footer id="contact" className="relative section-padding border-t border-border">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* ── Brand side ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <img src={sharkLogo} alt="Crux Vision" className="w-10 h-10" />
              <span className="font-display font-bold text-xl text-foreground">
                CRUX <span className="gradient-text">VISION</span>
              </span>
            </div>
            <p className="text-muted-foreground max-w-md mb-8 leading-relaxed">{t.footerDesc}</p>
          </motion.div>

          {/* ── Form side ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* SUCCESS state */}
            {status === "success" ? (
              <div className="glass-card p-10 rounded-2xl flex flex-col items-center justify-center text-center gap-4 min-h-[320px]">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-2"
                  style={{ background: "linear-gradient(135deg, hsl(var(--primary)/0.15), hsl(var(--secondary)/0.15))", border: "1px solid hsl(var(--primary)/0.3)" }}>
                  ✓
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">{t.successTitle}</h3>
                <p className="text-muted-foreground max-w-xs">{t.successDesc}</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 text-sm font-medium text-primary hover:text-foreground transition-colors duration-300 underline underline-offset-4"
                >
                  {t.sendAnother}
                </button>
              </div>
            ) : (
              /* FORM state (idle / loading / error) */
              <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                <input
                  type="text"
                  placeholder={t.yourName}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={status === "loading"}
                  required
                  className={inputClass}
                />
                <input
                  type="email"
                  placeholder={t.yourEmail}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "loading"}
                  required
                  className={inputClass}
                />
                <textarea
                  placeholder={t.tellUs}
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={status === "loading"}
                  required
                  className={`${inputClass} resize-none`}
                />

                {/* Error message */}
                {status === "error" && (
                  <div className="flex items-start gap-3 text-sm px-4 py-3 rounded-xl bg-destructive/10 border border-destructive/30 text-destructive">
                    <span className="mt-0.5">⚠</span>
                    <span>{errorMsg || t.errorDesc}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading" || !name.trim() || !email.trim() || !message.trim()}
                  className="w-full py-4 rounded-xl font-display font-semibold text-primary-foreground transition-all duration-500 hover-glow disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:shadow-none flex items-center justify-center gap-2"
                  style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))" }}
                >
                  {status === "loading" ? (
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

        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
