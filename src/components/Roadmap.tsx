import { Play, Rocket, Users, CheckCircle } from 'lucide-react';

const Roadmap = () => {
  const roadmapItems = [
    {
      icon: Play,
      title: "Restarting",
      description: "Resuming community activities with enhanced content and fresh perspectives",
      status: "current",
      timeline: "Q1 2025",
      features: [
        "Daily market insights resume",
        "Enhanced community engagement",
        "Fresh educational content",
        "Improved user experience"
      ]
    },
    {
      icon: Rocket,
      title: "Beta Launch",
      description: "Launching our first set of digital products for community testing and feedback",
      status: "upcoming",
      timeline: "Q2-Q3 2025",
      features: [
        "Learning Hub beta release",
        "Market analysis tools",
        "Mobile app launch",
        "Community feedback integration"
      ]
    },
    {
      icon: Users,
      title: "Community Programs",
      description: "Scaling our impact through structured programs and partnerships",
      status: "planned",
      timeline: "Q4 2025",
      features: [
        "Campus partnerships",
        "Corporate workshops",
        "Mentorship programs",
        "Regional expansion"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-gradient">Roadmap</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A clear vision of how we're building India's most comprehensive financial literacy ecosystem, step by step.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-primary h-full rounded-full hidden lg:block"></div>

            {/* Roadmap Items */}
            <div className="space-y-16">
              {roadmapItems.map((item, index) => {
                const Icon = item.icon;
                const isLeft = index % 2 === 0;
                
                return (
                  <div key={index} className={`flex items-center justify-center ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    {/* Timeline Node */}
                    <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-primary rounded-full items-center justify-center shadow-glow z-10">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>

                    {/* Content Card */}
                    <div className={`w-full lg:w-5/12 ${isLeft ? 'lg:mr-8' : 'lg:ml-8'}`}>
                      <div className={`bg-card rounded-3xl p-8 shadow-card hover:shadow-glow transition-brand border border-border/50 ${item.status === 'current' ? 'ring-2 ring-primary/20' : ''}`}>
                        {/* Status Badge */}
                        <div className="flex items-center justify-between mb-4">
                          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${
                            item.status === 'current' ? 'bg-primary/10 text-primary' :
                            item.status === 'upcoming' ? 'bg-brand-light text-primary' :
                            'bg-muted text-muted-foreground'
                          }`}>
                            {item.status === 'current' ? <CheckCircle className="h-3 w-3" /> : null}
                            {item.status === 'current' ? 'In Progress' : 
                             item.status === 'upcoming' ? 'Coming Soon' : 'Planned'}
                          </div>
                          <span className="text-sm font-medium text-muted-foreground">{item.timeline}</span>
                        </div>

                        {/* Mobile Icon */}
                        <div className="lg:hidden w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4">
                          <Icon className="h-6 w-6 text-primary-foreground" />
                        </div>

                        {/* Title & Description */}
                        <h3 className="text-2xl font-bold text-foreground mb-3">{item.title}</h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">{item.description}</p>

                        {/* Features */}
                        <div className="space-y-2">
                          {item.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-3">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                              <span className="text-sm text-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-br from-brand-light to-brand-primary/10 rounded-3xl p-8 border border-primary/20">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Be Part of Our Journey
              </h3>
              <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
                Join our community today to get exclusive updates on our progress and be among the first to access new features as we build them.
              </p>
              <button
                onClick={() => window.open("https://chat.whatsapp.com/Fsac0NGs4w9LW9oPLmrfou", '_blank')}
                className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold px-8 py-3 rounded-2xl transition-brand shadow-brand"
              >
                Follow Our Progress
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;