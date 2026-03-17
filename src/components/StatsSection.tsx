import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

interface CounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  inView: boolean;
}

const Counter = ({ target, suffix = "", prefix = "", inView }: CounterProps) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, target]);

  return (
    <span className="font-display text-5xl md:text-6xl font-black gradient-text">
      {prefix}{value}{suffix}
    </span>
  );
};

const StatCard = ({ stat, i }: { stat: { value: number; prefix: string; suffix: string; label: string; custom?: string }; i: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ type: "spring", stiffness: 80, damping: 18, delay: i * 0.12 }}
      className="text-center"
    >
      {stat.custom ? (
        <motion.span
          className="font-display text-5xl md:text-6xl font-black gradient-text"
          animate={isInView ? { scale: [0.5, 1.1, 1] } : {}}
          transition={{ duration: 0.6, delay: i * 0.12 + 0.1 }}
        >
          {stat.custom}
        </motion.span>
      ) : (
        <Counter target={stat.value} prefix={stat.prefix} suffix={stat.suffix} inView={isInView} />
      )}
      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: i * 0.12 + 0.3 }}
        className="text-muted-foreground mt-3 text-sm md:text-base font-medium"
      >
        {stat.label}
      </motion.p>
    </motion.div>
  );
};

const StatsSection = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });
  const { t } = useLanguage();

  const stats = [
    { value: 50, prefix: "+", suffix: "", label: t.stat1Label },
    { value: 99, prefix: "", suffix: "%", label: t.stat2Label },
    { value: 100, prefix: "", suffix: "%", label: t.stat3Label },
    { value: 0, prefix: "", suffix: "", label: t.stat4Label, custom: "∞" },
  ];

  return (
    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
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
              {t.statsLabel}
            </motion.span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold">
              {t.statsTitle} <span className="gradient-text">{t.statsTitleAccent}</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
