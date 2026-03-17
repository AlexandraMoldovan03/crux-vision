import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import triggerExercises from "@/assets/triggerform-exercises.png";
import triggerPain from "@/assets/triggerform-pain.png";
import triggerNutrition from "@/assets/triggerform-nutrition.png";
import sunTennis from "@/assets/suntennis-bracket.png";
import disTim from "@/assets/distim-home.png";
import profCoach from "@/assets/profcoach-home.png";
import { useLanguage } from "../contexts/LanguageContext";

type Project = {
  image: string;
  title: string;
  description: string;
  tag: string;
  accent: string;
  tagStyle: string;
  dotColor: string;
};

const ProjectCard = ({ project, i }: { project: Project; i: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ type: "spring", stiffness: 70, damping: 18, delay: i * 0.12 }}
      whileHover={{ y: -6, transition: { type: "spring", stiffness: 300 } }}
      whileTap={{ scale: 0.98 }}
      className="group glass-card overflow-hidden hover-glow transition-colors duration-500 flex flex-col"
    >
      <div className="relative overflow-hidden aspect-video">
        <div className={`absolute inset-0 bg-gradient-to-b ${project.accent} z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        <img loading="lazy" decoding="async"
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <span className={`inline-block text-xs font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full mb-3 w-fit ${project.tagStyle}`}>
          {project.tag}
        </span>
        <h3 className="font-display text-lg font-bold mb-2 text-foreground leading-snug">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });
  const featuredRef = useRef(null);
  const featuredInView = useInView(featuredRef, { once: true, margin: "-60px" });
  const { t } = useLanguage();

  const webProjects: Project[] = [
    {
      image: sunTennis,
      title: t.proj2Title,
      description: t.proj2Desc,
      tag: t.proj2Tag,
      accent: "from-green-500/20 to-emerald-500/5",
      tagStyle: "text-green-400 bg-green-400/10 border border-green-400/20",
      dotColor: "bg-green-400",
    },
    {
      image: disTim,
      title: t.proj3Title,
      description: t.proj3Desc,
      tag: t.proj3Tag,
      accent: "from-sky-500/20 to-blue-500/5",
      tagStyle: "text-sky-400 bg-sky-400/10 border border-sky-400/20",
      dotColor: "bg-sky-400",
    },
    {
      image: profCoach,
      title: t.proj4Title,
      description: t.proj4Desc,
      tag: t.proj4Tag,
      accent: "from-amber-500/20 to-orange-500/5",
      tagStyle: "text-amber-400 bg-amber-400/10 border border-amber-400/20",
      dotColor: "bg-amber-400",
    },
  ];

  return (
    <section id="projects" className="relative section-padding">
      <div className="max-w-7xl mx-auto">

        {/* ── Section Header ── */}
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
              {t.projectsLabel}
            </motion.span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold">
              {t.projectsTitle}{" "}
              <span className="gradient-text">{t.projectsTitleAccent}</span>
            </h2>
          </motion.div>
        </div>

        {/* ── Featured: TriggerForm ── */}
        <div ref={featuredRef}>
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={featuredInView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: "spring", stiffness: 60, damping: 20 }}
            className="group glass-card overflow-hidden hover-glow mb-8 gradient-border"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[420px]">

              {/* Left — Text content */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={featuredInView ? { opacity: 1, x: 0 } : {}}
                transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.15 }}
                className="p-8 md:p-12 flex flex-col justify-center order-2 lg:order-1"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full text-primary bg-primary/10 border border-primary/20">
                    {t.proj1Tag}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    {t.featuredBadge}
                  </span>
                </div>

                <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground leading-tight">
                  {t.proj1Title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-8 max-w-md text-sm md:text-base">
                  {t.proj1Desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {["React Native", "AI / ML", "Health Tech", "iOS & Android"].map((tech, idx) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={featuredInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.3 + idx * 0.07, type: "spring", stiffness: 120 }}
                      className="text-xs px-2.5 py-1 rounded-md bg-muted text-muted-foreground border border-border"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Right — Phone mockup collage */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={featuredInView ? { opacity: 1, x: 0 } : {}}
                transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.2 }}
                className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-[#0d1117] to-zinc-900 min-h-[320px] lg:min-h-0 order-1 lg:order-2 flex items-end justify-center"
              >
                <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute top-10 right-10 w-24 h-24 bg-blue-500/8 rounded-full blur-2xl pointer-events-none" />

                <div
                  className="absolute bottom-0 shadow-2xl"
                  style={{ left: "6%", transform: "rotate(-8deg) translateY(12px)", zIndex: 1 }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 rounded-[22px] ring-1 ring-white/10 pointer-events-none z-10" />
                    <img loading="lazy" decoding="async"
                      src={triggerPain}
                      alt="TriggerForm pain localization screen"
                      className="w-[110px] md:w-[130px] rounded-[22px] object-cover"
                      style={{ aspectRatio: "9/19.5" }}
                    />
                  </div>
                </div>

                <div
                  className="relative shadow-[0_20px_80px_-10px_rgba(59,130,246,0.4)]"
                  style={{ marginBottom: "-16px", zIndex: 3 }}
                >
                  <div className="absolute inset-0 rounded-[22px] ring-1 ring-primary/30 pointer-events-none z-10" />
                  <img loading="lazy" decoding="async"
                    src={triggerExercises}
                    alt="TriggerForm exercise library screen"
                    className="w-[130px] md:w-[155px] rounded-[22px] object-cover"
                    style={{ aspectRatio: "9/19.5" }}
                  />
                </div>

                <div
                  className="absolute bottom-0 shadow-2xl"
                  style={{ right: "6%", transform: "rotate(8deg) translateY(12px)", zIndex: 1 }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 rounded-[22px] ring-1 ring-white/10 pointer-events-none z-10" />
                    <img loading="lazy" decoding="async"
                      src={triggerNutrition}
                      alt="TriggerForm nutrition screen"
                      className="w-[110px] md:w-[130px] rounded-[22px] object-cover"
                      style={{ aspectRatio: "9/19.5" }}
                    />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />
              </motion.div>

            </div>
          </motion.div>
        </div>

        {/* ── Web Projects Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {webProjects.map((project, i) => (
            <ProjectCard key={i} project={project} i={i} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
