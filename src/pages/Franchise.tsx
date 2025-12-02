import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Home, Star, Navigation } from "lucide-react";
import pattern from "@/assets/food-pattern.jpg";
import porurFranchise from "@/assets/porur-franchise.jpg";
import akkaraiStore from "@/assets/akkarai-store.jpg";
import besantNagarStore from "@/assets/besant-nagar-store.jpg";
import guindyStore from "@/assets/guindy-store.jpg";
import velloreStore from "@/assets/vellore-store.jpg";

interface StoreLocation {
  name: string;
  address: string;
  image: string;
  coordinates?: string;
  rating?: number;
  reviews?: number;
}

const Franchise = () => {
  const [selectedStore, setSelectedStore] = useState<number>(4); // Default to Besant Nagar

  // Store locations with full addresses from the image
  // To add store images: Import them at the top and replace the image paths below
  // Example: import maduravoyalStore from "@/assets/stores/maduravoyal-store.jpg";
  const stores: StoreLocation[] = [
    {
      name: "Maduravoyal (Factory)",
      address: "187, Poonamallee High Road, Maduravoyal, Chennai - 600095",
      image: "/api/placeholder/400/300", // TODO: Replace with actual store image (e.g., import maduravoyalStore from "@/assets/stores/maduravoyal.jpg")
      coordinates: "13.0656,80.1650",
      rating: 4.0,
      reviews: 85,
    },
    {
      name: "Akkarai ECR",
      address: "The R's Food World, French Village Food Street, Sea Cliff Conclave, Akkarai, Panaiyur, Chennai, Tamil Nadu 600119",
      image: akkaraiStore,
      coordinates: "12.9200,80.2600",
      rating: 4.2,
      reviews: 120,
    },
    {
      name: "Porur",
      address: "30, Arcot Rd, Thirumurugan Nagar, Porur, Chennai, Tamil Nadu 600125",
      image: porurFranchise,
      coordinates: "13.0355,80.1556",
      rating: 4.1,
      reviews: 95,
    },
    {
      name: "Guindy",
      address: "Kathipara Flyover Bridge, Ramapuram, Guindy Industrial Estate, Chakrapani Colony, Guindy, St.Thomas Mount, Tamil Nadu 600032",
      image: guindyStore,
      coordinates: "13.0067,80.2206",
      rating: 4.3,
      reviews: 110,
    },
    {
      name: "Besant Nagar",
      address: "14, TNHB Complex, 4th Main Rd, Elliots Beach, Besant Nagar, Chennai, Tamil Nadu 600090",
      image: besantNagarStore,
      coordinates: "12.9980,80.2650",
      rating: 4.0,
      reviews: 93,
    },
    {
      name: "Vellore - Hive Food Street",
      address:
        "Hive food street, 386/1, 3rd Rd, Vaibhav Nagar, Katpadi, Brahmapuram, Vellore, Tamil Nadu 632014",
      image: velloreStore,
      // No coordinates provided – map will fall back to address search
      rating: 4.1,
      reviews: 60,
    },
  ];

  // Helper function to generate Google Maps embed URL
  const getMapUrl = (coordinates?: string, address?: string) => {
    if (coordinates) {
      const [lat, lng] = coordinates.split(",").map(c => c.trim());
      const query = address ? encodeURIComponent(address) : `${lat},${lng}`;
      return `https://maps.google.com/maps?q=${lat},${lng}+(${query})&hl=en&ll=${lat},${lng}&spn=0.01,0.01&z=16&output=embed`;
    }
    const query = address ? encodeURIComponent(address) : "Chennai, Tamil Nadu";
    return `https://maps.google.com/maps?q=${query}&hl=en&z=12&output=embed`;
  };

  const selectedStoreData = stores[selectedStore];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-b from-primary/90 to-primary overflow-hidden">
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
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-2 mb-6 text-white/80 text-sm">
              <a href="/" className="hover:text-white transition-colors flex items-center gap-1">
                <Home className="w-4 h-4" />
                Home
              </a>
              <span>/</span>
              <span className="text-white">Find a store</span>
            </nav>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Find a store
            </h1>
            <p className="text-base md:text-lg text-white/85 max-w-xl mx-auto">
              Potatowala is now serving across key locations in <span className="font-semibold">Chennai</span> and{" "}
              <span className="font-semibold">Vellore</span> districts, with more cities coming soon.
            </p>
          </div>
        </div>
      </section>

      {/* Store Listings Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {stores.map((store, index) => (
              <div
                key={index}
                onClick={() => setSelectedStore(index)}
                className={`cursor-pointer transition-all duration-300 ${
                  selectedStore === index
                    ? "ring-2 ring-primary ring-offset-2"
                    : "hover:shadow-lg"
                }`}
              >
                <div className="bg-white rounded-lg overflow-hidden border border-border">
                  {/* Store Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary/20 to-primary/10">
                    {store.image && store.image !== "/api/placeholder/400/300" ? (
                      <img
                        src={store.image}
                        alt={`Potatowala ${store.name}`}
                        className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center p-4">
                          <div className="text-4xl mb-2">🏪</div>
                          <div className="text-sm font-semibold text-primary">{store.name}</div>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* Store Address */}
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {store.address}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="relative bg-white rounded-lg overflow-hidden border border-border shadow-lg">
              {/* Map */}
              <div className="relative w-full" style={{ height: "600px" }}>
                <iframe
                  key={selectedStore}
                  src={getMapUrl(selectedStoreData.coordinates, selectedStoreData.address)}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
                
                {/* Store Info Card Overlay */}
                <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-xl border border-border p-4 max-w-sm z-10">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-1">
                        POTATOWALA - {selectedStoreData.name.toUpperCase()}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {selectedStoreData.address}
                      </p>
                    </div>
                  </div>
                  
                  {/* Rating */}
                  {selectedStoreData.rating && (
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(selectedStoreData.rating || 0)
                                ? "fill-yellow-400 text-yellow-400"
                                : "fill-gray-300 text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-semibold">
                        {selectedStoreData.rating.toFixed(1)}
                      </span>
                      {selectedStoreData.reviews && (
                        <span className="text-sm text-muted-foreground">
                          ({selectedStoreData.reviews} reviews)
                        </span>
                      )}
                    </div>
                  )}
                  
                  {/* Action Buttons */}
                  <div className="flex flex-col gap-2">
                    <Button
                      asChild
                      className="w-full bg-primary hover:bg-primary/90"
                    >
                      <a
                        href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(selectedStoreData.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Navigation className="w-4 h-4" />
                        Directions
                      </a>
                    </Button>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedStoreData.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline text-center"
                    >
                      View larger map
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Franchise Opportunities Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url(${pattern})`,
            backgroundSize: 'auto',
            backgroundRepeat: 'repeat'
          }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Heading */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-4">
              GROW WITH US
            </h2>
            
            {/* Subheading */}
            <p className="text-xl md:text-2xl text-black/80 mb-12">
              Franchise Shop Opportunities
            </p>
            
            {/* Franchise Enquiry Button */}
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 h-auto rounded-none font-semibold uppercase tracking-wide shadow-lg hover:shadow-xl transition-all"
            >
              <a href="/franchise-enquiry">Franchise Enquiry</a>
            </Button>
            
            {/* Bottom Text */}
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-black/70 mt-20">
              Now Frying At Multiple Locations
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Franchise;
