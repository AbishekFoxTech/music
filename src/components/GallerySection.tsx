import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Volume2, 
  Maximize,
  Camera,
  Video,
  Award,
  Music,
  Code,
  Users
} from "lucide-react";

// Import gallery images
import performance1 from "@/assets/gallery/performance-1.jpg";
import studio1 from "@/assets/gallery/studio-1.jpg";
import filmWork1 from "@/assets/gallery/film-work-1.jpg";
import awards1 from "@/assets/gallery/awards-1.jpg";
import teaching1 from "@/assets/gallery/teaching-1.jpg";

const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState<string | null>(null);

  const categories = [
    { id: "all", label: "All Media", icon: Camera },
    { id: "performances", label: "Performances", icon: Music },
    { id: "studio", label: "Studio Sessions", icon: Code },
    { id: "film", label: "Film Work", icon: Video },
    { id: "awards", label: "Awards & Recognition", icon: Award },
    { id: "teaching", label: "Teaching", icon: Users },
  ];

  const galleryItems = [
    {
      id: 1,
      type: "image",
      src: performance1,
      category: "performances",
      title: "Gayana Samaja Performance",
      description: "Solo Carnatic recital at the prestigious Gayana Samaja hall",
      venue: "Gayana Samaja, Bangalore",
      year: "2023",
    },
    {
      id: 2,
      type: "image",
      src: studio1,
      category: "studio",
      title: "Recording Session",
      description: "Working on the Ranjaka fusion album",
      venue: "Private Studio, Chennai",
      year: "2022",
    },
    {
      id: 3,
      type: "video",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      thumbnail: filmWork1,
      category: "film",
      title: "Film Scoring Process",
      description: "Behind the scenes of composing for an award-winning film",
      venue: "Film Studio",
      year: "2023",
    },
    {
      id: 4,
      type: "image",
      src: awards1,
      category: "awards",
      title: "Lifetime Achievement Award",
      description: "Recognition for 40+ years of dedication to classical music",
      venue: "Music Academy Awards",
      year: "2024",
    },
    {
      id: 5,
      type: "image",
      src: teaching1,
      category: "teaching",
      title: "Masterclass Session",
      description: "Teaching advanced Carnatic techniques to aspiring musicians",
      venue: "Music Conservatory",
      year: "2023",
    },
    {
      id: 6,
      type: "video",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      thumbnail: performance1,
      category: "performances",
      title: "Krishna Gana Sabha Concert",
      description: "Highlights from the annual concert series",
      venue: "Krishna Gana Sabha",
      year: "2023",
    },
  ];

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (imageSrc: string, index: number) => {
    setLightboxImage(imageSrc);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const navigateLightbox = (direction: "prev" | "next") => {
    const currentIndex = filteredItems.findIndex(item => item.src === lightboxImage);
    let newIndex;
    
    if (direction === "next") {
      newIndex = (currentIndex + 1) % filteredItems.length;
    } else {
      newIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    }
    
    setLightboxImage(filteredItems[newIndex].src);
    setCurrentImageIndex(newIndex);
  };

  const toggleVideo = (videoId: string) => {
    if (isVideoPlaying === videoId) {
      setIsVideoPlaying(null);
    } else {
      setIsVideoPlaying(videoId);
    }
  };

  return (
    <section id="gallery" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            Visual
            <span className="text-gold-gradient"> Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A curated collection of moments that capture the essence of musical artistry, 
            from intimate studio sessions to grand concert performances.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 scroll-reveal">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`${
                selectedCategory === category.id
                  ? "bg-accent text-accent-foreground"
                  : "border-accent/50 text-accent hover:bg-accent hover:text-accent-foreground"
              } transition-elegant`}
            >
              <category.icon className="mr-2 h-4 w-4" />
              {category.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid - Masonry Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6 scroll-reveal">
          {filteredItems.map((item, index) => (
            <div key={item.id} className="break-inside-avoid">
              <Card className="luxury-card overflow-hidden group cursor-pointer">
                <div className="relative">
                  {item.type === "image" ? (
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onClick={() => openLightbox(item.src, index)}
                    />
                  ) : (
                    <div className="relative">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button
                          size="lg"
                          variant="ghost"
                          className="text-white hover:bg-white/20"
                          onClick={() => toggleVideo(item.id.toString())}
                        >
                          {isVideoPlaying === item.id.toString() ? (
                            <Pause className="h-8 w-8" />
                          ) : (
                            <Play className="h-8 w-8" />
                          )}
                        </Button>
                      </div>
                      <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                        <Video className="mr-1 h-3 w-3" />
                        Video
                      </Badge>
                    </div>
                  )}

                  {/* Overlay Content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-lg font-heading font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm opacity-90 mb-2">{item.description}</p>
                      <div className="flex justify-between items-center text-xs opacity-75">
                        <span>{item.venue}</span>
                        <span>{item.year}</span>
                      </div>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <Badge className="absolute top-4 right-4 bg-primary/80 text-white backdrop-blur-sm">
                    {categories.find(cat => cat.id === item.category)?.label}
                  </Badge>
                </div>

                {/* Card Content */}
                <CardContent className="p-6">
                  <h3 className="text-lg font-heading font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center text-xs text-muted-foreground">
                    <span className="flex items-center">
                      <Music className="mr-1 h-3 w-3" />
                      {item.venue}
                    </span>
                    <span>{item.year}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12 scroll-reveal">
          <Button 
            variant="outline" 
            size="lg"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8"
          >
            Load More Content
          </Button>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 scroll-reveal">
          <div className="text-center p-6 luxury-card">
            <div className="text-3xl font-bold text-accent mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Performances</div>
          </div>
          <div className="text-center p-6 luxury-card">
            <div className="text-3xl font-bold text-accent mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Film Projects</div>
          </div>
          <div className="text-center p-6 luxury-card">
            <div className="text-3xl font-bold text-accent mb-2">200+</div>
            <div className="text-sm text-muted-foreground">Students Taught</div>
          </div>
          <div className="text-center p-6 luxury-card">
            <div className="text-3xl font-bold text-accent mb-2">25+</div>
            <div className="text-sm text-muted-foreground">Awards Received</div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <div className="relative max-w-7xl max-h-full p-4">
            <img
              src={lightboxImage}
              alt="Gallery lightbox"
              className="max-w-full max-h-full object-contain"
            />
            
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
              onClick={() => navigateLightbox("prev")}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
              onClick={() => navigateLightbox("next")}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 text-white">
              <h3 className="font-heading font-semibold text-lg mb-1">
                {filteredItems[currentImageIndex]?.title}
              </h3>
              <p className="text-sm opacity-90">
                {filteredItems[currentImageIndex]?.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;