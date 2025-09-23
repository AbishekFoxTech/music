import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MusicSection from "@/components/MusicSection";
import GallerySection from "@/components/GallerySection";
import FilmsSection from "@/components/FilmsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const PortfolioHomepage = () => {
  useEffect(() => {
    // Scroll reveal animation on mount
    const revealElements = () => {
      const reveals = document.querySelectorAll('.scroll-reveal');
      
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('revealed');
        }
      });
    };

    // Initial check
    revealElements();
    
    // Add scroll event listener
    window.addEventListener('scroll', revealElements);
    
    // Cleanup
    return () => window.removeEventListener('scroll', revealElements);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <MusicSection />
        <FilmsSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioHomepage;