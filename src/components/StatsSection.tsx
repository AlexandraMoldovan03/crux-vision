import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext"

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

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
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

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="text-sm font-medium tracking-widest uppercase text-primary mb-4 block">{t.statsLabel}</span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold">
            {t.statsTitle} <span className="gradient-text">{t.statsTitleAccent}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.15 }} className="text-center">
              {stat.custom ? (
                <span className="font-display text-5xl md:text-6xl font-black gradient-text">{stat.custom}</span>
              ) : (
                <Counter target={stat.value} prefix={stat.prefix} suffix={stat.suffix} inView={isInView} />
              )}
              <p className="text-muted-foreground mt-3 text-sm md:text-base font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
