import { CheckCircle2 } from "lucide-react";
import pattern from "@/assets/food-pattern.jpg";

export const ProcessSection = () => {
  const steps = [
    {
      title: "Direct Sourcing",
      subtitle: "The Farm Connection",
      description: "We work directly with local farmers to select the finest, highest-grade potatoes. No middlemen, just pure quality from the roots.",
    },
    {
      title: "Precision Processing",
      subtitle: "Maintaining Freshness",
      description: "Our potatoes are cleaned and processed in our own state-of-the-art facilities, ensuring peak hygiene and quality at every step.",
    },
    {
      title: "Flash Freezing",
      subtitle: "Locking in the Crunch",
      description: "By flash-freezing our products immediately after processing, we preserve the natural texture and flavor for the perfect crunch.",
    },
    {
      title: "To Your Plate",
      subtitle: "The Final Transformation",
      description: "Our outlet chefs fry every order to perfection, serving you hot, crispy delights that are made fresh, every single time.",
    },
  ];

  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
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
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-primary-foreground/80 uppercase tracking-widest font-bold text-sm mb-2 block">
            From Farm to Fork
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            The Potatowala Journey
          </h2>
          <p className="text-lg opacity-90 leading-relaxed font-medium">
            We believe that great food starts long before it hits the fryer. Follow the journey of our potatoes from the fertile soil to your favorite snack box.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-[2px] bg-primary-foreground/20 z-0 -translate-x-10" />
              )}
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-white/10 border-2 border-primary-foreground/20 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all duration-300">
                  <span className="text-3xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-primary-foreground/70 uppercase tracking-wide font-semibold mb-4">{step.subtitle}</p>
                <p className="text-primary-foreground/90 leading-relaxed text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
