import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 section-hero" />
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className={`text-center lg:text-left transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-playfair leading-tight">
              O dentista que você procura!
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              Na Clínica Inove, acreditamos que a verdadeira estética começa pela função. 
              Nossa especialidade é transformar sorrisos com segurança e excelência clínica.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                className="btn-accent text-lg px-8 py-6"
                onClick={() => scrollToSection('clinica')}
              >
                CLIQUE AQUI PARA SABER MAIS
              </Button>
              
              <Button 
                className="btn-secondary bg-white/10 border-white text-white hover:bg-white hover:text-primary"
                onClick={() => window.open('https://api.whatsapp.com/send?1=pt_BR&phone=5587981164843', '_blank')}
              >
                FALAR NO WHATSAPP
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className={`relative transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary-light/20 rounded-3xl transform rotate-3" />
              <img 
                src="/lovable-uploads/6d1b5b8b-adb0-4faa-b679-d076aafaf38a.png"
                alt="Dr. Eterno Freitas - Especialista em Implantes Dentários"
                className="relative z-10 w-full max-w-md mx-auto rounded-3xl shadow-glow"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent/10 rounded-full blur-xl" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary-light/10 rounded-full blur-xl" />
    </section>
  );
};

export default HeroSection;