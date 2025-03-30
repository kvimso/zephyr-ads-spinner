
import React from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, Play, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero-gradient text-white py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-4">
              <Sparkles className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Powered by Georgian AI "Ertaoza"</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              AI Marketing for Georgian Businesses
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/80 max-w-xl">
              Zephyr automates your ad campaigns on Facebook, Instagram, and Google Ads with AI that understands Georgian language and culture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Start Free Trial
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/20 transition-colors duration-300"
              >
                <Play className="mr-2 h-4 w-4" /> Watch Demo
              </Button>
              <Button 
                as={Link}
                to="/chat"
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/20 transition-colors duration-300"
              >
                <MessageCircle className="mr-2 h-4 w-4" /> Chat with AI
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-full max-w-md animate-float relative">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-2xl border border-white/20">
                <div className="h-[300px] bg-white/5 rounded-lg flex flex-col items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/40 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                        <Sparkles className="text-white h-5 w-5" />
                      </div>
                    </div>
                  </div>
                  <div className="w-3/4 h-6 bg-white/10 rounded-full mb-3"></div>
                  <div className="w-1/2 h-4 bg-white/10 rounded-full"></div>
                  <div className="mt-8 grid grid-cols-3 gap-3 w-3/4">
                    <div className="h-10 bg-white/10 rounded-lg"></div>
                    <div className="h-10 bg-white/10 rounded-lg"></div>
                    <div className="h-10 bg-primary/30 rounded-lg"></div>
                  </div>
                </div>
              </div>
              {/* Floating elements for decoration */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-secondary rounded-lg rotate-12 opacity-70"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-primary/60 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
