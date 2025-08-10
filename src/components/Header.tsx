import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const whatsappLink = "https://chat.whatsapp.com/Fsac0NGs4w9LW9oPLmrfou";

  const navItems = [
    { label: 'Mission', id: 'mission' },
    { label: 'Products', id: 'products' },
    { label: 'Community', id: 'community' },
    { label: "Founders' Note", id: 'founders-note' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-brand ${
        isScrolled 
          ? 'backdrop-blur-brand border-b border-border/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="text-2xl font-bold text-gradient cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            ARTHALEARN
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-brand font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => window.open(whatsappLink, '_blank')}
              className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold px-6 py-2 rounded-2xl shadow-brand btn-glow transition-brand"
            >
              Join WhatsApp Group
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 backdrop-blur-brand border-b border-border/20">
            <nav className="flex flex-col py-4 px-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-foreground hover:text-primary transition-brand font-medium py-2"
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => window.open(whatsappLink, '_blank')}
                className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold px-6 py-3 rounded-2xl shadow-brand mt-4"
              >
                Join WhatsApp Group
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;