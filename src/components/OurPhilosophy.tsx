import pattern from "@/assets/food-pattern.jpg";

export const OurPhilosophy = () => {
  return (
    <section className="pt-20 pb-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
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

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-primary uppercase tracking-widest font-bold text-sm mb-4 block">
            What Drives Us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            Our Philosophy
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12 mt-16">
            <div className="space-y-4">
              <div className="text-4xl font-bold text-primary/50">01</div>
              <h3 className="text-xl font-bold">Uncompromising Quality</h3>
              <p className="text-muted-foreground leading-relaxed">
                We never cut corners. From the quality of our oil to the temperature of our fryers, every detail is managed to ensure the perfect crunch.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="text-4xl font-bold text-primary/50">02</div>
              <h3 className="text-xl font-bold">Absolute Transparency</h3>
              <p className="text-muted-foreground leading-relaxed">
                We believe you should know exactly where your food comes from. That's why we're open about our sourcing and manufacturing processes.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="text-4xl font-bold text-primary/50">03</div>
              <h3 className="text-xl font-bold">Potato Innovation</h3>
              <p className="text-muted-foreground leading-relaxed">
                We're on a mission to redefine what's possible with a potato. We constantly experiment with new shapes, textures, and flavors.
              </p>
            </div>
          </div>
          
          <div className="mt-20 p-8 md:p-12 bg-primary text-primary-foreground rounded-3xl shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700" />
            <p className="text-2xl md:text-3xl font-bold italic relative z-10 leading-relaxed">
              "To us, a potato isn't just a vegetable. It's a canvas for flavor, a vessel for joy, and the heart of every meal we serve."
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <div className="h-[2px] w-12 bg-primary-foreground/30" />
              <span className="uppercase tracking-widest font-bold text-sm">The Potatowala Team</span>
              <div className="h-[2px] w-12 bg-primary-foreground/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
