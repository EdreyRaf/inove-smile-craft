import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    text: "Dr. Eterno transformou minha vida! Depois dos implantes, recuperei minha autoestima e posso sorrir sem medo novamente.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b988?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5
  },
  {
    id: 2,
    name: "João Santos",
    text: "A prótese protocolo foi a melhor decisão que tomei. Em 24 horas, saí da clínica com um sorriso novo e funcional.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5
  },
  {
    id: 3,
    name: "Ana Carolina",
    text: "Profissionalismo e carinho em cada consulta. Dr. Eterno é um excelente profissional e a clínica é impecável.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5
  },
  {
    id: 4,
    name: "Carlos Mendes",
    text: "Recomendo de olhos fechados! Tratamento humanizado e resultados que superaram minhas expectativas.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5
  },
  {
    id: 5,
    name: "Luciana Oliveira",
    text: "Equipe maravilhosa e Dr. Eterno é muito competente. Meus implantes ficaram perfeitos, muito naturais!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section 
      id="depoimentos"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 font-playfair">
            Depoimentos de Pacientes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja o que nossos pacientes falam sobre os resultados alcançados
          </p>
        </div>

        <div className={`relative transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          
          {/* Desktop View - 3 cards */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`card-elegant p-6 transition-all duration-500 ${
                  index === 1 ? 'scale-105 shadow-glow' : ''
                }`}
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>

          {/* Mobile View - 1 card with navigation */}
          <div className="md:hidden">
            <div className="card-elegant p-6 mx-auto max-w-md">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{testimonials[currentIndex].name}</h4>
                  <div className="flex">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                "{testimonials[currentIndex].text}"
              </p>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-primary scale-125' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;