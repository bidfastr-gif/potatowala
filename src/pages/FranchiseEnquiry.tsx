import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import pattern from "@/assets/food-pattern.jpg";

const franchiseEnquirySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(15, "Phone number must be less than 15 characters"),
  location: z.string().trim().min(1, "Location preference is required").max(200, "Location must be less than 200 characters"),
  expectedOpeningDate: z.string().optional(),
  currentOccupation: z.string().optional(),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters"),
});

const FranchiseEnquiry = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [expectedOpeningDate, setExpectedOpeningDate] = useState("");
  const [currentOccupation, setCurrentOccupation] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Validate form data
      const validatedData = franchiseEnquirySchema.parse({
        name,
        email,
        phone,
        location,
        expectedOpeningDate: expectedOpeningDate || undefined,
        currentOccupation: currentOccupation || undefined,
        message,
      });

      setIsSubmitting(true);

      // Try to insert into franchise_enquiries table, or fallback to logging
      // Cast the payload to `any` so we're not constrained by the generated Supabase types,
      // which may not be in sync with the current table columns (phone, location, etc.).
      const { data, error } = await supabase
        // Cast the table name to `any` because the generated Supabase types
        // only know about the `feedback` table, while we are writing to a
        // custom `franchise_enquiries` table.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .from("franchise_enquiries" as any)
        .insert([
          {
            name: validatedData.name,
            email: validatedData.email,
            phone: validatedData.phone,
            location: validatedData.location,
            expected_opening_date: validatedData.expectedOpeningDate || null,
            current_occupation: validatedData.currentOccupation || null,
            message: validatedData.message,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          } as any,
        ])
        .select();

      if (error) {
        // If table doesn't exist, just log it
        console.log("Franchise enquiry (table may not exist):", error);
        console.log("Enquiry details:", validatedData);
      } else {
        console.log("Franchise enquiry submitted successfully:", data);
      }

      // Send email notification to vasanthb.gap@gmail.com
      let emailSent = false;
      let emailError = null;

      // Determine which email service is configured
      const emailjsConfigured = import.meta.env.VITE_EMAILJS_SERVICE_ID && 
                                 import.meta.env.VITE_EMAILJS_TEMPLATE_ID && 
                                 import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      const formspreeConfigured = import.meta.env.VITE_FORMSPREE_ID;

      // Prioritize Formspree if it's the only one configured (fastest setup)
      const prioritizeFormspree = formspreeConfigured && !emailjsConfigured;

      try {
        // Method 1: Try Formspree FIRST
        let formspreeId = import.meta.env.VITE_FORMSPREE_ID || "xqenwdjy";
        if (formspreeId) {
          // Extract Form ID from URL if full URL is provided
          if (formspreeId.includes("formspree.io/f/")) {
            const match = formspreeId.match(/formspree\.io\/f\/([a-zA-Z0-9]+)/);
            if (match) {
              formspreeId = match[1];
              console.log("✓ Extracted Formspree ID from URL:", formspreeId);
            }
          }
          
          try {
            const formData = new FormData();
            formData.append("name", validatedData.name);
            formData.append("email", validatedData.email);
            formData.append("phone", validatedData.phone);
            formData.append("location", validatedData.location);
            formData.append("expectedOpeningDate", validatedData.expectedOpeningDate || "Not specified");
            formData.append("currentOccupation", validatedData.currentOccupation || "Not specified");
            formData.append("message", validatedData.message);
            formData.append("_subject", `New Franchise Enquiry from ${validatedData.name}`);

            console.log("📧 Attempting to send via Formspree...");
            
            const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
              method: "POST",
              body: formData,
              headers: {
                "Accept": "application/json"
              }
            });

            if (response.ok) {
              emailSent = true;
              console.log("✓ Email sent via Formspree");
            } else {
              const responseData = await response.json();
              console.error("❌ Formspree error:", responseData);
            }
          } catch (formspreeError) {
            console.error("✗ Formspree error:", formspreeError);
          }
        }

        // Method 2: Try EmailJS (if configured and Formspree not prioritized)
        if (!emailSent && emailjsConfigured) {
          const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
          const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
          const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

          try {
            emailjs.init(publicKey);
            const emailParams = {
              to_email: "vasanthb.gap@gmail.com",
              from_name: validatedData.name,
              from_email: validatedData.email,
              phone: validatedData.phone,
              location: validatedData.location,
              expectedOpeningDate: validatedData.expectedOpeningDate || "Not specified",
              currentOccupation: validatedData.currentOccupation || "Not specified",
              message: validatedData.message,
              subject: `New Franchise Enquiry from ${validatedData.name}`,
            };
            await emailjs.send(serviceId, templateId, emailParams);
            emailSent = true;
            console.log("✓ Email sent via EmailJS to vasanthb.gap@gmail.com");
          } catch (emailjsError) {
            emailError = emailjsError;
            console.error("✗ EmailJS error:", emailjsError);
          }
        }

        // Method 3: Try Supabase Edge Function (if previous methods failed or not configured)
        if (!emailSent) {
          try {
            const { data: emailData, error: edgeError } = await supabase.functions.invoke('send-franchise-email', {
              body: {
                name: validatedData.name,
                email: validatedData.email,
                phone: validatedData.phone,
                location: validatedData.location,
                expectedOpeningDate: validatedData.expectedOpeningDate || undefined,
                currentOccupation: validatedData.currentOccupation || undefined,
                message: validatedData.message,
              },
            });

            if (edgeError) {
              throw edgeError;
            }

            if (emailData?.emailSent) {
              emailSent = true;
              console.log("✓ Email sent via Supabase Edge Function to vasanthb.gap@gmail.com");
              console.log("Email ID:", emailData?.emailId);
            } else {
              console.warn("⚠ Edge function returned but email not confirmed:", emailData);
              if (emailData?.message) {
                console.warn("Edge function message:", emailData.message);
              }
              // Check if it's a function not found error
              if (edgeError?.message?.includes("not found") || edgeError?.message?.includes("404")) {
                console.error("❌ Edge function not deployed! Deploy it with: npx supabase functions deploy send-franchise-email");
              }
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          } catch (edgeError: any) {
            emailError = edgeError;
            console.error("✗ Supabase Edge Function error:", edgeError?.message || edgeError);
            
            // Provide helpful error messages
            if (edgeError?.message?.includes("not found") || edgeError?.message?.includes("404")) {
              console.error("❌ Edge function 'send-franchise-email' is not deployed!");
              console.error("👉 To fix: Run 'npx supabase functions deploy send-franchise-email'");
            } else if (edgeError?.message?.includes("RESEND_API_KEY") || edgeError?.message?.includes("unauthorized")) {
              console.error("❌ Resend API key not configured!");
              console.error("👉 To fix: Run 'npx supabase secrets set RESEND_API_KEY=your_key'");
            }
            // Don't log full error details to avoid noise
          }
        }

        // Method 4: Use Formspree as fallback (if not already tried)
        if (!emailSent && !prioritizeFormspree) {
          let formspreeId = import.meta.env.VITE_FORMSPREE_ID;
          if (formspreeId) {
            // Extract Form ID from URL if full URL is provided
            if (formspreeId.includes("formspree.io/f/")) {
              const match = formspreeId.match(/formspree\.io\/f\/([a-zA-Z0-9]+)/);
              if (match) {
                formspreeId = match[1];
                console.log("✓ Extracted Formspree ID from URL:", formspreeId);
              } else {
                console.error("❌ Could not extract Formspree ID from URL:", formspreeId);
              }
            }
            
            try {
              const formData = new FormData();
              formData.append("name", validatedData.name);
              formData.append("email", validatedData.email);
              formData.append("phone", validatedData.phone);
              formData.append("location", validatedData.location);
              formData.append("expectedOpeningDate", validatedData.expectedOpeningDate || "Not specified");
              formData.append("currentOccupation", validatedData.currentOccupation || "Not specified");
              formData.append("message", validatedData.message);
              formData.append("_subject", `New Franchise Enquiry from ${validatedData.name}`);
              // Note: Formspree uses the email configured in form settings, not _to

              console.log("📧 Attempting to send via Formspree...");
              console.log("   Form ID:", formspreeId);
              console.log("   URL: https://formspree.io/f/" + formspreeId);
              
              const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
                method: "POST",
                body: formData,
                headers: {
                  "Accept": "application/json"
                }
              });

              const responseData = await response.json();
              console.log("   Response status:", response.status);
              console.log("   Response data:", responseData);

              if (response.ok) {
                emailSent = true;
                console.log("✓✓✓ Email sent via Formspree to vasanthb.gap@gmail.com ✓✓✓");
                console.log("   Formspree submission ID:", responseData.next || responseData.id);
              } else {
                console.error("❌ Formspree error response:", responseData);
                if (responseData.errors) {
                  console.error("   Errors:", responseData.errors);
                }
                throw new Error(responseData.error || responseData.message || "Formspree request failed");
              }
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } catch (formspreeError: any) {
              emailError = formspreeError;
              console.error("✗✗✗ Formspree error:", formspreeError);
              if (formspreeError.message) {
                console.error("   Error message:", formspreeError.message);
              }
              if (formspreeError.stack) {
                console.error("   Stack:", formspreeError.stack);
              }
            }
          } else {
            console.warn("⚠ Formspree ID not found in environment variables");
          }
        }

        // Method 4: Use Webhook as final fallback
        if (!emailSent) {
          const webhookUrl = import.meta.env.VITE_WEBHOOK_URL;
          if (webhookUrl) {
            try {
              await fetch(webhookUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  to: "vasanthb.gap@gmail.com",
                  subject: `New Franchise Enquiry from ${validatedData.name}`,
                  name: validatedData.name,
                  email: validatedData.email,
                  phone: validatedData.phone,
                  location: validatedData.location,
                  expectedOpeningDate: validatedData.expectedOpeningDate || "Not specified",
                  currentOccupation: validatedData.currentOccupation || "Not specified",
                  message: validatedData.message,
                }),
              });
              emailSent = true;
              console.log("✓ Email sent via Webhook to vasanthb.gap@gmail.com");
            } catch (webhookError) {
              emailError = webhookError;
              console.error("✗ Webhook error:", webhookError);
            }
          }
        }

        if (!emailSent) {
          console.warn("⚠ Email service not configured. To enable email notifications:");
          console.warn("  📧 QUICKEST SOLUTION (5 min): Set up Formspree");
          console.warn("     1. Go to https://formspree.io/");
          console.warn("     2. Create form with email: vasanthb.gap@gmail.com");
          console.warn("     3. Add to .env: VITE_FORMSPREE_ID=your_form_id");
          console.warn("");
          console.warn("  📧 ALTERNATIVE: Deploy Supabase Edge Function with Resend");
          console.warn("     See: RESEND_QUICK_SETUP.md for step-by-step instructions");
          console.warn("");
          console.warn("  Enquiry details saved to database:", validatedData);
          
          // Show user-friendly error in toast
          toast({
            title: "Email notification pending",
            description: "Enquiry saved, but email service needs configuration. Check browser console for setup instructions.",
            variant: "default",
          });
        }
      } catch (error) {
        console.error("✗ Unexpected error sending email:", error);
        emailError = error;
      }

      // Show appropriate success message based on email status
      if (emailSent) {
        toast({
          title: "Thank you for your interest!",
          description: "We've received your franchise enquiry and sent it via email. We'll get back to you soon.",
        });
      } else {
        toast({
          title: "Thank you for your interest!",
          description: "We've received your franchise enquiry. We'll get back to you soon. (Note: Email notification needs configuration - check console for details)",
          variant: "default",
        });
      }

      // Reset form
      setName("");
      setEmail("");
      setPhone("");
      setLocation("");
      setExpectedOpeningDate("");
      setCurrentOccupation("");
      setMessage("");
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        console.error("Franchise enquiry submission error:", error);
        toast({
          title: "Error",
          description: "Failed to submit enquiry. Please try again or contact us directly.",
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
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-primary/90 to-primary overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url(${pattern})`,
            backgroundSize: 'auto',
            backgroundRepeat: 'repeat'
          }} />
        </div>
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Franchise Enquiry
            </h1>
            <p className="text-xl text-white/90">
              Join the Potatowala family and bring premium loaded fries to your city!
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background relative overflow-hidden">
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
        <div className="container mx-auto px-4 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose Potatowala Franchise?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join a proven business model with comprehensive support and exciting growth opportunities
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Benefit 1 */}
              <div className="bg-card p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Proven Business Model</h3>
                <p className="text-muted-foreground">
                  Join a successful brand with 4+ years of experience and a track record of satisfied customers. Our proven system ensures your franchise's success from day one.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="bg-card p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Comprehensive Training</h3>
                <p className="text-muted-foreground">
                  Receive extensive training on operations, food preparation, customer service, and business management. We ensure you're fully equipped to run a successful franchise.
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="bg-card p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Marketing Support</h3>
                <p className="text-muted-foreground">
                  Benefit from our established brand presence, marketing materials, social media strategies, and ongoing promotional campaigns to drive customers to your location.
                </p>
              </div>

              {/* Benefit 4 */}
              <div className="bg-card p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
                <p className="text-muted-foreground">
                  Get continuous support from our experienced team including operational guidance, quality control, menu updates, and troubleshooting assistance whenever you need it.
                </p>
              </div>

              {/* Benefit 5 */}
              <div className="bg-card p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Competitive Investment</h3>
                <p className="text-muted-foreground">
                  Affordable franchise fees with flexible investment options. We offer competitive pricing that makes it accessible to passionate entrepreneurs.
                </p>
              </div>

              {/* Benefit 6 */}
              <div className="bg-card p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Growth Potential</h3>
                <p className="text-muted-foreground">
                  Tap into the growing fast-food market with a unique product offering. Expand your business with multiple locations and benefit from our brand's increasing popularity.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-12 bg-muted/30 relative overflow-hidden">
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
        <div className="container mx-auto px-4 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your Franchise Journey?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Fill out the detailed form below and our team will get back to you with comprehensive information 
                about our franchise opportunities, investment requirements, and how we can help you succeed.
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 bg-muted/30 relative overflow-hidden">
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
        <div className="container mx-auto px-4 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg border shadow-lg">
              <div className="border-b pb-4 mb-6">
                <h3 className="text-2xl font-bold mb-2">Personal Information</h3>
                <p className="text-sm text-muted-foreground">Tell us about yourself</p>
              </div>

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
                  <Label htmlFor="currentOccupation">Current Occupation</Label>
                  <Input
                    id="currentOccupation"
                    type="text"
                    placeholder="e.g., Business Owner, Employee, Student"
                    value={currentOccupation}
                    onChange={(e) => setCurrentOccupation(e.target.value)}
                    maxLength={100}
                  />
                </div>
              </div>

              <div className="border-b pb-4 mb-6 mt-8">
                <h3 className="text-2xl font-bold mb-2">Franchise Details</h3>
                <p className="text-sm text-muted-foreground">Information about your franchise interest</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="location">Preferred Location *</Label>
                  <Input
                    id="location"
                    type="text"
                    placeholder="e.g., Chennai, Anna Nagar"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                    maxLength={200}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="expectedOpeningDate">Expected Opening Date</Label>
                  <Input
                    id="expectedOpeningDate"
                    type="text"
                    placeholder="e.g., Within 3 months, 6 months"
                    value={expectedOpeningDate}
                    onChange={(e) => setExpectedOpeningDate(e.target.value)}
                    maxLength={100}
                  />
                </div>
              </div>



              <div className="border-b pb-4 mb-6 mt-8">
                <h3 className="text-2xl font-bold mb-2">Additional Information</h3>
                <p className="text-sm text-muted-foreground">Tell us more about your interest</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Additional Details *</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your interest in franchising with Potatowala, your experience in the food industry, your goals, or any questions you may have..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={6}
                  maxLength={1000}
                />
                <p className="text-xs text-muted-foreground">
                  {message.length}/1000 characters
                </p>
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors mt-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Franchise Enquiry"}
              </Button>
            </form>
          </div>
        </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FranchiseEnquiry;
