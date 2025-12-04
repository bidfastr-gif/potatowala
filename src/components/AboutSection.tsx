import aboutStory1 from "@/assets/about-story-1.jpg";
import aboutStory2 from "@/assets/about-story-2.jpg";
import aboutStory3 from "@/assets/about-story-3.jpg";
import pattern from "@/assets/food-pattern.jpg";

export const AboutSection = () => {
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
              <h3 className="text-3xl md:text-4xl font-bold leading-tight">How We Serve You</h3>

              <div className="space-y-4">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  <strong className="text-foreground">Signature Fries & Snacks:</strong> From fully loaded fries and spring potatoes to funky chips and nachos, every order is cooked to order for maximum crispiness and flavour.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  <strong className="text-foreground">Complete Meal Experience:</strong> Pair your favourites with mojitos, burgers, wraps, snackers, and desserts to create a satisfying meal for any time of the day.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  <strong className="text-foreground">Citywide Presence:</strong> We serve customers across Chennai through our growing network of Potatowala outlets and franchise partners in key locations.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  <strong className="text-foreground">Dine-In & Delivery:</strong> Enjoy Potatowala at our outlets or order online via leading delivery partners for the same hot, crispy taste at home.
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
        </div>
      </div>
    </section>
  );
};


