import { MessageProps } from '@/interfaces/chat.interface';
import React from 'react';

const Message: React.FC<MessageProps> = ({
  isMyMessage,
  message,
  name,
  timestamp,
  profile,
}) => {
  console.log({ message, name, timestamp, profile, isMyMessage });
  return <div></div>;
};

export default Message;
