export const WhyChooseUs = () => {
  const features = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "OUR SIGNATURE DISH",
      description: "Savor the perfection of our signature fries meal—an exquisite blend of golden, crispy fries and delectable toppings that elevates the art of indulgence.",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "LOADED FRIES",
      description: "Indulge in crispy fries topped with a generous layer of melted cheese, flavorful sauces, and a variety of delicious toppings. Bold, cheesy, and absolutely satisfying.",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      ),
      title: "FRESH INGREDIENTS",
      description: "We use only the freshest ingredients to ensure quality in every bite. Premium quality food prepared by experienced chefs with love and care.",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      ),
      title: "FAST DELIVERY",
      description: "Order online through Swiggy and Zomato or visit our multiple locations across Chennai. We ensure your food is prepared fresh and served hot, ready to satisfy your cravings.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-primary uppercase tracking-widest font-bold text-sm mb-2 block">
            The Potatowala Difference
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Why Choose Us?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            What makes us stand out in a world of fast food? It's our obsession with the details. From the way we select our crops to the speed of our service, we're dedicated to perfection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary/20"
            >
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/5 text-primary mb-6">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-4 text-foreground uppercase tracking-wide">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
