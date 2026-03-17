import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Calendar, Trophy, ShoppingCart, Code, Zap } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 18,
      delay: i * 0.08,
    },
  }),
};

const ServiceCard = ({ service, i }: { service: { icon: React.ElementType; title: string; description: string }; i: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      custom={i}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{ y: -8, scale: 1.02, transition: { type: "spring", stiffness: 300 } }}
      whileTap={{ scale: 0.97 }}
      className="group glass-card p-8 hover-glow cursor-pointer transition-colors duration-500"
    >
      <motion.div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
        style={{ background: "linear-gradient(135deg, hsl(var(--primary) / 0.15), hsl(var(--secondary) / 0.15))" }}
      >
        <service.icon className="w-7 h-7 text-primary group-hover:text-foreground transition-colors duration-300" />
      </motion.div>
      <h3 className="font-display text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
    </motion.div>
  );
};

const ServicesSection = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });
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
      <div className="max-w-7xl mx-auto">
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
              {t.servicesLabel}
            </motion.span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold">
              {t.servicesTitle} <span className="gradient-text">{t.servicesTitleAccent}</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
