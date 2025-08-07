// src/components/common/notification-dropdown.tsx
'use client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { FC } from 'react';
import Title from './title';
import Button from '../buttons/button';
import { urls } from '@/constant/router/routes';
import { usePathname, useRouter } from 'next/navigation';
import { NotificationDropdownProps } from '@/interfaces/common/navbar-interfaces';
import Avatar from './avatar';

const NotificationDropdown: FC<NotificationDropdownProps> = ({
  items,
  trigger,
  onClick,
  className,
  img,
  selectedValue,
}) => {
  // router
  const { push } = useRouter();
  const pathname = usePathname();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent className='flex flex-col rounded-lg w-full py-2'>
        {/* Header */}
        <div className='flex items-start justify-between px-4 py-2'>
          <Title
            className='text-md font-medium'
            text='Notifications'
          />
        </div>
        {items.map(({ name, value, massage, time }, i) => {
          return (
            <DropdownMenuItem
              key={i}
              className={`
                hover:bg-primary-medium cursor-pointer rounded-xl text-text-light
                     hover:text-white hover:border-none py-2 px-4 pl-4 m-2 text-md flex
                ${selectedValue?.toLowerCase() == value?.toLowerCase() ? 'bg-primary text-white' : 'bg-white text-text-light'}
               ${className}
              `}
              onClick={() => onClick?.(value)}
            >
              {/* Image */}
              {img && img[i] && (
                <Avatar
                  avatar={img[i]}
                  className='rounded-full '
                />
              )}
              {/* Text Content */}
              <div className='flex flex-col w-full'>
                {/* Name */}
                {name && (
                  <p className='text-sm font-medium text-text-dark leading-tight'>
                    {name}
                  </p>
                )}

                {/* Massage */}
                {massage && (
                  <p className='text-xs text-text-light line-clamp-1'>
                    {massage}
                  </p>
                )}

                {/* Time */}
                {time && <p className='text-xs text-gray-400 mt-1'>{time}</p>}
              </div>
            </DropdownMenuItem>
          );
        })}
        <div
          className={`flex justify-center items-center w-full px-5 ${pathname === urls.notification ? 'hidden' : 'block'}`}
        >
          <Button
            className='flex justify-center items-center w-full px-5'
            text='View All'
            onClick={() => {
              push(urls.notification);
            }}
          />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NotificationDropdown;
