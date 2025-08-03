import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroDish from "@/assets/hero-dish.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroDish}
          alt="Gourmet dish"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-primary-foreground/90">
                <Star className="h-5 w-5 fill-current" />
                <span className="text-sm font-medium">Award-Winning Restaurant</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight">
                Exquisite
                <span className="block bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent">
                  Culinary
                </span>
                Experience
              </h1>
              
              <p className="text-xl text-primary-foreground/90 max-w-2xl leading-relaxed">
                Discover a world of flavors crafted by our master chefs. Every dish tells a story 
                of passion, tradition, and culinary innovation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/menu">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  Explore Menu
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
              <Link to="/order">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground text-primary px-8 py-6 text-lg font-semibold transition-all duration-300"
                >
                  Order Online
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-primary-foreground/20">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary-foreground">15+</div>
                <div className="text-sm text-primary-foreground/80">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary-foreground">50k+</div>
                <div className="text-sm text-primary-foreground/80">Happy Customers</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary-foreground">4.9</div>
                <div className="text-sm text-primary-foreground/80">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary-foreground/60">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-foreground/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;