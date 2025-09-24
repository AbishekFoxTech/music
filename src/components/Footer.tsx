import { Music, Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Music Portfolio", href: "#music" },
    { label: "Film Work", href: "#films" },
    { label: "Gallery", href: "#gallery" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    "Classical Music Lessons",
    "Film Scoring & BGM",
    "Fusion Collaborations",
    "Music Production",
    "Tech Consulting",
    "Masterclasses",
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Music className="h-8 w-8 text-accent" />
              <span className="text-2xl font-heading font-bold text-gold-gradient">
                Music Maestro
              </span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Where Music Meets Magic. 41 years of musical excellence and 27 years 
              of tech leadership, creating harmonious bridges between tradition and innovation.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-accent" />
                <span>maestro@musicmagic.com</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-accent" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-accent" />
                <span>Chennai, Tamil Nadu</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-accent">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-accent">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground hover:text-accent transition-colors cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-accent">Stay Connected</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to receive updates on new releases, performances, and educational content.
            </p>
            <div className="space-y-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-input/50 border border-border/50 rounded-l-md focus:border-accent focus:outline-none text-sm"
                />
                <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-4 py-2 rounded-r-md text-sm font-medium transition-colors">
                  Subscribe
                </button>
              </div>
              
              {/* Social Media Links */}
              <div className="flex space-x-3">
                {["YouTube", "Instagram", "LinkedIn", "Facebook"].map((platform) => (
                  <button
                    key={platform}
                    className="w-10 h-10 bg-accent/20 hover:bg-accent text-accent hover:text-accent-foreground rounded-lg transition-colors flex items-center justify-center text-xs font-medium"
                  >
                    {platform.charAt(0)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-1 text-muted-foreground text-sm">
              <span>© {currentYear} Sunaada. All rights reserved.</span>
              <Heart className="h-4 w-4 text-accent fill-current" />
              <span>Powered by FoxTech Pvt Solutions</span>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <button className="text-muted-foreground hover:text-accent transition-colors">
                Privacy Policy
              </button>
              <button className="text-muted-foreground hover:text-accent transition-colors">
                Terms of Service
              </button>
              <button
                onClick={scrollToTop}
                className="text-accent hover:text-accent/80 transition-colors font-medium"
              >
                Back to Top ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;