
import React from 'react';
import { Zap, Globe, Clock, PieChart, Languages, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <Languages className="h-10 w-10 text-primary" />,
    title: "Georgian Language Support",
    description: "Fully supports Georgian language with Ertaoza AI integration, understanding local market nuances and cultural context."
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "AI-Powered Automation",
    description: "Automatically creates and optimizes ad campaigns based on your business and target audience."
  },
  {
    icon: <PieChart className="h-10 w-10 text-primary" />,
    title: "Budget Optimization",
    description: "Intelligently allocates your budget to the best performing ads, maximizing your return on investment."
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: "Multi-Platform Support",
    description: "Run campaigns across Facebook, Instagram, and Google Ads from a single dashboard."
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "Time-Saving",
    description: "Set up complete ad campaigns in minutes instead of hours with our intuitive interface."
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: "No Technical Skills Required",
    description: "User-friendly interface designed for small business owners, not marketing experts."
  }
];

const Features = () => {
  return (
    <div id="features" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Zephyr AI?</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our AI marketing platform is specially designed for Georgian businesses, with features that make digital advertising simple and effective.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card bg-card p-8 rounded-xl border hover:border-primary"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
