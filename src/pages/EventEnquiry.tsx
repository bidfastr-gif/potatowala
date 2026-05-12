import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import pattern from "@/assets/food-pattern.jpg";

const eventEnquirySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(15, "Phone number must be less than 15 characters"),
  eventType: z.string().trim().min(1, "Event type is required").max(100, "Event type must be less than 100 characters"),
  date: z.string().trim().min(1, "Event date is required").max(100, "Date must be less than 100 characters"),
  location: z.string().trim().min(1, "Location is required").max(200, "Location must be less than 200 characters"),
  guests: z.string().trim().max(50, "Guest count must be less than 50 characters").optional(),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters"),
});

const EventEnquiry = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [eventType, setEventType] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [guests, setGuests] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const validatedData = eventEnquirySchema.parse({
        name,
        email,
        phone,
        eventType,
        date,
        location,
        guests: guests || undefined,
        message,
      });

      setIsSubmitting(true);

      let emailSent = false;

      const emailjsConfigured =
        import.meta.env.VITE_EMAILJS_SERVICE_ID &&
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID &&
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      const formspreeConfigured = import.meta.env.VITE_FORMSPREE_ID;

      // Method 1: Try Formspree FIRST
      let formspreeId = (import.meta.env.VITE_FORMSPREE_ID as string) || "xqenwdjy";
      if (formspreeId) {
        try {
          if (formspreeId.includes("formspree.io/f/")) {
            const match = formspreeId.match(/formspree\.io\/f\/([a-zA-Z0-9]+)/);
            if (match) {
              formspreeId = match[1];
            }
          }

          const formData = new FormData();
          formData.append("name", validatedData.name);
          formData.append("email", validatedData.email);
          formData.append("phone", validatedData.phone);
          formData.append("eventType", validatedData.eventType);
          formData.append("date", validatedData.date);
          formData.append("location", validatedData.location);
          formData.append("guests", validatedData.guests || "Not specified");
          formData.append("message", validatedData.message);
          formData.append("_subject", `New Event Enquiry from ${validatedData.name}`);

          const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
            method: "POST",
            body: formData,
            headers: {
              Accept: "application/json",
            },
          });

          if (response.ok) {
            emailSent = true;
            console.log("✓ Email sent via Formspree");
          } else {
            console.error("Formspree error:", await response.json());
          }
        } catch (error) {
          console.error("Event enquiry Formspree error:", error);
        }
      }

      // Method 2: Fallback to EmailJS
      if (!emailSent && emailjsConfigured) {
        try {
          const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
          const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
          const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

          emailjs.init(publicKey);
          const emailParams = {
            to_email: "vasanthb.gap@gmail.com",
            from_name: validatedData.name,
            from_email: validatedData.email,
            phone: validatedData.phone,
            eventType: validatedData.eventType,
            date: validatedData.date,
            location: validatedData.location,
            guests: validatedData.guests || "Not specified",
            message: validatedData.message,
            subject: `New Event Enquiry from ${validatedData.name}`,
          };

          await emailjs.send(serviceId, templateId, emailParams);
          emailSent = true;
          console.log("✓ Email sent via EmailJS");
        } catch (error) {
          console.error("Event enquiry EmailJS error:", error);
        }
      }

      if (!emailSent) {
        console.warn("No email service configured for Event Enquiry. Configure EmailJS or Formspree env variables.");
      }

      toast({
        title: "Thank you!",
        description: "Your event enquiry has been submitted. We will contact you shortly.",
      });

      // Reset form
      setName("");
      setEmail("");
      setPhone("");
      setEventType("");
      setDate("");
      setLocation("");
      setGuests("");
      setMessage("");
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        console.error("Event enquiry submission error:", error);
        toast({
          title: "Error",
          description: "Failed to submit event enquiry. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <PageHero title="Event Enquiry" current="Event Enquiry" />

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
        <section className="max-w-3xl mx-auto bg-card border rounded-lg shadow-sm p-8 space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold">Plan Your Event with Potatowala</h1>
            <p className="text-muted-foreground">
              Share your event details below and we&apos;ll get back to you with menu options, pricing, and availability.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  maxLength={100}
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
                  maxLength={255}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  maxLength={15}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="eventType">Event Type *</Label>
                <Input
                  id="eventType"
                  type="text"
                  placeholder="Birthday party, corporate event, etc."
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  required
                  maxLength={100}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date">Event Date *</Label>
                <Input
                  id="date"
                  type="text"
                  placeholder="e.g., 25 Dec 2025, next month, etc."
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  maxLength={100}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="guests">Approx. No. of Guests</Label>
                <Input
                  id="guests"
                  type="text"
                  placeholder="e.g., 50-75 guests"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  maxLength={50}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Event Location *</Label>
              <Input
                id="location"
                type="text"
                placeholder="Venue name / area / city"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
                maxLength={200}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Additional Details *</Label>
              <Textarea
                id="message"
                placeholder="Tell us about your event, preferred menu, timing, and any special requests..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={5}
                maxLength={1000}
              />
              <p className="text-xs text-muted-foreground">{message.length}/1000 characters</p>
            </div>

            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors mt-4"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Event Enquiry"}
            </Button>
          </form>

          <p className="text-xs text-muted-foreground text-center">
            We&apos;ll get back to you within 24–48 hours. For urgent enquiries, please contact your nearest Potatowala outlet directly.
          </p>
        </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EventEnquiry;


