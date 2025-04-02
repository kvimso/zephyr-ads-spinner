
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const pricingPlans = [
  {
    name: "Starter",
    price: "19",
    description: "Perfect for small businesses just getting started with online advertising.",
    features: [
      "Basic AI ad creation",
      "Facebook & Instagram integration",
      "Georgian language support",
      "Monthly performance report",
      "Up to 3 campaigns",
      "Email support"
    ],
    highlighted: false,
    buttonText: "Start Free Trial"
  },
  {
    name: "Professional",
    price: "59",
    description: "For growing businesses ready to expand their online presence.",
    features: [
      "Advanced AI ad creation & optimization",
      "Facebook, Instagram & Google Ads",
      "Full Georgian language support",
      "Weekly performance reports",
      "Up to 10 campaigns",
      "Priority email & chat support",
      "Audience targeting recommendations",
      "A/B testing capabilities"
    ],
    highlighted: true,
    buttonText: "Get Started"
  },
  {
    name: "Enterprise",
    price: "149",
    description: "Complete solution for established businesses with larger advertising needs.",
    features: [
      "Premium AI ad creation & optimization",
      "All platforms + TikTok integration",
      "Custom Georgian copywriting",
      "Real-time performance dashboard",
      "Unlimited campaigns",
      "24/7 dedicated support",
      "Custom audience creation",
      "Advanced analytics & reporting",
      "Competitor analysis",
      "Strategic marketing consultations"
    ],
    highlighted: false,
    buttonText: "Contact Sales"
  }
];

const Pricing = () => {
  return (
    <div id="pricing" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that fits your business needs. All plans include a 14-day free trial.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-card p-8 rounded-xl border ${
                plan.highlighted ? 'border-primary shadow-lg ring-2 ring-primary/20' : 'border-muted-foreground/20'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <div className="text-lg font-medium mb-2">{plan.name}</div>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-lg ml-1 text-muted-foreground">GEL/month</span>
              </div>
              <p className="text-muted-foreground mb-6">{plan.description}</p>
              <Button 
                className={`w-full mb-8 ${plan.highlighted ? 'bg-primary hover:bg-primary/90' : ''}`}
                variant={plan.highlighted ? "default" : "outline"}
              >
                {plan.buttonText}
              </Button>
              <div className="space-y-3">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/pricing">
            <Button variant="outline" size="lg">View Full Pricing Details</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
