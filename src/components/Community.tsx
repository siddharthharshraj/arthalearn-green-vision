import { MessageCircle, Users, Star, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Community = () => {
  const whatsappLink = "https://chat.whatsapp.com/Fsac0NGs4w9LW9oPLmrfou";

  const communityStats = [
    {
      icon: Users,
      value: "10,000+",
      label: "Active Members",
      description: "Growing community of learners"
    },
    {
      icon: MessageCircle,
      value: "50+",
      label: "Daily Discussions",
      description: "Engaging financial conversations"
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Member Rating",
      description: "Highly valued content"
    },
    {
      icon: TrendingUp,
      value: "95%",
      label: "Success Rate",
      description: "Members improving finances"
    }
  ];

  const benefits = [
    "Daily market updates and analysis",
    "Expert-curated financial tips",
    "Peer-to-peer learning and support",
    "Exclusive webinars and workshops",
    "Direct access to financial mentors",
    "Real-time Q&A with experts"
  ];

  return (
    <section id="community" className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Join India's Largest Financial Learning
              <span className="block text-primary-foreground/80">Community</span>
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
              Connect with thousands of like-minded individuals who are serious about building their financial knowledge and securing their financial future.
            </p>
          </div>

          {/* Main CTA Card */}
          <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-3xl p-8 sm:p-12 text-center mb-16">
            <div className="w-20 h-20 bg-primary-foreground/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="h-10 w-10 text-primary-foreground" />
            </div>
            
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Transform Your Financial Journey?
            </h3>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join our WhatsApp community today and get instant access to daily market insights, expert tips, and a supportive community of financial learners.
            </p>
            
            <Button
              onClick={() => window.open(whatsappLink, '_blank')}
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold px-10 py-4 rounded-2xl text-lg shadow-glow btn-glow transition-brand inline-flex items-center gap-3"
            >
              <MessageCircle className="h-5 w-5" />
              Join WhatsApp Group Now
            </Button>
            
            <div className="mt-6 text-sm text-primary-foreground/70">
              🔒 Your privacy is protected • 100% Free • Leave anytime
            </div>
          </div>

          {/* Community Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {communityStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary-foreground/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="font-medium mb-1">{stat.label}</div>
                  <div className="text-sm text-primary-foreground/80">{stat.description}</div>
                </div>
              );
            })}
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-2xl font-bold mb-6">What You'll Get:</h4>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary-foreground/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                    </div>
                    <span className="text-primary-foreground/90">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-primary-foreground/5 rounded-3xl p-6 border border-primary-foreground/10">
              <h4 className="text-xl font-bold mb-4">Recent Community Highlight</h4>
              <div className="bg-primary-foreground/10 rounded-2xl p-4 mb-4">
                <p className="text-sm text-primary-foreground/90 italic">
                  "The daily market updates have helped me understand investment patterns better. Made my first profitable trade last week!"
                </p>
                <div className="mt-2 text-xs text-primary-foreground/70">- Rohit S., Mumbai</div>
              </div>
              <div className="bg-primary-foreground/10 rounded-2xl p-4">
                <p className="text-sm text-primary-foreground/90 italic">
                  "Finally found a community that explains finance in simple Hindi and English. Game changer for me!"
                </p>
                <div className="mt-2 text-xs text-primary-foreground/70">- Priya K., Delhi</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;