import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "../contexts/LanguageContext"
const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section id="about" className="relative section-padding overflow-hidden">
      <div className="absolute top-20 left-10 w-32 h-32 border border-primary/10 rounded-2xl rotate-12 animate-float" />
      <div className="absolute bottom-20 right-16 w-24 h-24 border border-secondary/10 rounded-full animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-primary/5 rounded-lg rotate-45 animate-float" style={{ animationDelay: "4s" }} />

      <div ref={ref} className="max-w-4xl mx-auto text-center relative z-10">
        <motion.span initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }} className="text-sm font-medium tracking-widest uppercase text-primary mb-4 block">
          {t.aboutLabel}
        </motion.span>
        <motion.h2 initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }} className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-8">
          {t.aboutTitle} <span className="gradient-text">{t.aboutTitleAccent}</span>
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.3 }} className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          {t.aboutDesc}
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;
