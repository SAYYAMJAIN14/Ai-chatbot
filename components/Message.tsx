
import React from 'react';
import { Message as MessageType } from '../types';
import { users } from '../data/mockData';
import { CURRENT_USER_ID } from '../data/mockData';

interface MessageProps {
  message: MessageType;
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const isSent = message.senderId === CURRENT_USER_ID;
  const sender = users[message.senderId];
  
  return (
    <div className={`flex items-end gap-2 my-2 ${isSent ? 'justify-end' : 'justify-start'}`}>
      {!isSent && <img src={sender.avatarUrl} alt={sender.name} className="w-8 h-8 rounded-full" />}
      <div
        className={`max-w-md lg:max-w-xl px-4 py-2 rounded-2xl ${
          isSent
            ? 'bg-indigo-600 text-white rounded-br-none'
            : 'bg-gray-700 text-gray-200 rounded-bl-none'
        }`}
      >
        <p className="text-sm">{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
