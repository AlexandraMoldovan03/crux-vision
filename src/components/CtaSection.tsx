import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "../contexts/LanguageContext";

const CtaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[200px] animate-pulse-glow" style={{ background: "linear-gradient(135deg, hsl(var(--primary) / 0.15), hsl(var(--secondary) / 0.15))" }} />
      </div>

      <div ref={ref} className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2 initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="font-display text-3xl md:text-5xl lg:text-7xl font-black mb-8">
          {t.ctaTitle}{" "}
          <span className="gradient-text">{t.ctaTitleAccent}</span>
        </motion.h2>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.3 }}>
          <a href="#contact" className="group relative inline-flex px-10 py-5 rounded-full font-display font-bold text-lg text-primary-foreground overflow-hidden transition-all duration-500" style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))" }}>
            <span className="relative z-10">{t.ctaButton}</span>
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: "0 0 60px 15px hsl(var(--primary) / 0.6), 0 0 120px 30px hsl(var(--secondary) / 0.4)" }} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
