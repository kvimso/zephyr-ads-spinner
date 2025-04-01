
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <div className="py-20 hero-gradient text-white">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Ready to Transform Your Marketing?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-white/80 animate-fade-in" style={{animationDelay: "0.1s"}}>
          Join hundreds of Georgian businesses already using Zephyr AI to automate and optimize their advertising campaigns.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center stagger-animation">
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 animate-fade-in">
            Start Your Free Trial
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-white text-primary hover:bg-white/90 hover:text-red animate-fade-in"
          >
            <Play className="mr-2 h-4 w-4" /> Schedule a Demo
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-white text-primary hover:bg-white/90 hover:text-red animate-fade-in"
            asChild
          >
            <Link to="/chat-with-ai">Chat with AI</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
