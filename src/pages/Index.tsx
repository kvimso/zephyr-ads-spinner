
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';
import AIDemoSection from '@/components/AIDemoSection';
import IntegrationLogosSection from '@/components/IntegrationLogosSection';
import AboutSection from '@/components/AboutSection';
import CtaSection from '@/components/CtaSection';
import ChatWidget from '@/components/ChatWidget';
import IndustrySolutions from '@/components/IndustrySolutions';

const Index = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  useEffect(() => {
    // Add smooth scrolling to all links with hash
    const handleNavClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.hash && link.hash.startsWith('#')) {
        event.preventDefault();
        const targetElement = document.querySelector(link.hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
          
          // Update URL without page reload
          window.history.pushState(null, '', link.hash);
        }
      }
    };

    document.addEventListener('click', handleNavClick);
    
    return () => {
      document.removeEventListener('click', handleNavClick);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <AIDemoSection scrollToPricing={scrollToPricing} />
      <Features />
      <div className="container px-4 md:px-6 py-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Explore Our Industry Solutions</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          See a preview of our industry-specific solutions below, or visit our dedicated industries page for more details.
        </p>
        <IndustrySolutions />
      </div>
      <IntegrationLogosSection />
      <AboutSection />
      <Pricing />
      <CtaSection />
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
