
import React, { useState, useRef, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatMessage from '@/components/ChatMessage';
import ChatInput from '@/components/ChatInput';
import { Sparkles, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
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

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: welcomeMessage,
      timestamp: new Date()
    }
  ]);
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

  const handleSendMessage = (content: string) => {
    // Add user message
    const userMessage = {
      id: Date.now().toString(),
      type: 'user' as const,
      content,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    
    // Simulate AI thinking
    setTimeout(() => {
      const aiResponse = {
        id: (Date.now() + 1).toString(),
        type: 'ai' as const,
        content: getAIResponse(content),
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
            <ChatMessage
              key={message.id}
              type={message.type}
              content={message.content}
              timestamp={message.timestamp}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
        
        <ChatInput onSendMessage={handleSendMessage} disabled={isLoading} />
      </main>
      
      <Footer />
    </div>
  );
};

export default Chat;
