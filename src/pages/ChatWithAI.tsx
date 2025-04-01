
import React, { useState, useRef, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Sparkles, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ChatMessage from '@/components/ChatMessage';
import ChatInput from '@/components/ChatInput';
import MessageList from '@/components/MessageList';
import { getAIResponse } from '@/utils/aiResponseUtils';

export interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

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
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = (content: string) => {
    if (content.trim()) {
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
        
        <MessageList 
          messages={messages} 
          messagesEndRef={messagesEndRef} 
        />
        
        <ChatInput onSendMessage={handleSendMessage} disabled={isLoading} />
      </main>
      
      <Footer />
    </div>
  );
};

export default ChatWithAI;
