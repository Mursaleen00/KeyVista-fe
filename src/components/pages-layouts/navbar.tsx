'use client';
import logo from '@/../public/images/logo.png';
import { NavbarIconData } from '@/constant/layouts-data/navbar-icon-data';
import { NavbarPagesData } from '@/constant/layouts-data/navbar-pages-data';
import { urls } from '@/constant/routers-data';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { HiMenuAlt3 } from 'react-icons/hi';
import Button from '../buttons/button';
import React, { useState } from 'react';
// import { NavbarProps } from '@/interfaces/navbar-interfaces';
import SideBar from './sideBar';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        <div className=' md:flex hidden gap-x-4 cursor-pointer'>
          <Button
            text='Sell a property'
            isOutline
          />

          {NavbarIconData.map((item, i) => (
            <div
              key={i}
              className='flex hover:border-b items-center'
            >
              <Link href={item.link}>
                <Image
                  src={item.icon}
                  alt='icon'
                  width={30}
                  height={10}
                  className='flex'
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* Second section border  */}
      <div className='md:flex hidden border border-[#F2F4F7] w-full p-4 mt-3 justify-center items-center  gap-6 cursor-pointer '>
        {NavbarPagesData.map((item, i) => (
          <div
            key={i}
            className='flex  '
          >
            <Link
              href={item.link}
              className='flex gap-x-1 '
            >
              <Image
                src={item.icon ?? ''}
                alt=''
                width={30}
                height={10}
                className='flex '
              />
              <p className='flex text-xl'> {item.name} </p>
            </Link>
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
