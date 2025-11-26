import cheeseBalls from "@/assets/cheese-balls.jpg";
import cheeseFries from "@/assets/cheese-fries.jpg";
import chickenPatty from "@/assets/chicken-patty.jpg";
import { Button } from "@/components/ui/button";

export const MenuShowcase = () => {
  const menuItems = [
    {
      name: "Cheese Balls",
      description: "Golden crispy balls filled with melted cheese",
      price: "₹150",
      rating: "5.0",
      image: cheeseBalls,
    },
    {
      name: "Cheese Fries",
      description: "Crispy fries loaded with cheddar cheese",
      price: "₹180",
      rating: "5.0",
      image: cheeseFries,
    },
    {
      name: "Chicken Patty",
      description: "Juicy chicken patty with special sauce",
      price: "₹120",
      rating: "5.0",
      image: chickenPatty,
    },
  ];

  return (
    <section id="menu" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Our Menu</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Popular <span className="text-primary">Dishes</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Handcrafted with premium ingredients for the perfect bite every time
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-card px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                  <svg className="w-4 h-4 text-yellow-500 fill-yellow-500" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm font-bold text-foreground">{item.rating}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-foreground">{item.name}</h3>
                  <span className="text-2xl font-bold text-primary">{item.price}</span>
                </div>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
