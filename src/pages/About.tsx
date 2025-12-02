import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AboutSection } from "@/components/AboutSection";
import { StatisticsBanner } from "@/components/StatisticsBanner";
import { PageHero } from "@/components/PageHero";
import pattern from "@/assets/food-pattern.jpg";

const About = () => {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: `url(${pattern})`,
        backgroundSize: "auto",
        backgroundRepeat: "repeat",
      }}
    >
      <Header />
      <PageHero title="About Us" current="About Us" />
      <main>
        <AboutSection />
        <StatisticsBanner />
      </main>
      <Footer />
    </div>
  );
};

export default About;
