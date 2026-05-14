import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import cruxLogo from "@/assets/cruxLogo-transparent.png";
import { useLanguage } from "../contexts/LanguageContext";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const navRef = useRef<HTMLElement>(null);

  const navLinks = [
    { label: t.about, href: "#about" },
    { label: t.services, href: "#services" },
    { label: t.projects, href: "#projects" },
    { label: t.contact, href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      if (mobileOpen) setMobileOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mobileOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    if (mobileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || mobileOpen
          ? "glass-card border-b border-glass-border shadow-lg shadow-background/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2 z-10 shrink-0">
          <img
            src={cruxLogo}
            alt="Crux Vision"
            className="h-12 lg:h-16 w-auto object-contain"
            style={{ filter: "brightness(1.8) saturate(1.1)" }}
          />
          <span className="font-display font-bold text-lg lg:text-xl text-foreground tracking-wide">
            CRUX <span className="gradient-text">VISION</span>
          </span>
        </a>

        {/* Desktop nav — visible only on lg+ */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-lg hover:bg-white/5 group"
            >
              {link.label}
              {/* underline slide-in */}
              <span className="absolute bottom-1 left-3 right-3 h-px bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
            </a>
          ))}
        </div>

        {/* Right side actions — desktop */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === "en" ? "ro" : "en")}
            className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-glass-border text-xs font-semibold text-muted-foreground
              hover:text-foreground hover:border-primary/50 hover:bg-primary/5
              transition-all duration-300 overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className={`relative z-10 transition-colors duration-200 ${lang === "en" ? "text-foreground" : "text-muted-foreground"}`}>EN</span>
            <span className="relative z-10 text-muted-foreground/40">|</span>
            <span className={`relative z-10 transition-colors duration-200 ${lang === "ro" ? "text-foreground" : "text-muted-foreground"}`}>RO</span>
          </button>

          {/* CTA */}
          <a
            href="#contact"
            className="glass-card px-4 xl:px-5 py-2 xl:py-2.5 text-sm font-medium text-foreground gradient-border rounded-full
              transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.5)]
              active:scale-95 whitespace-nowrap"
          >
            {t.startProject}
          </a>
        </div>

        {/* Hamburger — visible on < lg */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden relative z-10 w-10 h-10 flex items-center justify-center rounded-xl
            border transition-all duration-300 active:scale-90
            ${mobileOpen
              ? "bg-primary/15 border-primary/40 shadow-[0_0_12px_2px_hsl(var(--primary)/0.25)]"
              : "glass-card border-glass-border hover:border-primary/40 hover:bg-primary/10 hover:shadow-[0_0_12px_2px_hsl(var(--primary)/0.2)]"
            }`}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.span
                key="close"
                initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                transition={{ duration: 0.2 }}
                className="text-primary"
              >
                <X size={18} strokeWidth={2.5} />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                transition={{ duration: 0.2 }}
                className="text-foreground"
              >
                <Menu size={18} strokeWidth={2} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile / tablet menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
            className="lg:hidden border-t border-glass-border"
          >
            <div className="flex flex-col px-4 py-3 gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.055, duration: 0.22 }}
                  className="flex items-center gap-3 py-3 px-3 rounded-xl text-foreground font-medium text-base
                    hover:bg-white/5 hover:text-primary transition-all duration-200 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary group-hover:shadow-[0_0_6px_2px_hsl(var(--primary)/0.4)] transition-all duration-200" />
                  {link.label}
                </motion.a>
              ))}

              <div className="my-2 h-px bg-glass-border/60" />

              {/* Language toggle mobile */}
              <motion.button
                onClick={() => setLang(lang === "en" ? "ro" : "en")}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.055, duration: 0.22 }}
                className="flex items-center gap-3 py-3 px-3 rounded-xl text-muted-foreground font-medium text-sm
                  hover:bg-white/5 hover:text-foreground transition-all duration-200"
              >
                <span className="text-base">{lang === "en" ? "🇷🇴" : "🇬🇧"}</span>
                {lang === "en" ? "Română" : "English"}
              </motion.button>

              {/* CTA mobile */}
              <motion.a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (navLinks.length + 1) * 0.055, duration: 0.22 }}
                className="mt-1 mb-1 glass-card px-5 py-3 text-sm font-medium text-center text-foreground gradient-border rounded-full
                  hover:shadow-[0_0_25px_-5px_hsl(var(--primary)/0.4)] transition-all duration-300 active:scale-95"
              >
                {t.startProject}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
