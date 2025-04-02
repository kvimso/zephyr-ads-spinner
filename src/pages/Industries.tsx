
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import IndustrySolutions from '@/components/IndustrySolutions';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Industries = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-gradient-to-b from-muted/50 to-background py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Industry-Specific AI Marketing Solutions</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Our AI platform is tailored to the unique needs of various industries in Georgia, delivering custom marketing solutions that work.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/#pricing">Get Started</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/chat-with-ai">
                  Chat with AI <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <IndustrySolutions />
      
      <div className="bg-muted/20 py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Industry Marketing?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join companies across Georgia who are using our AI marketing platform to reach their target audiences with precision.
            </p>
            <Button size="lg" asChild>
              <Link to="/#pricing">Start Your Free Trial</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Industries;
