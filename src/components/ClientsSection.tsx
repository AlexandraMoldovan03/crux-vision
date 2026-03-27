import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "../contexts/LanguageContext";

// ─── Brand data ───────────────────────────────────────────────────────────────
const brands = [
  { name: "BSides Transilvania",  category: "Event" },
  { name: "Dacia",                category: "Shop" },
  { name: "Crucs BarberShop",     category: "Grooming" },
  { name: "MobilFox",             category: "Tech" },
  { name: "Karlsburg Residence",  category: "Real Estate" },
  { name: "Unitytattohub",        category: "Studio" },
  { name: "Beach Please! Festival", category: "Festival" },
  { name: "Paragraf",             category: "Restaurant" },
  { name: "Cofetăria Paragraf",   category: "F&B" },
  { name: "Preciosa",             category: "Restaurant" },
  { name: "Diffusion",            category: "Festival" },
  { name: "flashtatto",           category: "Tattoo" },
  { name: "Flash Details",        category: "Detailing" },
  { name: "Barchefs",             category: "Hospitality" },
];

// Split into two rows
const row1 = brands.slice(0, 7);
const row2 = brands.slice(7);

// ─── Single brand pill ────────────────────────────────────────────────────────
const BrandPill = ({ name, category }: { name: string; category: string }) => (
  <div className="flex-shrink-0 group relative mx-2">
    <div className="flex items-center gap-3 px-5 py-3.5 rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm hover:border-primary/30 hover:bg-primary/[0.06] transition-all duration-300 cursor-default select-none">
      {/* Dot accent */}
      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0 group-hover:bg-primary transition-colors duration-300" />

      {/* Brand name */}
      <span className="font-display font-semibold text-sm md:text-base text-white/80 group-hover:text-white transition-colors duration-300 whitespace-nowrap">
        {name}
      </span>

      {/* Category badge */}
      <span className="text-[10px] font-medium tracking-wide uppercase text-muted-foreground/60 group-hover:text-primary/70 transition-colors duration-300 whitespace-nowrap">
        {category}
      </span>
    </div>

    {/* Subtle glow on hover */}
    <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10" />
  </div>
);

// ─── Marquee strip ────────────────────────────────────────────────────────────
const MarqueeStrip = ({
  items,
  reverse = false,
  speed = 50,
}: {
  items: typeof brands;
  reverse?: boolean;
  speed?: number;
}) => {
  // Triplicate for seamless loop
  const tripled = [...items, ...items, ...items];

  return (
    <div className="overflow-hidden w-full relative">
      <div
        className={`flex w-max ${reverse ? "animate-marquee-right" : "animate-marquee-left"}`}
        style={{
          animationDuration: `${speed}s`,
          willChange: "transform",
        }}
      >
        {tripled.map((brand, i) => (
          <BrandPill key={i} name={brand.name} category={brand.category} />
        ))}
      </div>
    </div>
  );
};

// ─── Main Section ─────────────────────────────────────────────────────────────
const ClientsSection = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });
  const { t } = useLanguage();

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-primary/5 rounded-full blur-[140px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      </div>

      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 mb-12 relative z-10" ref={headerRef}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, type: "spring", stiffness: 80 }}
          className="text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={headerInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.45 }}
            className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-4 px-4 py-1.5 rounded-full border border-primary/25 bg-primary/8"
          >
            {t.clientsLabel}
          </motion.span>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t.clientsTitle}{" "}
            <span className="gradient-text">{t.clientsTitleAccent}</span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-muted-foreground text-base md:text-lg max-w-lg mx-auto"
          >
            {t.clientsDesc}
          </motion.p>
        </motion.div>
      </div>

      {/* Marquee rows */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={headerInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.35 }}
        className="flex flex-col gap-4 relative z-10"
      >
        {[
          { items: row1, reverse: false, speed: 45 },
          { items: row2, reverse: true,  speed: 52 },
        ].map(({ items, reverse, speed }, idx) => (
          <div key={idx} className="relative">
            {/* Edge fades */}
            <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            <MarqueeStrip items={items} reverse={reverse} speed={speed} />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default ClientsSection;
