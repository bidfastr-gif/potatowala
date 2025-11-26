import logo from "@/assets/potatowala-logo.png";
import pattern from "@/assets/food-pattern.jpg";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url(${pattern})`,
          backgroundSize: 'auto',
          backgroundRepeat: 'repeat'
        }} />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <img 
              src={logo} 
              alt="Potatowala Logo - Premium Loaded Fries" 
              className="h-24 w-auto object-contain"
              style={{ imageRendering: 'crisp-edges' }}
            />
            <p className="text-sm opacity-80 mb-4">
              From tasty bites to cool sips, all in one plate. Experience the best loaded fries in town.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="/" className="hover:text-primary-foreground/80 transition-colors">Home</a></li>
              <li><a href="/menu" className="hover:text-primary-foreground/80 transition-colors">Menu</a></li>
              <li><a href="/about" className="hover:text-primary-foreground/80 transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-primary-foreground/80 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>📞 +91 99415 22111</li>
              <li>📧 potatowalafoods@gmail.com</li>
              <li>📍 187, Poonamallee High Road,<br />Maduravoyal, Chennai - 600095</li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Monday - Friday: 11am - 10pm</li>
              <li>Saturday - Sunday: 11am - 11pm</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-80">
          <p>&copy; 2025 Potatowala. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
