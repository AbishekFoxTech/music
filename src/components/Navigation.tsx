import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Music } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Music", id: "music" },
    { label: "Films", id: "films" },
    { label: "Gallery", id: "gallery" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-full px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between flex-nowrap">
          {/* Logo */}
          <div className="flex items-center space-x-2 min-w-0">
            <Music className="h-8 w-8 text-accent flex-shrink-0" />
            <span className="text-lg sm:text-xl font-heading font-semibold text-gold-gradient truncate">
              Music Maestro
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm lg:text-base text-foreground/80 hover:text-accent transition-smooth font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden flex-shrink-0 ml-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation (appears below navbar) */}
      {isMobileMenuOpen && (
        <div className="fixed top-16 left-0 right-0 bottom-0 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center space-y-6 md:hidden z-40">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-xl sm:text-2xl text-foreground/90 hover:text-accent transition-smooth font-semibold"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
