import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface Testimonial {
  id: string;
  name: string;
  rating: number;
  message: string;
  created_at: string;
}

export const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from("feedback")
          .select("*")
          .eq("is_approved", true)
          .gte("rating", 4)
          .order("created_at", { ascending: false });

        if (error) {
          console.error("Error fetching testimonials:", error);
          throw error;
        }
        
        console.log("Fetched testimonials:", data);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const testimonialsList = (data || []) as any[];
        setTestimonials(testimonialsList);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();

    // Subscribe to real-time changes in feedback table for auto-updates
    const channel = supabase
      .channel(`feedback_changes_${Math.random()}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "feedback",
        },
        (payload) => {
          console.log("Real-time feedback event:", payload);
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const newRow = payload.new as any;
          // Only refetch if the inserted feedback is approved AND rating >= 4
          if (newRow?.is_approved === true && newRow?.rating >= 4) {
            console.log("Approved 4+ star feedback inserted, refetching testimonials...");
            fetchTestimonials();
          }
        }
      )
      .subscribe((status) => {
        console.log("Subscription status:", status);
      });

    // Cleanup subscription on unmount
    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  // Auto-scroll between testimonials every 5 seconds
  useEffect(() => {
    if (testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-md mb-4">
            <Star className="w-5 h-5 text-primary fill-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Foods Reviews
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-primary">
            Global Customer Feedback
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            It&apos;s the perfect dining experience where every dish is crafted with fresh, high-quality ingredients.
            Experience quick and efficient service that ensures your food is served hot and flavourful. Every visit feels
            special with our friendly team and comforting potato goodness.
          </p>
        </div>

        {loading ? (
          <div className="text-center text-muted-foreground">Loading testimonials...</div>
        ) : testimonials.length === 0 ? (
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">No testimonials yet. Be the first to share your experience!</p>
            <Button 
              variant="outline" 
              onClick={() => window.location.reload()}
              className="mt-4"
            >
              Refresh
            </Button>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            {/* Single-card carousel */}
            {testimonials.length > 0 && (
              <Card className="bg-card rounded-3xl shadow-sm hover:shadow-xl border border-border hover:border-primary/40 transition-all">
                <CardContent className="p-8 md:p-10">
                  <div className="flex gap-1 mb-4 text-accent-yellow">
                    {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-accent-yellow text-accent-yellow"
                      />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 italic text-lg leading-relaxed">
                    "{testimonials[currentIndex].message}"
                  </p>
                  <p className="font-semibold text-primary">
                    - {testimonials[currentIndex].name}
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Dots indicator */}
            {testimonials.length > 1 && (
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((t, index) => (
                  <button
                    key={t.id}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-primary w-5"
                        : "bg-muted-foreground/40 hover:bg-muted-foreground/70"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
