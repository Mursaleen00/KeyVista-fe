// src/components/pages-layouts/sideBar.tsx

'use client';
// Next & React Imports
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

// constant Imports
import {
  NavbarIconData,
  NavbarPagesData,
  notificationList,
  profileList,
  propertyList,
} from '@/constant/layouts-data/navbar-data';

// interfaces Import
import { NavbarProps } from '@/interfaces/common/navbar-interfaces';

// component Import
import { urls } from '@/constant/router/routes';
import Button from '../buttons/button';
import Dropdown from '../common/dropdown';
import NotificationDropdown from '../common/notification-dropdown';

const SideBar: React.FC<NavbarProps> = ({ isOpen, setIsOpen }) => {
  // router
  const { push } = useRouter();
  // pathname
  const pathname = usePathname();
  const type = useSearchParams().get('type');

  // pathname
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleDropdownClick = (value: string, url: string) => {
    setSelectedValue(value);
    setIsOpen(false);
    push(url);
  };

  useEffect(() => {
    if (type) setSelectedValue(type);
    else setSelectedValue(pathname);
  }, [type, pathname]);

  // isOpen;
  if (!isOpen) return null;
  return (
    <div className='flex flex-col md:hidden'>
      {/* First Section */}
      <div className='flex flex-col md:hidden border border-[#F2F4F7] py-7 w-full mt-5 justify-start items-start gap-6 cursor-pointer pl-9'>
        {/* Navbar Pages Data  */}
        {NavbarPagesData.map((item, i) => (
          <div
            key={i}
            className='flex relative border-white border'
          >
            {/* Properties Drop down */}
            {item.name === 'Properties' ? (
              <Dropdown
                items={propertyList.map(({ name, value }) => ({
                  name,
                  value,
                }))}
                onClick={v => {
                  const found = propertyList.find(item => item.value === v);
                  handleDropdownClick(v, found?.path || '');
                }}
                selectedValue={selectedValue}
                trigger={
                  <div className='flex items-center gap-x-1 z-50'>
                    {item.icon && (
                      <Image
                        src={item.icon}
                        alt=''
                        width={30}
                        height={10}
                      />
                    )}
                    <p className='flex text-xl text-text'>{item.name}</p>
                  </div>
                }
              />
            ) : (
              <Link
                href={item.link || ''}
                className='flex gap-x-1'
                onClick={() => setIsOpen(false)}
              >
                {item.icon && (
                  <Image
                    src={item.icon}
                    alt=''
                    width={30}
                    height={10}
                  />
                )}
                <p className='flex text-xl text-text'>{item.name}</p>
              </Link>
            )}
          </div>
        ))}
      </div>
      {/* Second section */}
      <div className='flex flex-col md:hidden gap-x-4 cursor-pointer pl-7 pt-9 gap-6'>
        <div className='flex gap-x-3'>
          {NavbarIconData.map((item, i) => (
            <div
              key={i}
              className='flex relative border-white border'
            >
              {/* Properties Drop down */}
              {item.name === 'profile' ? (
                <Dropdown
                  items={profileList.map(({ name, value }) => ({
                    name,
                    value,
                  }))}
                  img={profileList.map(item => item.img)}
                  selectedValue={selectedValue}
                  onClick={v => {
                    const found = profileList.find(item => item.value === v);
                    handleDropdownClick(v, found?.path || '');
                  }}
                  trigger={
                    <div className='flex items-center gap-x-1 z-50'>
                      {item.icon && (
                        <Image
                          src={item.icon}
                          alt=''
                          width={50}
                          height={30}
                        />
                      )}
                    </div>
                  }
                />
              ) : item.name === 'notification' ? (
                <NotificationDropdown
                  className='flex w-full max-w-sm'
                  items={notificationList
                    .filter(item => item.value)
                    .map(({ name, value = '', massage, time }) => ({
                      name,
                      value,
                      massage,
                      time,
                    }))}
                  img={notificationList.map(icon => icon.img)}
                  onClick={() => {
                    push(urls.notification);
                  }}
                  // onClick={v => {
                  //   const found = notificationList.find(
                  //     item => item.value === v,
                  //   );
                  //   handleDropdownClick(v, found?.path || '');
                  // }}
                  selectedValue={selectedValue}
                  trigger={
                    <div className='flex items-center gap-x-1 z-50'>
                      {item.icon && (
                        <Image
                          src={item.icon}
                          alt=''
                          width={50}
                          height={50}
                        />
                      )}
                    </div>
                  }
                />
              ) : (
                <Link
                  href={item.link || ''}
                  className='flex gap-x-1'
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon && (
                    <Image
                      src={item.icon}
                      alt=''
                      width={30}
                      height={10}
                    />
                  )}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Button */}
      <div className='flex pl-10 pt-6 items-end justify-start'>
        <Button
          className={`cursor-pointer ${pathname === urls.addProperties ? 'hidden' : 'block'} hover:bg-primary hover:text-white`}
          text='Sell a property'
          isOutline
          onClick={() => push(urls.addProperties)}
        />
      </div>
    </div>
  );
};

export default SideBar;
