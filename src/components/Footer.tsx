import { Link } from "react-router-dom";
import { ChefHat, Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <ChefHat className="h-8 w-8" />
              <span className="text-xl font-bold">Savoria</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Experience exceptional dining with our carefully crafted dishes, 
              made from the finest ingredients and served with passion.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-primary-foreground/80 hover:text-primary-foreground transition-colors cursor-pointer" />
              <Instagram className="h-5 w-5 text-primary-foreground/80 hover:text-primary-foreground transition-colors cursor-pointer" />
              <Twitter className="h-5 w-5 text-primary-foreground/80 hover:text-primary-foreground transition-colors cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/menu" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Our Menu
              </Link>
              <Link to="/order" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Order Online
              </Link>
              <Link to="/about" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                About Us
              </Link>
              <Link to="/news" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                News & Events
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-foreground/80" />
                <span className="text-sm text-primary-foreground/80">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-foreground/80" />
                <span className="text-sm text-primary-foreground/80">info@savoria.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary-foreground/80" />
                <span className="text-sm text-primary-foreground/80">123 Gourmet Street, Foodie City</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Opening Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-primary-foreground/80" />
                <div className="text-sm text-primary-foreground/80">
                  <div>Mon - Thu: 11AM - 10PM</div>
                  <div>Fri - Sat: 11AM - 11PM</div>
                  <div>Sunday: 12PM - 9PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/80">
            © 2024 Savoria Restaurant. All rights reserved. Made with ❤️ for food lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;