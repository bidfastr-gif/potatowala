import pattern from "@/assets/food-pattern.jpg";
import { Info } from "lucide-react";
// Using actual/placeholder images for products
import cheeseBalls from "@/assets/choco-spring.jpg";
import heroLoadedFries from "@/assets/hero-loaded-fries.jpg";
import springPotatoImage from "@/assets/spring-potato.jpg";
import mojitoImage from "@/assets/mojito.jpg";
import aboutFood1 from "@/assets/about-food-1.jpg";
import aboutFood2 from "@/assets/about-food-2.jpg";
import funkyChipsImage from "@/assets/funky-chips.jpg";

export const Categories = () => {
  const categories = [
    {
      name: "Choco Spring",
      price: "₹40",
      image: cheeseBalls, // Placeholder - replace with actual Choco Spring image
    },
    {
      name: "Spring Potato",
      price: "₹40",
      image: springPotatoImage, // Spring Potato
    },
    {
      name: "Loaded Fries",
      price: "₹40",
      image: heroLoadedFries, // Placeholder - replace with actual Loaded Fries image
    },
    {
      name: "Mojito",
      price: "₹40",
      image: mojitoImage, // Mojito
    },
    {
      name: "Combo",
      price: "₹40",
      image: aboutFood2, // Placeholder - replace with actual Combo image
    },
    {
      name: "Funky Chips",
      price: "₹40",
      image: funkyChipsImage, // Funky Chips
    },
  ];

  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url(${pattern})`,
          backgroundSize: 'auto',
          backgroundRepeat: 'repeat'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="relative mb-16 flex items-center justify-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Best Seller
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-800">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Product Info */}
              <div className="p-6 bg-white">
                {/* Product Name only (price removed) */}
                <h3 className="text-xl font-bold text-primary">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
