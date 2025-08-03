import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "New Summer Menu Launch",
      excerpt: "Experience our latest seasonal creations featuring fresh, local ingredients and innovative flavor combinations.",
      content: "We're excited to announce the launch of our new summer menu, featuring dishes that celebrate the season's finest ingredients...",
      date: "2024-03-15",
      author: "Chef Marcus Johnson",
      category: "Menu Update",
      featured: true,
      readTime: "3 min read"
    },
    {
      id: 2,
      title: "Wine Tasting Event - March 25th",
      excerpt: "Join us for an exclusive wine tasting evening featuring selections from renowned vineyards around the world.",
      content: "Our sommelier will guide you through a curated selection of exceptional wines paired with specially crafted appetizers...",
      date: "2024-03-10",
      author: "Sarah Martinez",
      category: "Events",
      featured: false,
      readTime: "2 min read"
    },
    {
      id: 3,
      title: "Sustainability Initiative",
      excerpt: "Learn about our commitment to sustainable practices and how we're reducing our environmental footprint.",
      content: "At Savoria, we believe in responsible dining. Our new sustainability initiative includes locally sourced ingredients...",
      date: "2024-03-08",
      author: "Management Team",
      category: "Sustainability",
      featured: false,
      readTime: "4 min read"
    },
    {
      id: 4,
      title: "Chef's Table Experience",
      excerpt: "Introducing our intimate chef's table experience for an exclusive culinary journey.",
      content: "Experience fine dining like never before with our new chef's table offering. Watch our culinary team in action...",
      date: "2024-03-05",
      author: "Chef Marcus Johnson",
      category: "Experience",
      featured: true,
      readTime: "5 min read"
    },
    {
      id: 5,
      title: "Private Dining Packages",
      excerpt: "Perfect for special occasions, our new private dining packages offer personalized service and custom menus.",
      content: "Celebrate life's special moments with our exclusive private dining experiences. From intimate dinners to corporate events...",
      date: "2024-03-01",
      author: "Events Team",
      category: "Services",
      featured: false,
      readTime: "3 min read"
    },
    {
      id: 6,
      title: "Award Recognition",
      excerpt: "Savoria receives 'Best Fine Dining Restaurant' award from the City's Culinary Association.",
      content: "We're honored to receive this prestigious award recognizing our commitment to excellence in fine dining...",
      date: "2024-02-28",
      author: "Management Team",
      category: "Awards",
      featured: false,
      readTime: "2 min read"
    }
  ];

  const featuredNews = newsItems.filter(item => item.featured);
  const regularNews = newsItems.filter(item => !item.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-secondary to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
            News & Updates
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest happenings at Savoria, from new menu items 
            to special events and restaurant news
          </p>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews.length > 0 && (
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Featured Stories</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredNews.map((item) => (
                <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-card overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-primary text-primary-foreground">
                        {item.category}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        {item.readTime}
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.excerpt}
                    </p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {formatDate(item.date)}
                        </div>
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {item.author}
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        Read More
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular News */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">Latest Updates</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularNews.map((item) => (
              <Card key={item.id} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {item.category}
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {item.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.excerpt}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {formatDate(item.date)}
                      </div>
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        {item.author}
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      Read Full Article
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Stay in the Loop
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to our newsletter and be the first to know about new menu items, 
            special events, and exclusive offers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-foreground bg-primary-foreground/90 border-0 focus:outline-none focus:ring-2 focus:ring-primary-foreground"
            />
            <Button 
              size="lg" 
              variant="secondary"
              className="px-6 py-3 font-semibold"
            >
              Subscribe
            </Button>
          </div>
          <p className="text-sm opacity-80 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;