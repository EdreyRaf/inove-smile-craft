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
      className="section-dark overflow-hidden"
      style={{ padding: '16px 0' }}
    >
      <div className="w-full max-w-7xl mx-auto overflow-hidden" style={{ padding: '0 16px' }}>
        <div className="grid grid-rows-[auto_auto_auto] gap-4 md:gap-6 lg:grid-cols-2 lg:grid-rows-1 lg:gap-16 xl:gap-20 lg:items-center">
          
          {/* Doctor Image */}
          <div className={`transition-all duration-1000 order-1 lg:order-1 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="w-full mx-auto" style={{ maxWidth: '420px' }}>
              <img
                src="/lovable-uploads/e657a349-ebea-48ad-ae86-eb5f863a7e5d.png"
                alt="Dr. Eterno Freitas Jr. - CRO PE-9753"
                className="w-full h-auto object-cover lg:shadow-glow"
                style={{ borderRadius: '16px', maxWidth: '420px' }}
              />
            </div>
          </div>

          {/* Doctor Content */}
          <div className={`transition-all duration-1000 delay-300 order-2 lg:order-2 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <h2
              className="font-bold text-white font-playfair leading-tight tracking-tight text-center lg:text-left"
              style={{
                fontSize: 'clamp(20px, 4.5vw, 28px)',
                fontWeight: '700',
                marginBottom: 'clamp(8px, 2vw, 16px)'
              }}
            >
              Dr. Eterno Freitas Jr.
            </h2>
            <p
              className="text-accent font-semibold text-center lg:text-left"
              style={{
                fontSize: 'clamp(14px, 3.8vw, 18px)',
                lineHeight: '1.4',
                marginBottom: 'clamp(8px, 2vw, 16px)'
              }}
            >
              CRO PE-9753
            </p>

            <p
              className="text-white/90 font-light text-center lg:text-left"
              style={{
                fontSize: 'clamp(14px, 3.6vw, 16px)',
                lineHeight: '1.6',
                marginBottom: 'clamp(12px, 3vw, 24px)'
              }}
            >
              Especialista em Implantodontia e referência em reabilitação oral em Garanhuns.
              Dr. Eterno é reconhecido pelo cuidado com cada paciente e pela excelência nos resultados.
              Na Clínica Inove, cada caso é tratado com planejamento, empatia e precisão clínica.
            </p>

            <div style={{ marginBottom: 'clamp(12px, 3vw, 24px)' }}>
              <CarouselInfo items={doctorInfo} />
            </div>
          </div>

          {/* CTA Button */}
          <div className="order-3 lg:order-3 lg:col-span-2 lg:justify-self-start">
            <Button
              className="btn-accent w-full lg:w-auto"
              onClick={() => window.open('https://api.whatsapp.com/send?1=pt_BR&phone=5587981164843', '_blank')}
            >
              MARCAR ATENDIMENTO
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DoctorSection;
