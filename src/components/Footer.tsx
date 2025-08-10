import { MessageCircle, Mail, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappLink = "https://chat.whatsapp.com/Fsac0NGs4w9LW9oPLmrfou";
  const foundersEmail = "founders@arthalearn.com";

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' }
  ];

  const quickLinks = [
    { label: 'Mission', id: 'mission' },
    { label: 'Products', id: 'products' },
    { label: 'Community', id: 'community' },
    { label: "Founders' Note", id: 'founders-note' }
  ];

  const legalLinks = [
    { label: 'Terms of Service', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Cookie Policy', href: '#' }
  ];

  return (
    <footer className="bg-brand-dark text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold mb-4">
              <span className="text-gradient">ARTHALEARN</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md leading-relaxed">
              Empowering every Indian with financial literacy and building tech products that contribute to India's economic strength.
            </p>
            
            {/* Primary CTA */}
            <div className="bg-primary/10 border border-primary/20 rounded-2xl p-4 mb-6">
              <div className="flex items-center gap-3 mb-2">
                <MessageCircle className="h-5 w-5 text-primary" />
                <span className="font-semibold">Join Our Community</span>
              </div>
              <p className="text-sm text-primary-foreground/70 mb-3">
                Get daily market insights and connect with 10,000+ learners
              </p>
              <button
                onClick={() => window.open(whatsappLink, '_blank')}
                className="bg-primary hover:bg-primary-hover text-primary-foreground font-medium px-4 py-2 rounded-xl text-sm transition-brand w-full"
              >
                Join WhatsApp Group
              </button>
            </div>

            {/* Contact Info */}
            <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
              <Mail className="h-4 w-4" />
              <a 
                href={`mailto:${foundersEmail}`}
                className="hover:text-primary transition-brand"
              >
                {foundersEmail}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-primary-foreground/70 hover:text-primary transition-brand text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="space-y-4">
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary-foreground/70 hover:text-primary hover:bg-primary/20 transition-brand"
                      aria-label={social.name}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
              
              {/* Newsletter Signup */}
              <div>
                <p className="text-sm text-primary-foreground/70 mb-2">Stay Updated</p>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-sm text-primary hover:text-primary/80 transition-brand underline underline-offset-2"
                >
                  Subscribe to Updates
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-sm text-primary-foreground/60">
              © {currentYear} <span className="font-semibold">ARTHALEARN</span>. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex gap-6">
              {legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-primary-foreground/60 hover:text-primary transition-brand"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Made in India */}
          <div className="text-center mt-4 pt-4 border-t border-primary-foreground/5">
            <div className="inline-flex items-center gap-2 text-xs text-primary-foreground/50">
              <span>Made with</span>
              <span className="text-red-400">❤️</span>
              <span>in India</span>
              <span>🇮🇳</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;