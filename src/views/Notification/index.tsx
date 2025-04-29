import NotificationDetail from '@/components/common/notification-detail';
import Title from '@/components/common/title';
import { NotificationData } from '@/constant/common/notification-data';
import React from 'react';

const NotificationView = () => {
  return (
    <div className='flex justify-center w-screen p-2 sm:px-8 md:px-11 xl:px-20 py-6'>
      <div className='flex flex-col border w-full h-full rounded-lg'>
        <div className='grid p-9 '>
          <Title text='My Properties' />
        </div>
        <div className='px-6'>
          <h1 className='text-text-dark font-semibold'>Today</h1>
          <div className='grid gap-y-3'>
            {NotificationData.map((item, i) => (
              <NotificationDetail
                key={i}
                profile={item.profile}
                name={item.name}
                message={item.message}
                time={item.time}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationView;
