
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Language = 'en' | 'ka';

interface LanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
  const [language, setLanguage] = useState<Language>('en');
  
  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    // In a real app, this would trigger language context changes
    console.log(`Language changed to ${lang}`);
  };
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className={`flex items-center gap-1 ${className}`}>
          <Globe className="h-4 w-4" />
          <span>{language === 'en' ? 'EN' : 'ქარ'}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleLanguageChange('en')}>
          🇬🇧 English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange('ka')}>
          🇬🇪 ქართული
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
