import { MessageProps } from '@/interfaces/chat.interface';

export const chatMessages: Partial<MessageProps>[] = [
  {
    message: "Hey! How's it going?",
    timestamp: '2025-03-19T10:12:30Z',
    isMyMessage: true,
  },
  {
    message: "I'm good, thanks! What about you?",
    timestamp: '2025-03-19T10:16:10Z',
    isMyMessage: false,
  },
  {
    message: 'Doing well! Just working on some stuff.',
    timestamp: '2025-03-19T10:17:05Z',
    isMyMessage: true,
  },
  {
    message: 'Cool! What are you working on?',
    timestamp: '2025-03-19T10:18:15Z',
    isMyMessage: false,
  },
  {
    message: 'A new project for work, it’s pretty interesting.',
    timestamp: '2025-03-19T10:19:00Z',
    isMyMessage: true,
  },
  {
    message: 'That sounds awesome! Let me know if you need help.',
    timestamp: '2025-03-19T10:20:05Z',
    isMyMessage: false,
  },
];
