import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AboutSection } from "@/components/AboutSection";
import { Testimonials } from "@/components/Testimonials";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <Testimonials />
      <Footer />
    </div>
  );
};

export default About;
