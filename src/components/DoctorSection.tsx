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
      className="section-dark py-20 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Doctor Image */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl transform rotate-3" />
              <img 
                src="/lovable-uploads/e657a349-ebea-48ad-ae86-eb5f863a7e5d.png"
                alt="Dr. Eterno Freitas Jr. - CRO PE-9753"
                className="relative z-10 w-full max-w-lg mx-auto rounded-3xl shadow-glow"
              />
            </div>
          </div>

          {/* Doctor Content */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-playfair">
              Dr. Eterno Freitas Jr.
            </h2>
            <p className="text-xl text-accent mb-4 font-semibold">
              CRO PE-9753
            </p>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Especialista em Implantodontia e referência em reabilitação oral em Garanhuns. 
              Dr. Eterno é reconhecido pelo cuidado com cada paciente e pela excelência nos resultados. 
              Na Clínica Inove, cada caso é tratado com planejamento, empatia e precisão clínica.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <h4 className="text-lg font-semibold text-accent mb-2">Especialização</h4>
                <p className="text-white/80">Implantodontia e Reabilitação Oral</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <h4 className="text-lg font-semibold text-accent mb-2">Experiência</h4>
                <p className="text-white/80">15+ anos em odontologia</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <h4 className="text-lg font-semibold text-accent mb-2">Formação</h4>
                <p className="text-white/80">Especialista em Implantes</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <h4 className="text-lg font-semibold text-accent mb-2">Localização</h4>
                <p className="text-white/80">Garanhuns, Pernambuco</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
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