import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  TrendingUp,
  Smartphone,
  Film,
  Palette,
  Monitor,
  Megaphone,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Category {
  icon: LucideIcon;
  accentColor: string;
  iconBg: string;
  title: string;
  description: string;
  tags: string[];
  serviceValue: string;
}

// ─── Category Card ────────────────────────────────────────────────────────────
const CategoryCard = ({ cat, i, onSelect, ctaLabel }: {
  cat: Category;
  i: number;
  onSelect: (value: string) => void;
  ctaLabel: string;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = cat.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ type: "spring", stiffness: 75, damping: 18, delay: i * 0.08 }}
      whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 24 } }}
      className="group glass-card flex flex-col overflow-hidden"
    >
      {/* Coloured top accent bar */}
      <div className="h-1 w-full" style={{ background: cat.accentColor }} />

      <div className="px-6 pb-6 pt-1 flex flex-col gap-4 flex-1">
        {/* Icon + Title */}
        <div className="flex items-start gap-4 mt-1">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
            style={{ background: cat.iconBg }}
          >
            <Icon className="w-5 h-5 text-foreground/80" />
          </div>
          <h3 className="font-display text-lg font-bold text-foreground leading-snug pt-1">
            {cat.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed">
          {cat.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {cat.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA button */}
        <div className="mt-auto pt-2">
          <button
            onClick={() => onSelect(cat.serviceValue)}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold
              border border-white/10 bg-white/[0.03] text-muted-foreground
              hover:border-primary/40 hover:bg-primary/8 hover:text-foreground
              active:scale-[0.97] transition-all duration-200 group/btn"
          >
            <span>{ctaLabel}</span>
            <ArrowRight
              size={14}
              className="transition-transform duration-200 group-hover/btn:translate-x-1"
            />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// ─── Main Section ─────────────────────────────────────────────────────────────
const ServicesSection = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });
  const { t, lang, selectService } = useLanguage();
  const ro = lang === "ro";

  const ctaLabel = ro ? "Cere ofertă" : "Get a quote";

  const categories: Category[] = [
    {
      icon: TrendingUp,
      accentColor: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)))",
      iconBg: "hsl(var(--primary) / 0.15)",
      title: t.svcCat1Title,
      description: t.svcCat1Desc,
      serviceValue: "marketing",
      tags: ro
        ? ["Reclame Plătite", "Email Marketing", "Campanii Creative", "Consultanță"]
        : ["Paid Advertising", "Email Marketing", "Creative Campaigns", "Consulting"],
    },
    {
      icon: Smartphone,
      accentColor: "linear-gradient(90deg, hsl(var(--secondary)), hsl(var(--accent)))",
      iconBg: "hsl(var(--secondary) / 0.15)",
      title: t.svcCat2Title,
      description: t.svcCat2Desc,
      serviceValue: "social-media",
      tags: ro
        ? ["Instagram & TikTok", "Facebook", "Creștere Organică", "Rapoarte Lunare"]
        : ["Instagram & TikTok", "Facebook", "Organic Growth", "Monthly Reports"],
    },
    {
      icon: Film,
      accentColor: "linear-gradient(90deg, hsl(var(--accent)), hsl(var(--primary)))",
      iconBg: "hsl(var(--accent) / 0.15)",
      title: t.svcCat3Title,
      description: t.svcCat3Desc,
      serviceValue: "content",
      tags: ro
        ? ["Fotografii & Video", "Reels & TikToks", "Influencer Marketing", "UGC"]
        : ["Photos & Video", "Reels & TikToks", "Influencer Marketing", "UGC"],
    },
    {
      icon: Palette,
      accentColor: "linear-gradient(90deg, hsl(var(--secondary)), hsl(var(--primary)))",
      iconBg: "hsl(var(--secondary) / 0.15)",
      title: t.svcCat4Title,
      description: t.svcCat4Desc,
      serviceValue: "design",
      tags: ro
        ? ["Logo & Identitate", "Cărți de Vizită", "Pliante & Meniuri", "Graphic Design"]
        : ["Logo & Identity", "Business Cards", "Flyers & Menus", "Graphic Design"],
    },
    {
      icon: Monitor,
      accentColor: "linear-gradient(90deg, hsl(var(--primary)), hsl(220 80% 65%))",
      iconBg: "hsl(var(--primary) / 0.15)",
      title: t.svcCat5Title,
      description: t.svcCat5Desc,
      serviceValue: "web",
      tags: ro
        ? ["Site de Prezentare", "Magazin Online", "Landing Page", "SEO"]
        : ["Presentation Website", "Online Store", "Landing Page", "SEO"],
    },
    {
      icon: Megaphone,
      accentColor: "linear-gradient(90deg, hsl(var(--accent)), hsl(var(--secondary)))",
      iconBg: "hsl(var(--accent) / 0.15)",
      title: t.svcCat6Title,
      description: t.svcCat6Desc,
      serviceValue: "pr-events",
      tags: ro
        ? ["Organizare Evenimente", "Relații Publice", "Promovare", "Parteneriate"]
        : ["Event Management", "Public Relations", "Promotion", "Partnerships"],
    },
  ];

  return (
    <section id="services" className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-secondary/4 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={headerInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-5 px-4 py-1.5 rounded-full border border-primary/25 bg-primary/8"
          >
            {t.servicesLabel}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, type: "spring", stiffness: 80, delay: 0.06 }}
            className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-5"
          >
            {t.servicesTitle}{" "}
            <span className="gradient-text">{t.servicesTitleAccent}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-6"
          >
            {t.servicesDesc}
          </motion.p>

          {/* Agency pill */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.26 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/12 bg-white/4"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow flex-shrink-0" />
            <span className="text-xs font-medium text-muted-foreground tracking-wide">
              {t.agencyBadge}
            </span>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.title} cat={cat} i={i} onSelect={selectService} ctaLabel={ctaLabel} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
