import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Mission from '@/components/Mission';
import Products from '@/components/Products';
import Community from '@/components/Community';
import FoundersNote from '@/components/FoundersNote';
import Roadmap from '@/components/Roadmap';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // JSON-LD structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "ARTHALEARN",
      "description": "ARTHALEARN is on a mission to make India financially literate and build tech products that boost the economy.",
      "url": "https://arthalearn.com",
      "logo": "https://arthalearn.com/logo.png",
      "sameAs": [
        "https://chat.whatsapp.com/Fsac0NGs4w9LW9oPLmrfou"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-XXX-XXX-XXXX",
        "contactType": "Customer Service",
        "availableLanguage": ["English", "Hindi"]
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      },
      "founder": {
        "@type": "Person",
        "name": "ARTHALEARN Founders"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Financial Literacy Services",
        "itemListElement": [
          {
            "@type": "Service",
            "name": "Community Learning Hub",
            "description": "Daily market insights and financial education for the community"
          },
          {
            "@type": "Service", 
            "name": "Market Analysis Tools",
            "description": "Digital tools for understanding financial markets"
          },
          {
            "@type": "Service",
            "name": "Campus Programs", 
            "description": "Financial literacy programs for educational institutions"
          }
        ]
      },
      "knowsAbout": [
        "Financial Literacy",
        "Indian Economy",
        "Market Education", 
        "Community Learning",
        "Educational Technology"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background font-brand">
      <Header />
      <main>
        <Hero />
        <Mission />
        <Products />
        <Community />
        <FoundersNote />
        <Roadmap />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
