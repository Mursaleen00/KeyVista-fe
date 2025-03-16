'use client';
import { chatHeads } from '@/constant/chat/chat-heads';
import Image from 'next/image';
import React, { useEffect } from 'react';

interface ChatHead {
  selectedUser: {
    id: number;
    name: string;
    image: string;
  };
  setSelectedUser: React.Dispatch<
    React.SetStateAction<{
      id: number;
      name: string;
      image: string;
    }>
  >;
}

const ChatSidebar: React.FC<ChatHead> = ({ selectedUser, setSelectedUser }) => {
  const firstUser = chatHeads[0];
  const isSelected = (id: number) => id == selectedUser.id;

  useEffect(() => {
    setSelectedUser(firstUser);
  }, []);

  return (
    <div className='hidden md:flex flex-col h-full overflow-y-auto max-h-[60dvh]'>
      {chatHeads.map(chatHead => (
        <div
          key={chatHead.id}
          className={`px-6 py-4 rounded-2xl w-full flex items-center gap-x-4 cursor-pointer ${isSelected(chatHead.id) ? 'bg-primary-light' : ''}`}
          onClick={() => setSelectedUser(chatHead)}
        >
          <Image
            alt='profile'
            src={chatHead.image}
            width={40}
            height={40}
            className='rounded-full w-10 h-10'
          />
          <div className='flex flex-col w-full'>
            <h3 className='font-medium text-heading flex items-center justify-between gap-x-2'>
              <span className='line-clamp-1'>{chatHead.name}</span>
              <span className='text-xs min-w-fit text-text-light'>
                {chatHead.time}
              </span>
            </h3>
            <p
              className={`text-text-light text-sm line-clamp-1 ${isSelected(chatHead.id) ? 'font-medium' : ''}`}
            >
              {chatHead.message}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatSidebar;
