import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';

const DoctorSection = () => {
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

  return (
    <section 
      id="doutor"
      ref={sectionRef}
      className="section-dark py-24 lg:py-40"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Doctor Image */}
          <div className={`transition-all duration-1000 order-2 lg:order-1 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="relative max-w-lg mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl transform rotate-3" />
              <img 
                src="/lovable-uploads/e657a349-ebea-48ad-ae86-eb5f863a7e5d.png"
                alt="Dr. Eterno Freitas Jr. - CRO PE-9753"
                className="relative z-10 w-full rounded-3xl shadow-glow"
              />
            </div>
          </div>

          {/* Doctor Content */}
          <div className={`transition-all duration-1000 delay-300 order-1 lg:order-2 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 font-playfair leading-tight tracking-tight">
              Dr. Eterno Freitas Jr.
            </h2>
            <p className="text-2xl lg:text-3xl text-accent mb-8 font-semibold">
              CRO PE-9753
            </p>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-12 leading-relaxed font-light">
              Especialista em Implantodontia e referência em reabilitação oral em Garanhuns. 
              Dr. Eterno é reconhecido pelo cuidado com cada paciente e pela excelência nos resultados. 
              Na Clínica Inove, cada caso é tratado com planejamento, empatia e precisão clínica.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:bg-white/15 hover:scale-105">
                <h4 className="text-xl lg:text-2xl font-semibold text-accent mb-3">Especialização</h4>
                <p className="text-lg lg:text-xl text-white/80">Implantodontia e Reabilitação Oral</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:bg-white/15 hover:scale-105">
                <h4 className="text-xl lg:text-2xl font-semibold text-accent mb-3">Experiência</h4>
                <p className="text-lg lg:text-xl text-white/80">15+ anos em odontologia</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:bg-white/15 hover:scale-105">
                <h4 className="text-xl lg:text-2xl font-semibold text-accent mb-3">Formação</h4>
                <p className="text-lg lg:text-xl text-white/80">Especialista em Implantes</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:bg-white/15 hover:scale-105">
                <h4 className="text-xl lg:text-2xl font-semibold text-accent mb-3">Localização</h4>
                <p className="text-lg lg:text-xl text-white/80">Garanhuns, Pernambuco</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                className="btn-accent"
                onClick={() => window.open('https://api.whatsapp.com/send?1=pt_BR&phone=5587981164843', '_blank')}
              >
                MARCAR ATENDIMENTO
              </Button>
              <Button 
                className="btn-secondary bg-white/10 border-white text-white hover:bg-white hover:text-primary"
                onClick={() => window.open('https://www.instagram.com/espaco.inove/', '_blank')}
              >
                VER NO INSTAGRAM
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DoctorSection;