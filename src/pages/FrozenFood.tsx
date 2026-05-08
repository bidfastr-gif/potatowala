import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import pattern from "@/assets/food-pattern.jpg";
import heroFries from "@/assets/hero-loaded-fries.jpg";
import fries6mm from "@/assets/fries-6mm.JPG";
import potatoWedgesImg from "@/assets/potato-wedges.JPG";
import fries9mm from "@/assets/fries-9mm.JPG";
import paneerPattyImg from "@/assets/paneer-patty.JPG";
import cheeseBallsFrozen from "@/assets/cheese-balls-frozen.JPG";
import garlicBallsFrozen from "@/assets/garlic-balls-frozen.JPG";
import vegBurgerPattyImg from "@/assets/veg-burger-patty.JPG";
import potatoStripsImg from "@/assets/potato-strips-frozen.JPG";
import paneerCubesImg from "@/assets/paneer-cubes-frozen.JPG";
import chickenKebabSeekhImg from "@/assets/chicken-kebab-seekh-frozen.JPG";
import chickenNachosImg from "@/assets/chicken-nachos-frozen.JPG";
import paneerPoppersImg from "@/assets/paneer-poppers-frozen.JPG";
import cheeseCornStripsImg from "@/assets/cheese-corn-strips-frozen.JPG";
import cheeseBalls from "@/assets/cheese-balls.jpg";
import chickenPatty from "@/assets/chicken-patty.jpg";

interface FrozenItem {
  name: string;
  packInfo: string;
  bullets: string[];
  image: string;
}

// Content adapted from the frozen product PDF you shared
const frozenItems: FrozenItem[] = [
  {
    name: "French Fries 6 mm",
    packInfo: "1 Packet | 6 mm | 2.5 kg",
    bullets: [
      "Thin 6 mm cut for maximum crunch",
      "Quick frying time for efficiency",
      "Stays crispy for dine‑in & delivery",
      "Premium potato selection for authentic taste",
    ],
    image: fries6mm,
  },
  {
    name: "French Fries 9 mm",
    packInfo: "1 Packet | 9 mm | 2.5 kg",
    bullets: [
      "Uniform 9 mm cut for even cooking",
      "Crunchy exterior & tender inside",
      "Quick‑fry formula for busy kitchens",
      "Perfect for dine‑in, delivery & takeaway",
    ],
    image: fries9mm,
  },
  {
    name: "Potato Wedges",
    packInfo: "1 Packet | 6 mm | 2.5 kg",
    bullets: [
      "Thick‑cut wedges with natural potato skin finish",
      "Crispy coating for extra crunch & flavour retention",
      "Soft and fluffy interior for a satisfying bite",
      "Ideal for dine‑in, takeaways and delivery meals",
    ],
    image: potatoWedgesImg,
  },
  {
    name: "Paneer Patty",
    packInfo: "1 Packet | 13‑14 nos | 1 kg",
    bullets: [
      "Made with high‑quality fresh paneer",
      "Perfectly shaped for a rich, balanced flavour",
      "Crispy golden crust with soft, creamy paneer centre",
      "Quick to prepare and ideal for burgers & combos",
    ],
    image: paneerPattyImg,
  },
  {
    name: "Paneer Cubes",
    packInfo: "1 Packet | 150‑155 nos | 1 kg",
    bullets: [
      "Made with high‑quality fresh paneer",
      "Lightly spiced for a rich, balanced flavour",
      "Uniform cube cut for consistency & convenience",
      "Perfect for grilling, tossing in gravies or snacks",
    ],
    image: paneerCubesImg,
  },
  {
    name: "Potato Strips",
    packInfo: "1 Packet | 50‑52 nos | 1 kg",
    bullets: [
      "Quick & ideal for busy outlets",
      "Crispy texture & golden finish",
      "Pairs well with seasonings & sauces",
      "Unique signature strip‑cut shape",
    ],
    image: potatoStripsImg,
  },
  {
    name: "Cheese Balls",
    packInfo: "1 Packet | 70‑72 nos | 1 kg",
    bullets: [
      "Crispy outside, gooey cheese inside",
      "Premium cheese blend for rich flavour",
      "Lightly seasoned for a savoury kick",
      "Perfect for snacking & sharing",
    ],
    image: cheeseBallsFrozen,
  },
  {
    name: "Garlic Balls",
    packInfo: "1 Packet | 98‑100 nos | 1 kg",
    bullets: [
      "Rich garlic & herb seasoning",
      "Crispy coating with soft, cheesy centre",
      "Perfectly bite‑sized & snack‑friendly",
      "Prepared with a special in‑house recipe",
    ],
    image: garlicBallsFrozen,
  },
  {
    name: "Veg Burger Patty",
    packInfo: "1 Packet | 15‑16 nos | 1 kg",
    bullets: [
      "Made with fresh potatoes & signature seasoning",
      "Crispy outside with flavourful inside",
      "Consistent texture & golden finish",
      "Perfect for burgers, sandwiches & combos",
    ],
    image: vegBurgerPattyImg,
  },
  {
    name: "Paneer Poppers",
    packInfo: "1 Packet | 34‑35 nos | 1 kg",
    bullets: [
      "Made with fresh paneer & spicy herb blend",
      "Crispy outside & crunchy inside",
      "Rich creamy paneer filling in every bite",
      "Great as a starter or party snack",
    ],
    image: paneerPoppersImg,
  },
  {
    name: "Cheese Corn Strips",
    packInfo: "1 Packet | 44‑45 nos | 1 kg",
    bullets: [
      "Made with real cheese & sweet corn",
      "Crispy crunchy texture with rich flavour",
      "Light, tasty & addictive snack",
      "Quick‑fry & perfect for fast‑moving kitchens",
    ],
    image: cheeseCornStripsImg,
  },
  {
    name: "Chicken Nachos",
    packInfo: "1 Packet | 26‑27 nos | 1 kg",
    bullets: [
      "Triangle‑shaped crispy chicken snack",
      "Tender inside, crunchy outside",
      "Coated with signature spice blend",
      "Great for snacking & sharing platters",
    ],
    image: chickenNachosImg,
  },
  {
    name: "Chicken Kebab Seekh",
    packInfo: "1 Packet | 34‑35 nos | 1 kg",
    bullets: [
      "Made with fresh minced chicken & traditional spices",
      "Soft, juicy, melt‑in‑mouth texture",
      "Authentic kebab aroma & flavour",
      "Perfect for grilling, pan‑frying or tandoor",
    ],
    image: chickenKebabSeekhImg,
  },
];

const FrozenFood = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <PageHero title="Our Frozen Products" current="Frozen Food" />

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
        {/* Intro section similar to reference layout */}
        <section className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
          <p className="text-muted-foreground mb-4">
            Bring Potatowala home with our frozen range. Fry, bake, or air-fry for the same signature crunch and flavour.
          </p>
          <p className="text-muted-foreground">
            Whether it&apos;s game nights, family gatherings, or midnight cravings, our frozen products make it easy to serve
            hot, crispy snacks in minutes.
          </p>
        </section>

        {/* Product cards based on your frozen product catalogue */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {frozenItems.map((item) => (
            <article
              key={item.name}
              className="rounded-3xl shadow-sm border-2 border-primary overflow-hidden flex flex-col hover:shadow-lg transition-shadow bg-gradient-to-b from-black to-white"
            >
              <div className="aspect-[4/5] w-full overflow-hidden bg-muted">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="px-6 py-6 flex-1 flex flex-col text-left bg-white">
                <h3 className="text-lg md:text-xl font-semibold mb-1">{item.name}</h3>
                <p className="text-xs md:text-sm font-semibold text-primary mb-3 uppercase tracking-wide">
                  {item.packInfo}
                </p>
                <ul className="text-xs md:text-sm text-muted-foreground space-y-1 leading-relaxed flex-1">
                  {item.bullets.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FrozenFood;


