// src/components/pages-layouts/navbar.tsx
'use client';

// Next & React Imports
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';

// Components Imports
import Button from '../buttons/button';
import Dropdown from '../common/dropdown';
import Logo from '../logo/logo';
import SideBar from './sideBar';

// constant Imports
import {
  NavbarIconData,
  NavbarPagesData,
  profileList,
  propertyList,
} from '@/constant/layouts-data/navbar-data';

// router import
import { urls } from '@/constant/router/routes';

const Navbar = () => {
  const [selectedValue, setSelectedValue] = useState<string>('');

  // use states
  const [isOpen, setIsOpen] = useState(false);
  // const [openHero, setOpenHero] = useState(true);

  // router
  const { push } = useRouter();
  const pathname = usePathname();

  return (
    <nav
      className='flex z-20 flex-col w-full py-5 md:py-0 border-b md:border-none border-border sticky top-0
     bg-white'
    >
      {/* First Section */}
      <div className='flex justify-around items-center w-full pt-5'>
        {/* Logo  */}
        <div
          className={`cursor-pointer ${isOpen ? 'hidden' : 'block'}`}
          onClick={() => push(urls.home)}
        >
          <Logo />
        </div>

        {/* Sidebar isOpen Icon */}
        <div data-aos='fade-right'>
          <HiMenuAlt3
            size={30}
            className='md:hidden cursor-pointer'
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>

        {/* icon section  */}
        <div className='md:flex hidden gap-x-4 cursor-pointer'>
          <Button
            className={`cursor-pointer ${pathname === urls.addProperties ? 'hidden' : 'block'}`}
            text='Sell a property'
            isOutline
            onClick={() => push(urls.addProperties)}
          />
          {/* Navbar Icon Data */}
          {NavbarIconData.map((item, i) => (
            <div
              key={i}
              className='flex relative'
            >
              {/* Profile Drop down */}
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
                  className='flex gap-x-1 items-center'
                >
                  {item.icon && (
                    <Image
                      src={item.icon}
                      alt=''
                      width={item.width}
                      height={item.hight}
                    />
                  )}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Second section border end pages */}
      <div className='md:flex hidden border w-full p-4 mt-3 justify-center items-center gap-6 cursor-pointer'>
        {/* Navbar Pages Data */}
        {NavbarPagesData.map((item, i) => (
          <div
            key={i}
            className='flex relative'
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

      {/* side bar */}
      <SideBar
        isOpen={isOpen}
        setIsOpen={() => setIsOpen(!isOpen)}
      />
    </nav>
  );
};

export default Navbar;
