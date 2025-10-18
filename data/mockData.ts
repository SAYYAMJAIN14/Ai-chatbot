
import { Platform, User, Conversation } from '../types';

export const CURRENT_USER_ID = 'user-0';

export const users: Record<string, User> = {
  [CURRENT_USER_ID]: { id: CURRENT_USER_ID, name: 'You', avatarUrl: `https://picsum.photos/seed/you/100/100` },
  'user-1': { id: 'user-1', name: 'Alice Johnson', avatarUrl: `https://picsum.photos/seed/alice/100/100` },
  'user-2': { id: 'user-2', name: 'Bob Williams', avatarUrl: `https://picsum.photos/seed/bob/100/100` },
  'user-3': { id: 'user-3', name: 'Charlie Brown', avatarUrl: `https://picsum.photos/seed/charlie/100/100` },
  'user-4': { id: 'user-4', name: 'Diana Miller', avatarUrl: `https://picsum.photos/seed/diana/100/100` },
  'user-5': { id: 'user-5', name: 'Project Team', avatarUrl: `https://picsum.photos/seed/team/100/100` },
};

export const conversations: Conversation[] = [
  {
    id: 'convo-1',
    platform: Platform.WhatsApp,
    participants: [users[CURRENT_USER_ID], users['user-1']],
    unreadCount: 2,
    messages: [
      { id: 'msg-1-1', text: 'Hey, are you free for a call this afternoon?', senderId: 'user-1', timestamp: '2024-07-29T10:30:00Z' },
      { id: 'msg-1-2', text: 'Sure, how about 2 PM?', senderId: CURRENT_USER_ID, timestamp: '2024-07-29T10:31:00Z' },
      { id: 'msg-1-3', text: 'Perfect! Talk to you then.', senderId: 'user-1', timestamp: '2024-07-29T10:32:00Z' },
       { id: 'msg-1-4', text: 'Just wanted to confirm our meeting.', senderId: 'user-1', timestamp: '2024-07-29T13:55:00Z' },
    ],
  },
  {
    id: 'convo-2',
    platform: Platform.Messenger,
    participants: [users[CURRENT_USER_ID], users['user-2']],
    messages: [
      { id: 'msg-2-1', text: 'Did you see the latest design mockups?', senderId: 'user-2', timestamp: '2024-07-29T09:15:00Z' },
      { id: 'msg-2-2', text: 'Yes, they look great! I have a few minor suggestions.', senderId: CURRENT_USER_ID, timestamp: '2024-07-29T09:20:00Z' },
    ],
  },
  {
    id: 'convo-3',
    platform: Platform.Instagram,
    participants: [users[CURRENT_USER_ID], users['user-3']],
    unreadCount: 1,
    messages: [
      { id: 'msg-3-1', text: 'Loved your story from this morning!', senderId: 'user-3', timestamp: '2024-07-29T11:05:00Z' },
    ],
  },
  {
    id: 'convo-4',
    platform: Platform.Telegram,
    participants: [users[CURRENT_USER_ID], users['user-4']],
    messages: [
      { id: 'msg-4-1', text: 'Here’s the link you asked for: https://example.com', senderId: 'user-4', timestamp: '2024-07-28T18:00:00Z' },
      { id: 'msg-4-2', text: 'Thanks, got it!', senderId: CURRENT_USER_ID, timestamp: '2024-07-28T18:01:00Z' },
    ],
  },
  {
    id: 'convo-5',
    platform: Platform.Slack,
    participants: [users[CURRENT_USER_ID], users['user-5'], users['user-1']],
    messages: [
      { id: 'msg-5-1', text: 'Quick reminder: The project deadline is this Friday.', senderId: 'user-5', timestamp: '2024-07-29T14:00:00Z' },
      { id: 'msg-5-2', text: 'My part is almost done, I will push it by EOD.', senderId: 'user-1', timestamp: '2024-07-29T14:05:00Z' },
      { id: 'msg-5-3', text: 'Great, thanks for the update Alice!', senderId: CURRENT_USER_ID, timestamp: '2024-07-29T14:06:00Z' },
    ],
  },
];
