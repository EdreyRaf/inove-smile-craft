import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-primary/95 backdrop-blur-md shadow-card'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28 lg:h-32">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fe4d9e5641bae44afb2e6b6c54e973be7%2F5089900ac19c4caa91966cf657bc3f36"
              alt="Inove Odontologia"
              className="h-20 lg:h-24 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => scrollToSection('clinica')}
              className={`transition-colors font-semibold text-base lg:text-lg ${
                isScrolled
                  ? 'text-white hover:text-accent'
                  : 'text-primary hover:text-accent'
              }`}
              style={{
                backgroundColor: 'transparent',
                textShadow: isScrolled ? 'none' : '1px 1px 3px rgba(255,255,255,0.8)'
              }}
            >
              Clínica
            </button>
            <button
              onClick={() => scrollToSection('procedimentos')}
              className={`transition-colors font-semibold text-base lg:text-lg ${
                isScrolled
                  ? 'text-white hover:text-accent'
                  : 'text-primary hover:text-accent'
              }`}
              style={{
                backgroundColor: 'transparent',
                textShadow: isScrolled ? 'none' : '1px 1px 3px rgba(255,255,255,0.8)'
              }}
            >
              Procedimentos
            </button>
            <button
              onClick={() => scrollToSection('doutor')}
              className={`transition-colors font-semibold text-base lg:text-lg ${
                isScrolled
                  ? 'text-white hover:text-accent'
                  : 'text-primary hover:text-accent'
              }`}
              style={{
                backgroundColor: 'transparent',
                textShadow: isScrolled ? 'none' : '1px 1px 3px rgba(255,255,255,0.8)'
              }}
            >
              Quem é Eterno Freitas
            </button>
            <button
              onClick={() => scrollToSection('depoimentos')}
              className={`transition-colors font-semibold text-base lg:text-lg ${
                isScrolled
                  ? 'text-white hover:text-accent'
                  : 'text-primary hover:text-accent'
              }`}
              style={{
                backgroundColor: 'transparent',
                textShadow: isScrolled ? 'none' : '1px 1px 3px rgba(255,255,255,0.8)'
              }}
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className={`transition-colors font-semibold text-base lg:text-lg ${
                isScrolled
                  ? 'text-white hover:text-accent'
                  : 'text-primary hover:text-accent'
              }`}
              style={{
                backgroundColor: 'transparent',
                textShadow: isScrolled ? 'none' : '1px 1px 3px rgba(255,255,255,0.8)'
              }}
            >
              Entre em contato
            </button>
            <Button
              className="btn-hero"
              onClick={() => window.open('https://api.whatsapp.com/send?1=pt_BR&phone=5587981164843', '_blank')}
            >
              AGENDAR ATENDIMENTO
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 p-4 shadow-card">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('clinica')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Clínica
              </button>
              <button 
                onClick={() => scrollToSection('procedimentos')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Procedimentos
              </button>
              <button 
                onClick={() => scrollToSection('doutor')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Quem é Eterno Freitas
              </button>
              <button
                onClick={() => scrollToSection('depoimentos')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Depoimentos
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Entre em contato
              </button>
              <Button
                className="btn-hero w-full"
                onClick={() => window.open('https://api.whatsapp.com/send?1=pt_BR&phone=5587981164843', '_blank')}
              >
                AGENDAR ATENDIMENTO
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
