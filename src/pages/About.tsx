import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AboutSection } from "@/components/AboutSection";
import { StatisticsBanner } from "@/components/StatisticsBanner";
import { PageHero } from "@/components/PageHero";
import pattern from "@/assets/food-pattern.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageHero title="About Us" current="About Us" />
      <main className="pb-16 md:pb-24 relative overflow-hidden">
        {/* Background Pattern for spacing area */}
        <div className="absolute inset-0 opacity-[0.08]">
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
          <AboutSection />
          <StatisticsBanner />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
