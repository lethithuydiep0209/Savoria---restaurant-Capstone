import { Star, Clock, Award, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import featuredDishes from "@/assets/featured-dishes.jpg";
import restaurantInterior from "@/assets/restaurant-interior.jpg";

const Index = () => {
  const featuredMenuItems = [
    {
      name: "Truffle Risotto",
      description: "Creamy arborio rice with black truffle and parmesan",
      price: "$32",
      rating: 4.9
    },
    {
      name: "Wagyu Beef Steak",
      description: "Premium wagyu beef grilled to perfection",
      price: "$65",
      rating: 5.0
    },
    {
      name: "Lobster Thermidor",
      description: "Fresh lobster in rich cognac cream sauce",
      price: "$48",
      rating: 4.8
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "An absolutely incredible dining experience. Every dish was a masterpiece!",
      rating: 5
    },
    {
      name: "Michael Chen",
      text: "The best restaurant in the city. Outstanding service and amazing food.",
      rating: 5
    },
    {
      name: "Emma Davis",
      text: "Perfect for special occasions. The atmosphere and cuisine are unmatched.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* Featured Dishes Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Signature Dishes
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our chef's masterpieces, crafted with passion and the finest ingredients
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {featuredMenuItems.map((item, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      <div className="flex items-center space-x-1 text-accent">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="text-sm font-medium">{item.rating}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-primary">{item.price}</span>
                      <Button size="sm" variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        Order Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="relative">
              <img
                src={featuredDishes}
                alt="Featured dishes"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-xl" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={restaurantInterior}
                alt="Restaurant interior"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-accent">
                <Award className="h-6 w-6" />
                <span className="font-medium">Award-Winning Restaurant</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                Where Passion Meets Perfection
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                For over 15 years, Savoria has been crafting exceptional dining experiences. 
                Our commitment to using the finest ingredients, combined with innovative culinary 
                techniques, creates dishes that tell a story with every bite.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-secondary rounded-lg">
                  <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-secondary rounded-lg">
                  <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">50k+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
              </div>

              <Link to="/about">
                <Button size="lg" className="mt-6">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              What Our Guests Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Don't just take our word for it
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready for an Unforgettable Experience?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book your table now and embark on a culinary journey like no other
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/order">
              <Button size="lg" variant="secondary" className="px-8 py-6 text-lg font-semibold">
                Order Online
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground text-primary px-8 py-6 text-lg font-semibold">
                Reserve Table
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
