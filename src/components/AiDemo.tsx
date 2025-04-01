
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, Bot, User } from 'lucide-react';

const demoResponses = [
  {
    trigger: ['ad', 'campaign', 'marketing'],
    response: "I can create Facebook and Instagram ad campaigns optimized for Georgian audiences. Would you like to see an example?"
  },
  {
    trigger: ['budget', 'cost', 'price'],
    response: "I can help optimize your marketing budget. For example, I'd recommend allocating 60% to Facebook and 40% to Instagram based on Georgian market trends."
  },
  {
    trigger: ['hello', 'hi', 'start', 'help'],
    response: "გამარჯობა! I'm Zephyr AI. I can help you create marketing campaigns, analyze performance, and optimize your ad spend. What would you like to know?"
  }
];

const getAiResponse = (message: string) => {
  const lowerMessage = message.toLowerCase();
  
  // Find matching response
  for (const item of demoResponses) {
    if (item.trigger.some(word => lowerMessage.includes(word))) {
      return item.response;
    }
  }
  
  // Default response
  return "I understand you're interested in improving your marketing. Could you tell me more about your business goals so I can help create the perfect campaign?";
};

const AiDemo = () => {
  const [messages, setMessages] = useState<{text: string, sender: 'user' | 'ai'}[]>([
    {text: "გამარჯობა! I'm Zephyr AI. How can I help with your marketing today?", sender: 'ai'}
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, {text: input, sender: 'user'}]);
    
    // Simulate AI typing
    setIsTyping(true);
    
    // Get AI response after a delay
    setTimeout(() => {
      const response = getAiResponse(input);
      setMessages(prev => [...prev, {text: response, sender: 'ai'}]);
      setIsTyping(false);
    }, 1500);
    
    setInput('');
  };

  return (
    <div className="border rounded-xl shadow-lg bg-card overflow-hidden w-full max-w-md mx-auto">
      <div className="bg-primary/10 p-4 flex items-center gap-2 border-b">
        <Bot className="h-5 w-5 text-primary" />
        <h3 className="font-medium">Zephyr AI Demo</h3>
      </div>
      
      <div className="h-64 overflow-y-auto p-4 space-y-4">
        {messages.map((message, i) => (
          <div 
            key={i} 
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[80%] rounded-lg p-3 ${
                message.sender === 'user' 
                  ? 'bg-primary text-primary-foreground ml-auto' 
                  : 'bg-muted'
              } animate-fade-in`}
            >
              {message.text}
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
      </div>
      
      <div className="p-4 border-t flex gap-2">
        <Input 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about marketing..." 
          className="flex-1"
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <Button size="icon" onClick={handleSend}>
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default AiDemo;
