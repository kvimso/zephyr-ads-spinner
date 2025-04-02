
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Pricing from '@/components/Pricing';
import { Button } from '@/components/ui/button';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';

const PricingPage = () => {
  const faqs = [
    {
      question: "Do you offer a free trial?",
      answer: "Yes, all our plans come with a 14-day free trial, no credit card required. You can test all features before committing."
    },
    {
      question: "Can I change plans later?",
      answer: "Absolutely! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
    },
    {
      question: "Is there a setup fee?",
      answer: "No, there are no hidden fees. The price you see is what you pay, with no additional setup or onboarding costs."
    },
    {
      question: "Do you offer custom enterprise plans?",
      answer: "Yes, we offer customized enterprise solutions for larger businesses with specific needs. Contact our sales team for details."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, wire transfers, and Georgian payment systems like TBC Pay and Bank of Georgia."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-gradient-to-b from-muted/50 to-background py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl text-muted-foreground">
              Choose the perfect plan for your business needs with no hidden fees.
            </p>
          </div>
        </div>
      </div>
      
      <Pricing />
      
      <div className="bg-background py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
            
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="mt-12 text-center">
              <h3 className="text-xl font-medium mb-4">Still have questions?</h3>
              <Button size="lg">Contact Support</Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PricingPage;
