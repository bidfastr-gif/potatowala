import friesIcon from "@/assets/icons/fries-icon.png";
import burgerIcon from "@/assets/icons/burger-icon.png";
import cheeseIcon from "@/assets/icons/cheese-icon.png";
import drinkIcon from "@/assets/icons/drink-icon.png";
import pattern from "@/assets/food-pattern.jpg";

export const Categories = () => {
  const categories = [
    {
      icon: friesIcon,
      name: "Loaded Fries",
    },
    {
      icon: burgerIcon,
      name: "Burgers",
    },
    {
      icon: cheeseIcon,
      name: "Cheese Balls",
    },
    {
      icon: drinkIcon,
      name: "Beverages",
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Our Products
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-white rounded-3xl p-8 mb-4 hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg aspect-square flex items-center justify-center">
                <img 
                  src={category.icon} 
                  alt={category.name}
                  className="w-24 h-24 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
