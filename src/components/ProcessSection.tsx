import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Palette, Code, Gauge, Rocket } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

type Step = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const ProcessStep = ({ step, i }: { step: Step; i: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = i % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -60 : 60 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ type: "spring", stiffness: 70, damping: 18, delay: 0.1 }}
      className={`relative flex items-start gap-6 mb-12 last:mb-0 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
        className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full border-2 border-primary bg-background -translate-x-1/2 mt-1 z-10 glow-blue"
      />

      <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${isEven ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
        <motion.div
          whileHover={{ scale: 1.02, y: -4 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300 }}
          className={`glass-card p-6 hover-glow transition-colors duration-500 ${isEven ? "md:ml-auto" : ""}`}
        >
          <div className={`flex items-center gap-3 mb-3 ${isEven ? "md:flex-row-reverse" : ""}`}>
            <motion.div
              initial={{ rotate: -20, opacity: 0 }}
              animate={isInView ? { rotate: 0, opacity: 1 } : {}}
              transition={{ type: "spring", stiffness: 150, delay: 0.25 }}
              className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: "linear-gradient(135deg, hsl(var(--primary) / 0.2), hsl(var(--secondary) / 0.2))" }}
            >
              <step.icon className="w-5 h-5 text-primary" />
            </motion.div>
            <h3 className="font-display text-lg font-semibold text-foreground">{step.title}</h3>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ProcessSection = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  const lineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start 80%", "end 20%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const { t } = useLanguage();

  const steps: Step[] = [
    { icon: Lightbulb, title: t.step1Title, description: t.step1Desc },
    { icon: Palette, title: t.step2Title, description: t.step2Desc },
    { icon: Code, title: t.step3Title, description: t.step3Desc },
    { icon: Gauge, title: t.step4Title, description: t.step4Desc },
    { icon: Rocket, title: t.step5Title, description: t.step5Desc },
  ];

  return (
    <section id="process" className="relative section-padding">
      <div className="max-w-4xl mx-auto">

        <div ref={headerRef}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={headerInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="text-sm font-medium tracking-widest uppercase text-primary mb-4 block"
            >
              {t.processLabel}
            </motion.span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold">
              {t.processTitle} <span className="gradient-text">{t.processTitleAccent}</span>
            </h2>
          </motion.div>
        </div>

        <div ref={lineRef} className="relative">
          {/* Static background line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border/30 md:-translate-x-px" />
          {/* Animated fill line */}
          <motion.div
            className="absolute left-8 md:left-1/2 top-0 w-px md:-translate-x-px origin-top"
            style={{
              height: lineHeight,
              background: "linear-gradient(to bottom, hsl(var(--primary)), hsl(var(--secondary)), transparent)",
            }}
          />

          {steps.map((step, i) => (
            <ProcessStep key={i} step={step} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
