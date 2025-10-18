
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import { Conversation, Platform } from './types';
import { conversations as mockConversations, CURRENT_USER_ID } from './data/mockData';

const App: React.FC = () => {
  const [conversations, setConversations] = useState<Conversation[]>(mockConversations);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | 'all'>('all');
  const [selectedConversationId, setSelectedConversationId] = useState<string | null>('convo-1');

  const handleSendMessage = (conversationId: string, messageText: string) => {
    setConversations(prevConversations => {
      return prevConversations.map(convo => {
        if (convo.id === conversationId) {
          const newMessage = {
            id: `msg-${Date.now()}`,
            text: messageText,
            timestamp: new Date().toISOString(),
            senderId: CURRENT_USER_ID,
          };
          return { ...convo, messages: [...convo.messages, newMessage] };
        }
        return convo;
      });
    });
  };

  const activeConversation = conversations.find(c => c.id === selectedConversationId) || null;

  return (
    <div className="h-screen w-screen flex antialiased text-gray-200 bg-gray-900 overflow-hidden">
      <Sidebar
        conversations={conversations}
        selectedPlatform={selectedPlatform}
        selectedConversationId={selectedConversationId}
        onSelectPlatform={setSelectedPlatform}
        onSelectConversation={setSelectedConversationId}
      />
      <main className="flex-1 flex flex-col">
        <ChatWindow 
          conversation={activeConversation} 
          onSendMessage={handleSendMessage} 
        />
      </main>
    </div>
  );
};

export default App;
