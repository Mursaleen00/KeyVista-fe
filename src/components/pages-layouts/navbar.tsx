'use client';
import logo from '@/../public/images/logo.png';
import { NavbarIconData } from '@/constant/layouts-data/navbar-icon-data';
import { NavbarPagesData } from '@/constant/layouts-data/navbar-pages-data';
import { urls } from '@/constant/routes';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { HiMenuAlt3 } from 'react-icons/hi';
import Button from '../buttons/button';
import React, { useState } from 'react';
import SideBar from './sideBar';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownIconOpen, setIsDropdownIconOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const router = useRouter();
  return (
    <nav className='flex flex-col pt-5 justify-center  w-full py-5 md:py-0 mt-5'>
      <div className='flex  justify-around items-center w-full'>
        <div className='cursor-pointer'>
          <Image
            src={logo}
            alt='logo'
            width={150}
            height={100}
            onClick={() => router.push(urls.home)}
          />
        </div>
        <div data-aos='fade-right'>
          <HiMenuAlt3
            size={30}
            className='md:hidden cursor-pointer'
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
        {/* icon section  */}
        <div className=' md:flex hidden gap-x-4 cursor-pointer'>
          <Button
            text='Sell a property'
            isOutline
          />

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
                          width={50}
                          height={10}
                        />
                      )}
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
                      width={50}
                      height={10}
                    />
                  )}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Second section border end pages */}
      <div className='md:flex hidden border border-[#F2F4F7] w-full p-4 mt-3 justify-center items-center  gap-6 cursor-pointer'>
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
                    <DropdownMenu.Content className='absolute flex flex-col  gap-y-4 -left-16 mt-3  bg-white  shadow-lg rounded-xl p-3 '>
                      <DropdownMenu.Item
                        className='p-2 w-32 px-3 hover:bg-primary cursor-pointer rounded-xl text-text-light hover:text-white'
                        onClick={() => router.push(urls.rentProperties)}
                      >
                        Rent
                      </DropdownMenu.Item>
                      <DropdownMenu.Item
                        className='-mt-2 p-2 w-32 px-3 hover:bg-primary cursor-pointer rounded-xl text-text-light hover:text-white hover:border-none'
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

      {/* side bar */}
      <SideBar
        isOpen={isOpen}
        setIsOpen={() => setIsOpen(!isOpen)}
      />
    </nav>
  );
};

export default Navbar;
