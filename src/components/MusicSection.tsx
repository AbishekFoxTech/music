import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause, Volume2, Download, ExternalLink } from "lucide-react";
import { useState } from "react";
import studioSetup from "@/assets/studio-setup.jpg";

const MusicSection = () => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);

  const musicCategories = [
    {
      id: "classical",
      title: "Classical Mastery",
      subtitle: "Carnatic & Hindustani Traditions",
      description: "Pure classical performances showcasing decades of dedication to traditional forms",
      tracks: [
        { name: "Raga Yaman", duration: "8:45", venue: "Gayana Samaja" },
        { name: "Thyagaraja Kriti", duration: "6:30", venue: "Krishna Gana Sabha" },
        { name: "Hindustani Evening", duration: "12:15", venue: "Music Academy" },
      ],
      image: studioSetup,
    },
    {
      id: "fusion",
      title: "Fusion Innovation",
      subtitle: "Ranjaka Album Collection",
      description: "Groundbreaking fusion work blending classical traditions with contemporary elements",
      tracks: [
        { name: "Ranjaka Theme", duration: "5:20", venue: "Studio Recording" },
        { name: "Eastern Winds", duration: "7:10", venue: "Live Session" },
        { name: "Modern Classics", duration: "6:45", venue: "Collaborative Work" },
      ],
      image: studioSetup,
    },
    {
      id: "teaching",
      title: "Educational Legacy",
      subtitle: "3 Decades of Instruction",
      description: "Sample lessons and masterclasses from years of dedicated teaching",
      tracks: [
        { name: "Beginner's Raga", duration: "15:30", venue: "Masterclass" },
        { name: "Advanced Techniques", duration: "22:45", venue: "Workshop" },
        { name: "Theory & Practice", duration: "18:20", venue: "Online Course" },
      ],
      image: studioSetup,
    },
  ];

  const togglePlay = (trackId: string) => {
    if (currentlyPlaying === trackId) {
      setCurrentlyPlaying(null);
    } else {
      setCurrentlyPlaying(trackId);
    }
  };

  return (
    <section id="music" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            Musical
            <span className="text-gold-gradient"> Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore a diverse collection spanning classical traditions, innovative fusion, 
            and educational content that has touched countless lives.
          </p>
        </div>

        {/* Music Categories */}
        <div className="space-y-16">
          {musicCategories.map((category, index) => (
            <div key={category.id} className={`scroll-reveal ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} flex flex-col lg:flex-row gap-12 items-center`}>
              {/* Category Image */}
              <div className="lg:w-1/2">
                <div className="relative overflow-hidden rounded-2xl luxury-card">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-heading font-bold text-white mb-2">
                      {category.title}
                    </h3>
                    <p className="text-accent font-medium">{category.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Category Content */}
              <div className="lg:w-1/2 space-y-6">
                <div>
                  <h3 className="text-3xl font-heading font-semibold mb-4">
                    {category.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {category.description}
                  </p>
                </div>

                {/* Track List */}
                <div className="space-y-4">
                  {category.tracks.map((track, trackIndex) => (
                    <Card key={trackIndex} className="audio-player">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 flex-1">
                            <Button
                              size="sm"
                              variant="ghost"
                              className="text-accent hover:bg-accent/20"
                              onClick={() => togglePlay(`${category.id}-${trackIndex}`)}
                            >
                              {currentlyPlaying === `${category.id}-${trackIndex}` ? (
                                <Pause className="h-4 w-4" />
                              ) : (
                                <Play className="h-4 w-4" />
                              )}
                            </Button>
                            
                            <div className="flex-1">
                              <h4 className="font-semibold">{track.name}</h4>
                              <p className="text-sm text-muted-foreground">
                                {track.venue} • {track.duration}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center space-x-2">
                            <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-accent">
                              <Volume2 className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-accent">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        {/* Audio Progress Bar */}
                        {currentlyPlaying === `${category.id}-${trackIndex}` && (
                          <div className="mt-4">
                            <div className="w-full bg-border rounded-full h-2">
                              <div className="bg-accent h-2 rounded-full" style={{ width: '35%' }} />
                            </div>
                            <div className="flex justify-between text-xs text-muted-foreground mt-1">
                              <span>2:30</span>
                              <span>{track.duration}</span>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button className="bg-accent hover:bg-accent/90">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Full Collection
                  </Button>
                  <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                    Download Portfolio
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Streaming Platforms */}
        <div className="mt-20 text-center scroll-reveal">
          <h3 className="text-2xl font-heading font-semibold mb-8">
            Available on Major Platforms
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {["Spotify", "Apple Music", "YouTube Music", "Amazon Music", "SoundCloud"].map((platform) => (
              <Button
                key={platform}
                variant="outline"
                className="border-accent/50 text-accent hover:bg-accent hover:text-accent-foreground"
              >
                {platform}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;