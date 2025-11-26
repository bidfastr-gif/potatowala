import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import heroImage from "@/assets/hero-loaded-fries.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-cream">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-5 py-2.5 rounded-md">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Welcome to Potatowala</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] text-foreground">
              Sip & Chew
              <br />
              <span className="text-primary">Loaded Fries</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed">
              From tasty bites to cool sips, all in one plate. Experience the perfect blend of crispy, cheesy, and absolutely delicious loaded fries.
            </p>
            
            <div className="flex flex-wrap gap-5 pt-2">
              <Button size="lg" className="hero-gradient hover:opacity-90 transition-opacity text-base px-8 py-6 h-auto rounded-md">
                Franchise Enquiry
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              
              <button className="flex items-center gap-3 group">
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <Play className="w-5 h-5 text-primary-foreground fill-primary-foreground ml-0.5" />
                </div>
              </button>
            </div>

            {/* Stats Badges */}
            <div className="flex flex-wrap gap-4 pt-6">
              <div className="bg-card border border-border rounded-xl px-6 py-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-card flex items-center justify-center text-sm font-bold">👨‍🍳</div>
                    <div className="w-10 h-10 rounded-full bg-accent/20 border-2 border-card flex items-center justify-center text-sm font-bold">👨‍🍳</div>
                    <div className="w-10 h-10 rounded-full bg-secondary border-2 border-card flex items-center justify-center text-sm font-bold">👨‍🍳</div>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">200+</p>
                    <p className="text-sm text-muted-foreground">Satisfied Customers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative lg:block">
            <div className="relative">
              <div className="relative z-10 rounded-full overflow-hidden w-[500px] h-[500px] mx-auto">
                <img 
                  src={heroImage} 
                  alt="Loaded Fries" 
                  className="w-full h-full object-cover scale-150"
                />
              </div>
            </div>
            
            {/* Decorative Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-accent/5 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
