import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';

const AboutSection = () => {
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
      id="clinica"
      ref={sectionRef}
      className="section-primary py-24 lg:py-40"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className={`text-center max-w-5xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-12 font-playfair leading-tight tracking-tight">
            Sobre a Inove
          </h2>
          
          <p className="text-2xl md:text-3xl lg:text-4xl text-white/90 mb-16 leading-relaxed font-light max-w-4xl mx-auto">
            A Inove Odontologia é um espaço dedicado à reabilitação oral com qualidade, 
            acolhimento e especialistas em cada área. Nosso foco é transformar a vida dos 
            pacientes, devolvendo função, saúde bucal e autoestima, através de técnicas 
            avançadas e uma equipe altamente capacitada.
          </p>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-10 text-center transition-all duration-300 hover:bg-white/15 hover:scale-105">
              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl lg:text-4xl font-bold text-white">15+</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-4">Anos de Experiência</h3>
              <p className="text-lg lg:text-xl text-white/80 leading-relaxed">Especialização e dedicação em reabilitação oral</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-10 text-center transition-all duration-300 hover:bg-white/15 hover:scale-105">
              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl lg:text-3xl font-bold text-white">1000+</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-4">Pacientes Atendidos</h3>
              <p className="text-lg lg:text-xl text-white/80 leading-relaxed">Sorrisos transformados com excelência</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-10 text-center transition-all duration-300 hover:bg-white/15 hover:scale-105">
              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl lg:text-4xl font-bold text-white">100%</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-4">Satisfação</h3>
              <p className="text-lg lg:text-xl text-white/80 leading-relaxed">Compromisso com resultados excepcionais</p>
            </div>
          </div>
          
          <Button 
            className="btn-dark"
            onClick={() => window.open('https://api.whatsapp.com/send?1=pt_BR&phone=5587981164843', '_blank')}
          >
            ENTRAR EM CONTATO
          </Button>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;