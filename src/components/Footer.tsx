
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t py-8">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-3">
              <div className="font-bold text-lg text-primary">Zephyr</div>
              <span className="text-xs bg-secondary text-white px-1.5 py-0.5 rounded-full">AI</span>
            </div>
            <p className="text-muted-foreground text-xs mb-3 max-w-md">
              AI-powered marketing platform for Georgian businesses. Automate your ads on Facebook, Instagram, and Google with Georgian language support.
            </p>
            <div className="text-xs text-muted-foreground">
              In partnership with Georgian AI "Ertaoza"
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-3">Platform</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="#about" className="text-xs text-muted-foreground hover:text-foreground transition-colors">About</a></li>
              <li><a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Testimonials</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-3">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-6 pt-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-xs text-muted-foreground mb-3 md:mb-0">
            © {currentYear} Zephyr AI. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
