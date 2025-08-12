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
    <section id="roadmap" className="py-12 sm:py-16 md:py-20 bg-background" role="main" aria-labelledby="roadmap-heading">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <header className="text-center mb-12 sm:mb-16">
            <h2 id="roadmap-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              Our <span className="text-gradient">Roadmap</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A clear vision of how we're building India's most comprehensive financial literacy ecosystem, step by step.
            </p>
          </header>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-primary rounded-full" aria-hidden="true"></div>

            {/* Roadmap Items */}
            <div className="space-y-8 sm:space-y-12">
              {roadmapItems.map((item, index) => {
                const Icon = item.icon;
                
                return (
                  <article key={index} className="relative flex items-start gap-6 sm:gap-8">
                    {/* Timeline Node */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                        <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary-foreground" aria-hidden="true" />
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="flex-1 pb-8">
                      <div className={`bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-card hover:shadow-glow transition-brand border border-border/50 ${item.status === 'current' ? 'ring-2 ring-primary/20' : ''}`}>
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-4">
                          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium self-start ${
                            item.status === 'current' ? 'bg-primary/10 text-primary' :
                            item.status === 'upcoming' ? 'bg-brand-light text-primary' :
                            'bg-muted text-muted-foreground'
                          }`}>
                            {item.status === 'current' && <CheckCircle className="h-3 w-3" aria-hidden="true" />}
                            <span>
                              {item.status === 'current' ? 'In Progress' : 
                               item.status === 'upcoming' ? 'Coming Soon' : 'Planned'}
                            </span>
                          </div>
                          <time className="text-sm font-medium text-muted-foreground">{item.timeline}</time>
                        </div>

                        {/* Title & Description */}
                        <div className="mb-6">
                          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">{item.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                        </div>

                        {/* Features */}
                        <ul className="space-y-3" role="list">
                          {item.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" aria-hidden="true"></div>
                              <span className="text-sm text-foreground leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
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