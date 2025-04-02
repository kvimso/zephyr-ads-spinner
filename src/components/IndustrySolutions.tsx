
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, ShoppingCart, Camera, Users, Globe, Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';

const industries = [
  {
    icon: <Building className="h-10 w-10 text-primary" />,
    title: "Real Estate",
    description: "AI-powered marketing campaigns for property listings, virtual tours, and targeted buyer outreach in Georgian."
  },
  {
    icon: <ShoppingCart className="h-10 w-10 text-primary" />,
    title: "E-Commerce",
    description: "Automated product promotions, seasonal campaigns, and personalized shopping recommendations for Georgian customers."
  },
  {
    icon: <Camera className="h-10 w-10 text-primary" />,
    title: "Tourism",
    description: "Multi-language campaigns highlighting Georgian destinations, experiences, and accommodations to international travelers."
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Hospitality",
    description: "Targeted promotions for restaurants, hotels, and entertainment venues that understand local Georgian preferences."
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: "Tech Startups",
    description: "Growth-focused campaigns to help Georgian tech companies reach new users and investors with AI precision."
  },
  {
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    title: "Professional Services",
    description: "Specialized marketing for lawyers, accountants, and consultants that speaks to Georgian business culture."
  }
];

const IndustrySolutions = () => {
  return (
    <section id="industries" className="py-16 px-4 md:px-6 w-full section bg-muted/40">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight section-title mb-4">Industry-Specific Solutions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our AI marketing platform is tailored for various Georgian business sectors, with specialized features for each industry's unique needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-animation">
          {industries.map((industry, index) => (
            <Card 
              key={index} 
              className={cn(
                "feature-card h-full border-muted-foreground/20 shadow-sm hover:shadow-md animate-fade-in opacity-0", 
                index % 2 === 0 ? "animate-slide-in-left" : "animate-slide-in-right"
              )}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <CardHeader className="pb-2">
                <div className="mb-4">{industry.icon}</div>
                <CardTitle className="text-xl">{industry.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-muted-foreground">
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
