import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Music, Film, Code, Clock } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "maestro@musicmagic.com",
      description: "For all inquiries and collaborations",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+91 98765 43210",
      description: "Available Mon-Fri, 10 AM - 6 PM",
    },
    {
      icon: MapPin,
      title: "Studio Location",
      details: "Chennai, Tamil Nadu",
      description: "Private lessons and recording sessions",
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "Within 24 hours",
      description: "Quick turnaround for all inquiries",
    },
  ];

  const services = [
    { value: "music-lessons", label: "Classical Music Lessons", icon: Music },
    { value: "film-scoring", label: "Film Scoring & BGM", icon: Film },
    { value: "tech-consulting", label: "Tech Consulting", icon: Code },
    { value: "fusion-collaboration", label: "Fusion Music Collaboration", icon: Music },
    { value: "other", label: "Other Services", icon: Mail },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            Let's Create
            <span className="text-gold-gradient"> Magic Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether you're seeking musical instruction, film scoring, or innovative 
            collaborations, I'm here to bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="scroll-reveal">
            <Card className="luxury-card">
              <CardHeader>
                <CardTitle className="text-2xl font-heading">
                  Get in Touch
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll respond within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="bg-input/50 border-border/50 focus:border-accent"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Email Address *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="bg-input/50 border-border/50 focus:border-accent"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Phone Number
                      </label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className="bg-input/50 border-border/50 focus:border-accent"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Service Interest *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 bg-input/50 border border-border/50 rounded-md focus:border-accent focus:outline-none"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service.value} value={service.value}>
                            {service.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, goals, or questions..."
                      rows={5}
                      required
                      className="bg-input/50 border-border/50 focus:border-accent resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6"
                  >
                    Send Message
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to receive communications about 
                    your inquiry. Your information is kept confidential.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 scroll-reveal">
            {/* Contact Cards */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="luxury-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-accent/20 p-3 rounded-lg">
                        <info.icon className="h-6 w-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                        <p className="text-accent font-medium mb-1">{info.details}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Services Overview */}
            <Card className="luxury-card">
              <CardHeader>
                <CardTitle className="text-xl font-heading">
                  Available Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/10 transition-colors">
                      <service.icon className="h-5 w-5 text-accent" />
                      <span className="font-medium">{service.label}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="luxury-card bg-gradient-to-r from-primary/20 to-accent/20 border-accent/30">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-heading font-semibold mb-2">
                  Ready for a Consultation?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Schedule a free 30-minute consultation to discuss your musical journey or project needs.
                </p>
                <Button className="bg-accent hover:bg-accent/90">
                  Book Free Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Social Media & Additional Info */}
        <div className="mt-16 text-center scroll-reveal">
          <h3 className="text-2xl font-heading font-semibold mb-6">
            Connect on Social Media
          </h3>
          <div className="flex justify-center gap-4 mb-8">
            {["YouTube", "Instagram", "LinkedIn", "Facebook", "Twitter"].map((platform) => (
              <Button
                key={platform}
                variant="outline"
                className="border-accent/50 text-accent hover:bg-accent hover:text-accent-foreground"
              >
                {platform}
              </Button>
            ))}
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Follow my musical journey, watch performance videos, and stay updated 
            with the latest compositions and educational content.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;