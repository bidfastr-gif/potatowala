import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { AboutSection } from "@/components/AboutSection";
import { MenuShowcase } from "@/components/MenuShowcase";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Categories />
        
        <MenuShowcase />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
