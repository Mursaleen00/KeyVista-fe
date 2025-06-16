import React from 'react';
import Image from 'next/image';
import { NotificationInterfaces } from '@/interfaces/common/notification-interface';

const NotificationDetail = ({
  profile,
  name,
  message,
  time,
}: NotificationInterfaces) => {
  return (
    <div className='gap-y-4 grid'>
      <div className='flex items-center justify-between border'>
        <div className='flex items-center gap-x-1 border'>
          <Image
            src={profile}
            alt='profile'
            width={40}
            height={20}
          />
          <div className='flex gap-x-1 items-center'>
            <h1 className='text-text-dark'>{name} :</h1>
            <p className='text-text-dark font-semibold'>{message}</p>
          </div>
        </div>
        <p className='text-text-veryLight'>{time}</p>
      </div>
    </div>
  );
};

export default NotificationDetail;
