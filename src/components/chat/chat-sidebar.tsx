// src/components/chat/chat-sidebar.tsx
'use client';

// React & Next Imports
import React, { useEffect } from 'react';

// Components Imports
import Avatar from '../common/avatar';

// Constant Import
import { chatHeads } from '@/constant/chat/chat-heads';

// Interface Import
import { ChatHeadProps } from '@/interfaces/common/chat.interface';

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
          {/* Avatar */}
          <Avatar avatar={image} />
          {/* Text Section */}
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
