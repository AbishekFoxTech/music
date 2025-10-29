import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { useState } from "react";

import picture1 from "@/assets/testimonial-imgs/Picture1.jpg";
import picture2 from "@/assets/testimonial-imgs/Picture2.jpg";
import picture3 from "@/assets/testimonial-imgs/Picture3.jpg";
import picture4 from "@/assets/testimonial-imgs/Picture4.jpg";
import picture5 from "@/assets/testimonial-imgs/Picture5.jpg";
import picture6 from "@/assets/testimonial-imgs/Picture6.jpg";
import picture7 from "@/assets/testimonial-imgs/Picture7.jpg";
import picture8 from "@/assets/testimonial-imgs/Picture8.jpg";
import picture9 from "@/assets/testimonial-imgs/Picture9.jpg";
import picture10 from "@/assets/testimonial-imgs/Picture10.jpg";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Rakhee Ashwin",
      role: "Software Engineer",
      company: "Canada — 1+ years of learning",
      content:
        "Sridhar sir is a very experienced and wonderful teacher with a lot of patience and perfection. His commitment to teaching is unexplainable. With good humour he engages students of all ages. I rejoined violin after a 20-year gap and was quickly able to get back to playing with his guidance. I feel very blessed to be his student.",
      rating: 5,
      image: picture1,
    },
    {
      name: "G.M. Kamath",
      role: "Professor",
      company: "IIT Kanpur — ~1.5 years of learning",
      content:
        "Sridhar sir is both a great Vidwan and an amazing Guru. He is taking forward an illustrious parampara, which I’m privileged to be a small part of.",
      rating: 5,
      image: picture2,
    },
    {
      name: "Adithya G H",
      role: "Resident Doctor (M.S. General Surgery)",
      company: "Bangalore — 11 years of learning",
      content:
        "Sridhar sir is my Paramaguru. He not only shares deep music knowledge but also shows that music is a way of life. He explains musical concepts, nuances, and genres, while giving new perspectives in every session. I’m very fortunate to be his disciple.",
      rating: 5,
      image: picture3,
    },
    {
      name: "Anurag Sinha",
      role: "Human Spaceflight Centre",
      company: "ISRO, Bangalore — 2 years of learning",
      content:
        "Sridhar sir brings a unique perspective to violin classes, tailoring his pedagogy to each student. His classes are joyful and filled with both music and life lessons. Students gain exposure not just to Carnatic music but also to Hindustani and Western classical traditions.",
      rating: 5,
      image: picture4,
    },
    {
      name: "Arvind Balasubramanian",
      role: "Postdoctoral Fellow, Research in Astrophysics",
      company: "Indian Institute of Astrophysics — 18 years of learning",
      content:
        "Sridhar sir’s unique teaching method blends theory and practice beautifully. His emphasis on vocals, even for violinists, makes the learning experience deeply enriching and holistic.",
      rating: 5,
      image: picture5,
    },
    {
      name: "Sreeramya D",
      role: "System Software Engineer",
      company: "Intel, Bengaluru — 11 years of learning",
      content:
        "Sridhar Sir is a guru with profound knowledge of Carnatic music. He is patient and ensures that students thoroughly master swaras and sahitya before progressing. Overall, he is a great teacher!",
      rating: 5,
      image: picture6,
    },
    {
      name: "Akshay Ravindran",
      role: "Software Engineer & Performing Artist",
      company: "NAVEX, Bengaluru — 15+ years of learning",
      content:
        "Learning under Sridhar Sir for 15 years has been life-changing. His innovative teaching, dedication, and focus on the synergy of singing and violin have transformed my skills. Every class inspires growth and discovery.",
      rating: 5,
      image: picture7,
    },
    {
      name: "Krishna Rao",
      role: "Product Management Leader",
      company: "Nokia Networks — 30+ years of learning",
      content:
        "Guru and torchbearer of a unique baani that he has inherited, enriched, and shared with students — connecting our sampradaya to shashtreeya sangeetha.",
      rating: 5,
      image: picture8,
    },
    {
      name: "Manasa DL",
      role: "MBA Student",
      company: "Cardiff University, UK — 11+ years of learning",
      content:
        "Sridhar Sir is an incredible teacher with deep knowledge and a personalised approach that brings out the best in every student. His flexible online/offline classes have been invaluable for those abroad.",
      rating: 5,
      image: picture9,
    },
    {
      name: "Pushpa H S",
      role: "Partner Manager",
      company: "Bangalore — 1+ years of learning",
      content:
        "A very professional and patient teacher with a 'can-do' attitude, helping students see the bigger picture of music. His customised approach and group-based teaching make learning engaging and confidence-boosting. If he believes in you, he’ll make you believe in yourself!",
      rating: 5,
      image: picture10,
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
            What Students
            <span className="text-gold-gradient"> Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real words from students and professionals who have learned under Vidwan Sridhar Sir and experienced the transformative power of his teaching.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-6xl mx-auto mb-12 scroll-reveal">
          <Card className="luxury-card relative overflow-hidden min-h-[400px] flex items-center">
            <div className="absolute top-6 left-6 text-accent/20">
              <Quote className="h-16 w-16" />
            </div>

            <CardContent className="p-12 relative z-10 w-full">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-accent/30"
                  />
                </div>

                <div className="flex-1 text-center lg:text-left">
                  <div className="flex justify-center lg:justify-start mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-accent fill-current" />
                    ))}
                  </div>

                  <blockquote className="text-xl lg:text-2xl font-light leading-relaxed mb-6 italic">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>

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
