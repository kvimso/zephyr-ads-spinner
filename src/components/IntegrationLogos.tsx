
import React from 'react';

const platforms = [
  {
    name: 'Facebook',
    logo: '/facebook.svg',
    color: '#1877F2',
    icon: (
      <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path fill="#1877F2" d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" />
      </svg>
    )
  },
  {
    name: 'Instagram',
    logo: '/instagram.svg',
    color: '#E4405F',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    )
  },
  {
    name: 'Google',
    logo: '/google.svg',
    color: '#4285F4',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
      </svg>
    )
  },
  {
    name: 'TikTok',
    logo: '/tiktok.svg',
    color: '#000000',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
        <path d="M9 8V4"></path>
        <path d="M9 12h10l-3-3"></path>
        <path d="M13 20a8 8 0 0 0 8-8V5"></path>
      </svg>
    )
  }
];

interface IntegrationLogosProps {
  className?: string;
}

const IntegrationLogos = ({ className = '' }: IntegrationLogosProps) => {
  return (
    <div className={`py-10 ${className}`}>
      <h3 className="text-xl font-semibold text-center mb-6">Integrated Platforms</h3>
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
        {platforms.map((platform) => (
          <div 
            key={platform.name} 
            className="flex flex-col items-center gap-2 transition-transform hover:scale-110 duration-300"
          >
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center shadow-md"
              style={{ 
                backgroundColor: `${platform.color}15`,
                border: `2px solid ${platform.color}30`
              }}
            >
              <div className="text-foreground">
                {platform.icon}
              </div>
            </div>
            <span className="text-sm font-medium">{platform.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntegrationLogos;
