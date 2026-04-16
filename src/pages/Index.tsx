import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

// Lazy-load everything below the fold — loads only when needed
const AboutSection    = lazy(() => import("@/components/AboutSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const ProjectsSection = lazy(() => import("@/components/ProjectsSection"));
const StatsSection       = lazy(() => import("@/components/StatsSection"));
const ClientsSection     = lazy(() => import("@/components/ClientsSection"));
const SocialProofSection = lazy(() => import("@/components/SocialProofSection"));
const CtaSection      = lazy(() => import("@/components/CtaSection"));
const FooterSection   = lazy(() => import("@/components/FooterSection"));

// Invisible placeholder while a section loads
const SectionFallback = () => <div className="min-h-[200px]" />;

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <Suspense fallback={<SectionFallback />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <ServicesSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <ProjectsSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <StatsSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <ClientsSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <SocialProofSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <CtaSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <FooterSection />
      </Suspense>
    </div>
  );
};

export default Index;
