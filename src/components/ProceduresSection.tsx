import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';

const ProceduresSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="procedimentos"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 font-playfair">
            Nossos Procedimentos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Especialização em técnicas avançadas para devolver função, estética e confiança ao seu sorriso
          </p>
        </div>

        <div className="space-y-20">
          
          {/* Implantes Dentários */}
          <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl transform -rotate-3" />
                <div className="relative bg-white rounded-3xl p-8 shadow-card">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-6">
                    <span className="text-2xl">🦷</span>
                  </div>
                  <h3 className="text-3xl font-bold text-primary mb-4 font-playfair">
                    Implantes Dentários
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Recupere a função mastigatória e a estética do seu sorriso com implantes de alta qualidade. 
                    Nossa técnica minimamente invasiva garante maior conforto, cicatrização rápida e resultados 
                    naturais que duram para toda a vida.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-foreground">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                      Implantes unitários e múltiplos
                    </li>
                    <li className="flex items-center text-foreground">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                      Cirurgia guiada por computador
                    </li>
                    <li className="flex items-center text-foreground">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                      Carga imediata quando possível
                    </li>
                    <li className="flex items-center text-foreground">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                      Garantia e acompanhamento
                    </li>
                  </ul>
                  <Button className="btn-hero">
                    SAIBA MAIS SOBRE IMPLANTES
                  </Button>
                </div>
              </div>
            </div>
            <div className="lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Implantes Dentários"
                className="w-full rounded-3xl shadow-elegant"
              />
            </div>
          </div>

          {/* Prótese Protocolo */}
          <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Prótese Protocolo"
                className="w-full rounded-3xl shadow-elegant"
              />
            </div>
            <div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-l from-primary/10 to-accent/10 rounded-3xl transform rotate-3" />
                <div className="relative bg-white rounded-3xl p-8 shadow-card">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-6">
                    <span className="text-2xl">😁</span>
                  </div>
                  <h3 className="text-3xl font-bold text-primary mb-4 font-playfair">
                    Prótese Protocolo
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Recupere todos os dentes com segurança e estabilidade total. A prótese protocolo é a 
                    solução definitiva para quem perdeu todos ou quase todos os dentes, oferecendo 
                    um sorriso fixo, natural e funcional.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-foreground">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                      Reabilitação completa em 24h
                    </li>
                    <li className="flex items-center text-foreground">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                      Prótese fixa sobre implantes
                    </li>
                    <li className="flex items-center text-foreground">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                      Mastigação eficiente imediata
                    </li>
                    <li className="flex items-center text-foreground">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                      Estética natural e confortável
                    </li>
                  </ul>
                  <Button className="btn-hero">
                    SAIBA MAIS SOBRE PROTOCOLO
                  </Button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProceduresSection;