import { useState } from "react";
import { Star, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("appetizers");

  const categories = [
    { id: "appetizers", name: "Appetizers" },
    { id: "mains", name: "Main Courses" },
    { id: "desserts", name: "Desserts" },
    { id: "beverages", name: "Beverages" }
  ];

  const menuItems = {
    appetizers: [
      {
        name: "Truffle Arancini",
        description: "Crispy risotto balls with black truffle and aged parmesan",
        price: 18,
        rating: 4.8,
        tags: ["Vegetarian", "Popular"]
      },
      {
        name: "Tuna Tartare",
        description: "Fresh tuna with avocado, citrus, and sesame",
        price: 22,
        rating: 4.9,
        tags: ["Gluten-Free", "Fresh"]
      },
      {
        name: "Burrata & Prosciutto",
        description: "Creamy burrata with San Daniele prosciutto and fig compote",
        price: 20,
        rating: 4.7,
        tags: ["Popular"]
      }
    ],
    mains: [
      {
        name: "Wagyu Beef Tenderloin",
        description: "Premium wagyu with roasted vegetables and red wine jus",
        price: 65,
        rating: 5.0,
        tags: ["Premium", "Chef's Special"]
      },
      {
        name: "Pan-Seared Halibut",
        description: "Fresh halibut with cauliflower purée and herb oil",
        price: 38,
        rating: 4.8,
        tags: ["Gluten-Free", "Fresh"]
      },
      {
        name: "Duck Confit",
        description: "Slow-cooked duck leg with cherry gastrique and potato gratin",
        price: 42,
        rating: 4.9,
        tags: ["Traditional"]
      },
      {
        name: "Mushroom Risotto",
        description: "Creamy arborio rice with wild mushrooms and truffle oil",
        price: 28,
        rating: 4.6,
        tags: ["Vegetarian", "Popular"]
      }
    ],
    desserts: [
      {
        name: "Chocolate Soufflé",
        description: "Warm chocolate soufflé with vanilla ice cream",
        price: 16,
        rating: 4.9,
        tags: ["Signature", "Made to Order"]
      },
      {
        name: "Tiramisu",
        description: "Classic Italian tiramisu with espresso and mascarpone",
        price: 14,
        rating: 4.7,
        tags: ["Traditional", "Popular"]
      },
      {
        name: "Lemon Tart",
        description: "Tangy lemon curd tart with fresh berries",
        price: 12,
        rating: 4.5,
        tags: ["Fresh", "Light"]
      }
    ],
    beverages: [
      {
        name: "Wine Pairing",
        description: "Curated wine selection to complement your meal",
        price: 25,
        rating: 4.8,
        tags: ["Premium", "Sommelier's Choice"]
      },
      {
        name: "Craft Cocktails",
        description: "House-made cocktails with premium spirits",
        price: 15,
        rating: 4.6,
        tags: ["Signature"]
      },
      {
        name: "Artisanal Coffee",
        description: "Single-origin coffee beans, expertly brewed",
        price: 8,
        rating: 4.4,
        tags: ["Fresh", "Fair Trade"]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-secondary to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Our Menu
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully crafted dishes, made with the finest ingredients 
            and prepared by our master chefs
          </p>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="px-8 py-3 text-lg font-medium transition-all duration-300"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems[selectedCategory as keyof typeof menuItems].map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-card">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <div className="flex items-center space-x-1 text-accent">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm font-medium">{item.rating}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="secondary" 
                        className="text-xs bg-secondary/50 text-foreground hover:bg-secondary"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">
                      ${item.price}
                    </span>
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="text-sm font-medium w-8 text-center">1</span>
                      <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                        <Plus className="h-4 w-4" />
                      </Button>
                      <Button 
                        size="sm" 
                        className="ml-2 bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg transition-all"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Ready to Order?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Place your order online for pickup or delivery
          </p>
          <Button size="lg" className="px-8 py-6 text-lg font-semibold bg-gradient-to-r from-primary to-primary-glow">
            Start Your Order
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Menu;