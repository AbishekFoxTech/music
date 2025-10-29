import { Music, Users, Award, Sparkles } from "lucide-react";

const MusicTeachingSection = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background musical pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'var(--musical-pattern)' }} />
      </div>

      {/* Floating musical notes decoration */}
      <div className="absolute top-20 left-10 text-6xl opacity-10 float-animation">♪</div>
      <div className="absolute bottom-20 right-20 text-8xl opacity-10 float-animation" style={{ animationDelay: '1s' }}>♫</div>
      <div className="absolute top-1/2 right-10 text-5xl opacity-10 float-animation" style={{ animationDelay: '2s' }}>♩</div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-accent" />
            <span className="text-accent uppercase tracking-wider text-sm font-semibold">
              Nurturing Excellence
            </span>
            <Sparkles className="w-6 h-6 text-accent" />
          </div>
          <h1 className="text-5xl md:text-6xl font-heading mb-6 musical-decoration">
            Music Teaching & <span className="text-gold-gradient">Mentorship</span>
          </h1>
        </div>

        {/* Main content grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Teaching Philosophy Card */}
          <div className="luxury-card rounded-2xl p-8 fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-xl bg-primary/20 border border-primary/30">
                <Music className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h2 className="text-2xl font-heading mb-2">A Legacy of Teaching</h2>
                <p className="text-muted-foreground text-sm">Over Three Decades of Excellence</p>
              </div>
            </div>
            <p className="text-foreground/90 leading-relaxed mb-4">
              A passionate teacher for over three decades, Sridhar has trained numerous students in 
              <span className="text-accent font-semibold"> Carnatic vocal and violin</span>. His 
              approach emphasizes both tradition and creative expression, enabling students to find 
              their own voice within the classical framework.
            </p>
            <div className="flex items-center gap-2 text-sm text-accent">
              <Award className="w-4 h-4" />
              <span>Structured Traditional Approach</span>
            </div>
          </div>

          {/* Sunaada Academy Card */}
          <div className="luxury-card rounded-2xl p-8 fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-xl bg-accent/20 border border-accent/30">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h2 className="text-2xl font-heading mb-2">Sunaada Academy</h2>
                <p className="text-muted-foreground text-sm">Where Tradition Meets Excellence</p>
              </div>
            </div>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Founded by Sridhar, <span className="text-gold-gradient font-semibold">Sunaada Academy</span> offers 
              a structured curriculum designed to prepare aspiring musicians for stage and concert performance. 
              The academy's holistic approach ensures students develop both technical mastery and artistic sensibility.
            </p>
            <div className="flex items-center gap-2 text-sm text-accent">
              <Sparkles className="w-4 h-4" />
              <span>Performance-Ready Training</span>
            </div>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="text-center p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm transition-smooth hover:border-accent/50">
            <div className="text-4xl font-heading text-accent mb-2">30+</div>
            <div className="text-sm text-muted-foreground">Years of Teaching</div>
          </div>
          <div className="text-center p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm transition-smooth hover:border-accent/50">
            <div className="text-4xl font-heading text-accent mb-2">100+</div>
            <div className="text-sm text-muted-foreground">Students Trained</div>
          </div>
          <div className="text-center p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm transition-smooth hover:border-accent/50">
            <div className="text-4xl font-heading text-accent mb-2">2</div>
            <div className="text-sm text-muted-foreground">Instruments Taught</div>
          </div>
        </div>

        {/* Bottom decorative quote */}
        <div className="mt-16 text-center fade-in-up" style={{ animationDelay: '0.8s' }}>
          <blockquote className="text-xl md:text-2xl font-heading italic text-foreground/80 max-w-3xl mx-auto">
            "Enabling students to find their own voice within the classical framework"
          </blockquote>
          <div className="w-16 h-0.5 bg-accent mx-auto mt-6" />
        </div>
      </div>
    </section>
  );
};

export default MusicTeachingSection;