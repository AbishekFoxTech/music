import { Music, Award, Users, Mic2, Radio, BookOpen } from "lucide-react";

const RecognitionSection = () => {
  const genres = [
    {
      icon: Music,
      title: "Carnatic Violin & Vocal",
      description: "Classical performances rooted in tradition"
    },
    {
      icon: Mic2,
      title: "Hindustani & Gayaki Style",
      description: "Interpretations bridging musical traditions"
    },
    {
      icon: Radio,
      title: "Fusion Collaborations",
      description: 'Band "Shoonya" and contemporary projects'
    },
    {
      icon: Award,
      title: "Film Background Scores",
      description: "BGM and Sound Design (SFX) for cinema"
    },
    {
      icon: Music,
      title: "Independent Albums",
      description: "Ranjaka, Mugilu, and original compositions"
    },
    {
      icon: BookOpen,
      title: "Music Teaching & Mentorship",
      description: "Through Sunaada Academy"
    }
  ];

  return (
    <section className="relative py-20 px-4 md:px-8 lg:px-16 section-gradient overflow-hidden">
      {/* Background musical pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "var(--musical-pattern)" }}></div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Recognition Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 musical-decoration">
            Recognition & <span className="text-gold-gradient">Involvement</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Invited as <span className="text-accent font-semibold">chief guest and judge</span> for cultural events such as the{" "}
            <span className="text-accent font-semibold">MES Kalavedi programs (2019)</span>, covering performances in drama, dance, 
            and music across classical, folk, and fusion genres.
          </p>
        </div>

        {/* Genres Grid */}
        <div className="mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Genres & Areas of <span className="text-gold-gradient">Work</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {genres.map((genre, index) => {
              const Icon = genre.icon;
              return (
                <div
                  key={index}
                  className="luxury-card rounded-xl p-6 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-smooth">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-foreground group-hover:text-accent transition-smooth">
                        {genre.title}
                      </h4>
                      <p className="text-sm text-foreground/70">
                        {genre.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Philosophy Quote */}
        <div className="luxury-card-t rounded-2xl p-8 md:p-12 text-center float-animation">
          <div className="flex justify-center mb-6">
            <Music className="w-12 h-12 text-accent" />
          </div>
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-heading italic text-foreground mb-4">
            "Music is Magic"
          </blockquote>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            An enduring philosophy that guides artistic expression, teaching, and a lifelong journey in sound
          </p>
        </div>
      </div>
    </section>
  );
};

export default RecognitionSection;
