import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import heroFries from "@/assets/hero-loaded-fries.jpg";
import cheeseBalls from "@/assets/cheese-balls.jpg";
import chickenPatty from "@/assets/chicken-patty.jpg";
import springPotato from "@/assets/spring-potato.jpg";
import nachos from "@/assets/nachos.jpg";
import funkyChips from "@/assets/funky-chips.jpg";
import mojito from "@/assets/mojito.jpg";
import pattern from "@/assets/food-pattern.jpg";

interface MenuCategory {
  title: string;
  items: {
    name: string;
    price: string;
    description?: string;
    image: string;
    badge?: string;
  }[];
}

const Menu = () => {
  const menuCategories: MenuCategory[] = [
    {
      title: "OUR SIGNATURE DISH - LOADED FRIES",
      items: [
        {
          name: "Paneer Tikka Loaded Fries (Veg)",
          price: "₹179",
          description: "Crispy fries loaded with paneer tikka, sauces, and herbs",
          image: heroFries,
        },
        {
          name: "Veg Pizza Style Loaded Fries",
          price: "₹179",
          description: "Fries topped with pizza-style vegetables and cheese",
          image: heroFries,
        },
        {
          name: "Schezwan Paneer Loaded Fries",
          price: "₹179",
          description: "Spicy schezwan paneer loaded on crispy fries",
          image: heroFries,
        },
        {
          name: "Butter Paneer Loaded Fries",
          price: "₹179",
          description: "Creamy butter paneer loaded on golden fries",
          image: heroFries,
        },
        {
          name: "Paneer Chettinadu Loaded Fries",
          price: "₹179",
          description: "Spicy Chettinadu style paneer on loaded fries",
          image: heroFries,
        },
        {
          name: "Tandoori Tikka Loaded Fries (Non-Veg)",
          price: "₹189",
          description: "Tandoori chicken tikka loaded on crispy fries",
          image: heroFries,
          badge: "BEST SELLER",
        },
        {
          name: "Non-Veg Pizza Style Loaded Fries",
          price: "₹189",
          description: "Fries topped with pizza-style chicken and cheese",
          image: heroFries,
        },
        {
          name: "Schezwan Chicken Loaded Fries",
          price: "₹189",
          description: "Spicy schezwan chicken loaded on crispy fries",
          image: heroFries,
        },
        {
          name: "Butter Chicken Loaded Fries",
          price: "₹189",
          description: "Creamy butter chicken loaded on golden fries",
          image: heroFries,
        },
        {
          name: "Chettinadu Chicken Loaded Fries",
          price: "₹189",
          description: "Spicy Chettinadu style chicken on loaded fries",
          image: heroFries,
        },
        {
          name: "BBQ Chicken Loaded Fries",
          price: "₹189",
          description: "BBQ flavored chicken loaded on crispy fries",
          image: heroFries,
        },
      ],
    },
    {
      title: "FRIES",
      items: [
        {
          name: "Fries (Regular)",
          price: "₹69",
          description: "Classic crispy golden fries",
          image: heroFries,
        },
        {
          name: "Fries (Large)",
          price: "₹114",
          description: "Large portion of crispy golden fries",
          image: heroFries,
        },
        {
          name: "Peri Peri Fries",
          price: "₹129",
          description: "Fries tossed in spicy peri peri seasoning",
          image: heroFries,
        },
        {
          name: "Lemon Chilli Fries",
          price: "₹129",
          description: "Tangy lemon and chilli flavored fries",
          image: heroFries,
        },
        {
          name: "Cheese Fries",
          price: "₹139",
          description: "Fries topped with melted cheese",
          image: heroFries,
        },
        {
          name: "Choco Fries",
          price: "₹139",
          description: "Sweet chocolate drizzled fries",
          image: heroFries,
        },
      ],
    },
    {
      title: "WEDGES",
      items: [
        {
          name: "Wedges (Regular)",
          price: "₹69",
          description: "Crispy potato wedges",
          image: heroFries,
        },
        {
          name: "Wedges (Large)",
          price: "₹114",
          description: "Large portion of crispy potato wedges",
          image: heroFries,
        },
        {
          name: "Peri Peri Wedges",
          price: "₹129",
          description: "Wedges tossed in spicy peri peri seasoning",
          image: heroFries,
        },
        {
          name: "Lemon Chilli Wedges",
          price: "₹129",
          description: "Tangy lemon and chilli flavored wedges",
          image: heroFries,
        },
      ],
    },
    {
      title: "SPRING POTATO",
      items: [
        {
          name: "Spring Potato Classic",
          price: "₹66",
          description: "Spiral-cut potato on a stick",
          image: springPotato,
        },
        {
          name: "Spring Potato Peri Peri",
          price: "₹76",
          description: "Spiral potato with peri peri seasoning",
          image: springPotato,
        },
        {
          name: "Spring Potato Cheese",
          price: "₹76",
          description: "Spiral potato topped with cheese",
          image: springPotato,
        },
      ],
    },
    {
      title: "NACHOS (Oil Free)",
      items: [
        {
          name: "Veg Loaded Nachos",
          price: "₹129",
          description: "Crispy nachos loaded with vegetables and sauces",
          image: nachos,
        },
        {
          name: "Cheese Loaded Nachos",
          price: "₹159",
          description: "Nachos topped with melted cheese and sauces",
          image: nachos,
        },
        {
          name: "Chicken Loaded Nachos",
          price: "₹169",
          description: "Nachos loaded with chicken and cheese",
          image: nachos,
        },
      ],
    },
    {
      title: "BLOOMING ONION",
      items: [
        {
          name: "Blooming Onion Classic",
          price: "₹86",
          description: "Deep-fried blooming onion with dipping sauce",
          image: heroFries,
        },
        {
          name: "Blooming Onion Peri Peri",
          price: "₹95",
          description: "Blooming onion with peri peri seasoning",
          image: heroFries,
        },
        {
          name: "Blooming Onion Cheese",
          price: "₹95",
          description: "Blooming onion topped with cheese",
          image: heroFries,
        },
      ],
    },
    {
      title: "FUNKY CHIPS",
      items: [
        {
          name: "Paneer Loaded Funky Chips",
          price: "₹189",
          description: "Crispy chips loaded with paneer and sauces",
          image: funkyChips,
          badge: "New Launch",
        },
        {
          name: "Chicken Loaded Funky Chips",
          price: "₹199",
          description: "Crispy chips loaded with chicken and sauces",
          image: funkyChips,
        },
      ],
    },
    {
      title: "SANDWICH",
      items: [
        {
          name: "Paneer Sandwich",
          price: "₹129",
          description: "Grilled sandwich with paneer and vegetables",
          image: chickenPatty,
        },
        {
          name: "Chicken Sandwich",
          price: "₹139",
          description: "Grilled sandwich with chicken and vegetables",
          image: chickenPatty,
        },
      ],
    },
    {
      title: "VEG WRAP",
      items: [
        {
          name: "Paneer Tikka Wrap",
          price: "₹169",
          description: "Soft wrap filled with paneer tikka and fresh vegetables",
          image: chickenPatty,
        },
        {
          name: "Butter Paneer Wrap",
          price: "₹169",
          description: "Creamy butter paneer wrapped with vegetables",
          image: chickenPatty,
        },
        {
          name: "Chettinadu Paneer Wrap",
          price: "₹169",
          description: "Spicy Chettinadu paneer in a soft wrap",
          image: chickenPatty,
        },
        {
          name: "Schezwan Paneer Wrap",
          price: "₹169",
          description: "Spicy schezwan paneer wrapped with vegetables",
          image: chickenPatty,
        },
      ],
    },
    {
      title: "NON-VEG WRAP",
      items: [
        {
          name: "Tandoori Chicken Wrap",
          price: "₹189",
          description: "Tandoori chicken wrapped with fresh vegetables",
          image: chickenPatty,
        },
        {
          name: "Butter Chicken Wrap",
          price: "₹189",
          description: "Creamy butter chicken in a soft wrap",
          image: chickenPatty,
        },
        {
          name: "Chettinadu Chicken Wrap",
          price: "₹189",
          description: "Spicy Chettinadu chicken wrapped with vegetables",
          image: chickenPatty,
        },
        {
          name: "Schezwan Chicken Wrap",
          price: "₹189",
          description: "Spicy schezwan chicken in a soft wrap",
          image: chickenPatty,
        },
        {
          name: "BBQ Chicken Wrap",
          price: "₹189",
          description: "BBQ flavored chicken wrapped with vegetables",
          image: chickenPatty,
        },
      ],
    },
    {
      title: "VEG SNACKERS",
      items: [
        {
          name: "Garlic Balls",
          price: "₹114",
          description: "Crispy garlic-flavored balls",
          image: cheeseBalls,
        },
        {
          name: "Cheese Balls",
          price: "₹139",
          description: "Golden crispy balls filled with melted cheese",
          image: cheeseBalls,
        },
        {
          name: "Potato Strips",
          price: "₹139",
          description: "Crispy potato strips with seasoning",
          image: heroFries,
        },
        {
          name: "Choco Balls",
          price: "₹149",
          description: "Sweet chocolate-filled crispy balls",
          image: cheeseBalls,
        },
      ],
    },
    {
      title: "NON-VEG SNACKERS",
      items: [
        {
          name: "Popcorn Chicken",
          price: "₹139",
          description: "Bite-sized crispy fried chicken pieces",
          image: chickenPatty,
        },
        {
          name: "Chicken & Cheese",
          price: "₹149",
          description: "Crispy chicken with melted cheese",
          image: chickenPatty,
        },
        {
          name: "Crispy Chicken Wings (Classic)",
          price: "₹149",
          description: "Classic crispy fried chicken wings",
          image: chickenPatty,
        },
        {
          name: "Crispy Chicken Wings (Peri Peri)",
          price: "₹169",
          description: "Spicy peri peri flavored chicken wings",
          image: chickenPatty,
        },
        {
          name: "Saucy Chicken Wings (BBQ)",
          price: "₹169",
          description: "BBQ sauced crispy chicken wings",
          image: chickenPatty,
        },
      ],
    },
    {
      title: "VEG BURGER",
      items: [
        {
          name: "Spicy Cheese Hash Brown Burger",
          price: "₹149",
          description: "Burger with spicy cheese hash brown patty",
          image: chickenPatty,
        },
        {
          name: "Paneer Patty Burger",
          price: "₹159",
          description: "Burger with crispy paneer patty",
          image: chickenPatty,
        },
      ],
    },
    {
      title: "NON-VEG BURGER",
      items: [
        {
          name: "Crispy Chicken Burger",
          price: "₹179",
          description: "Burger with crispy fried chicken patty",
          image: chickenPatty,
        },
        {
          name: "Chicken Patty Burger",
          price: "₹169",
          description: "Burger with juicy chicken patty",
          image: chickenPatty,
        },
      ],
    },
    {
      title: "MOJITO",
      items: [
        {
          name: "Lemon Mint Mojito",
          price: "₹99",
          description: "Refreshing lemon and mint mojito",
          image: mojito,
        },
        {
          name: "Green Apple Mojito",
          price: "₹99",
          description: "Fresh green apple flavored mojito",
          image: mojito,
        },
        {
          name: "Blue Curacao Mojito",
          price: "₹99",
          description: "Tropical blue curacao mojito",
          image: mojito,
        },
        {
          name: "Strawberry Mojito",
          price: "₹99",
          description: "Sweet strawberry flavored mojito",
          image: mojito,
        },
        {
          name: "Nannari Mojito",
          price: "₹99",
          description: "Traditional nannari flavored mojito",
          image: mojito,
        },
      ],
    },
    {
      title: "DESSERTS",
      items: [
        {
          name: "Ice Cream",
          price: "₹79",
          description: "Creamy vanilla ice cream",
          image: heroFries,
        },
        {
          name: "Brownie",
          price: "₹99",
          description: "Rich chocolate brownie",
          image: heroFries,
        },
        {
          name: "Brownie with Ice Cream",
          price: "₹129",
          description: "Warm brownie served with ice cream",
          image: heroFries,
        },
        {
          name: "Choco Lava",
          price: "₹79",
          description: "Warm chocolate lava cake",
          image: heroFries,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageHero title="Our Menu" current="Menu" />
      
      <main className="container mx-auto px-4 py-16 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${pattern})`,
              backgroundSize: "auto",
              backgroundRepeat: "repeat",
            }}
          />
        </div>
        <div className="relative z-10">
        {/* Intro section inspired by reference layout */}
        <section className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Because Fries & Snacks Matter
          </h2>
          <p className="text-muted-foreground text-lg">
            Delicious from the very first bite to the last crunchy crumb. Explore our signature fries, snacks,
            wraps, burgers, nachos, mojitos and desserts.
          </p>
        </section>

        {/* Text-first menu layout similar to waffle menu */}
        <section className="max-w-6xl mx-auto space-y-12">
          {menuCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-card rounded-3xl border border-border shadow-sm px-6 py-8 md:px-10 md:py-10"
            >
              <div className="flex flex-col md:flex-row gap-8">
                {/* Category Title */}
                <div className="md:w-1/3">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-primary mb-2">
                    {category.title}
                  </h3>
                  <div className="w-16 h-1 bg-primary rounded-full mb-3" />
                  <p className="text-sm text-muted-foreground">
                    Our chef-crafted selection of {category.title.toLowerCase()} made fresh to order.
                  </p>
                </div>

                {/* Items list in columns */}
                <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="space-y-1">
                      <div className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        <div>
                          <h4 className="text-sm md:text-base font-semibold text-foreground">
                            {item.name}
                            {item.badge && (
                              <span className="ml-2 inline-block rounded-full bg-primary text-primary-foreground text-[10px] px-2 py-0.5 align-middle">
                                {item.badge}
                              </span>
                            )}
                          </h4>
                          {item.description && (
                            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Menu;
