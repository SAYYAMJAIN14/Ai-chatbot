
import React from 'react';
import { Conversation, Platform, User } from '../types';
import { CURRENT_USER_ID, users } from '../data/mockData';
import Icon from './Icon';

interface SidebarProps {
  conversations: Conversation[];
  selectedPlatform: Platform | 'all';
  selectedConversationId: string | null;
  onSelectPlatform: (platform: Platform | 'all') => void;
  onSelectConversation: (id: string) => void;
}

const platforms = [Platform.WhatsApp, Platform.Messenger, Platform.Instagram, Platform.Telegram, Platform.Slack];

const PlatformSelector: React.FC<{
  selectedPlatform: Platform | 'all';
  onSelectPlatform: (platform: Platform | 'all') => void;
}> = ({ selectedPlatform, onSelectPlatform }) => {
  const getIconColor = (platform: Platform | 'all') => {
    if (selectedPlatform === platform) return 'text-white';
    
    switch(platform) {
      case Platform.WhatsApp: return 'text-green-500 hover:text-green-400';
      case Platform.Messenger: return 'text-blue-500 hover:text-blue-400';
      case Platform.Instagram: return 'text-pink-500 hover:text-pink-400';
      case Platform.Telegram: return 'text-sky-500 hover:text-sky-400';
      case Platform.Slack: return 'text-purple-500 hover:text-purple-400';
      default: return 'text-gray-400 hover:text-white';
    }
  };

  return (
    <div className="w-16 bg-gray-900 flex flex-col items-center py-4 space-y-4 border-r border-gray-700">
      <button onClick={() => onSelectPlatform('all')} className={`p-2 rounded-lg ${selectedPlatform === 'all' ? 'bg-indigo-600' : 'bg-gray-800'}`}>
        <Icon name="all" className={`w-6 h-6 ${getIconColor('all')}`} />
      </button>
      {platforms.map(platform => (
        <button key={platform} onClick={() => onSelectPlatform(platform)} className={`p-2 rounded-lg ${selectedPlatform === platform ? 'bg-indigo-600' : ''}`}>
          <Icon name={platform} className={`w-6 h-6 ${getIconColor(platform)}`} />
        </button>
      ))}
    </div>
  );
};

const ConversationItem: React.FC<{
  conversation: Conversation;
  isSelected: boolean;
  onSelect: () => void;
}> = ({ conversation, isSelected, onSelect }) => {
  const otherParticipants = conversation.participants.filter(p => p.id !== CURRENT_USER_ID);
  const contact: User = otherParticipants[0] || users[CURRENT_USER_ID]; // Fallback for notes to self
  const lastMessage = conversation.messages[conversation.messages.length - 1];

  return (
    <div
      onClick={onSelect}
      className={`flex items-center p-3 cursor-pointer rounded-lg mx-2 my-1 transition-colors duration-200 ${
        isSelected ? 'bg-gray-700' : 'hover:bg-gray-800'
      }`}
    >
      <img src={contact.avatarUrl} alt={contact.name} className="w-12 h-12 rounded-full mr-3" />
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-white truncate">{contact.name}</p>
          <p className="text-xs text-gray-400">{new Date(lastMessage.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
        </div>
        <div className="flex justify-between items-start">
          <p className="text-sm text-gray-400 truncate pr-2">{lastMessage.text}</p>
          {conversation.unreadCount && conversation.unreadCount > 0 && (
            <span className="bg-indigo-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {conversation.unreadCount}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ conversations, selectedPlatform, selectedConversationId, onSelectPlatform, onSelectConversation }) => {
  const filteredConversations = conversations
    .filter(c => selectedPlatform === 'all' || c.platform === selectedPlatform)
    .sort((a, b) => new Date(b.messages[b.messages.length - 1].timestamp).getTime() - new Date(a.messages[a.messages.length - 1].timestamp).getTime());

  return (
    <div className="flex h-screen">
      <PlatformSelector selectedPlatform={selectedPlatform} onSelectPlatform={onSelectPlatform} />
      <div className="w-80 bg-gray-800 flex flex-col">
        <div className="p-4 border-b border-gray-700">
          <h1 className="text-xl font-bold text-white">Navkar</h1>
          <input type="text" placeholder="Search..." className="w-full mt-2 p-2 bg-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
        </div>
        <div className="flex-1 overflow-y-auto">
          {filteredConversations.map(convo => (
            <ConversationItem
              key={convo.id}
              conversation={convo}
              isSelected={convo.id === selectedConversationId}
              onSelect={() => onSelectConversation(convo.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;