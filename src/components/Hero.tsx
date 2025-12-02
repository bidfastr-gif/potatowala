
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import loadedFries from "@/assets/hero-loaded-fries.jpg";
import chocoSpringPlaceholder from "@/assets/choco-spring.jpg";
import nachosPlaceholder from "@/assets/nachos.jpg";
import springPotatoPlaceholder from "@/assets/spring-potato.jpg";

interface HeroSlide {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const slides: HeroSlide[] = [
  {
    title: "Drippin' in Indulgence",
    subtitle: "Signature Loaded Fries",
    description:
      "Relish our chef-crafted loaded fries – stacked high with molten cheese, bold sauces and crispy toppings for the ultimate comfort bite.",
    image: loadedFries,
  },
  {
    title: "Choco Spring Magic",
    subtitle: "Crispy • Chocolatey • Fun",
    description:
      "Crisp potato spirals dipped in rich chocolate – a playful fusion snack that’s perfect for dessert cravings and celebrations.",
    image: chocoSpringPlaceholder,
  },
  {
    title: "Nachos Overload",
    subtitle: "Layered with Flavour",
    description:
      "Golden nachos loaded with cheese, jalapeños and our secret sauces, creating an explosion of flavours in every crunchy bite.",
    image: nachosPlaceholder,
  },
  {
    title: "Spring Potato Fiesta",
    subtitle: "Street-Style Favourite",
    description:
      "Our iconic spring potatoes – crispy on the outside, fluffy inside, finished with bold seasonings that keep you coming back.",
    image: springPotatoPlaceholder,
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
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/20" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-10">
          {/* Left – Text block similar to waffle hero */}
          <div className="max-w-xl text-white space-y-6">
            <div className="inline-flex items-center px-4 py-1.5 bg-white/10 border border-white/30 rounded-full text-xs md:text-sm tracking-[0.2em] uppercase">
              New Drop!
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              {currentSlide.title}
            </h1>

            <p className="text-lg md:text-xl text-amber-200 font-semibold">
              {currentSlide.subtitle}
            </p>

            <p className="text-sm md:text-base text-white/80 max-w-lg">
              {currentSlide.description}
            </p>

            <div className="mt-6">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="inline-flex items-center px-5 py-3 rounded-full bg-amber-400 text-black font-semibold shadow-lg text-sm md:text-base hover:bg-amber-300 transition-colors">
                    For Enquiry
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

      {/* Manual navigation arrows like reference */}
      <button
        onClick={() => goToSlide(currentIndex - 1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/60 hover:bg-black/80 text-white w-10 h-10 flex items-center justify-center transition-colors"
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        onClick={() => goToSlide(currentIndex + 1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/60 hover:bg-black/80 text-white w-10 h-10 flex items-center justify-center transition-colors"
        aria-label="Next slide"
      >
        ›
      </button>

      {/* Dots indicator at bottom center */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
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
