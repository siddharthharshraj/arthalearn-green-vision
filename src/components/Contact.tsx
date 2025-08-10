import { Mail, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const foundersEmail = "founders@arthalearn.com";
  const whatsappLink = "https://chat.whatsapp.com/Fsac0NGs4w9LW9oPLmrfou";
  const googleFormLink = "#"; // Placeholder Google Form link

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to join India's financial literacy revolution? We'd love to hear from you and help you get started on your journey.
            </p>
          </div>

          {/* Contact Options Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* WhatsApp Community */}
            <div className="bg-gradient-primary p-8 rounded-3xl shadow-glow text-primary-foreground">
              <div className="w-16 h-16 bg-primary-foreground/20 rounded-3xl flex items-center justify-center mb-6">
                <MessageCircle className="h-8 w-8 text-primary-foreground" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Join Our Community</h3>
              <p className="text-primary-foreground/90 mb-6 leading-relaxed">
                The fastest way to connect with us and thousands of other financial learners. Get instant access to daily insights and expert guidance.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  <span className="text-sm">Daily market updates</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  <span className="text-sm">Direct access to experts</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  <span className="text-sm">Peer learning network</span>
                </div>
              </div>
              
              <Button
                onClick={() => window.open(whatsappLink, '_blank')}
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-6 py-3 rounded-2xl w-full transition-brand"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Join WhatsApp Group
              </Button>
            </div>

            {/* Contact Form */}
            <div className="bg-card border border-border/50 rounded-3xl p-8 shadow-card">
              <div className="w-16 h-16 bg-brand-light rounded-3xl flex items-center justify-center mb-6">
                <Send className="h-8 w-8 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">Send us a Message</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Have a specific question or want to partner with us? Use our contact form to reach out directly to our team.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-foreground">Partnership inquiries</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-foreground">Media & press requests</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-foreground">Technical support</span>
                </div>
              </div>
              
              <Button
                onClick={() => window.open(googleFormLink, '_blank')}
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-6 py-3 rounded-2xl w-full transition-brand"
              >
                <Send className="h-5 w-5 mr-2" />
                Open Contact Form
              </Button>
            </div>
          </div>

          {/* Direct Email */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-brand-light to-brand-primary/10 border border-primary/20 rounded-3xl p-8 max-w-4xl mx-auto">
              <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Reach Out to Our Founders
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                For important inquiries, partnership discussions, or media requests, you can contact our founders directly via email.
              </p>
              <div className="flex items-center justify-center gap-2 text-lg">
                <Mail className="h-5 w-5 text-primary" />
                <a 
                  href={`mailto:${foundersEmail}`}
                  className="text-primary hover:text-primary-hover font-semibold transition-brand"
                >
                  {foundersEmail}
                </a>
              </div>
            </div>
          </div>

          {/* Response Time */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 bg-muted px-4 py-2 rounded-full text-muted-foreground text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              We typically respond within 24 hours
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;