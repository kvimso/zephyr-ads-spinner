
import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="w-full py-4 bg-background border-b">
      <div className="container flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="font-bold text-2xl text-primary">Zephyr</div>
          <span className="text-xs bg-secondary text-white px-2 py-1 rounded-full">AI</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-foreground hover:text-primary transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-foreground hover:text-primary transition-colors">
            Pricing
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">
            About
          </a>
          <Button variant="ghost">Login</Button>
          <Button>Get Started</Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu />
          </Button>
          
          {isMenuOpen && (
            <div className="absolute top-16 right-4 z-10 bg-background shadow-lg rounded-lg p-4 flex flex-col space-y-3 min-w-[200px]">
              <a 
                href="#features" 
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#pricing" 
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="#about" 
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <Button variant="ghost">Login</Button>
              <Button>Get Started</Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
