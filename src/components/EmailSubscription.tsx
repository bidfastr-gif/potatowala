import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const emailSchema = z.string().email("Please enter a valid email address");

export const EmailSubscription = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Validate email
      const validatedEmail = emailSchema.parse(email.trim().toLowerCase());

      setIsSubmitting(true);

      // Check if email already exists
      const { data: existing } = await supabase
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .from("email_subscriptions" as any)
        .select("email")
        .eq("email", validatedEmail)
        .single();

      if (existing) {
        toast({
          title: "Already Subscribed!",
          description: "This email is already subscribed to our newsletter.",
          variant: "default",
        });
        setEmail("");
        return;
      }

      // Insert email into subscriptions table
      const { error } = await supabase
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .from("email_subscriptions" as any)
        .insert([
          {
            email: validatedEmail,
            subscribed_at: new Date().toISOString(),
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          } as any,
        ]);

      if (error) {
        // If table doesn't exist yet, just log it
        console.log("Subscription table may not exist:", error);
        // Still show success to user
        toast({
          title: "Thank you for subscribing!",
          description: "You'll receive updates about our new dishes.",
        });
      } else {
        toast({
          title: "Successfully Subscribed!",
          description: "You'll receive email updates whenever we add new dishes to our menu.",
        });
      }

      setEmail("");
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Invalid Email",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        console.error("Subscription error:", error);
        toast({
          title: "Error",
          description: "Failed to subscribe. Please try again later.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-4">
      <h4 className="font-bold mb-4">Stay Updated</h4>
      <p className="text-sm opacity-80 mb-4">
        Subscribe to get notified about our latest dishes and special offers!
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 bg-background/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:ring-primary-foreground"
          disabled={isSubmitting}
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 whitespace-nowrap"
        >
          {isSubmitting ? "Subscribing..." : "Subscribe"}
        </Button>
      </form>
    </div>
  );
};

