
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { RocketIcon, Users, CheckCircle2, Award, Play } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Features />
      
      {/* About Section */}
      <div id="about" className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">AI Marketing Made for Georgia</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Zephyr is the first AI marketing platform specifically designed for Georgian businesses, with full support for the Georgian language and understanding of local market specifics.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our partnership with Georgian AI "Ertaoza" ensures that our platform truly understands the nuances of Georgian language and culture, making your marketing efforts more effective.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-2 shrink-0" />
                  <div>
                    <p className="font-medium">Saves Time</p>
                    <p className="text-sm text-muted-foreground">Create ads in minutes</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-2 shrink-0" />
                  <div>
                    <p className="font-medium">Saves Money</p>
                    <p className="text-sm text-muted-foreground">Optimize ad spend</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-2 shrink-0" />
                  <div>
                    <p className="font-medium">Georgian Support</p>
                    <p className="text-sm text-muted-foreground">Native language</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-2 shrink-0" />
                  <div>
                    <p className="font-medium">No Expertise Needed</p>
                    <p className="text-sm text-muted-foreground">User-friendly interface</p>
                  </div>
                </div>
              </div>
              <Button className="flex items-center">
                <RocketIcon className="mr-2 h-4 w-4" /> Get Started Today
              </Button>
            </div>
            <div className="md:w-1/2 relative">
              <div className="bg-card rounded-xl border p-6 shadow-lg">
                <div className="mb-6 flex justify-center">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Award className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">Trusted by Georgian Businesses</h3>
                <div className="space-y-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm italic mb-3">
                      "Zephyr has revolutionized our marketing efforts. As a small cafe in Tbilisi, we couldn't afford a marketing team, but with Zephyr we've increased our customer base by 30%."
                    </p>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Nino Kapanadze</p>
                        <p className="text-xs text-muted-foreground">Tbilisi Cafe Owner</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm italic mb-3">
                      "The Georgian language support is what makes Zephyr stand out. Our ads now truly speak to our local customers, and the results have been amazing."
                    </p>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Giorgi Maisuradze</p>
                        <p className="text-xs text-muted-foreground">Batumi Retail Store</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 h-24 w-24 bg-secondary/10 rounded-full"></div>
              <div className="absolute -bottom-6 -left-6 h-32 w-32 bg-primary/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      
      <Pricing />
      
      {/* CTA Section */}
      <div className="py-20 hero-gradient text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Marketing?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/80">
            Join hundreds of Georgian businesses already using Zephyr AI to automate and optimize their advertising campaigns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Start Your Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Play className="mr-2 h-4 w-4" /> Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
