import aboutStory1 from "@/assets/about-story-1.jpg";
import aboutStory2 from "@/assets/about-story-2.jpg";
import aboutStory3 from "@/assets/about-story-3.jpg";
import pattern from "@/assets/food-pattern.jpg";

export const AboutSection = () => {
  // Stats used in the content section
  const stats = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      number: "50+",
      text: "Popular Tasty Foods Menu",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      number: "5000+",
      text: "Satisfied Our Global Customers",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      number: "4+",
      text: "Years Of Experience",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
      ),
      number: "100+",
      text: "Food Items Online Orders",
    },
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${pattern})`,
            backgroundSize: "auto",
            backgroundRepeat: "repeat",
          }}
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="space-y-20">
          {/* Section 1 - Text left, Image right (like 'Our Mission') */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Welcome to Potatowala
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed">
                Potatowala is a premium fast-food brand specializing in delicious loaded fries, spring potatoes, and
                innovative potato-based dishes. With over 4+ years of experience, we have been serving happiness on a
                plate to thousands of satisfied customers across Chennai and beyond.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our journey began with a simple mission: to create the crispiest, most delicious loaded fries that
                bring joy to every bite. We use only the finest ingredients, premium potatoes, and our secret blend of
                seasonings to deliver an unforgettable culinary experience.
              </p>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="rounded-3xl overflow-hidden shadow-lg w-full sm:w-4/5 bg-white">
                <img
                  src={aboutStory1}
                  alt="Potatowala Story - Part 1"
                  className="w-full h-auto min-h-[400px] object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Section 2 - Image left, Text right (like 'Our Story') */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center md:justify-start order-2 md:order-1">
              <div className="rounded-3xl overflow-hidden shadow-lg w-full sm:w-4/5 bg-white">
                <img
                  src={aboutStory2}
                  alt="Potatowala Story - Part 2"
                  className="w-full h-auto min-h-[400px] object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <h3 className="text-3xl md:text-4xl font-bold leading-tight">Why Choose Us?</h3>

              <div className="space-y-4">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  <strong className="text-foreground">Premium Quality:</strong> We source the finest potatoes and use
                  only fresh, high-quality ingredients in every dish. Our commitment to quality ensures that every bite
                  is a perfect blend of flavor and texture.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  <strong className="text-foreground">Innovative Menu:</strong> From classic loaded fries to unique
                  creations like choco spring, spring potato, and funky chips, our menu offers something special for
                  everyone. We constantly innovate to bring you exciting new flavors.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  <strong className="text-foreground">Customer Satisfaction:</strong> With over 6,834+ happy customers
                  and 4+ years of experience, we have built a reputation for excellence. Your satisfaction is our top
                  priority, and we go the extra mile to ensure every visit is memorable.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  <strong className="text-foreground">Affordable Excellence:</strong> We believe that great food should
                  be accessible to everyone. Our prices are competitive without compromising on quality, making premium
                  loaded fries available to all.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 - Text left, Image right (another alternating block) */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold leading-tight">Our Services</h3>

              <div className="space-y-4">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  <strong className="text-foreground">Premium Loaded Fries:</strong> We specialize in creating the
                  perfect loaded fries with a variety of toppings including cheese, sauces, herbs, and special
                  seasonings. Each order is freshly prepared to ensure maximum crispiness and flavor.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  <strong className="text-foreground">Diverse Menu:</strong> Our menu features a wide range of
                  potato-based dishes including loaded fries, spring potatoes, choco spring, nachos, mojitos, combos,
                  and funky chips. We also offer beverages and combo meals for a complete dining experience.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  <strong className="text-foreground">Multiple Locations:</strong> We operate through multiple franchise
                  locations across Chennai, making it convenient for customers to enjoy our delicious offerings. Our
                  stores are strategically located in prime areas including Maduravoyal, Akkarai, Porur, Guindy, and
                  Besant Nagar.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  <strong className="text-foreground">Online & Dine-in:</strong> Whether you prefer to dine in at our
                  stores or order online through Swiggy and Zomato, we ensure quick service and fresh food delivery.
                  Our efficient kitchen operations guarantee that your food is prepared and served at the perfect
                  temperature.
                </p>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="rounded-3xl overflow-hidden shadow-lg w-full sm:w-4/5 bg-white">
                <img
                  src={aboutStory3}
                  alt="Potatowala Story - Part 3"
                  className="w-full h-auto min-h-[400px] object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Stats section - Integrated layout */}
          <div className="pt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="flex justify-center lg:justify-start mb-4">
                    <div className="text-primary">{stat.icon}</div>
                  </div>
                  <p className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                    {stat.number}
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {stat.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


