import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Plus } from "lucide-react";

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

        {/* CV Formula */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, type: "spring", stiffness: 70, delay: 0.5 }}
          className="mt-10"
        >
          {/* Label */}
          <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground/50 mb-4">
          </p>

          {/* Pills — 2×2 cross grid on mobile, horizontal row on desktop */}
          {(() => {
            const pillars = t.cvPillars.split(",");
            const Pill = ({ label, delay }: { label: string; delay: number }) => (
              <motion.span
                initial={{ opacity: 0, scale: 0.85 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay }}
                className="px-4 py-2.5 rounded-full border border-primary/25 bg-primary/8 text-sm font-semibold text-primary text-center whitespace-nowrap"
              >
                {label}
              </motion.span>
            );
            const Divider = ({ rotate = false, delay = 0.7 }: { rotate?: boolean; delay?: number }) => (
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.3, delay }}
                className="flex items-center justify-center"
              >
                <Plus
                  size={13}
                  className={`text-primary/35 flex-shrink-0 ${rotate ? "rotate-0" : ""}`}
                />
              </motion.div>
            );
            return (
              <>
                {/* Mobile: 3×3 cross grid (pill | + | pill / + | · | + / pill | + | pill) */}
                <div className="sm:hidden grid grid-cols-[1fr_20px_1fr] grid-rows-[auto_20px_auto] items-center justify-items-center gap-x-1 gap-y-0 max-w-[300px] mx-auto">
                  <Pill label={pillars[0]} delay={0.55} />
                  <Divider delay={0.60} />
                  <Pill label={pillars[1]} delay={0.63} />

                  <Divider delay={0.66} />
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.68 }}
                    className="text-primary/20 text-xs font-bold"
                  >+</motion.span>
                  <Divider delay={0.70} />

                  <Pill label={pillars[2]} delay={0.73} />
                  <Divider delay={0.76} />
                  <Pill label={pillars[3]} delay={0.79} />
                </div>

                {/* Desktop: horizontal row */}
                <div className="hidden sm:flex items-center justify-center gap-3">
                  {pillars.map((pillar, i) => (
                    <div key={pillar} className="flex items-center gap-3">
                      <Pill label={pillar} delay={0.55 + i * 0.08} />
                      {i < pillars.length - 1 && (
                        <Plus size={14} className="text-primary/40 flex-shrink-0" />
                      )}
                    </div>
                  ))}
                </div>
              </>
            );
          })()}

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="mt-4 text-xs text-muted-foreground/50 italic"
          >
            {t.cvTagline}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
