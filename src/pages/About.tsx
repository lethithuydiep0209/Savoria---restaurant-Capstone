import { Users, Award, Heart, Clock, ChefHat, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import restaurantInterior from "@/assets/restaurant-interior.jpg";

const About = () => {
  const teamMembers = [
    {
      name: "Marcus Johnson",
      role: "Executive Chef",
      description: "With over 20 years of culinary experience, Marcus brings innovation and passion to every dish.",
      achievements: ["James Beard Award Winner", "Michelin Star Chef", "Culinary Institute Graduate"]
    },
    {
      name: "Sarah Martinez",
      role: "Sommelier",
      description: "Sarah's expertise in wine pairing elevates every dining experience with perfect flavor harmony.",
      achievements: ["Master Sommelier", "Wine Competition Judge", "15+ Years Experience"]
    },
    {
      name: "David Chen",
      role: "Restaurant Manager",
      description: "David ensures exceptional service and creates memorable experiences for every guest.",
      achievements: ["Hospitality Management Degree", "Customer Service Excellence", "Team Leadership Expert"]
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "Every dish is crafted with love and dedication to culinary excellence."
    },
    {
      icon: Star,
      title: "Quality",
      description: "We source only the finest ingredients and maintain the highest standards."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building connections through shared dining experiences and hospitality."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Continuously striving for perfection in every aspect of our service."
    }
  ];

  const milestones = [
    { year: "2009", event: "Savoria Opens", description: "Our journey began with a vision of exceptional dining." },
    { year: "2012", event: "First Award", description: "Recognized as 'Best New Restaurant' by the local culinary association." },
    { year: "2015", event: "Expansion", description: "Renovated and expanded dining space to accommodate growing demand." },
    { year: "2018", event: "Michelin Recognition", description: "Earned our first Michelin star for culinary excellence." },
    { year: "2021", event: "Sustainability Program", description: "Launched comprehensive sustainability and local sourcing initiative." },
    { year: "2024", event: "15th Anniversary", description: "Celebrating 15 years of exceptional dining experiences." }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-secondary to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Our Story
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the passion, dedication, and culinary artistry that makes Savoria 
            a truly exceptional dining destination
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-accent">
                <ChefHat className="h-6 w-6" />
                <span className="font-medium">Since 2009</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                Where Culinary Dreams Come to Life
              </h2>
              
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Savoria was born from a simple yet profound belief: that exceptional food has the power 
                  to bring people together, create lasting memories, and celebrate life's most precious moments.
                </p>
                <p>
                  Founded by Chef Marcus Johnson in 2009, our restaurant has evolved into a culinary 
                  destination where traditional techniques meet innovative flavors. We believe in the 
                  artistry of cooking, the importance of quality ingredients, and the magic that happens 
                  when passionate people come together to create something extraordinary.
                </p>
                <p>
                  Every plate that leaves our kitchen tells a story of dedication, creativity, and respect 
                  for the culinary arts. We're not just serving food; we're crafting experiences that 
                  linger in your memory long after the last bite.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src={restaurantInterior}
                alt="Restaurant interior"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-xl" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/20 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision we make and every dish we serve
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 bg-card hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The talented individuals who bring passion and expertise to every aspect of your dining experience
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-0 bg-card hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {member.description}
                  </p>
                  <div className="space-y-2">
                    {member.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="text-sm text-accent bg-accent/10 px-3 py-1 rounded-full inline-block mr-2">
                        {achievement}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Milestones and achievements that have shaped Savoria over the years
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20 hidden lg:block" />
            
            <div className="space-y-8 lg:space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <Card className="border-0 bg-card hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3 mb-3">
                          <Clock className="h-5 w-5 text-primary" />
                          <span className="text-lg font-bold text-primary">{milestone.year}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {milestone.event}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden lg:block w-4 h-4 bg-primary rounded-full border-4 border-background relative z-10" />
                  
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;