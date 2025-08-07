// src/views/Notification/index.tsx
'use client';
import Title from '@/components/common/title';
import moment from 'moment';
import Image from 'next/image';
import { notifications } from '@/constant/notification/notification-data';
import { dataT } from '@/types/notification-type';

const NotificationView = () => {
  // sortedDate
  const sortedDate = notifications.sort((a, b) => {
    return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
  });

  // getDateLabel
  const getDateLabel = (time: string) => {
    const itemDate = moment(time);
    const today = moment();
    const yesterday = moment().subtract(1, 'day');

    // Check if the item date is today
    if (itemDate.isSame(today, 'day')) {
      return 'Today';
    } else if (itemDate.isSame(yesterday, 'day')) {
      return 'Yesterday';
    } else {
      return itemDate.format('dddd');
    }
  };

  //  data type
  const data: dataT[] = sortedDate.reduce((acc: dataT[], item) => {
    const dateLabel = getDateLabel(item.updatedAt);
    const existingGroup = acc.find(group => group.title === dateLabel);

    //  if existingGroup is true or false
    if (existingGroup) {
      existingGroup.data.push(item);
    } else {
      acc.push({
        title: dateLabel,
        data: [item],
      });
    }

    return acc;
  }, []);

  return (
    <div className='flex flex-col m-4 sm:m-9 md:m-9 rounded-3xl shadow-2xl'>
      {/* Notification Title */}
      <div className='px-9 pt-9'>
        <Title
          text='Notification'
          className='text-3xl'
        />
      </div>

      {/* Notification List */}
      <div className='flex flex-col py-3'>
        {data.map(group => (
          <div
            key={group.title}
            className='flex flex-col rounded-full'
          >
            {/* Title */}
            <h3 className='text-lg font-medium my-2 px-12'>{group.title}</h3>
            {/* Group Data */}
            <div className='flex flex-col'>
              {group.data.map(item => (
                <div
                  key={item._id + item.updatedAt}
                  className='flex items-end bg-white px-2 md:px-14 py-2 rounded-2xl'
                >
                  {/* Name + Message + Time + profile */}
                  <div className='flex items-start gap-4 w-full'>
                    {/* Profile Image */}
                    <div className='flex-shrink-0'>
                      <Image
                        src={item.sender.profilePicture}
                        alt={item.sender.name}
                        width={40}
                        height={40}
                        className='rounded-full object-cover'
                      />
                    </div>

                    {/* Name + Message + Time */}
                    <div className='flex flex-col w-full text-gray-700'>
                      <div className='flex md:flex-row flex-col justify-between w-full'>
                        {/* Name + Message */}
                        <div className='text-sm break-words whitespace-pre-wrap pt-2'>
                          <span className='font-semibold text-base'>
                            {item.sender.name} :
                          </span>{' '}
                          <span>{item.message}</span>
                        </div>

                        {/* Time */}
                        <div className='text-xs text-gray-500 whitespace-nowrap py-3 sm:py-0 sm:pl-4 sm:pt-3 '>
                          {moment(item.updatedAt).format('hh:mm A')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default NotificationView;
