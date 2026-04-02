import { motion, useInView, animate } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

// Analytics & social proof screenshots (edited versions)
import img1 from "../assets/d7e057a7-465d-462a-8775-012a30dbcea6 2.jpg";
import img2 from "../assets/5b47be2e-5cd0-4421-abe1-5ec07d9eb325 2.jpg";
import img3 from "../assets/986e3055-cd16-46d6-8ca3-d8a1889fc6a9 2.jpg";
import img4 from "../assets/978c2bc3-5a38-4898-a2e4-2c862ea52f95 2.jpg";
import img5 from "../assets/c693892f-6afd-453b-b023-e3bbe9836d59 2.jpg";
import img7 from "../assets/3bf91374-494d-4279-a2f7-929442f07758 2.jpg";
import img8 from "../assets/8a0a2a6a-7d3d-4de3-835a-7fa9c0b62bbf 2.jpg";
import img9 from "../assets/818e11e9-ddbf-485f-810a-5a384e51ae1c 2.jpg";
import img10 from "../assets/b83cafa2-91d0-44fe-a5da-4c72940f9ec2 2.jpg";
import img11 from "../assets/baebc606-f5a7-49df-8e28-6121e76ed64b 2.jpg";
import img12 from "../assets/f948431c-168f-49d6-be72-0f6ccc61173b 2.jpg";

const allImages = [img1, img2, img3, img4, img5, img7, img8, img9, img10, img11, img12];
const row1 = [img1, img2, img3, img4, img5];
const row2 = [img7, img8, img9, img10, img11, img12];

// ─── Animated Counter ────────────────────────────────────────────────────────
const Counter = ({
  target,
  suffix = "",
  prefix = "",
  inView,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  inView: boolean;
}) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(0, target, {
      duration: 2.2,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => ctrl.stop();
  }, [inView, target]);
  return (
    <span className="font-display font-black gradient-text text-3xl md:text-4xl">
      {prefix}
      {value.toLocaleString()}
      {suffix}
    </span>
  );
};

// ─── Stat Chip ────────────────────────────────────────────────────────────────
interface StatChipProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  custom?: string;
  delay: number;
  inView: boolean;
}
const StatChip = ({ value, prefix = "", suffix = "", label, custom, delay, inView }: StatChipProps) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ type: "spring", stiffness: 90, damping: 18, delay }}
    className="flex flex-col items-center gap-1 px-6 py-4 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm"
  >
    {custom ? (
      <span className="font-display font-black gradient-text text-3xl md:text-4xl">{custom}</span>
    ) : (
      <Counter target={value} prefix={prefix} suffix={suffix} inView={inView} />
    )}
    <span className="text-muted-foreground text-xs md:text-sm font-medium text-center leading-tight">
      {label}
    </span>
  </motion.div>
);

// ─── Lightbox ─────────────────────────────────────────────────────────────────
const Lightbox = ({
  src,
  index,
  total,
  onClose,
  onPrev,
  onNext,
}: {
  src: string;
  index: number;
  total: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) => {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Prev */}
      <button
        onClick={onPrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors border border-white/20 z-10"
        aria-label="Previous"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Image */}
      <motion.div
        key={src}
        initial={{ scale: 0.88, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 220, damping: 26 }}
        className="relative max-h-[88vh] max-w-xs w-full"
      >
        <img
          src={src}
          alt="Social proof screenshot"
          className="w-full h-full object-contain rounded-3xl shadow-2xl ring-1 ring-white/10"
          draggable={false}
        />
        {/* Counter pill */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm text-white/70 text-xs font-medium px-3 py-1 rounded-full">
          {index + 1} / {total}
        </div>
      </motion.div>

      {/* Next */}
      <button
        onClick={onNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors border border-white/20 z-10"
        aria-label="Next"
      >
        <ChevronRight size={22} />
      </button>

      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors border border-white/20"
        aria-label="Close"
      >
        <X size={18} />
      </button>
    </motion.div>
  );
};

// ─── Marquee Row ──────────────────────────────────────────────────────────────
const MarqueeRow = ({
  images,
  reverse = false,
  speed = 40,
  onImageClick,
}: {
  images: string[];
  reverse?: boolean;
  speed?: number;
  onImageClick: (src: string) => void;
}) => {
  const [paused, setPaused] = useState(false);
  // Triplicate for seamless loop on any screen size
  const items = [...images, ...images, ...images];

  return (
    <div
      className="overflow-hidden w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className={`flex gap-4 w-max ${reverse ? "animate-marquee-right" : "animate-marquee-left"}`}
        style={{
          animationDuration: `${speed}s`,
          animationPlayState: paused ? "paused" : "running",
          willChange: "transform",
        }}
      >
        {items.map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="flex-shrink-0 cursor-zoom-in group relative"
            onClick={() => onImageClick(src)}
          >
            <img
              src={src}
              alt={`Social proof ${(i % images.length) + 1}`}
              className="h-[17rem] w-auto rounded-2xl border border-white/10 shadow-xl shadow-black/50 object-cover"
              draggable={false}
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 rounded-2xl bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ring-2 ring-primary/40" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// ─── Main Section ─────────────────────────────────────────────────────────────
const SocialProofSection = () => {
  const headerRef = useRef(null);
  const statsRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-60px" });
  const { t } = useLanguage();

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback(
    (src: string) => {
      const idx = allImages.indexOf(src as string);
      setLightboxIndex(idx >= 0 ? idx : 0);
    },
    []
  );

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const prevImage = useCallback(() => {
    setLightboxIndex((i) => (i === null ? 0 : (i - 1 + allImages.length) % allImages.length));
  }, []);

  const nextImage = useCallback(() => {
    setLightboxIndex((i) => (i === null ? 0 : (i + 1) % allImages.length));
  }, []);

  const chips = [
    { value: 1016110, prefix: "",  suffix: "",  label: t.socialProofStat1 },
    { value: 334778,  prefix: "",  suffix: "",  label: t.socialProofStat2 },
    { value: 9635,    prefix: "+", suffix: "%", label: t.socialProofStat3 },
    { value: 8300,    prefix: "",  suffix: "+", label: t.socialProofStat4 },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-secondary/6 rounded-full blur-[180px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 relative z-10 mb-14" ref={headerRef}>
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
          className="text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={headerInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-5 px-4 py-1.5 rounded-full border border-primary/25 bg-primary/8"
          >
            {t.socialProofLabel}
          </motion.span>

          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-5">
            {t.socialProofTitle}{" "}
            <span className="gradient-text">{t.socialProofTitleAccent}</span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto"
          >
            {t.socialProofDesc}
          </motion.p>
        </motion.div>
      </div>

      {/* Stat chips */}
      <div className="max-w-5xl mx-auto px-6 relative z-10 mb-14" ref={statsRef}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {chips.map((chip, i) => (
            <StatChip
              key={i}
              value={chip.value}
              prefix={chip.prefix}
              suffix={chip.suffix}
              label={chip.label}
              delay={i * 0.1}
              inView={statsInView}
            />
          ))}
        </div>
      </div>

      {/* Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={headerInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.9, delay: 0.4 }}
        className="flex flex-col gap-5 relative z-10"
      >
        {[
          { images: row1, reverse: false, speed: 38 },
          { images: row2, reverse: true,  speed: 46 },
        ].map(({ images, reverse, speed }, rowIdx) => (
          <div key={rowIdx} className="relative">
            {/* Left fade */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            {/* Right fade */}
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            <MarqueeRow
              images={images}
              reverse={reverse}
              speed={speed}
              onImageClick={openLightbox}
            />
          </div>
        ))}
      </motion.div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          src={allImages[lightboxIndex]}
          index={lightboxIndex}
          total={allImages.length}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </section>
  );
};

export default SocialProofSection;
