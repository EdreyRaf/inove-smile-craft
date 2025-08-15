import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';
import CarouselInfo from '@/components/ui/carousel-info';

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

  const doctorInfo = [
    {
      title: "Especialização",
      description: "Implantodontia e Reabilitação Oral"
    },
    {
      title: "Experiência", 
      description: "15+ anos em odontologia"
    },
    {
      title: "Formação",
      description: "Especialista em Implantes"
    },
    {
      title: "Localização",
      description: "Garanhuns, Pernambuco"
    }
  ];

  return (
    <section
      id="doutor"
      ref={sectionRef}
      className="section-dark py-12 sm:py-16 lg:py-32 xl:py-40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 xl:gap-20 items-center">
          
          {/* Doctor Image */}
          <div className={`transition-all duration-1000 order-2 lg:order-1 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="relative max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0">
              <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl transform rotate-3" />
              <img
                src="/lovable-uploads/e657a349-ebea-48ad-ae86-eb5f863a7e5d.png"
                alt="Dr. Eterno Freitas Jr. - CRO PE-9753"
                className="relative z-10 w-full rounded-2xl lg:rounded-3xl shadow-lg lg:shadow-glow"
              />
            </div>
          </div>

          {/* Doctor Content */}
          <div className={`transition-all duration-1000 delay-300 order-1 lg:order-2 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 lg:mb-8 font-playfair leading-tight tracking-tight text-center lg:text-left">
              Dr. Eterno Freitas Jr.
            </h2>
            <p className="text-sm sm:text-base lg:text-xl xl:text-2xl text-accent mb-3 sm:mb-4 lg:mb-8 font-semibold text-center lg:text-left">
              CRO PE-9753
            </p>

            <p className="text-xs sm:text-sm lg:text-lg xl:text-xl text-white/90 mb-4 sm:mb-6 lg:mb-12 leading-relaxed font-light text-center lg:text-left">
              Especialista em Implantodontia e referência em reabilitação oral em Garanhuns.
              Dr. Eterno é reconhecido pelo cuidado com cada paciente e pela excelência nos resultados.
              Na Clínica Inove, cada caso é tratado com planejamento, empatia e precisão clínica.
            </p>

            <div className="mb-4 sm:mb-6 lg:mb-12">
              <CarouselInfo items={doctorInfo} />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
              <Button
                className="btn-accent w-full sm:w-auto"
                onClick={() => window.open('https://api.whatsapp.com/send?1=pt_BR&phone=5587981164843', '_blank')}
              >
                MARCAR ATENDIMENTO
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DoctorSection;
