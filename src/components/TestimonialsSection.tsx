import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { useState } from "react";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Classical Music Student",
      company: "15 years of training",
      content: "Under his guidance, I've not only mastered complex ragas but also understood the soul of classical music. His teaching method bridges traditional techniques with modern understanding.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b194?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Rajesh Kumar",
      role: "Film Director",
      company: "Bollywood Productions",
      content: "His background scores have elevated our films to new heights. The way he blends classical elements with contemporary sounds is absolutely magical.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Dr. Meera Iyer",
      role: "Music Academy Director",
      company: "Chennai Music Academy",
      content: "A true maestro who has preserved classical traditions while innovating for the future. His contributions to both music and technology are unparalleled.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Tech Innovations Ltd",
      role: "CTO",
      company: "Tech Consulting Client",
      content: "His dual expertise in music and technology brought a unique perspective to our projects. Innovative solutions with an artist's attention to detail.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Ananya Rao",
      role: "Fusion Music Collaborator",
      company: "Independent Artist",
      content: "Working on the Ranjaka album was transformative. His ability to respect tradition while pushing boundaries is what makes him extraordinary.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            What People
            <span className="text-gold-gradient"> Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Testimonials from students, collaborators, and industry professionals 
            who have experienced the magic of music and innovation.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-4xl mx-auto mb-12 scroll-reveal">
          <Card className="luxury-card relative overflow-hidden">
            <div className="absolute top-6 left-6 text-accent/20">
              <Quote className="h-16 w-16" />
            </div>
            
            <CardContent className="p-12 relative z-10">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Testimonial Image */}
                <div className="flex-shrink-0">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-accent/30"
                  />
                </div>

                {/* Testimonial Content */}
                <div className="flex-1 text-center lg:text-left">
                  {/* Rating Stars */}
                  <div className="flex justify-center lg:justify-start mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-accent fill-current" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-xl lg:text-2xl font-light leading-relaxed mb-6 italic">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="border-t border-border/50 pt-4">
                    <h4 className="text-lg font-semibold text-accent">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-muted-foreground">
                      {testimonials[currentTestimonial].role}
                    </p>
                    <p className="text-sm text-muted-foreground/80">
                      {testimonials[currentTestimonial].company}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="border-accent/50 text-accent hover:bg-accent hover:text-accent-foreground"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-accent scale-125"
                      : "bg-accent/30 hover:bg-accent/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="border-accent/50 text-accent hover:bg-accent hover:text-accent-foreground"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 scroll-reveal">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`luxury-card cursor-pointer transition-elegant ${
                index === currentTestimonial ? "ring-2 ring-accent" : ""
              }`}
              onClick={() => setCurrentTestimonial(index)}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-accent fill-current" />
                  ))}
                </div>
                
                <p className="text-sm text-muted-foreground line-clamp-3">
                  "{testimonial.content}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 scroll-reveal">
          <h3 className="text-2xl font-heading font-semibold mb-4">
            Ready to Begin Your Musical Journey?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join hundreds of satisfied students and collaborators. Whether you're interested 
            in classical training, fusion projects, or film scoring, let's create magic together.
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6"
          >
            Start Your Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;