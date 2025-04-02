
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
    // Improved smooth scrolling to all links with hash
    const handleNavClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.hash && link.hash.startsWith('#')) {
        event.preventDefault();
        const targetElement = document.querySelector(link.hash);
        if (targetElement) {
          // Add offset for fixed header
          const navbarHeight = 60; // Approximate height of navbar
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
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
      <IndustrySolutions />
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
