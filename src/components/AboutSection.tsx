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
      className="section-primary py-20 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 font-playfair">
            Sobre a Inove
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
            A Inove Odontologia é um espaço dedicado à reabilitação oral com qualidade, 
            acolhimento e especialistas em cada área. Nosso foco é transformar a vida dos 
            pacientes, devolvendo função, saúde bucal e autoestima, através de técnicas 
            avançadas e uma equipe altamente capacitada.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">15+</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Anos de Experiência</h3>
              <p className="text-white/80">Especialização e dedicação em reabilitação oral</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1000+</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Pacientes Atendidos</h3>
              <p className="text-white/80">Sorrisos transformados com excelência</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">100%</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Satisfação</h3>
              <p className="text-white/80">Compromisso com resultados excepcionais</p>
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