import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import pattern from "@/assets/food-pattern.jpg";
import menuPage1 from "@/assets/menu-page-1.jpg";
import menuPage2 from "@/assets/menu-page-2.jpg";

const Menu = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageHero title="Our Menu" current="Menu" />
      
      <main className="w-full py-16 relative overflow-hidden">
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
          {/* Intro section */}
          <section className="max-w-4xl mx-auto text-center mb-16 px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground uppercase tracking-tight">
              Science-backed. Tech-preserved. <span className="text-primary">Creatively native.</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg md:text-xl">
              <p>
                We engineer our menu from the ground up to ensure peak hygiene and health.
              </p>
              <p>
                By infusing traditional roots with modern creativity, we redefine fresh.
              </p>
              <p className="text-foreground font-bold italic mt-4">
                Taste the future of our nation’s flavors.
              </p>
            </div>
          </section>

          {/* Visual Menu Display */}
          <section className="max-w-[90%] mx-auto space-y-12">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-primary/20">
              <img 
                src={menuPage1} 
                alt="Potatowala Menu Page 1" 
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-primary/20">
              <img 
                src={menuPage2} 
                alt="Potatowala Menu Page 2" 
                className="w-full h-auto"
              />
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Menu;
