import { Code2, Music } from "lucide-react";

const TechnologyMusic = () => {
  return (
    <section className=" flex items-center justify-center px-4 py-12 bg-background ">
      <div className="max-w-5xl w-full">
        <div className="luxury-card rounded-2xl p-8 md:p-12 backdrop-blur-sm">
          {/* Section Title */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <Code2 className="w-8 h-8 text-accent" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gold-gradient">
              Technology and Music
            </h2>
            <Music className="w-8 h-8 text-accent" />
          </div>

          {/* Divider */}

          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
              Before returning to music full-time, Sridhar spent{" "}
              <span className="text-accent font-semibold">27 years</span> in the IT industry, 
              holding leadership roles at{" "}
              <span className="text-gold-gradient font-semibold">Microsoft</span>,{" "}
              <span className="text-gold-gradient font-semibold">Brio InfoTech</span>,{" "}
              <span className="text-gold-gradient font-semibold">TCS</span>, and{" "}
              <span className="text-gold-gradient font-semibold">Phoenix Global Solutions</span>.
            </p>

            <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
              His experience in technology continues to influence his music production work at{" "}
              <span className="text-accent font-semibold">Sunaada Studio</span>, where he combines 
              musical artistry with technical precision.
            </p>
          </div>

          {/* Decorative element */}
          <div className="mt-10 flex justify-center">
            <div className="flex items-center gap-3 text-accent/30">
              <div className="w-12 h-[2px] bg-accent/30" />
              <span className="text-4xl">♪</span>
              <div className="w-12 h-[2px] bg-accent/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyMusic;
