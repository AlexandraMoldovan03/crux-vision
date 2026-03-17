import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Calendar, Trophy, ShoppingCart, Code, Zap } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext"

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const services = [
    { icon: Globe, title: t.svc1Title, description: t.svc1Desc },
    { icon: Calendar, title: t.svc2Title, description: t.svc2Desc },
    { icon: Trophy, title: t.svc3Title, description: t.svc3Desc },
    { icon: ShoppingCart, title: t.svc4Title, description: t.svc4Desc },
    { icon: Code, title: t.svc5Title, description: t.svc5Desc },
    { icon: Zap, title: t.svc6Title, description: t.svc6Desc },
  ];

  return (
    <section id="services" className="relative section-padding">
      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="text-sm font-medium tracking-widest uppercase text-primary mb-4 block">{t.servicesLabel}</span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold">
            {t.servicesTitle} <span className="gradient-text">{t.servicesTitleAccent}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.1 }} className="group glass-card p-8 hover-glow cursor-pointer transition-all duration-500 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-500" style={{ background: "linear-gradient(135deg, hsl(var(--primary) / 0.15), hsl(var(--secondary) / 0.15))" }}>
                <service.icon className="w-7 h-7 text-primary group-hover:text-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
