import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Home } from "lucide-react";
import pattern from "@/assets/food-pattern.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(15, "Phone number must be less than 15 characters"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters"),
});

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const validatedData = contactSchema.parse({
        name,
        email,
        phone,
        message,
      });

      setIsSubmitting(true);

      const formspreeId = import.meta.env.VITE_FORMSPREE_ID || "xqenwdjy";
      const formData = new FormData();
      formData.append("name", validatedData.name);
      formData.append("email", validatedData.email);
      formData.append("phone", validatedData.phone);
      formData.append("message", validatedData.message);
      formData.append("_subject", `New Contact Enquiry from ${validatedData.name}`);

      const response = await fetch(`https://formspree.io/f/${formspreeId.includes('/') ? formspreeId.split('/').pop() : formspreeId}`, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for contacting us. We will get back to you soon.",
        });
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send message");
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        console.error("Contact form error:", error);
        toast({
          title: "Error",
          description: "Something went wrong. Please try again later.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

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
      <section className="py-20 bg-background/90 relative overflow-hidden">
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

          {/* Contact Form Section */}
          <div className="mt-20 max-w-4xl mx-auto">
            <Card className="shadow-lg border-2 border-primary/20">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-center mb-8">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="How can we help you?"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 text-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
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
                    <p className="text-muted-foreground">9:30am - 6:30pm</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold mb-2">Saturday - Sunday</p>
                    <p className="text-muted-foreground">9:30am - 6:30pm</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

