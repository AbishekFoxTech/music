import { Button } from "@/components/ui/button";
import { Play, Award, Users } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen hero-background relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-background/80" />
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-32 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Text Content */}
          <div className="space-y-8 fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-heading font-bold leading-tight">
                Where Music
                <span className="text-gold-gradient musical-decoration"> Meets Magic</span>
              </h1>
              <p className="text-xl text-muted-foreground font-light">
                41 Years of Musical Excellence | 27 Years of Tech Leadership
              </p>
            </div>

            <p className="text-lg leading-relaxed text-foreground/90 max-w-xl">
             Sridhar Narasimhan is a composer who combines classical traditions with contemporary elements. His work has been performed at venues such as Gayana Samaja, and he has also composed for films. His music is focused on creating experiences that connect different styles and audiences.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg"
                onClick={() => scrollToSection("music")}
              >
                <Play className="mr-2 h-5 w-5" />
                Explore Music
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-6 text-lg"
                onClick={() => scrollToSection("contact")}
              >
                Book Consultation
              </Button>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">41</div>
                <div className="text-sm text-muted-foreground">Years in Music</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">27</div>
                <div className="text-sm text-muted-foreground">Years in Tech</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">500+</div>
                <div className="text-sm text-muted-foreground">Performances</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10 float-animation">
              <div className="relative overflow-hidden rounded-2xl luxury-card">
                <img
                  src={heroPortrait}
                  alt="Music Maestro - Distinguished Composer"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;