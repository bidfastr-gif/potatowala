import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import logo from "@/assets/potatowala-logo.png";
import pattern from "@/assets/food-pattern.jpg";
import swiggyLogo from "@/assets/swiggy-logo.png";
import zomatoLogo from "@/assets/zomato-logo.png";

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
                alt="potatowala Logo" 
                className="h-20 md:h-24 w-auto object-contain"
                style={{ imageRendering: 'crisp-edges' }}
              />
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="/" className="text-primary-foreground hover:text-primary-foreground/80 transition-colors font-medium">Home</a>
              <a href="/menu" className="text-primary-foreground hover:text-primary-foreground/80 transition-colors font-medium">Menu</a>
              <a href="/about" className="text-primary-foreground hover:text-primary-foreground/80 transition-colors font-medium">About</a>
              <a href="/franchise" className="text-primary-foreground hover:text-primary-foreground/80 transition-colors font-medium">Our Franchise</a>
              
              {/* For Enquiry dropdown: Event / Franchise */}
              <DropdownMenu>
                <DropdownMenuTrigger className="text-primary-foreground hover:text-primary-foreground/80 transition-colors font-medium outline-none">
                  For Enquiry
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
              <a href="/frozen-food" className="text-primary-foreground hover:text-primary-foreground/80 transition-colors font-medium">Frozen Food</a>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-primary-foreground hover:text-primary-foreground/80 transition-colors font-medium outline-none">
                  More
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-card border-border z-50 min-w-[220px]">
                  <DropdownMenuItem asChild>
                    <a href="/blogs" className="w-full cursor-pointer">Blogs</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="/contact" className="w-full cursor-pointer">Contact</a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>
            
            {/* CTA */}
            <div className="flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    className="bg-[#FFE8A3] text-gray-900 hover:bg-[#FFD36B] transition-colors shadow-lg hover:shadow-xl font-semibold rounded-full px-6"
                  >
                    Order Now
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-transparent border-none shadow-none z-50 min-w-[320px] pt-3 space-y-3">
                  {/* Swiggy style button */}
                  <a 
                    href="https://www.swiggy.com/search?query=potatowala" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <div className="flex items-center gap-4 bg-white rounded-full border-2 border-[#ff7a00] px-6 py-3 shadow-sm hover:shadow-md transition-shadow w-full max-w-sm">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-white border border-[#ff7a00] overflow-hidden">
                        <img
                          src={swiggyLogo}
                          alt="Swiggy logo"
                          className="h-6 w-auto object-contain"
                        />
                      </div>
                      <span className="text-sm md:text-base font-semibold text-[#ff7a00] tracking-wide">
                        ORDER ON SWIGGY
                      </span>
                    </div>
                  </a>

                  {/* Zomato style button */}
                  <a 
                    href="https://www.zomato.com/chennai/potatowala-foods-porur/order" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <div className="flex items-center gap-4 bg-white rounded-full border-2 border-[#e23744] px-6 py-3 shadow-sm hover:shadow-md transition-shadow w-full max-w-sm">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-white border border-[#e23744] overflow-hidden">
                        <img
                          src={zomatoLogo}
                          alt="Zomato logo"
                          className="h-6 w-auto object-contain"
                        />
                      </div>
                      <span className="text-sm md:text-base font-semibold text-[#e23744] tracking-wide">
                        ORDER ON ZOMATO
                      </span>
                    </div>
                  </a>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
