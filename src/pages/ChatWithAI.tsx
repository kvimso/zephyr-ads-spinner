
import React, { useState, useRef, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Sparkles, ArrowLeft, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Link } from 'react-router-dom';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

// Sample AI responses based on business plan keywords
const aiResponses = [
  {
    keywords: ['budget', 'cost', 'price', 'money', 'investment', 'funding'],
    response: "I see you're concerned about budget. Zephyr AI offers affordable plans starting at just 19 GEL per month, making professional marketing accessible to small businesses. Our AI optimizes your ad spend to ensure maximum ROI."
  },
  {
    keywords: ['georgian', 'language', 'local', 'market', 'georgia', 'tbilisi', 'batumi'],
    response: "As a marketing platform designed specifically for the Georgian market, we understand local business needs. Our partnership with Georgian AI 'Ertaoza' provides complete Georgian language support and understanding of local market dynamics."
  },
  {
    keywords: ['time', 'busy', 'quick', 'fast', 'efficient'],
    response: "I understand time is valuable for business owners. Zephyr automates your marketing efforts, creating and optimizing campaigns in minutes rather than hours. You can focus on running your business while we handle your marketing."
  },
  {
    keywords: ['competition', 'competitors', 'market', 'advantage'],
    response: "What sets Zephyr apart is our focus on the Georgian market and local language support. Unlike international platforms, we've built our AI to understand Georgian consumer behavior and local business needs."
  },
  {
    keywords: ['how', 'work', 'use', 'platform', 'function'],
    response: "Zephyr works by connecting to your business website or social media, analyzing your business profile, and automatically creating optimized ad campaigns for Facebook, Instagram, and Google Ads. Our AI continuously monitors performance and reallocates your budget to the best-performing ads."
  }
];

// Default welcome message
const welcomeMessage = "გამარჯობა! 👋 I'm Zephyr AI, your Georgian marketing assistant. You can share your business plan or goals with me, and I'll provide insights on how our AI marketing platform can help you achieve them. How can I assist you today?";

const ChatWithAI = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: welcomeMessage,
      timestamp: new Date()
    }
  ]);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Function to find the most relevant response
  const getAIResponse = (userMessage: string) => {
    const lowercaseMessage = userMessage.toLowerCase();
    
    // Find the response with the most keyword matches
    let bestResponse = {
      response: "Thank you for sharing that information. Zephyr AI can help optimize your marketing efforts with our automated platform. Would you like to know more about specific features or pricing options?",
      matchCount: 0
    };
    
    aiResponses.forEach(response => {
      const matchCount = response.keywords.filter(keyword => 
        lowercaseMessage.includes(keyword.toLowerCase())
      ).length;
      
      if (matchCount > bestResponse.matchCount) {
        bestResponse = {
          response: response.response,
          matchCount
        };
      }
    });
    
    return bestResponse.response;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (message.trim()) {
      // Add user message
      const userMessage = {
        id: Date.now().toString(),
        type: 'user' as const,
        content: message,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, userMessage]);
      setMessage('');
      setIsLoading(true);
      
      // Simulate AI thinking
      setTimeout(() => {
        const aiResponse = {
          id: (Date.now() + 1).toString(),
          type: 'ai' as const,
          content: getAIResponse(userMessage.content),
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, aiResponse]);
        setIsLoading(false);
        
        toast({
          title: "New message from Zephyr AI",
          description: "Check out the response to your question!",
          duration: 3000
        });
      }, 1500);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as unknown as React.FormEvent);
    }
  };

  // Scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 container py-4 px-4 md:px-6 max-w-4xl mx-auto flex flex-col">
        <div className="mb-4 flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back to Home</span>
            </Link>
          </Button>
          <div className="flex items-center gap-2">
            <div className="bg-primary/10 p-1 rounded-full">
              <Sparkles className="h-5 w-5 text-primary" />
            </div>
            <h1 className="text-xl font-bold">Chat with Zephyr AI</h1>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto mb-4 space-y-4">
          {messages.map(message => (
            <div
              key={message.id}
              className={`flex w-full gap-3 p-4 rounded-lg mb-4 ${
                message.type === 'user' ? "bg-muted/50 ml-auto" : "bg-primary/10"
              }`}
              style={{ maxWidth: '85%', [message.type === 'user' ? 'marginLeft' : 'marginRight']: 'auto' }}
            >
              <div className="flex-shrink-0 mt-1">
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.type === 'user' ? "bg-secondary/30" : "bg-primary/30"
                  }`}
                >
                  {message.type === 'user' ? (
                    <div className="h-4 w-4">👤</div>
                  ) : (
                    <Sparkles className="h-4 w-4" />
                  )}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-baseline mb-1">
                  <p className="font-medium">
                    {message.type === 'user' ? 'You' : 'Zephyr AI'}
                  </p>
                  <span className="text-xs text-muted-foreground">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
                <div className="whitespace-pre-wrap">{message.content}</div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        
        <form onSubmit={handleSubmit} className="border-t p-4 bg-background">
          <div className="flex items-end gap-2">
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Share your business plan or ask a question..."
              className="min-h-[80px] resize-none"
              disabled={isLoading}
            />
            <Button 
              type="submit" 
              size="icon" 
              className="flex-shrink-0 h-10"
              disabled={!message.trim() || isLoading}
            >
              <Send className="h-4 w-4" />
              <span className="sr-only">Send message</span>
            </Button>
          </div>
        </form>
      </main>
      
      <Footer />
    </div>
  );
};

export default ChatWithAI;
