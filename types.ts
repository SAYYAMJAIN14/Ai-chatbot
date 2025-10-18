
export enum Platform {
  WhatsApp = 'WhatsApp',
  Messenger = 'Messenger',
  Instagram = 'Instagram',
  Telegram = 'Telegram',
  Slack = 'Slack',
}

export interface User {
  id: string;
  name: string;
  avatarUrl: string;
}

export interface Message {
  id: string;
  text: string;
  timestamp: string;
  senderId: string;
}

export interface Conversation {
  id: string;
  platform: Platform;
  participants: User[];
  messages: Message[];
  unreadCount?: number;
}
