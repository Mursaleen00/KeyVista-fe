'use client';

import { chatHeads } from '@/constant/chat/chat-heads';
import { ChatHeadProps } from '@/interfaces/common/chat.interface';
import React, { useEffect } from 'react';
import Avatar from '../common/avatar';

const ChatSidebar: React.FC<ChatHeadProps> = ({
  selectedUser,
  setSelectedUser,
}) => {
  const isSelected = (id: number) => +id === +selectedUser.id;

  useEffect(() => setSelectedUser(chatHeads[0]), []);

  return (
    <div
      className={`${selectedUser.name ? 'hidden md:flex' : 'flex'} flex-col h-full overflow-y-auto max-h-[60dvh]`}
    >
      {chatHeads.map(({ id, image, name, time, message }) => (
        <div
          key={id}
          className={`px-6 py-4 rounded-2xl w-full flex items-center gap-x-4 cursor-pointer ${isSelected(id) && 'bg-primary-light'}`}
          onClick={() => setSelectedUser({ id, image, name })}
        >
          <Avatar avatar={image} />
          <div className='flex flex-col w-full'>
            <h3 className='font-medium text-heading flex items-center justify-between gap-x-2'>
              <span className='line-clamp-1'>{name}</span>
              <span className='text-xs min-w-fit text-text-light'>{time}</span>
            </h3>
            <p
              className={`text-text-light text-sm line-clamp-1 ${isSelected(id) && 'font-medium'}`}
            >
              {message}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatSidebar;
