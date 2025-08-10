import { Mail, Heart } from 'lucide-react';

const FoundersNote = () => {
  const foundersEmail = "founders@arthalearn.com";

  return (
    <section id="founders-note" className="py-20 bg-brand-light/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              A Note from Our <span className="text-gradient">Founders</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          {/* Letter Content */}
          <div className="bg-card shadow-card rounded-3xl p-8 sm:p-12 border border-border/50">
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed mb-6">
                <strong className="text-primary">Dear Arthalearn Family,</strong>
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                We hope this message finds you well.
                First and foremost, we want to express our heartfelt gratitude to each one of you for being a part of this journey and for your continued love and support.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                We sincerely apologise for our recent absence. Due to some unavoidable commitments, we couldn't be as present as we wanted to be. However, please know that our dedication to this community has never wavered.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                We are excited to share that we will be restarting soon, with renewed energy, fresh ideas, lots more market updates and an even stronger commitment to our shared goal of financial learning for all. Together, we will make Arthalearn a better, more impactful space for everyone.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Your encouragement and messages have meant the world to us, and we are committed to delivering on the trust you have placed in us.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Stay tuned — the best is yet to come! 🫱🏻‍🫲🏻🫶🏻
              </p>

              <div className="border-t border-border/50 pt-8">
                <p className="text-foreground font-medium mb-4">
                  Warm regards,
                  <br />
                  <span className="text-gradient font-bold">Team Arthalearn</span>
                </p>

                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-5 w-5 text-primary" />
                  <a 
                    href={`mailto:${foundersEmail}`}
                    className="hover:text-primary transition-brand font-medium"
                  >
                    {foundersEmail}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Community Response */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-primary p-8 rounded-3xl shadow-glow">
              <Heart className="h-12 w-12 text-primary-foreground mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                We're Excited for What's Coming!
              </h3>
              <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                Join our community to be the first to know when we restart and to show your continued support for the ARTHALEARN mission.
              </p>
              <button
                onClick={() => window.open("https://chat.whatsapp.com/Fsac0NGs4w9LW9oPLmrfou", '_blank')}
                className="bg-primary-foreground text-primary font-semibold px-8 py-3 rounded-2xl hover:bg-primary-foreground/90 transition-brand shadow-brand"
              >
                Stay Connected with Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersNote;