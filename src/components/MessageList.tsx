
import React from 'react';
import ChatMessage from '@/components/ChatMessage';
import { Message } from '@/pages/ChatWithAI';

interface MessageListProps {
  messages: Message[];
  messagesEndRef: React.RefObject<HTMLDivElement>;
}

const MessageList = ({ messages, messagesEndRef }: MessageListProps) => {
  return (
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
  );
};

export default MessageList;
