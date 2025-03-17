import { ChatMRoomProps } from '@/interfaces/chat.interface';
import Image from 'next/image';
import React from 'react';

import attachmentIcon from '@/../public/icons/attachment.svg';
import imageIcon from '@/../public/icons/image.svg';
import phoneIcon from '@/../public/icons/phone.svg';
import sendIcon from '@/../public/icons/send.svg';
import threeDotsIcon from '@/../public/icons/three-dots.svg';

import Button from '@/components/buttons/button';
import Input from '@/components/inputs/input';
import { FaArrowLeft } from 'react-icons/fa6';
import Message from './message';

const ChatRoom: React.FC<ChatMRoomProps> = ({ handleBack, selectedUser }) => {
  return (
    <div className='lg:col-span-2 flex flex-col justify-between'>
      {/* Header */}
      <div className='bg-[#F8F9FA] h-[76px] p-4 flex items-center gap-x-4 justify-between'>
        <div className='flex items-center gap-x-4'>
          <FaArrowLeft
            onClick={handleBack}
            className='cursor-pointer md:hidden'
          />
          <Image
            alt='profile'
            src={selectedUser.image || '/'}
            width={100}
            height={100}
            className='rounded-full w-10 h-10'
          />
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
      <div className='p-6 overflow-y-auto h-[40dvh]'>
        <Message
          isMyMessage={true}
          message="Hi! Just a quick check-in. How's everything in the apartment?"
          name='Wade Warren'
          timestamp='19 hours ago'
          profile={selectedUser.image || ''}
        />
      </div>

      {/* Footer */}
      <div className='flex flex-col gap-y-4 p-6'>
        <Input
          placeholder='Type your reply'
          className='!border-primary !border-2 !rounded-lg'
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
          />
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
