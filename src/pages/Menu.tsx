import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import cheeseBalls from "@/assets/cheese-balls.jpg";
import cheeseFries from "@/assets/cheese-fries.jpg";
import chickenPatty from "@/assets/chicken-patty.jpg";
import heroFries from "@/assets/hero-loaded-fries.jpg";

const Menu = () => {
  const menuItems = [
    {
      name: "Classic Loaded Fries",
      price: "₹180",
      description: "Crispy fries with cheese, mayo, and special sauce",
      image: cheeseFries,
      rating: "5k Reviews",
    },
    {
      name: "Cheese Balls",
      price: "₹150",
      description: "Golden crispy balls filled with melted cheese",
      image: cheeseBalls,
      rating: "5k Reviews",
    },
    {
      name: "Peri Peri Loaded Fries",
      price: "₹200",
      description: "Spicy peri peri seasoning with loaded toppings",
      image: heroFries,
      rating: "5k Reviews",
    },
    {
      name: "Chicken Patty",
      price: "₹120",
      description: "Juicy chicken patty with special sauce",
      image: chickenPatty,
      rating: "5k Reviews",
    },
    {
      name: "BBQ Chicken Fries",
      price: "₹220",
      description: "Loaded fries with BBQ chicken and cheese",
      image: cheeseFries,
      rating: "5k Reviews",
    },
    {
      name: "Mexican Fries",
      price: "₹210",
      description: "Fries topped with salsa, jalapenos, and cheese",
      image: heroFries,
      rating: "5k Reviews",
    },
    {
      name: "Cheese Burst Fries",
      price: "₹190",
      description: "Extra cheese loaded crispy golden fries",
      image: cheeseFries,
      rating: "5k Reviews",
    },
    {
      name: "Veg Patty",
      price: "₹100",
      description: "Crispy vegetable patty with fresh herbs",
      image: chickenPatty,
      rating: "5k Reviews",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-2">Best food menu</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Choose Your Best <span className="text-primary">Menus</span>
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl">
              Sit amet consectetur adipiscing elitsue risus mauris quam adipiscing phasellus aene ante orcirat scelerisque enim ut nulla
            </p>
          </div>
          <Button className="hero-gradient hover:opacity-90 transition-opacity px-8 h-12 hidden md:flex">
            SEE MORE
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {menuItems.map((item, index) => (
            <div key={index} className="flex gap-6 items-start group">
              {/* Circular Image */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-border group-hover:border-primary transition-all duration-300 group-hover:scale-105">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pt-2">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-2xl md:text-3xl font-bold text-primary ml-4">
                    {item.price}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-primary fill-primary" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({item.rating})</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile SEE MORE Button */}
        <div className="mt-12 flex justify-center md:hidden">
          <Button className="hero-gradient hover:opacity-90 transition-opacity px-8 h-12">
            SEE MORE
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Menu;
