
import React from 'react';
import { Platform } from '../types';

interface IconProps {
  name: Platform | 'all' | 'send' | 'summarize' | 'reply';
  className?: string;
}

// FIX: Replaced JSX.Element with React.ReactElement to fix "Cannot find namespace 'JSX'" error.
const platformIcons: Record<Platform, React.ReactElement> = {
  [Platform.WhatsApp]: (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.92-9.91zM17.43 15.19c-.22-.11-.76-.38-1.04-.42-.28-.04-.49-.06-.7.11-.22.17-.7.88-.86 1.06-.16.17-.32.2-.59.06-.28-.11-1.17-.43-2.23-1.37-.83-.73-1.38-1.63-1.54-1.9-.16-.28-.01-.43.1-.57.1-.11.22-.28.33-.42.11-.14.14-.25.22-.42.08-.17.04-.31-.03-.42-.06-.11-.7-.83-.96-1.14-.26-.3-.52-.33-.7-.33h-.01c-.22 0-.46.06-.7.33-.25.28-.96.94-.96 2.29 0 1.35.99 2.65 1.12 2.82.14.17 1.94 2.97 4.7 4.14.65.28 1.16.45 1.57.58.68.2 1.29.17 1.78.11.55-.08 1.69-.69 1.93-1.36.25-.67.25-1.24.17-1.36-.08-.12-.28-.2-.49-.31z"/></svg>
  ),
  [Platform.Messenger]: (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c2.42 0 4.68-.85 6.48-2.31l3.12 1.04-1.04-3.12C21.15 16.68 22 14.42 22 12c0-5.52-4.48-10-10-10zm-2.5 12.5l-3-3 7-7 3 3-7 7z"/></svg>
  ),
  [Platform.Instagram]: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
  ),
  [Platform.Telegram]: (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.78 18.65l.28-4.23l7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3L3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.28 1.28.17 1.08.94L18.04 18.5c-.28 1.1-.8 1.31-1.57 1.01l-4.84-3.56-2.31 2.24c-.25.24-.45.44-.88.44z"/></svg>
  ),
  [Platform.Slack]: (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.2 14.8V17c0 1.1.9 2 2 2h2.8c1.1 0 2-.9 2-2v-2.8c0-1.1-.9-2-2-2H8.2c-1.1 0-2 .9-2 2zM7 7c0-1.1.9-2 2-2h2.8c1.1 0 2 .9 2 2v2.8c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2V7zm0 7.8c-1.1 0-2 .9-2 2V17c0 1.1.9 2 2 2h2.8c1.1 0 2-.9 2-2v-2.8c0-1.1-.9-2-2-2H7zm7.8-7.8V7c0-1.1.9-2 2-2h2.8c1.1 0 2 .9 2 2v2.8c0 1.1-.9 2-2 2h-2.8c-1.1 0-2-.9-2-2zm0 7.8c0-1.1.9-2 2-2h2.8c1.1 0 2 .9 2 2V17c0 1.1-.9 2-2 2h-2.8c-1.1 0-2-.9-2-2v-2.8z"/></svg>
  ),
};

// FIX: Replaced JSX.Element with React.ReactElement to fix "Cannot find namespace 'JSX'" error.
const otherIcons: Record<string, React.ReactElement> = {
  all: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" /></svg>
  ),
  send: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" /></svg>
  ),
  summarize: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4.25 5.5a.75.75 0 0 0 0 1.5h11.5a.75.75 0 0 0 0-1.5H4.25ZM4.25 10a.75.75 0 0 0 0 1.5h11.5a.75.75 0 0 0 0-1.5H4.25ZM4.25 14.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Z" clipRule="evenodd" /></svg>
  ),
  reply: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 2c-1.717 0-3.284.568-4.52 1.503C4.244 4.41 3.5 5.903 3.5 7.5c0 1.596.744 3.09 1.98 4.002 1.235.91 2.802 1.498 4.52 1.498 1.717 0 3.283-.568 4.52-1.503C15.756 10.59 16.5 9.097 16.5 7.5c0-1.596-.744-3.09-1.98-4.002C13.284 2.568 11.717 2 10 2ZM2 7.5C2 4.965 3.82 2.673 6.131 1.343a.75.75 0 0 1 .738 1.314A6.996 6.996 0 0 0 5 7.5c0 2.064 1.129 3.834 2.812 4.757a.75.75 0 0 1-.738 1.314C3.82 12.327 2 10.035 2 7.5Zm16 0c0 2.535-1.82 4.827-4.131 6.157a.75.75 0 0 1-.738-1.314A6.996 6.996 0 0 0 15 7.5c0-2.064-1.129-3.834-2.812-4.757a.75.75 0 1 1 .738-1.314C16.18 2.673 18 4.965 18 7.5Z" clipRule="evenodd" /></svg>
  ),
};

const Icon: React.FC<IconProps> = ({ name, className }) => {
  const icon = platformIcons[name as Platform] || otherIcons[name];
  if (!icon) return null;
  return <div className={className}>{icon}</div>;
};

export default Icon;