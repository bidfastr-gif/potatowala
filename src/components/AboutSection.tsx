import { Button } from "@/components/ui/button";
import aboutFood1 from "@/assets/about-food-1.jpg";
import aboutChef from "@/assets/about-chef.jpg";
import aboutFood2 from "@/assets/about-food-2.jpg";

export const AboutSection = () => {
  const stats = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      number: "50+",
      text: "Popular Tasty Foods Menu",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      number: "5000+",
      text: "Satisfied Our Global Customers",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      number: "10+",
      text: "Years Of Experience",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      number: "100+",
      text: "Food Items Online Orders",
    },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-3xl overflow-hidden">
                <img
                  src={aboutFood1}
                  alt="Delicious Food"
                  className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="rounded-3xl overflow-hidden">
                <img
                  src={aboutFood2}
                  alt="Chicken Wings"
                  className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="pt-8">
              <div className="rounded-3xl overflow-hidden">
                <img
                  src={aboutChef}
                  alt="Our Chef"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-md mb-4">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">About Potatowala</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                The Crispiest, Most Delicious Loaded Fries Ever.
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed">
                At Potatowala, we believe in serving happiness on a plate. Our signature loaded fries are crafted with premium ingredients, crispy perfection, and topped with love. From classic cheese to exotic flavors, every bite is an experience.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 text-primary">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground mb-1">{stat.number}</p>
                    <p className="text-sm text-muted-foreground leading-snug">{stat.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <Button className="hero-gradient hover:opacity-90 transition-opacity h-12 px-8 text-base rounded-md">
                LEARN MORE
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call For Order</p>
                  <p className="text-lg font-bold text-foreground">+91 99415 22111</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
