
import React, { useState, useRef, useEffect } from 'react';
import { X, MessageCircle, Send, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

// Sample responses from Ertaoza AI
const ertaozaResponses = [
  {
    trigger: ['hello', 'hi', 'hey', 'გამარჯობა'],
    response: "გამარჯობა! I'm Ertaoza, your Georgian AI assistant. How can I help you with your marketing needs today?"
  },
  {
    trigger: ['price', 'cost', 'pricing', 'plan'],
    response: "Our plans start at just 19 GEL per month for the Basic plan. Our Business plan is 49 GEL monthly and includes advanced analytics. Would you like to see the full pricing details?"
  },
  {
    trigger: ['feature', 'do', 'work', 'how', 'can'],
    response: "Zephyr AI helps create optimized marketing campaigns across Facebook, Instagram, and Google. We analyze your business and create tailored ad content, then continuously optimize your budget allocation. Would you like to learn about a specific feature?"
  },
  {
    trigger: ['language', 'georgian', 'english', 'ქართული'],
    response: "დიახ! Ertaoza fully supports Georgian language for all our marketing tools and analytics. We're proudly built in Georgia for Georgian businesses."
  }
];

// Get response from Ertaoza AI
const getErtaozaResponse = (message: string) => {
  const lowercaseMessage = message.toLowerCase();
  
  for (const item of ertaozaResponses) {
    if (item.trigger.some(keyword => lowercaseMessage.includes(keyword))) {
      return item.response;
    }
  }
  
  // Default response
  return "Thanks for your message. Our AI system is analyzing your request. For more detailed assistance, you can try our full version or contact our team directly. Can I help with anything specific about Zephyr AI?";
};

type Message = {
  id: string;
  type: 'user' | 'bot';
  content: string;
};

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: "გამარჯობა! 👋 I'm Ertaoza, your Georgian marketing assistant. How can I help you today?"
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now().toString(),
      type: 'user' as const,
      content: input
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    
    // Simulate AI response after a delay
    setTimeout(() => {
      const botResponse = {
        id: (Date.now() + 1).toString(),
        type: 'bot' as const,
        content: getErtaozaResponse(userMessage.content)
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <Button 
          onClick={toggleWidget}
          className="rounded-full shadow-lg h-14 w-14 p-0 flex items-center justify-center bg-primary hover:bg-primary/90"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      ) : (
        <Card className="w-80 sm:w-96 shadow-xl flex flex-col h-[460px] overflow-hidden">
          <div className="flex items-center justify-between bg-primary p-3 text-primary-foreground">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              <h3 className="font-medium">Chat with Ertaoza AI</h3>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleWidget}
              className="h-8 w-8 text-primary-foreground opacity-70 hover:opacity-100 hover:bg-primary/80"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex",
                  message.type === 'user' ? "justify-end" : "justify-start"
                )}
              >
                <div
                  className={cn(
                    "max-w-[85%] p-3 rounded-lg animate-fade-in",
                    message.type === 'user'
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  )}
                >
                  {message.content}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-muted rounded-lg p-3 flex space-x-1">
                  <span className="animate-bounce">•</span>
                  <span className="animate-bounce" style={{animationDelay: '0.2s'}}>•</span>
                  <span className="animate-bounce" style={{animationDelay: '0.4s'}}>•</span>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
          
          <div className="p-3 border-t">
            <div className="flex gap-2">
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className="min-h-[60px] resize-none"
              />
              <Button
                className="h-full"
                onClick={handleSendMessage}
                disabled={!input.trim()}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default ChatWidget;
