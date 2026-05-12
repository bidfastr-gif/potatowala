import { lazy, Suspense } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { EnquirySection } from "@/components/EnquirySection";
import { Categories } from "@/components/Categories";
import pattern from "@/assets/food-pattern.webp";

// Lazy load non-critical sections
const AboutSection = lazy(() => import("@/components/AboutSection").then(m => ({ default: m.AboutSection })));
const StatisticsBanner = lazy(() => import("@/components/StatisticsBanner").then(m => ({ default: m.StatisticsBanner })));
const WhyChooseUs = lazy(() => import("@/components/WhyChooseUs").then(m => ({ default: m.WhyChooseUs })));
const OurPhilosophy = lazy(() => import("@/components/OurPhilosophy").then(m => ({ default: m.OurPhilosophy })));
const Footer = lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer })));

const SectionLoader = () => (
  <div className="py-20 flex justify-center">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${pattern})`,
              backgroundSize: "auto",
              backgroundRepeat: "repeat",
            }}
          />
        </div>
        <div className="relative z-10">
          <Hero />
          <EnquirySection />
          <Categories />
          <Suspense fallback={<SectionLoader />}>
            <AboutSection />
            <OurPhilosophy />
            <StatisticsBanner />
            <WhyChooseUs />
          </Suspense>
        </div>
      </main>
      <Suspense fallback={<div className="h-64 bg-primary/5" />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
