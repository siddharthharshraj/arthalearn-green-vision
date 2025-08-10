import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const whatsappLink = "https://chat.whatsapp.com/Fsac0NGs4w9LW9oPLmrfou";
  const contactFormLink = "#"; // Placeholder Google Form link

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient">
        <div className="absolute inset-0 gradient-mesh opacity-60"></div>
        <img 
          src={heroImage} 
          alt="Financial literacy and growth" 
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-particle"></div>
        <div className="floating-particle"></div>
        <div className="floating-particle"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fadeInUp">
            <span className="text-gradient">Financial Literacy</span>
            <br />
            for a Stronger India
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-12 animate-fadeInUp max-w-3xl mx-auto leading-relaxed">
            We're building learning experiences and tech products that empower every Indian to make smarter financial decisions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slideInRight">
            <Button
              onClick={() => window.open(whatsappLink, '_blank')}
              className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold px-8 py-4 rounded-2xl shadow-glow btn-glow text-lg transition-brand flex items-center gap-3"
            >
              <MessageCircle className="h-5 w-5" />
              Join WhatsApp Group
            </Button>
            
            <Button
              onClick={scrollToContact}
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-4 rounded-2xl text-lg transition-brand flex items-center gap-3"
            >
              Open Contact Form
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center opacity-80">
            <div className="animate-fadeInUp">
              <div className="text-3xl font-bold text-primary mb-2">10K+</div>
              <div className="text-muted-foreground">Community Members</div>
            </div>
            <div className="animate-fadeInUp">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Market Updates</div>
            </div>
            <div className="animate-fadeInUp">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Free Learning</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;