import pattern from "@/assets/food-pattern.jpg";
import { Home } from "lucide-react";

interface PageHeroProps {
  title: string;
  current: string;
}

export const PageHero = ({ title, current }: PageHeroProps) => {
  return (
    <section className="relative py-16 bg-gradient-to-b from-primary/90 to-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${pattern})`,
            backgroundSize: "auto",
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 mb-6 text-white/80 text-sm">
            <a
              href="/"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <Home className="w-4 h-4" />
              Home
            </a>
            <span>/</span>
            <span className="text-white">{current}</span>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
};


