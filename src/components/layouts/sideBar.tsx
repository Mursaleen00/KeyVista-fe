import { NavbarIconData } from '@/constant/layouts-data/navbar-icon-data';
import { NavbarPagesData } from '@/constant/layouts-data/navbar-pages-data';
import { NavbarProps } from '@/interfaces/navbar-interfaces';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from '../buttons/button';

const SideBar: React.FC<NavbarProps> = ({ isOpen, setIsOpen }) => {
  if (!isOpen) return null;

  return (
    <div className='flex flex-col md:hidden'>
      <div className='flex flex-col md:hidden border border-[#F2F4F7] py-7  w-full mt-5 justify-start items-start  gap-6 cursor-pointer pl-9 '>
        {NavbarPagesData.map((item, i) => (
          <div
            key={i}
            className='flex'
          >
            <Link
              href={item.link}
              className='flex gap-x-1'
              onClick={setIsOpen}
            >
              <Image
                src={item.icon ?? ''}
                alt=''
                width={30}
                height={10}
                className='flex'
              />
              <p className='flex text-xl'> {item.name} </p>
            </Link>
          </div>
        ))}
      </div>
      <div className='flex flex-col md:hidden gap-x-4 cursor-pointer pl-7 pt-9 gap-6'>
        <div className='flex gap-x-3 '>
          {NavbarIconData.map((item, i) => (
            <div
              key={i}
              className='flex hover:border-b items-center '
            >
              <Link
                href={item.link}
                onClick={setIsOpen}
              >
                <Image
                  src={item.icon}
                  alt='icon'
                  width={50}
                  height={10}
                  className='flex'
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
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
