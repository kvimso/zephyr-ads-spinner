
import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  return (
    <nav className="w-full py-3 bg-background border-b sticky top-0 z-50 shadow-sm">
      <div className="container flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link to="/" className="font-bold text-xl text-primary hover:opacity-90 transition-opacity">Zephyr</Link>
          <span className="text-xs bg-secondary text-white px-1.5 py-0.5 rounded-full">AI</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#features" className="text-foreground hover:text-primary transition-colors text-sm">
            Features
          </a>
          <a href="#industries" className="text-foreground hover:text-primary transition-colors text-sm">
            Industries
          </a>
          <a href="#pricing" className="text-foreground hover:text-primary transition-colors text-sm">
            Pricing
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors text-sm">
            About
          </a>
          <LanguageSwitcher />
          <Button variant="ghost" size="sm">Login</Button>
          <Button size="sm">Get Started</Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <LanguageSwitcher className="mr-2" />
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu />
          </Button>
          
          {isMenuOpen && (
            <div className="absolute top-full right-4 z-10 bg-background shadow-lg rounded-lg p-4 flex flex-col space-y-3 min-w-[200px] border mt-1">
              <a 
                href="#features" 
                className="text-foreground hover:text-primary transition-colors text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#industries" 
                className="text-foreground hover:text-primary transition-colors text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Industries
              </a>
              <a 
                href="#pricing" 
                className="text-foreground hover:text-primary transition-colors text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="#about" 
                className="text-foreground hover:text-primary transition-colors text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <Button variant="ghost" size="sm">Login</Button>
              <Button size="sm">Get Started</Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
