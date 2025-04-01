
import React from 'react';
import IntegrationLogos from '@/components/IntegrationLogos';

const IntegrationLogosSection = () => {
  return (
    <div className="py-12 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Seamless Integrations</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Zephyr AI connects with all major advertising platforms to optimize your marketing efforts.
          </p>
        </div>
        
        <IntegrationLogos className="animate-fade-in" />
      </div>
    </div>
  );
};

export default IntegrationLogosSection;
