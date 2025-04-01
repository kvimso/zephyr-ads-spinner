
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';
import AIDemoSection from '@/components/AIDemoSection';
import IntegrationLogosSection from '@/components/IntegrationLogosSection';
import AboutSection from '@/components/AboutSection';
import CtaSection from '@/components/CtaSection';

const Index = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <AIDemoSection scrollToPricing={scrollToPricing} />
      <Features />
      <IntegrationLogosSection />
      <AboutSection />
      <Pricing />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
