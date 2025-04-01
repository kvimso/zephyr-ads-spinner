
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import AiDemo from '@/components/AiDemo';

const AIDemoSection = ({ scrollToPricing }: { scrollToPricing: () => void }) => {
  return (
    <div className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Try Our AI Assistant</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience how our AI understands Georgian business needs. Type a question to see it in action.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-4">Intelligent Marketing Assistant</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Our AI assistant understands both Georgian and English, helping you create effective marketing campaigns tailored to your business.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-primary mr-2 shrink-0" />
                <div>
                  <p className="font-medium">Campaign Creation</p>
                  <p className="text-sm text-muted-foreground">Ask the AI to create ad campaigns</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-primary mr-2 shrink-0" />
                <div>
                  <p className="font-medium">Budget Optimization</p>
                  <p className="text-sm text-muted-foreground">Get advice on budget allocation</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-primary mr-2 shrink-0" />
                <div>
                  <p className="font-medium">Performance Analysis</p>
                  <p className="text-sm text-muted-foreground">Ask about campaign performance</p>
                </div>
              </div>
            </div>
            
            <Button className="flex items-center" onClick={scrollToPricing}>
              Try Full Version
            </Button>
          </div>
          
          <div className="lg:w-1/2 animate-slide-in-right">
            <AiDemo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIDemoSection;
