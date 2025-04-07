'use client';
import Image from 'next/image';
import React from 'react';
import { ChatMRoomProps } from '@/interfaces/common/chat.interface';

import attachmentIcon from '@/../public/icons/attachment.svg';
import imageIcon from '@/../public/icons/image.svg';
import phoneIcon from '@/../public/icons/phone.svg';
import sendIcon from '@/../public/icons/send.svg';
import threeDotsIcon from '@/../public/icons/three-dots.svg';

import Button from '@/components/buttons/button';
import Input from '@/components/inputs/input';
import { chatMessages } from '@/constant/chat/messages';
import { FaArrowLeft } from 'react-icons/fa6';
import Avatar from '../common/avatar';
import Message from './message';

const ChatRoom: React.FC<ChatMRoomProps> = ({
  handleBack,
  selectedUser,
  handleSend,
}) => {
  const [message, setMessage] = React.useState('');
  return (
    <div className='lg:col-span-2 flex flex-col justify-between'>
      {/* Header */}
      <div className='bg-[#F8F9FA] h-[76px] p-4 flex items-center gap-x-4 justify-between'>
        <div className='flex items-center gap-x-4'>
          <FaArrowLeft
            onClick={handleBack}
            className='cursor-pointer md:hidden min-w-[16px] min-h-[16px] text-heading'
          />
          <Avatar avatar={selectedUser.image} />
          <div>
            <h1 className='text-heading text-sm font-medium line-clamp-1'>
              {selectedUser.name}
            </h1>
            <p className='text-text-light text-sm'>Last active 2h ago</p>
          </div>
        </div>
        <div className='flex gap-x-4 items-center'>
          <Image
            alt='phone'
            src={phoneIcon}
            width={24}
            height={24}
          />
          <Image
            alt='threeDots'
            src={threeDotsIcon}
            width={24}
            height={24}
          />
        </div>
      </div>

      {/* Messages */}
      <div className='p-6 overflow-y-auto flex flex-col gap-y-6 h-[40dvh]'>
        {chatMessages.map((message, i) => (
          <Message
            key={i}
            message={message.message ?? ''}
            name={message.isMyMessage ? 'Me' : selectedUser.name}
            timestamp={message.timestamp ?? ''}
            profile={selectedUser.image}
            isMyMessage={message.isMyMessage ?? false}
          />
        ))}
      </div>

      {/* Footer */}
      <div className='flex flex-col gap-y-4 p-6'>
        <Input
          placeholder='Type your reply'
          className='!border-primary !border-2 !rounded-lg'
          value={message}
          onChange={e => setMessage(e.target.value)}
        />

        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-x-4'>
            <Image
              alt='image'
              src={imageIcon}
              width={24}
              height={24}
              className='cursor-pointer'
            />
            <Image
              alt='attachment'
              src={attachmentIcon}
              width={24}
              height={24}
              className='cursor-pointer'
            />
          </div>

          <Button
            text='Send'
            className='!rounded-xl !h-9 !w-[107px] !text-sm gap-x-2'
            icon={sendIcon}
            onClick={() => handleSend(message)}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
