import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "../contexts/LanguageContext";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLanguage();

  return (
    <section id="about" className="relative section-padding overflow-hidden">

      <div ref={ref} className="max-w-4xl mx-auto text-center relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="text-sm font-medium tracking-widest uppercase text-primary mb-4 block"
        >
          {t.aboutLabel}
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, type: "spring", stiffness: 80, delay: 0.1 }}
          className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-8"
        >
          {t.aboutTitle}{" "}
          <motion.span
            className="gradient-text inline-block"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, type: "spring", stiffness: 80, delay: 0.2 }}
          >
            {t.aboutTitleAccent}
          </motion.span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, type: "spring", stiffness: 70, delay: 0.3 }}
          className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
        >
          {t.aboutDesc}
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;
