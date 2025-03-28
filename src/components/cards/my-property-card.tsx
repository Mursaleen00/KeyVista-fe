import Image from 'next/image';
import React from 'react';
import Title from '../common/title';
import location from '@/../public/icons/location.svg';
import Delete from '@/../public/icons/Delete.svg';
import Edit from '@/../public/icons/edit.svg';

import Paragraph from '../common/paragraph';
import house from '@/../public/images/CardHouse.png';
import Key from '@/../public/icons/key.svg';
import Posted from '@/../public/icons/Posted.svg';
import Button from '../buttons/button';

const MyPropertyCard = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-2 sm:p-4 ld::p-7 border border-border bg-white shadow-xl max-w-7xl sm:gap-x-5 gap-y-6 rounded-xl m-2'>
      {/* image section */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 w-full h-full  lg:col-span-2'>
        <div className='flex w-full lg:col-span-2'>
          <Image
            src={house}
            alt='Placeholder'
            className='rounded-lg w-full h-full lg:max-h-80'
            width={500}
            height={500}
          />
        </div>
        <div className='lg:grid grid-cols-2 w-full h-full gap-2 sm:col-span-1 hidden lg:col-span-1'>
          <div className='flex w-full rounded-lg h-full'>
            <Image
              src='https://placehold.co/600x600/png'
              alt=''
              width={500}
              height={500}
              className='flex rounded-lg w-full h-full'
            />
          </div>
          <div>
            <Image
              src='https://placehold.co/600x600/png'
              alt=''
              width={300}
              height={150}
              className='flex  rounded-lg w-full h-full'
            />
          </div>
          <div>
            <Image
              src='https://placehold.co/600x600/png'
              alt=''
              width={300}
              height={150}
              className='flex  rounded-lg w-full h-full'
            />
          </div>
          <div>
            <Image
              src='https://placehold.co/600x600/png'
              alt=''
              width={300}
              height={150}
              className='flex  rounded-lg w-full h-full'
            />
          </div>
        </div>
      </div>
      {/* Property details Section */}
      <div className='grid grid-cols-1 gap-y-20 lg:col-span-1 sm:col-span-1'>
        {/* Heading */}
        <div className='flex flex-col gap-y-4 md:gap-y-2'>
          <Title text='Arabian Villas' />
          <div className='flex md:items-center items-start gap-x-1'>
            <Image
              src={location}
              alt='location'
            />
            <Paragraph text='1213 Rue Papineau, Montreal, QC H2L 3B5' />
          </div>
          <div className='flex md:items-center items-start gap-x-1'>
            <Image
              src={Posted}
              alt='Posted'
            />
            <p className='text-text-light text-sm '>
              Posted on{' '}
              <span className='text-text-dark text-md font-semibold'>
                May 08
              </span>
            </p>
          </div>
          <div className='flex md:items-center items-start gap-x-1'>
            <Image
              src={Key}
              alt='Key'
            />
            <Paragraph text='Rent' />
          </div>
        </div>
        <div className='grid gap-y-4'>
          {/* Prise And rate */}
          <div className='flex'>
            <div className='flex items-center'>
              <Title
                text='$ 1,050'
                className='text-primary'
              />
              <p className='flex text-text text-lg'>/mouth</p>
            </div>
          </div>
          {/* button section */}
          <div className='flex flex-col md:flex-row w-full gap-4'>
            <Button
              icon={Edit}
              text='Edit'
              isOutline
              className='flex w-full gap-x-2 rounded-xl'
            />
            <Button
              icon={Delete}
              text='Delete'
              isOutline
              className='flex border border-red text-red shadow-red w-full gap-x-2 rounded-xl'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPropertyCard;
