import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Play,
  Pause,
  Volume2,
  ExternalLink,
  Film,
  Music,
  Headphones,
  FileText,
  Award,
  Calendar
} from "lucide-react";
import { useState } from "react";
import filmWork1 from "@/assets/gallery/film-work-1.jpg";
import studioSetup from "@/assets/studio-setup.jpg";

const FilmsSection = () => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const filmProjects = [
    {
      id: "film-1",
      title: "Raathroraathri ",
      genre: "Cultural Drama",
      year: "2023",
      role: ["Background Score", "Song Composition"],
      description: "A powerful drama exploring the intersection of tradition and modernity through music",
      duration: "2h 15min",
      status: "Released",
      image: filmWork1,
      trailer: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      awards: ["Best Background Score - Regional Film Awards 2024"],
    },
    {
      id: "film-2",
      title: "Neena",
      genre: "Documentary",
      year: "2022",
      role: ["Background Score", "SFX"],
      description: "Documentary showcasing India's technological revolution and its pioneers",
      duration: "90min",
      status: "Released",
      image: studioSetup,
      trailer: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      awards: ["Jury Choice Award - Documentary Film Festival 2023"],
    },

  ];

  const serviceCategories = [
    {
      title: "Background Scores (BGM)",
      icon: Music,
      description: "Cinematic compositions that enhance narrative emotion and atmosphere",
      projects: 25,
      color: "bg-primary/20 text-primary",
    },
    {
      title: "Special Effects (SFX)",
      icon: Headphones,
      description: "Immersive sound design and audio effects for enhanced storytelling",
      projects: 15,
      color: "bg-accent/20 text-accent",
    },
    {
      title: "Song Composition",
      icon: Music,
      description: "Original songs that capture the essence of characters and story",
      projects: 30,
      color: "bg-secondary/20 text-secondary-foreground",
    },
    {
      title: "Lyrics Writing",
      icon: FileText,
      description: "Poetic narratives in multiple languages that resonate with audiences",
      projects: 20,
      color: "bg-muted/20 text-muted-foreground",
    },
  ];

  const toggleVideo = (videoId: string) => {
    if (playingVideo === videoId) {
      setPlayingVideo(null);
    } else {
      setPlayingVideo(videoId);
    }
  };

  return (
    <section id="films" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            Film Industry
            <span className="text-gold-gradient"> Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Since 2018, Sridhar has dedicated himself full-time to music, expanding into composition,
            production, and direction for films and independent projects. His work covers background scores
            (BGM), sound effects (SFX), song composition, and lyric writing.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 scroll-reveal">
          {serviceCategories.map((service, index) => (
            <Card key={index} className="luxury-card text-center">
              <CardContent className="p-6">
                <div className={`w-16 h-16 rounded-lg ${service.color} flex items-center justify-center mx-auto mb-4`}>
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-heading font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {service.description}
                </p>
                <Badge variant="outline" className="border-accent text-accent">
                  {service.projects}+ Projects
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="space-y-16">
          <h3 className="text-3xl font-heading font-semibold text-center mb-12 scroll-reveal">
            Featured Film Projects
          </h3>

          {filmProjects.map((project, index) => (
            <div
              key={project.id}
              className={`scroll-reveal grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
            >
              {/* Project Visual */}
              <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <Card className="luxury-card overflow-hidden">
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[400px] object-cover"
                    />

                    {/* Video Overlay */}
                    {project.trailer && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <Button
                          size="lg"
                          variant="ghost"
                          className="text-white hover:bg-white/20"
                          onClick={() => toggleVideo(project.id)}
                        >
                          {playingVideo === project.id ? (
                            <Pause className="h-12 w-12" />
                          ) : (
                            <Play className="h-12 w-12" />
                          )}
                        </Button>
                      </div>
                    )}

                    {/* Status Badge */}
                    <Badge
                      className={`absolute top-4 right-4 ${project.status === "Released"
                          ? "bg-green-500/90 text-white"
                          : "bg-accent/90 text-accent-foreground"
                        }`}
                    >
                      {project.status}
                    </Badge>

                    {/* Film Icon */}
                    <div className="absolute top-4 left-4 bg-black/70 p-2 rounded-lg">
                      <Film className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </Card>
              </div>

              {/* Project Details */}
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-3xl font-heading font-bold">{project.title}</h3>
                    <Badge variant="outline" className="border-accent text-accent">
                      {project.year}
                    </Badge>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.role.map((role, roleIndex) => (
                      <Badge key={roleIndex} className="bg-primary/20 text-primary border-primary/30">
                        {role}
                      </Badge>
                    ))}
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Project Stats */}
                <div className="grid grid-cols-2 gap-4 p-6 luxury-card">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent mb-1">{project.genre}</div>
                    <div className="text-sm text-muted-foreground">Genre</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent mb-1">{project.duration}</div>
                    <div className="text-sm text-muted-foreground">Duration</div>
                  </div>
                </div>

                {/* Awards */}
                {project.awards.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-semibold flex items-center">
                      <Award className="mr-2 h-4 w-4 text-accent" />
                      Recognition
                    </h4>
                    {project.awards.map((award, awardIndex) => (
                      <p key={awardIndex} className="text-sm text-muted-foreground pl-6">
                        • {award}
                      </p>
                    ))}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-4">
                  {project.trailer && (
                    <Button
                      className="bg-accent hover:bg-accent/90"
                      onClick={() => toggleVideo(project.id)}
                    >
                      <Play className="mr-2 h-4 w-4" />
                      Watch Trailer
                    </Button>
                  )}
                  <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Collaboration Call-to-Action */}
        <div className="mt-20 text-center scroll-reveal">
          <Card className="luxury-card bg-gradient-to-r from-primary/10 to-accent/10 border-accent/30 max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h3 className="text-3xl font-heading font-bold mb-4">
                Ready to Score Your Next Film?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Bring your cinematic vision to life with music that moves audiences.
                From intimate documentaries to grand feature films, let's create an
                unforgettable audio experience together.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 px-8">
                  Discuss Your Project
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8"
                >
                  View Portfolio Reel
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FilmsSection;