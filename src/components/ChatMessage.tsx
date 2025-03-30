
import React from 'react';
import { cn } from '@/lib/utils';
import { Sparkles, User } from 'lucide-react';

type MessageType = 'user' | 'ai';

interface ChatMessageProps {
  type: MessageType;
  content: string;
  timestamp: Date;
}

const ChatMessage = ({ type, content, timestamp }: ChatMessageProps) => {
  return (
    <div
      className={cn(
        "flex w-full gap-3 p-4 rounded-lg mb-4",
        type === 'user' ? "bg-muted/50 ml-auto" : "bg-primary/10"
      )}
      style={{ maxWidth: '85%', [type === 'user' ? 'marginLeft' : 'marginRight']: 'auto' }}
    >
      <div className="flex-shrink-0 mt-1">
        <div 
          className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center",
            type === 'user' ? "bg-secondary/30" : "bg-primary/30"
          )}
        >
          {type === 'user' ? (
            <User className="h-4 w-4" />
          ) : (
            <Sparkles className="h-4 w-4" />
          )}
        </div>
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-baseline mb-1">
          <p className="font-medium">
            {type === 'user' ? 'You' : 'Zephyr AI'}
          </p>
          <span className="text-xs text-muted-foreground">
            {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
        <div className="whitespace-pre-wrap">{content}</div>
      </div>
    </div>
  );
};

export default ChatMessage;
