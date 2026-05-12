
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import farmingPhase from "@/assets/indian_potato_farming.png";
import manufacturingPhase from "@/assets/frozen-products-collage.jpg";
import foodItemsCollage from "@/assets/food-items-collage.jpg";

interface HeroSlide {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const slides: HeroSlide[] = [
  {
    title: "From the Roots of Quality",
    subtitle: "Sourcing",
    description:
      "Honest sourcing from local farmers. We start at the root to ensure every bite is traceable and premium.",
    image: farmingPhase,
  },
  {
    title: "The Evolution of Excellence- From Field to Freezer",
    subtitle: "Manufacturing",
    description:
      "Focus on the Science of Freshness. Explain how you transform raw potatoes into frozen form without losing the 'Hand Made' soul.",
    image: manufacturingPhase,
  },
  {
    title: "Served Fresh & Hot",
    subtitle: "Taste the future of our nation’s flavors.",
    description:
      "Science-backed. Tech-preserved. Creatively native. We engineer our menu from the ground up to ensure peak hygiene and health. By infusing traditional roots with modern creativity, we redefine fresh.",
    image: foodItemsCollage,
  },
];

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: number) => {
    if (index < 0) {
      setCurrentIndex(slides.length - 1);
    } else if (index >= slides.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goToSlide(currentIndex + 1);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [currentIndex]);

  const currentSlide = slides[currentIndex];

  return (
    <section
      id="home"
      className="relative min-h-[80vh] lg:min-h-screen flex items-center overflow-hidden bg-black"
    >
      {/* Background image like reference site */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.title}
            className={`absolute inset-0 transition-opacity duration-700 ${index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
              {...(index === 0 ? { fetchpriority: "high" } : {})}
              decoding={index === 0 ? "sync" : "async"}
              width={1920}
              height={1080}
            />
          </div>
        ))}
        {/* Dark gradient overlay for text readability and cinematic feel */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-10">
          {/* Left – Text block similar to waffle hero */}
          <div className="max-w-xl text-white space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-primary">
              {currentSlide.title}
            </h1>

            <p className="text-lg md:text-xl text-white font-bold tracking-wide">
              {currentSlide.subtitle}
            </p>

            <p className="text-sm md:text-base text-white/90 max-w-lg font-medium">
              {currentSlide.description}
            </p>

            <div className="mt-6">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="inline-flex items-center px-5 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg text-sm md:text-base hover:bg-primary/90 transition-colors">
                    For Enquiries
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-card border-border z-50 min-w-[220px]">
                  <DropdownMenuItem asChild>
                    <a href="/event-enquiry" className="w-full cursor-pointer">
                      Event Enquiry
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="/franchise-enquiry" className="w-full cursor-pointer">
                      Franchise Enquiry
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Right – empty spacer to mimic layout / keep CTA uncluttered */}
          <div className="hidden lg:block flex-1" />
        </div>
      </div>



      {/* Dots indicator at bottom center */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
              ? "bg-white w-6"
              : "bg-white/40 w-2 hover:bg-white/70"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
