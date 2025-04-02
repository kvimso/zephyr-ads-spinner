
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, ShoppingCart, Camera, Users, Globe, Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';

const industries = [
  {
    icon: <Building className="h-8 w-8 text-primary" />,
    title: "Real Estate",
    description: "AI-powered marketing campaigns for property listings in Georgian."
  },
  {
    icon: <ShoppingCart className="h-8 w-8 text-primary" />,
    title: "E-Commerce",
    description: "Automated product promotions and personalized shopping recommendations."
  },
  {
    icon: <Camera className="h-8 w-8 text-primary" />,
    title: "Tourism",
    description: "Multi-language campaigns highlighting Georgian destinations to travelers."
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Hospitality",
    description: "Targeted promotions for restaurants and hotels with local preferences."
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: "Tech Startups",
    description: "Growth-focused campaigns to help Georgian tech companies reach new users."
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: "Professional Services",
    description: "Specialized marketing for lawyers and consultants in Georgian business culture."
  }
];

const IndustrySolutions = () => {
  return (
    <section id="industries" className="py-12 px-4 md:px-6 w-full section bg-muted/30">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold tracking-tight section-title mb-3">Industry-Specific Solutions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
            Our AI marketing platform is tailored for various Georgian business sectors, with specialized features for each industry's unique needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 stagger-animation">
          {industries.map((industry, index) => (
            <Card 
              key={index} 
              className="feature-card border-muted-foreground/20 shadow-sm hover:shadow-md animate-fade-in opacity-0"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <CardHeader className="pb-2 space-y-0">
                <div className="mb-2">{industry.icon}</div>
                <CardTitle className="text-lg">{industry.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-xs text-muted-foreground">
                  {industry.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySolutions;
