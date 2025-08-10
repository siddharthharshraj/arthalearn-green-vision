import { Lightbulb, BarChart3, GraduationCap, Clock } from 'lucide-react';

const Products = () => {
  const products = [
    {
      icon: Lightbulb,
      title: "Learning Hub",
      description: "Interactive courses and modules covering everything from basic financial concepts to advanced investment strategies.",
      status: "Coming Q2 2025",
      features: ["Video Lessons", "Interactive Quizzes", "Progress Tracking", "Certificates"]
    },
    {
      icon: BarChart3,
      title: "Market Literacy Tools",
      description: "Real-time market analysis, portfolio trackers, and AI-powered insights to help you make informed decisions.",
      status: "Coming Q3 2025", 
      features: ["Live Market Data", "Portfolio Analysis", "Risk Assessment", "AI Recommendations"]
    },
    {
      icon: GraduationCap,
      title: "Campus Programs",
      description: "Financial literacy workshops and seminars designed specifically for colleges and educational institutions.",
      status: "Pilot Phase",
      features: ["Workshop Series", "Student Resources", "Faculty Training", "Campus Partnerships"]
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-light px-4 py-2 rounded-full text-primary font-medium mb-4">
            <Clock className="h-4 w-4" />
            Coming Soon
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-gradient">Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Revolutionary tools and platforms designed to make financial education accessible, engaging, and effective for every Indian.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <div 
                key={index}
                className="bg-card border border-border rounded-3xl p-8 hover:shadow-card transition-brand group relative overflow-hidden"
              >
                {/* Status Badge */}
                <div className="absolute top-4 right-4 bg-brand-light text-primary text-xs font-medium px-3 py-1 rounded-full">
                  {product.status}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 bg-brand-light rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-brand">
                  <Icon className="h-7 w-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {product.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Progress Indicator */}
                <div className="mt-6 pt-6 border-t border-border/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-muted-foreground">Development Progress</span>
                    <span className="text-xs font-medium text-primary">
                      {index === 0 ? "60%" : index === 1 ? "40%" : "80%"}
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-gradient-primary h-2 rounded-full transition-brand"
                      style={{ width: index === 0 ? "60%" : index === 1 ? "40%" : "80%" }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Early Access CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-brand-light to-brand-primary/10 border border-primary/20 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Be the First to Experience Our Products
            </h3>
            <p className="text-muted-foreground text-lg mb-6">
              Join our community today to get early access, beta testing opportunities, and exclusive updates on our development progress.
            </p>
            <button
              onClick={() => window.open("https://chat.whatsapp.com/Fsac0NGs4w9LW9oPLmrfou", '_blank')}
              className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold px-8 py-3 rounded-2xl transition-brand shadow-brand"
            >
              Join WhatsApp Community
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;