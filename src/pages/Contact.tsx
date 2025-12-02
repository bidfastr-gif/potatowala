import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Home } from "lucide-react";
import pattern from "@/assets/food-pattern.jpg";

const Contact = () => {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: `url(${pattern})`,
        backgroundSize: "auto",
        backgroundRepeat: "repeat",
      }}
    >
      <Header />
      
      {/* Hero Section with Background */}
      <section className="relative py-24 bg-gradient-to-b from-primary/90 to-primary overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url(${pattern})`,
            backgroundSize: 'auto',
            backgroundRepeat: 'repeat'
          }} />
        </div>
        
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-2 mb-6 text-white/80 text-sm">
              <a href="/" className="hover:text-white transition-colors flex items-center gap-1">
                <Home className="w-4 h-4" />
                Home
              </a>
              <span>/</span>
              <span className="text-white">Contact Us</span>
            </nav>
            
            {/* Main Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              Contact Us
            </h1>
          </div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-20 bg-background/90">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto -mt-16 relative z-10">
            {/* Contact Us Card */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow border-2 hover:border-primary/50">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Contact Us</h3>
                <p className="text-muted-foreground text-lg">+91 99415 22111</p>
              </CardContent>
            </Card>

            {/* Email Card */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow border-2 hover:border-primary/50">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Email</h3>
                <p className="text-muted-foreground text-lg uppercase">potatowalafoods@gmail.com</p>
              </CardContent>
            </Card>

            {/* Office Location Card */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow border-2 hover:border-primary/50">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Our Office Location</h3>
                <p className="text-muted-foreground text-base">
                  187, Poonamallee High Road,<br />
                  Maduravoyal, Chennai - 600095
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Opening Hours Section */}
          <div className="mt-20 max-w-4xl mx-auto">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-center mb-8">Opening Hours</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
                  <div>
                    <p className="text-lg font-semibold mb-2">Monday - Friday</p>
                    <p className="text-muted-foreground">11am - 10pm</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold mb-2">Saturday - Sunday</p>
                    <p className="text-muted-foreground">11am - 11pm</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

