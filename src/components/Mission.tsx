import { BookOpen, Code, TrendingUp } from 'lucide-react';

const Mission = () => {
  const pillars = [
    {
      icon: BookOpen,
      title: "Learn Confidently",
      description: "Master financial concepts through simplified learning experiences designed for every Indian.",
      features: ["Market Basics", "Investment Strategies", "Risk Management", "Financial Planning"]
    },
    {
      icon: Code,
      title: "Build With Technology",
      description: "Leverage cutting-edge tech solutions to make financial education accessible and engaging.",
      features: ["Interactive Tools", "AI-Powered Insights", "Mobile-First Design", "Real-time Data"]
    },
    {
      icon: TrendingUp,
      title: "Contribute to the Economy",
      description: "Empower millions to make informed financial decisions that strengthen India's economic foundation.",
      features: ["Economic Growth", "Financial Inclusion", "Wealth Creation", "Informed Citizens"]
    }
  ];

  return (
    <section id="mission" className="py-20 bg-gradient-to-b from-background to-brand-light/20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-gradient">Mission</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building a financially literate India through three core pillars that drive sustainable economic growth.
          </p>
        </div>

        {/* Mission Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={index}
                className="bg-card rounded-3xl p-8 shadow-card hover:shadow-glow transition-brand group hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-brand">
                  <Icon className="h-8 w-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {pillar.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {pillar.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm font-medium text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary p-8 rounded-3xl shadow-glow max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">
              Ready to Transform India's Financial Future?
            </h3>
            <p className="text-primary-foreground/90 text-lg mb-6">
              Join thousands of Indians who are already building their financial knowledge with ARTHALEARN.
            </p>
            <button
              onClick={() => window.open("https://chat.whatsapp.com/Fsac0NGs4w9LW9oPLmrfou", '_blank')}
              className="bg-primary-foreground text-primary font-semibold px-8 py-3 rounded-2xl hover:bg-primary-foreground/90 transition-brand shadow-brand"
            >
              Join Our Community
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;