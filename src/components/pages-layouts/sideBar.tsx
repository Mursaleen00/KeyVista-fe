// src/components/pages-layouts/sideBar.tsx

'use client';
// Next & React Imports
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

// constant Imports
import {
  NavbarIconData,
  NavbarPagesData,
  profileList,
  propertyList,
} from '@/constant/layouts-data/navbar-data';

// interfaces Import
import { NavbarProps } from '@/interfaces/common/navbar-interfaces';

// component Import
import Button from '../buttons/button';
import Dropdown from '../common/dropdown';

const SideBar: React.FC<NavbarProps> = ({ isOpen }) => {
  // router
  const { push } = useRouter();
  // pathname
  const [selectedValue, setSelectedValue] = useState<string>('');
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
                items={propertyList.map(item => item.label)}
                onClick={selected => {
                  const found = propertyList.find(
                    item => item.label === selected,
                  );
                  setSelectedValue(selected);
                  if (found) push(found.path);
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
                  items={profileList.map(list => list.label)}
                  img={profileList.map(item => item.img)}
                  selectedValue={selectedValue}
                  onClick={selected => {
                    const found = profileList.find(
                      item => item.label === selected,
                    );
                    setSelectedValue(selected);
                    if (found) push(found.path);
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
              ) : (
                <Link
                  href={item.link || ''}
                  className='flex gap-x-1'
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
          text='Sell a property'
          isOutline
        />
      </div>
    </div>
  );
};

export default SideBar;
