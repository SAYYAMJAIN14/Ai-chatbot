
import React, { useState, useRef, useEffect } from 'react';
import { Conversation, User } from '../types';
import { CURRENT_USER_ID, users } from '../data/mockData';
import Message from './Message';
import Icon from './Icon';
import GeminiActions from './GeminiActions';

interface ChatWindowProps {
  conversation: Conversation | null;
  onSendMessage: (conversationId: string, messageText: string) => void;
}

const ChatHeader: React.FC<{ contact: User; platform: Conversation['platform'] }> = ({ contact, platform }) => (
  <div className="flex items-center p-3 border-b border-gray-700 bg-gray-800">
    <img src={contact.avatarUrl} alt={contact.name} className="w-10 h-10 rounded-full mr-3" />
    <div className="flex-1">
      <h2 className="text-lg font-semibold text-white">{contact.name}</h2>
      <p className="text-sm text-gray-400">on {platform}</p>
    </div>
    <Icon name={platform} className="w-6 h-6 text-gray-400" />
  </div>
);

const ChatWindow: React.FC<ChatWindowProps> = ({ conversation, onSendMessage }) => {
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversation?.messages]);

  if (!conversation) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-800 text-gray-500">
        Select a conversation to start chatting
      </div>
    );
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      onSendMessage(conversation.id, newMessage);
      setNewMessage('');
    }
  };

  const handleSelectReply = (replyText: string) => {
    onSendMessage(conversation.id, replyText);
  };
  
  const contact = conversation.participants.find(p => p.id !== CURRENT_USER_ID) || users[CURRENT_USER_ID];

  return (
    <div className="flex-1 flex flex-col bg-gray-900">
      <ChatHeader contact={contact} platform={conversation.platform} />
      <div className="flex-1 p-4 overflow-y-auto">
        {conversation.messages.map(msg => (
          <Message key={msg.id} message={msg} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <GeminiActions messages={conversation.messages} onSelectReply={handleSelectReply} />

      <div className="p-4 bg-gray-800">
        <form onSubmit={handleSendMessage} className="flex items-center bg-gray-700 rounded-lg p-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 bg-transparent focus:outline-none text-white px-2"
          />
          <button type="submit" className="p-2 text-indigo-400 hover:text-indigo-300 rounded-full">
            <Icon name="send" className="w-6 h-6" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatWindow;
