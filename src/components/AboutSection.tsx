import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Code, Music, Award } from "lucide-react";
import performanceVenue from "@/assets/performance-venue.jpg";

const AboutSection = () => {
  const timelineItems = [
    {
      year: "1982",
      age: "6",
      title: "Musical Journey Begins",
      description: "Started learning Carnatic music under renowned gurus",
      icon: Music,
    },
    {
      year: "1990",
      age: "14",
      title: "First Public Performance",
      description: "Debut performance at prestigious Gayana Samaja",
      icon: Award,
    },
    {
      year: "1996",
      age: "20",
      title: "Tech Career Launch",
      description: "Entered IT industry while continuing musical pursuits",
      icon: Code,
    },
    {
      year: "2000",
      age: "24",
      title: "Teaching Excellence",
      description: "Began mentoring students in classical music",
      icon: Calendar,
    },
    {
      year: "2010",
      age: "34",
      title: "Film Industry Entry",
      description: "Started composing for films and documentaries",
      icon: Music,
    },
    {
      year: "2020",
      age: "44",
      title: "Fusion Mastery",
      description: "Released acclaimed album 'Ranjaka' blending traditions",
      icon: Award,
    },
  ];

  return (
    <section id="about" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            About the
            <span className="text-gold-gradient"> Maestro</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A unique blend of classical musical mastery and technological innovation, 
            creating harmony between tradition and modernity for over four decades.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Professional Photo */}
          <div className="relative scroll-reveal">
            <div className="relative overflow-hidden rounded-2xl luxury-card">
              <img
                src={performanceVenue}
                alt="Performance at prestigious venue"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
            </div>
            
            {/* Quote Overlay */}
            <div className="absolute -bottom-6 -right-6 bg-card/95 backdrop-blur-sm rounded-2xl p-6 luxury-card max-w-xs">
              <blockquote className="text-2xl font-heading italic text-accent">
                "Music is Magic"
              </blockquote>
              <p className="text-sm text-muted-foreground mt-2">
                - Life Philosophy
              </p>
            </div>
          </div>

          {/* Biography Content */}
          <div className="space-y-8 scroll-reveal">
            <div className="space-y-6">
              <h3 className="text-3xl font-heading font-semibold">
                Musical Excellence Since 1982
              </h3>
              <p className="text-lg leading-relaxed text-foreground/90">
                Beginning my musical journey at age 6, I've dedicated my life to mastering 
                both Carnatic and Hindustani classical traditions. What started as childhood 
                curiosity has evolved into a distinguished career spanning performance, 
                composition, and education.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90">
                My performances at renowned venues like Gayana Samaja and Krishna Gana Sabha 
                have been met with critical acclaim, while my fusion work bridges the gap 
                between classical purity and contemporary innovation.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 luxury-card">
                <Music className="h-12 w-12 text-accent mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">Classical Mastery</h4>
                <p className="text-muted-foreground">Carnatic & Hindustani traditions</p>
              </div>
              <div className="text-center p-6 luxury-card">
                <Code className="h-12 w-12 text-accent mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">Tech Leadership</h4>
                <p className="text-muted-foreground">27 years of innovation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Musical Timeline */}
        <div className="scroll-reveal">
          <h3 className="text-3xl font-heading font-semibold text-center mb-12">
            Musical Journey Timeline
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-accent/30" />
            
            <div className="space-y-16">
              {timelineItems.map((item, index) => (
                <div key={item.year} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <Card className="luxury-card transition-elegant hover:scale-105">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="bg-accent/20 p-3 rounded-lg">
                            <item.icon className="h-6 w-6 text-accent" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="text-2xl font-bold text-accent">{item.year}</span>
                              <span className="text-sm text-muted-foreground">Age {item.age}</span>
                            </div>
                            <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                            <p className="text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background" />
                  
                  <div className="w-full lg:w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;