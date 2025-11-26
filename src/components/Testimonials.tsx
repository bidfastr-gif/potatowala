import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
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

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const { data, error } = await supabase
          .from("public_feedback")
          .select("*")
          .order("created_at", { ascending: false })
          .limit(6);

        if (error) throw error;
        setTestimonials(data || []);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-md mb-4">
            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Google Reviews</span>
          </div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
          What Our Customers Say
        </h2>

        {loading ? (
          <div className="text-center text-muted-foreground">Loading testimonials...</div>
        ) : testimonials.length === 0 ? (
          <div className="text-center text-muted-foreground">No testimonials yet. Be the first to share your experience!</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((review) => (
            <Card
              key={review.id}
              className="hover-lift bg-card/50 backdrop-blur-sm border-2 hover:border-primary/50 transition-all"
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-accent-yellow text-accent-yellow"
                    />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">"{review.message}"</p>
                <p className="font-semibold text-primary">- {review.name}</p>
              </CardContent>
            </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
