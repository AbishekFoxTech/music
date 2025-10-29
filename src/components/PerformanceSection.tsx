import { Music2, Radio, Users, MapPin, Mic } from "lucide-react";

const PerformancesSection = () => {
  return (
    <section className="section-gradient py-4 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 text-9xl text-accent/5 font-heading">♪</div>
      <div className="absolute bottom-20 right-10 text-9xl text-accent/5 font-heading">♫</div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            Performances &
            <span className="text-gold-gradient">  Collaborations </span>
          </h2>
        </div>

        {/* Top Grid - Venues & Broadcasts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8 items-stretch">
          {/* Left Column - 7 Prestigious Venues (Spans 8 columns) */}
          <div className="lg:col-span-8 flex flex-col h-full space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <MapPin className="w-7 h-7 text-accent" />
              <h3 className="text-4xl font-heading text-foreground">Prestigious Venues</h3>
            </div>

            {/* Creative Staggered Layout for 7 venues */}
            <div className="space-y-4 flex-grow">
              {/* Row 1 - 2 cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="luxury-card p-6 rounded-xl border-l-4 border-accent scroll-reveal hover:scale-[1.02] transition-elegant h-full">
                  <div className="flex items-start gap-3">
                    <Music2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <p className="text-foreground font-medium text-lg">Bangalore Gayana Samaja</p>
                  </div>
                </div>
                <div className="luxury-card p-6 rounded-xl border-l-4 border-primary scroll-reveal hover:scale-[1.02] transition-elegant h-full">
                  <div className="flex items-start gap-3">
                    <Music2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <p className="text-foreground font-medium text-lg">Fort High School Rama Seva Mandali</p>
                  </div>
                </div>
              </div>

              {/* Row 2 - 3 cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="luxury-card p-6 rounded-xl border-l-4 border-accent scroll-reveal hover:scale-[1.02] transition-elegant h-full">
                  <div className="flex items-start gap-3">
                    <Music2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <p className="text-foreground font-medium text-lg">Seshadripuram Rama Seva Mandali</p>
                  </div>
                </div>
                <div className="luxury-card p-6 rounded-xl border-l-4 border-primary scroll-reveal hover:scale-[1.02] transition-elegant h-full">
                  <div className="flex items-start gap-3">
                    <Music2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <p className="text-foreground font-medium text-lg">Chennai's Krishna Gana Sabha</p>
                  </div>
                </div>
                <div className="luxury-card p-6 rounded-xl border-l-4 border-accent scroll-reveal hover:scale-[1.02] transition-elegant h-full">
                  <div className="flex items-start gap-3">
                    <Music2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <p className="text-foreground font-medium text-lg">Narada Gana Sabha</p>
                  </div>
                </div>
              </div>

              {/* Row 3 - 2 cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="luxury-card p-6 rounded-xl border-l-4 border-primary scroll-reveal hover:scale-[1.02] transition-elegant h-full">
                  <div className="flex items-start gap-3">
                    <Music2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <p className="text-foreground font-medium text-lg">Mysore Navarathri Utsava</p>
                  </div>
                </div>
                <div className="luxury-card p-6 rounded-xl border-l-4 border-accent scroll-reveal hover:scale-[1.02] transition-elegant h-full">
                  <div className="flex items-start gap-3">
                    <Music2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <p className="text-foreground font-medium text-lg">IISc Bangalore, Hampi, and Pattadakal Festivals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - 2 Broadcasts (Spans 4 columns) */}
          <div className="lg:col-span-4 flex flex-col h-full space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <Radio className="w-7 h-7 text-accent float-animation" />
              <h3 className="text-4xl font-heading text-foreground">Broadcasts</h3>
            </div>

            <div className="grid grid-rows-2 gap-4 h-full">
              <div className="luxury-card-t p-6 rounded-xl relative overflow-hidden group flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-20 h-20 bg-accent/10 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-elegant"></div>
                <Mic className="w-10 h-10 text-accent mb-3 relative z-10" />
                <h4 className="text-xl font-heading text-foreground relative z-10">Doordarshan</h4>
              </div>

              <div className="luxury-card-t p-6 rounded-xl relative overflow-hidden group flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-20 h-20 bg-accent/10 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-elegant"></div>
                <Mic className="w-10 h-10 text-accent mb-3 relative z-10" />
                <h4 className="text-xl font-heading text-foreground relative z-10">All India Radio</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Full Width - 1 Fusion Collaboration */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-7 h-7 text-accent float-animation" />
            <h3 className="text-4xl font-heading text-foreground">Fusion</h3>
          </div>

          <div className="luxury-card-t p-10 rounded-xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-elegant"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/30 border border-accent/40">
                <span className="text-3xl font-heading text-gold-gradient">Shoonya</span>
              </div>
              <p className="text-base text-foreground/80 leading-relaxed md:flex-1">
                Collaborated with fusion band <span className="text-accent font-semibold">Shoonya</span>, 
                bringing classical roots into contemporary soundscapes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformancesSection;
