import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is ARTHALEARN and what do you do?",
      answer: "ARTHALEARN is a financial literacy initiative dedicated to empowering every Indian with the knowledge and tools needed to make informed financial decisions. We create learning experiences, build tech products, and foster a community that contributes to India's economic growth through financial education."
    },
    {
      question: "Is joining the WhatsApp community really free?",
      answer: "Yes, absolutely! Our WhatsApp community is completely free to join and participate in. We believe financial education should be accessible to everyone, regardless of their economic background. You'll receive daily market insights, educational content, and expert guidance at no cost."
    },
    {
      question: "What kind of content can I expect in the community?",
      answer: "You'll receive daily market updates, simplified explanations of financial concepts, investment tips, economic news analysis, interactive Q&A sessions with experts, and peer discussions. All content is designed to be practical and actionable for Indian investors and learners."
    },
    {
      question: "When will your products be available?",
      answer: "We're currently developing our Learning Hub (Q2 2025), Market Literacy Tools (Q3 2025), and Campus Programs (Q4 2025). Community members get early access and beta testing opportunities. Join our WhatsApp group to stay updated on launch dates and get exclusive previews."
    },
    {
      question: "Do you provide personalized financial advice?",
      answer: "While we provide educational content and general guidance, we don't offer personalized financial advice. Our focus is on financial literacy education to help you develop the skills to make your own informed decisions. For specific advice, we recommend consulting with certified financial advisors."
    },
    {
      question: "How can I contact the founders or support team?",
      answer: "You can reach our founders directly at founders@arthalearn.com for important inquiries. For general questions and community discussions, our WhatsApp group is the best place to connect with both the team and fellow learners. We aim to respond to all messages within 24 hours."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-brand-light/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about ARTHALEARN and our mission to democratize financial education in India.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-2xl px-6 shadow-card hover:shadow-glow transition-brand"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-6 text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Still have questions CTA */}
          <div className="text-center mt-12">
            <div className="bg-gradient-primary p-8 rounded-3xl shadow-glow">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Still Have Questions?
              </h3>
              <p className="text-primary-foreground/90 mb-6 text-lg">
                Join our WhatsApp community where you can ask questions directly to our team and connect with fellow learners.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.open("https://chat.whatsapp.com/Fsac0NGs4w9LW9oPLmrfou", '_blank')}
                  className="bg-primary-foreground text-primary font-semibold px-8 py-3 rounded-2xl hover:bg-primary-foreground/90 transition-brand"
                >
                  Join WhatsApp Group
                </button>
                <button
                  onClick={() => window.open("mailto:founders@arthalearn.com", '_blank')}
                  className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8 py-3 rounded-2xl transition-brand"
                >
                  Email Founders
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;