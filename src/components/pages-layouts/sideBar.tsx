// src/components/pages-layouts/sideBar.tsx

'use client';
// Next & React Imports
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

// DropdownMenu package Imports
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

// constant Imports
import { NavbarIconData } from '@/constant/layouts-data/navbar-icon-data';
import { NavbarPagesData } from '@/constant/layouts-data/navbar-pages-data';
import { urls } from '@/constant/routes';

// interfaces Import
import { NavbarProps } from '@/interfaces/navbar-interfaces';

// component Import
import Button from '../buttons/button';

const SideBar: React.FC<NavbarProps> = ({ isOpen }) => {
  //  UseStates
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownIconOpen, setIsDropdownIconOpen] = useState(false);
  // router
  const router = useRouter();

  // isOpen;
  if (!isOpen) return null;
  return (
    <div className='flex flex-col md:hidden'>
      {/* First Section */}
      <div className='flex flex-col md:hidden border border-[#F2F4F7] py-7  w-full mt-5 justify-start items-start  gap-6 cursor-pointer pl-9'>
        {/* Navbar Pages Data  */}
        {NavbarPagesData.map((item, i) => (
          <div
            key={i}
            className='flex relative border-white border'
          >
            {/* Properties Drop down */}
            {item.name === 'Properties' ? (
              <DropdownMenu.Root
                open={isDropdownOpen}
                onOpenChange={setIsDropdownOpen}
              >
                <DropdownMenu.Trigger asChild>
                  <button className='flex items-center gap-x-1'>
                    {item.icon && (
                      <Image
                        src={item.icon}
                        alt=''
                        width={30}
                        height={10}
                      />
                    )}
                    <p className='flex text-xl'>{item.name}</p>
                  </button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                  <div className='flex p-2'>
                    <DropdownMenu.Content className='absolute flex flex-col  gap-y-4 left-16 top-0  bg-white  shadow-lg rounded-xl p-3 text-text-light hover:text-white'>
                      <DropdownMenu.Item
                        className='p-2 w-32 px-3 hover:bg-primary cursor-pointer rounded-xl'
                        onClick={() => router.push(urls.rentProperties)}
                      >
                        Rent
                      </DropdownMenu.Item>
                      <DropdownMenu.Item
                        className='-mt-2 p-2 w-32 px-3 hover:bg-primary cursor-pointer rounded-xl'
                        onClick={() => router.push(urls.buyProperties)}
                      >
                        Buy
                      </DropdownMenu.Item>
                    </DropdownMenu.Content>
                  </div>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>
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
                <p className='flex text-xl'>{item.name}</p>
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
                <DropdownMenu.Root
                  open={isDropdownIconOpen}
                  onOpenChange={setIsDropdownIconOpen}
                >
                  <DropdownMenu.Trigger asChild>
                    <button className='flex items-center gap-x-1'>
                      {item.icon && (
                        <Image
                          src={item.icon}
                          alt=''
                          width={30}
                          height={10}
                        />
                      )}
                      {/* <p className='flex text-xl'>{item.name}</p> */}
                    </button>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Portal>
                    <DropdownMenu.Content className='absolute flex flex-col  gap-y-4 -left-24 mt-3  bg-white  shadow-lg rounded-xl p-3'>
                      <DropdownMenu.Item
                        className='p-2  px-3 hover:bg-primary cursor-pointer rounded-xl text-text-light hover:text-white'
                        onClick={() => router.push(urls.profile)}
                      >
                        Profile
                      </DropdownMenu.Item>
                      <DropdownMenu.Item
                        className='-mt-2 p-2 w-44 px-3 hover:bg-primary cursor-pointer rounded-xl text-text-light hover:text-white hover:border-none'
                        onClick={() => router.push(urls.changePassword)}
                      >
                        Change Password
                      </DropdownMenu.Item>
                      <DropdownMenu.Item
                        className='-mt-2 p-2  px-3 hover:bg-primary cursor-pointer rounded-xl text-text-light hover:text-white hover:border-none'
                        onClick={() => router.push(urls.buyProperties)}
                      >
                        My Properties
                      </DropdownMenu.Item>
                    </DropdownMenu.Content>
                  </DropdownMenu.Portal>
                </DropdownMenu.Root>
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
                  {/* <p className='flex text-xl'>{item.name}</p> */}
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
