import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { EmailSubscription } from "@/components/EmailSubscription";
import heroLoadedFries from "@/assets/hero-loaded-fries.jpg";
import cheeseBalls from "@/assets/cheese-balls.jpg";
import springPotato from "@/assets/spring-potato.jpg";
import nachos from "@/assets/nachos.jpg";
import chocoSpring from "@/assets/choco-spring.jpg";
import aboutChef from "@/assets/about-chef.jpg";
import aboutFood1 from "@/assets/about-food-1.jpg";
import aboutFood2 from "@/assets/about-food-2.jpg";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Ultimate Guide to Perfectly Loaded Fries at Home",
      description: "Discover the secrets behind making the crispiest, most delicious loaded fries in your own kitchen. Learn about the best potato varieties, proper cutting techniques, double-frying methods, and how to achieve that perfect golden-brown color. We'll share our professional tips that we use at Potatowala to create fries that stay crispy even with all the toppings.",
      date: "January 15, 2025",
      readTime: "8 min read",
      category: "Recipes",
      image: heroLoadedFries,
      author: "Chef Ramesh",
      featured: true,
    },
    {
      id: 2,
      title: "Top 10 Toppings That Will Transform Your Fries Forever",
      description: "From classic melted cheese and crispy bacon to exotic combinations like peri-peri chicken and jalapeño poppers, explore the most amazing toppings that take your loaded fries to the next level. We've tested hundreds of combinations and these are the absolute winners that our customers can't get enough of.",
      date: "January 10, 2025",
      readTime: "6 min read",
      category: "Tips",
      image: cheeseBalls,
      author: "Priya Sharma",
      featured: true,
    },
    {
      id: 3,
      title: "The Fascinating History of Loaded Fries: From Belgium to Chennai",
      description: "Take a journey through time and discover how loaded fries evolved from simple street food in Belgium to becoming one of the world's most beloved comfort foods. Learn about how this dish traveled across continents, adapted to different cultures, and became a global phenomenon that brings joy to millions.",
      date: "January 5, 2025",
      readTime: "7 min read",
      category: "History",
      image: aboutFood1,
      author: "Dr. Anjali Menon",
    },
    {
      id: 4,
      title: "Healthy Alternatives: Making Loaded Fries Guilt-Free Without Compromising Taste",
      description: "Learn how to enjoy loaded fries while maintaining a balanced diet. Discover healthier ingredient swaps like air-frying, using sweet potatoes, low-fat cheese alternatives, and fresh vegetable toppings. We'll show you how to create nutritious versions that are just as delicious as the original.",
      date: "December 28, 2024",
      readTime: "6 min read",
      category: "Health",
      image: springPotato,
      author: "Nutritionist Kavitha",
    },
    {
      id: 5,
      title: "The Art of Cheese Pairing: Perfect Cheese Combinations for Loaded Fries",
      description: "Not all cheeses are created equal when it comes to loaded fries. Find out which cheeses work best with different toppings and flavors. From sharp cheddar to creamy mozzarella, learn the science behind cheese melting points and flavor profiles that create the perfect harmony on your plate.",
      date: "December 20, 2024",
      readTime: "5 min read",
      category: "Recipes",
      image: cheeseBalls,
      author: "Chef Ramesh",
    },
    {
      id: 6,
      title: "Behind the Scenes: How We Create Our Signature Flavors at Potatowala",
      description: "Get an exclusive look into Potatowala's kitchen and learn how we develop our unique flavor combinations that keep customers coming back. From our secret spice blends to our special sauce recipes, discover the passion and precision that goes into every dish we serve.",
      date: "December 15, 2024",
      readTime: "9 min read",
      category: "Behind the Scenes",
      image: aboutChef,
      author: "Founder Team",
      featured: true,
    },
    {
      id: 7,
      title: "Spring Potato: A Seasonal Delight That's Taking Chennai by Storm",
      description: "Our Spring Potato has become one of our most popular items, and for good reason! Learn about how we source the freshest seasonal potatoes, our unique preparation method that brings out their natural sweetness, and why this dish has become a customer favorite across all our locations.",
      date: "December 10, 2024",
      readTime: "5 min read",
      category: "Menu Spotlight",
      image: springPotato,
      author: "Marketing Team",
    },
    {
      id: 8,
      title: "The Science of Crispy: Understanding Why Some Fries Stay Crispy Longer",
      description: "Ever wondered why some fries stay crispy even after adding hot toppings while others become soggy? We dive deep into the science of starch, moisture content, oil temperature, and cooking techniques that make the difference between good fries and great fries.",
      date: "December 5, 2024",
      readTime: "7 min read",
      category: "Tips",
      image: heroLoadedFries,
      author: "Chef Ramesh",
    },
    {
      id: 9,
      title: "Nachos vs Loaded Fries: The Ultimate Comfort Food Showdown",
      description: "Two beloved comfort foods go head-to-head! We compare nachos and loaded fries in terms of texture, flavor profiles, customization options, and overall satisfaction. Plus, we reveal which one our customers prefer and why. Spoiler: You might be surprised by the results!",
      date: "November 28, 2024",
      readTime: "6 min read",
      category: "Food Culture",
      image: nachos,
      author: "Priya Sharma",
    },
    {
      id: 10,
      title: "Choco Spring: The Sweet Surprise That's Redefining Dessert Fries",
      description: "Our innovative Choco Spring combines the best of both worlds - crispy fries and sweet chocolate. Discover how this unique creation came to be, the challenges we faced in perfecting the recipe, and why it's become a must-try item for anyone visiting Potatowala.",
      date: "November 20, 2024",
      readTime: "5 min read",
      category: "Menu Spotlight",
      image: chocoSpring,
      author: "Chef Ramesh",
    },
    {
      id: 11,
      title: "Customer Stories: How Potatowala Became Part of Their Special Moments",
      description: "From first dates to birthday celebrations, graduation parties to late-night cravings, hear heartwarming stories from our customers about how Potatowala has been part of their special moments. These real stories remind us why we do what we do.",
      date: "November 15, 2024",
      readTime: "8 min read",
      category: "Customer Stories",
      image: aboutFood2,
      author: "Community Team",
    },
    {
      id: 12,
      title: "Spice Levels Explained: Finding Your Perfect Heat Level",
      description: "Confused about spice levels? We break down our spice scale from mild to extra hot, explain what makes each level unique, and help you find your perfect heat level. Whether you're a spice novice or a heat seeker, we've got you covered.",
      date: "November 10, 2024",
      readTime: "4 min read",
      category: "Tips",
      image: heroLoadedFries,
      author: "Chef Ramesh",
    },
    {
      id: 13,
      title: "The Economics of Fast Food: How We Keep Quality High and Prices Affordable",
      description: "Ever wonder how we maintain premium quality while keeping prices accessible? We take you behind the scenes of our supply chain, ingredient sourcing, and business model that allows us to serve high-quality loaded fries without breaking the bank.",
      date: "November 5, 2024",
      readTime: "6 min read",
      category: "Business",
      image: aboutChef,
      author: "Management Team",
    },
    {
      id: 14,
      title: "Regional Variations: How Loaded Fries Differ Across India",
      description: "From Mumbai's spicy masala fries to Delhi's butter-loaded versions, explore how different regions in India have put their unique spin on loaded fries. We compare regional styles and share which ones have inspired our menu.",
      date: "October 28, 2024",
      readTime: "7 min read",
      category: "Food Culture",
      image: aboutFood1,
      author: "Dr. Anjali Menon",
    },
    {
      id: 15,
      title: "The Perfect Combo: Pairing Your Loaded Fries with the Right Beverage",
      description: "What's the best drink to pair with loaded fries? We explore beverage pairings from classic cola to craft sodas, milkshakes, and even coffee. Learn how different drinks enhance or complement the flavors of your favorite loaded fries.",
      date: "October 20, 2024",
      readTime: "5 min read",
      category: "Tips",
      image: cheeseBalls,
      author: "Priya Sharma",
    },
    {
      id: 16,
      title: "From Farm to Plate: Our Commitment to Fresh, Local Ingredients",
      description: "At Potatowala, we believe in supporting local farmers and using the freshest ingredients. Learn about our partnership with local potato farms, our quality control process, and how we ensure every ingredient meets our high standards before it reaches your plate.",
      date: "October 15, 2024",
      readTime: "6 min read",
      category: "Sustainability",
      image: springPotato,
      author: "Supply Chain Team",
    },
    {
      id: 17,
      title: "Funky Chips: The Crunchy Sidekick That's Stealing the Show",
      description: "Our Funky Chips have developed a cult following, and we're here to tell you why! Discover the unique seasoning blend, the perfect thickness, and the cooking technique that makes these chips irresistibly crunchy and flavorful.",
      date: "October 10, 2024",
      readTime: "4 min read",
      category: "Menu Spotlight",
      image: nachos,
      author: "Chef Ramesh",
    },
    {
      id: 18,
      title: "The Future of Fast Food: Innovation in the Loaded Fries Industry",
      description: "What does the future hold for loaded fries? We explore emerging trends, new flavor innovations, technology in food preparation, and how we're staying ahead of the curve to bring you the best possible experience.",
      date: "October 5, 2024",
      readTime: "7 min read",
      category: "Industry Trends",
      image: aboutChef,
      author: "Innovation Team",
    },
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageHero title="Our Blog" current="Blog" />
      
      <main className="container mx-auto px-4 py-16">
        {/* Featured Posts Section */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-border group">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-xs font-semibold text-white bg-primary px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl font-bold leading-tight mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground line-clamp-3">
                      {post.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* All Posts Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 border-border group">
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-xs font-semibold text-white bg-primary px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-bold leading-tight mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground line-clamp-3 text-sm">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <User className="w-3 h-3" />
                    <span>{post.author}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl md:text-3xl mb-2">
              Stay Updated with Our Latest Articles
            </CardTitle>
            <CardDescription className="text-base max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss a new recipe, cooking tip, or behind-the-scenes story! Get notified whenever we publish new content.
            </CardDescription>
          </CardHeader>
          <CardContent className="max-w-md mx-auto">
            <EmailSubscription />
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Blogs;
