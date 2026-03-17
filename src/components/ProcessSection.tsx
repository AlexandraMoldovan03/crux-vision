import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Palette, Code, Gauge, Rocket } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext"

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const steps = [
    { icon: Lightbulb, title: t.step1Title, description: t.step1Desc },
    { icon: Palette, title: t.step2Title, description: t.step2Desc },
    { icon: Code, title: t.step3Title, description: t.step3Desc },
    { icon: Gauge, title: t.step4Title, description: t.step4Desc },
    { icon: Rocket, title: t.step5Title, description: t.step5Desc },
  ];

  return (
    <section id="process" className="relative section-padding">
      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="text-sm font-medium tracking-widest uppercase text-primary mb-4 block">{t.processLabel}</span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold">
            {t.processTitle} <span className="gradient-text">{t.processTitleAccent}</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent md:-translate-x-px" />
          {steps.map((step, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: i * 0.2 }} className={`relative flex items-start gap-6 mb-12 last:mb-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
              <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full border-2 border-primary bg-background -translate-x-1/2 mt-1 z-10 glow-blue" />
              <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <div className={`glass-card p-6 hover-glow transition-all duration-500 ${i % 2 === 0 ? "md:ml-auto" : ""}`}>
                  <div className={`flex items-center gap-3 mb-3 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, hsl(var(--primary) / 0.2), hsl(var(--secondary) / 0.2))" }}>
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
