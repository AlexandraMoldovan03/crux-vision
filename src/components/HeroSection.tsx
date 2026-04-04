import { motion } from "framer-motion";
import sharkLogo from "@/assets/cruxLogo.png";
import heroBg from "@/assets/hero-bg.png";
import { useLanguage } from "../contexts/LanguageContext";

const HeroSection = () => {
  const { t, lang } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroBg})` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-secondary/10 blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
       <motion.div
  initial={{ opacity: 0, scale: 0.85, y: -10 }}
  animate={{ opacity: 1, scale: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
  className="mb-6 md:mb-8 flex justify-center"
>
  <div className="relative flex items-center justify-center">
    <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl scale-125" />
    <img
      src={sharkLogo}
      alt="Crux Vision"
      fetchPriority="high"
      decoding="async"
      className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain drop-shadow-[0_0_40px_rgba(59,130,246,0.4)]"
    />
  </div>
</motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={`font-display font-black leading-[1.05] tracking-tight mb-6 whitespace-nowrap ${
            lang === "ro"
              ? "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
              : "text-4xl sm:text-5xl md:text-7xl lg:text-8xl"
          }`}
        >
          {t.heroLine1}
          <br />
          <span className="gradient-text">{t.heroLine2}</span>
          <br />
          {t.heroLine3}
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="text-muted-foreground text-base md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.heroDesc}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects" className="group relative px-8 py-4 rounded-full font-display font-semibold text-primary-foreground overflow-hidden transition-all duration-500" style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))" }}>
            <span className="relative z-10">{t.viewProjects}</span>
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: "0 0 40px 10px hsl(var(--primary) / 0.5), 0 0 80px 20px hsl(var(--secondary) / 0.3)" }} />
          </a>
          <a href="#contact" className="group relative px-8 py-4 rounded-full font-display font-semibold text-foreground glass-card gradient-border hover-glow transition-all duration-500">
            {t.startProject}
          </a>
        </motion.div>

        {/* Shark motto — registered trademark */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.2 }}
          className="mt-14 flex flex-col items-center gap-3"
        >
          <div className="flex items-center gap-4 w-full justify-center">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-white/15 to-white/15" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent via-white/15 to-white/15" />
          </div>
          <div className="relative inline-flex items-baseline gap-1 select-none">
            <span
              className="font-display text-2xl sm:text-3xl md:text-4xl font-black italic tracking-tight"
              style={{
                backgroundImage: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                filter: "drop-shadow(0 0 24px hsl(var(--primary) / 0.35))",
              }}
            >
              Be a shark in the internet ocean
            </span>
            <sup
              className="text-[10px] sm:text-xs font-bold not-italic ml-0.5 leading-none"
              style={{ color: "hsl(var(--primary))", verticalAlign: "super" }}
              title="Marcă înregistrată"
            >
              ®
            </sup>
          </div>
          <p className="text-muted-foreground/40 text-[10px] tracking-[0.2em] uppercase font-medium">
           Crux Vision
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
