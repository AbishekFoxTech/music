import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause, Volume2, VolumeX, Download, ExternalLink } from "lucide-react";
import { useState, useRef, useEffect } from "react";

// ✅ Audio imports
import irulu from "@/assets/song/Irulu song.mp3";
import vishwabharathi from "@/assets/song/Vishwabharathi song.mp3";
import ganesham from "@/assets/song/Ganesham song.mp3";
import kaveri from "@/assets/song/Kaveri Haridari song.mp3";
import adavi from "@/assets/song/Adavi song.mp3";
import saiBaba from "@/assets/song/Om Sai Baba song.mp3";
import mugilu from "@/assets/song/Mugilu Karmik.mp3";

// ✅ Images
import adaviimg from "@/assets/song/Adavi img.png";
import vishwabharathiimg from "@/assets/song/Vishwabharathi img.jpg";
import ganeshamimg from "@/assets/song/Ganesham img.jpg";

const MusicSection = () => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);
  const [progress, setProgress] = useState<{ [key: string]: number }>({});
  const [duration, setDuration] = useState<{ [key: string]: number }>({});
  const [muted, setMuted] = useState<{ [key: string]: boolean }>({});
  const [volume, setVolume] = useState<{ [key: string]: number }>({});
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement | null }>({});

  const musicCategories = [
    {
      id: "classical",
      title: "Classical Mastery",
      subtitle: "Carnatic & Hindustani Traditions",
      description: "Pure classical performances showcasing decades of dedication to traditional forms",
      tracks: [
        { name: "Irulu", duration: "4:30", venue: "Studio", src: irulu },
        { name: "Vishwabharathi", duration: "5:12", venue: "Concert Hall", src: vishwabharathi },
        { name: "Ganesham", duration: "6:05", venue: "Temple Stage", src: ganesham },
      ],
      image: adaviimg,
    },
    {
      id: "fusion",
      title: "Fusion Innovation",
      subtitle: "Ranjaka Album Collection",
      description: "Groundbreaking fusion work blending classical traditions with contemporary elements",
      tracks: [
        { name: "Kaveri Haridari", duration: "4:50", venue: "River Fest", src: kaveri },
        { name: "Adavi", duration: "5:30", venue: "Nature Retreat", src: adavi },
        { name: "Om Sai Baba", duration: "6:10", venue: "Spiritual Center", src: saiBaba },
      ],
      image: vishwabharathiimg,
    },
    {
      id: "teaching",
      title: "Educational Legacy",
      subtitle: "3 Decades of Instruction",
      description: "Sample lessons and masterclasses from years of dedicated teaching",
      tracks: [
        { name: "Mugilu Karmik", duration: "5:45", venue: "Cloud Studio", src: mugilu },
        { name: "Irulu (Reprise)", duration: "4:30", venue: "Encore Performance", src: irulu },
        { name: "Vishwabharathi (Live)", duration: "5:12", venue: "Special Event", src: vishwabharathi },
      ],
      image: ganeshamimg,
    },
  ];

  const togglePlay = (trackId: string) => {
    const currentAudio = audioRefs.current[trackId];
    if (currentlyPlaying === trackId) {
      currentAudio?.pause();
      setCurrentlyPlaying(null);
    } else {
      Object.entries(audioRefs.current).forEach(([id, audio]) => {
        if (id !== trackId) audio?.pause();
      });
      currentAudio?.play();
      setCurrentlyPlaying(trackId);
    }
  };

  // ✅ Update progress & duration
  useEffect(() => {
    Object.entries(audioRefs.current).forEach(([trackId, audio]) => {
      if (!audio) return;

      const onTimeUpdate = () => {
        setProgress((prev) => ({ ...prev, [trackId]: audio.currentTime }));
      };

      const onLoadedMetadata = () => {
        setDuration((prev) => ({ ...prev, [trackId]: audio.duration }));
        setVolume((prev) => ({ ...prev, [trackId]: audio.volume }));
      };

      audio.addEventListener("timeupdate", onTimeUpdate);
      audio.addEventListener("loadedmetadata", onLoadedMetadata);

      return () => {
        audio.removeEventListener("timeupdate", onTimeUpdate);
        audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      };
    });
  }, [musicCategories]);

  // ✅ Seek control
  const handleSeek = (e: React.MouseEvent<HTMLDivElement>, trackId: string) => {
    const audio = audioRefs.current[trackId];
    if (!audio) return;

    const rect = (e.target as HTMLDivElement).getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const seekTime = (clickX / width) * (duration[trackId] || 0);

    audio.currentTime = seekTime;
    setProgress((prev) => ({ ...prev, [trackId]: seekTime }));
  };

  // ✅ Mute toggle
  const toggleMute = (trackId: string) => {
    const audio = audioRefs.current[trackId];
    if (!audio) return;

    const newMuted = !audio.muted;
    audio.muted = newMuted;
    setMuted((prev) => ({ ...prev, [trackId]: newMuted }));
  };

  // ✅ Volume change
  const handleVolumeChange = (trackId: string, value: number) => {
    const audio = audioRefs.current[trackId];
    if (!audio) return;

    audio.volume = value;
    audio.muted = false;
    setVolume((prev) => ({ ...prev, [trackId]: value }));
    setMuted((prev) => ({ ...prev, [trackId]: false }));
  };

  // ✅ Format seconds → mm:ss
  const formatTime = (seconds: number) => {
    if (!seconds) return "0:00";
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s < 10 ? "0" + s : s}`;
  };

  return (
    <section id="music" className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            Musical <span className="text-gold-gradient">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore a diverse collection spanning classical traditions, innovative fusion,
            and educational content that has touched countless lives.
          </p>
        </div>

        {musicCategories.map((category, index) => (
          <div
            key={category.id}
            className={`flex flex-col lg:flex-row gap-12 items-center ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            } mb-20 px-4 lg:px-8`}
          >
            {/* 🎵 Left Image */}
            <div className="lg:w-1/2 w-full">
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-[300px] sm:h-[400px] object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                  <p className="text-accent">{category.subtitle}</p>
                </div>
              </div>
            </div>

            {/* 🎵 Right Tracks */}
            <div className="lg:w-1/2 w-full space-y-6">
              <h3 className="text-3xl font-semibold">{category.title}</h3>
              <p className="text-lg text-muted-foreground">{category.description}</p>

              <div className="space-y-4">
                {category.tracks.map((track, trackIndex) => {
                  const trackId = `${category.id}-${trackIndex}`;
                  const currentTime = progress[trackId] || 0;
                  const totalTime = duration[trackId] || 0;
                  const percent = totalTime ? (currentTime / totalTime) * 100 : 0;
                  const isMuted = muted[trackId];
                  const vol = volume[trackId] ?? 1;

                  return (
                    <Card key={trackId} className="shadow-md">
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                          <div className="flex items-center space-x-4 flex-1 ">
                            <Button size="sm" variant="ghost" onClick={() => togglePlay(trackId)}>
                              {currentlyPlaying === trackId ? (
                                <Pause className="h-4 w-4" />
                              ) : (
                                <Play className="h-4 w-4" />
                              )}
                            </Button>

                            <div className="flex-1 min-w-[140px]">
                              <h4 className="font-semibold">{track.name}</h4>
                              <p className="text-sm text-muted-foreground">
                                {track.venue} • {track.duration}
                              </p>
                            </div>
                          </div>

                          {/* 🔊 Volume + Download */}
                          <div className="flex items-center space-x-2 w-full sm:w-40">
                            <Button size="sm" variant="ghost" onClick={() => toggleMute(trackId)}>
                              {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                            </Button>
                            <input
                              type="range"
                              min="0"
                              max="1"
                              step="0.01"
                              value={isMuted ? 0 : vol}
                              onChange={(e) => handleVolumeChange(trackId, parseFloat(e.target.value))}
                              className="w-full accent-accent cursor-pointer"
                            />
                            <Button size="sm" variant="ghost" asChild>
                              <a href={track.src} download>
                                <Download className="h-4 w-4" />
                              </a>
                            </Button>
                          </div>
                        </div>

                        {/* ✅ Seek bar */}
                        <div
                          className="mt-4 cursor-pointer select-none"
                          onClick={(e) => handleSeek(e, trackId)}
                        >
                          <div className="w-full bg-border rounded-full h-2 relative">
                            <div
                              className="bg-accent h-2 rounded-full transition-all duration-150"
                              style={{ width: `${percent}%` }}
                            />
                          </div>
                          <div className="flex justify-between text-xs text-muted-foreground mt-1">
                            <span>{formatTime(currentTime)}</span>
                            <span>{formatTime(totalTime)}</span>
                          </div>
                        </div>

                        <audio
                          ref={(el) => (audioRefs.current[trackId] = el)}
                          src={track.src}
                          onEnded={() => setCurrentlyPlaying(null)}
                        />
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* 🎵 CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button className="bg-accent hover:bg-accent/90">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Full Collection
                </Button>
                <Button
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-white"
                >
                  Download Portfolio
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MusicSection;
