import pattern from "@/assets/food-pattern.jpg";
import { Info } from "lucide-react";
// Using actual/placeholder images for products
import nachos from "@/assets/nachos.jpg";
import loadedFries from "@/assets/loaded-fries.jpg";
import springPotatoImage from "@/assets/spring-potato.jpg";
import mojitoImage from "@/assets/mojito-new.jpg";
import combo from "@/assets/combo.jpg";
import longfriesImage from "@/assets/long-fries.jpg";

export const Categories = () => {
  const categories = [
    {
      name: "Nachos",
      price: "₹40",
      image: nachos, // Placeholder - replace with actual Choco Spring image
    },
    {
      name: "Spring Potato",
      price: "₹40",
      image: springPotatoImage, // Spring Potato
    },
    {
      name: "Loaded Fries",
      price: "₹40",
      image: loadedFries, // Placeholder - replace with actual Loaded Fries image
    },
    {
      name: "Mojito",
      price: "₹40",
      image: mojitoImage, // Mojito
    },
    {
      name: "Combo",
      price: "₹40",
      image: combo, // Placeholder - replace with actual Combo image
    },
    {
      name: "Long Fries",
      price: "₹40",
      image: longfriesImage, // Funky Chips
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
        <div className="relative mb-16 text-center max-w-3xl mx-auto">
          <span className="text-primary-foreground/80 uppercase tracking-widest font-semibold text-sm mb-2 block">
            Handcrafted Crispy Delights
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our Best Sellers
          </h2>
          <p className="text-lg opacity-90 leading-relaxed font-medium">
            We don't just make fries; we craft experiences. Discover the signature flavors that have made us Chennai's favorite potato destination—from our cheese-loaded classics to our adventurous choco-spring creations.
          </p>
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
