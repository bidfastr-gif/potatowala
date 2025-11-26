import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Phone, ChevronDown } from "lucide-react";
import logo from "@/assets/potatowala-logo.png";
import pattern from "@/assets/food-pattern.jpg";

export const Header = () => {
  return (
    <>
      {/* Main Header */}
      <header className="bg-primary text-primary-foreground border-b border-primary-foreground/10 sticky top-0 z-50 shadow-md relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url(${pattern})`,
            backgroundSize: 'auto',
            backgroundRepeat: 'repeat'
          }} />
        </div>
        <div className="container mx-auto px-4 py-3 relative z-10">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="Potatowala Logo - Premium Loaded Fries" 
                className="h-20 md:h-24 w-auto object-contain"
                style={{ imageRendering: 'crisp-edges' }}
              />
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="/" className="text-primary-foreground hover:text-primary-foreground/80 transition-colors font-medium">Home</a>
              <a href="/menu" className="text-primary-foreground hover:text-primary-foreground/80 transition-colors font-medium">Menu</a>
              <a href="/about" className="text-primary-foreground hover:text-primary-foreground/80 transition-colors font-medium">About</a>
              
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-primary-foreground hover:text-primary-foreground/80 transition-colors font-medium outline-none">
                  More
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-card border-border z-50 min-w-[200px]">
                  <DropdownMenuItem asChild>
                    <a href="/feedback" className="w-full cursor-pointer">Share Feedback</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="/about#testimonials" className="w-full cursor-pointer">Testimonials</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="#contact" className="w-full cursor-pointer">Contact</a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>
            
            {/* CTA */}
            <div className="flex items-center gap-4">
              <div className="hidden lg:flex items-center gap-2 text-primary-foreground">
                <Phone className="w-4 h-4" />
                <span className="font-semibold">+91 99415 22111</span>
              </div>
              <Button className="bg-[#F4D29C] text-gray-900 hover:bg-[#E8C488] transition-colors shadow-md font-semibold">
                Franchise Enquiry
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
