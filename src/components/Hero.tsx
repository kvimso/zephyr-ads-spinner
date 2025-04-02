
import React from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, Play, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero-gradient text-white py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <div className="inline-flex items-center px-2.5 py-0.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-4">
              <Sparkles className="h-3 w-3 mr-1.5" />
              <span className="text-xs font-medium">Powered by Georgian AI "Ertaoza"</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              AI Marketing for Georgian Businesses
            </h1>
            <p className="text-base md:text-lg mb-6 text-white/80 max-w-lg">
              Automate your ad campaigns on Facebook, Instagram, and Google Ads with AI that understands Georgian language and culture.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Button size="sm" className="bg-white text-primary hover:bg-white/90">
                Start Free Trial
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="bg-white/10 text-white hover:bg-white/20"
              >
                <Play className="mr-2 h-3.5 w-3.5" /> Watch Demo
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="bg-white/10 text-white hover:bg-white/20"
                asChild
              >
                <Link to="/chat-with-ai">
                  <MessageCircle className="mr-2 h-3.5 w-3.5" /> Chat with AI
                </Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-full max-w-sm animate-float relative">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 shadow-xl border border-white/20">
                <div className="h-[250px] bg-white/5 rounded-lg flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/40 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                        <Sparkles className="text-white h-3 w-3" />
                      </div>
                    </div>
                  </div>
                  <div className="w-3/4 h-4 bg-white/10 rounded-full mb-2"></div>
                  <div className="w-1/2 h-3 bg-white/10 rounded-full"></div>
                  <div className="mt-6 grid grid-cols-3 gap-2 w-3/4">
                    <div className="h-8 bg-white/10 rounded-lg"></div>
                    <div className="h-8 bg-white/10 rounded-lg"></div>
                    <div className="h-8 bg-primary/30 rounded-lg"></div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 w-12 h-12 bg-secondary rounded-lg rotate-12 opacity-70"></div>
              <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-primary/60 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
