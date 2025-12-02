import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Testimonials as TestimonialsSection } from "@/components/Testimonials";

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-8">
        <TestimonialsSection limit={null} /> {/* Show all testimonials (no limit) */}
      </main>
      <Footer />
    </div>
  );
};

export default Testimonials;
