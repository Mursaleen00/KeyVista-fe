// src/components/cards/my-property-card.tsx

'use client';

// Next Import
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// Components Import
import Button from '../buttons/button';
import Paragraph from '../common/paragraph';
import Title from '../common/title';

// Icon Import
import Delete from '@/../public/icons/delete.svg';
import Edit from '@/../public/icons/edit.svg';
import Key from '@/../public/icons/key.svg';
import Location from '@/../public/icons/location.svg';
import poste from '@/../public/icons/posted.svg';

// Interfaces Import
import { MyPropertyInterfaces } from '@/interfaces/properties/my-properties-interface';

// Constant Import
import { urls } from '@/constant/router/routes';

const MyPropertyCard = ({
  thumbnail,
  washRoom,
  tvLaunch,
  lounge,
  kitchen,
  location,
  title,
  price,
  posted,
  purpose,
  duration,
}: MyPropertyInterfaces) => {
  // Router
  const { push } = useRouter();
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-2 sm:p-4 lg::p-7 border border-border bg-white shadow-xl max-w-7xl sm:gap-x-5 gap-y-6 rounded-xl m-2'>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 w-full h-full lg:col-span-2'>
        {/* image section */}
        <div className='flex w-full lg:col-span-2'>
          <Image
            src={thumbnail ?? ''}
            alt='Placeholder'
            className='rounded-lg w-full h-full lg:max-h-80'
            width={500}
            height={500}
          />
        </div>
        {/* room details Images */}
        <div className='lg:grid grid-cols-2 w-full h-full gap-2 sm:col-span-1 hidden lg:col-span-1'>
          <div className='flex w-full rounded-lg h-full'>
            <Image
              src={washRoom}
              alt=''
              width={500}
              height={500}
              className='flex rounded-lg w-full h-full'
            />
          </div>
          <div>
            <Image
              src={tvLaunch}
              alt=''
              width={300}
              height={150}
              className='flex  rounded-lg w-full h-full'
            />
          </div>
          <div>
            <Image
              src={lounge}
              alt=''
              width={300}
              height={150}
              className='flex  rounded-lg w-full h-full'
            />
          </div>
          <div>
            <Image
              src={kitchen}
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
        {/* Name & Location &  */}
        <div className='flex flex-col gap-y-4 md:gap-y-2'>
          <Title text={title} />
          <div className='flex md:items-center items-start gap-x-1'>
            <Image
              src={Location}
              alt='location'
            />
            <Paragraph text={location} />
          </div>
          <div className='flex md:items-center items-start gap-x-1'>
            <Image
              src={poste}
              alt='Posted'
            />
            <p className='text-text-light text-sm'>
              Posted on{' '}
              <span className='text-text-dark text-md font-semibold'>
                {posted}
              </span>
            </p>
          </div>
          <div className='flex md:items-center items-start gap-x-1'>
            <Image
              src={Key}
              alt='Key'
            />
            <Paragraph text={purpose} />
          </div>
        </div>
        <div className='grid gap-y-4'>
          {/* Prise And rate */}
          <div className='flex'>
            <div className='flex items-center'>
              <Title
                text={price}
                className='text-primary'
              />
              <Paragraph
                text={duration || ''}
                className='flex text-text text-lg'
              />
            </div>
          </div>
          {/* button section */}
          <div className='flex flex-col md:flex-row w-full gap-4'>
            <Button
              icon={Edit}
              text='Edit'
              isOutline
              className='flex w-full gap-x-2 rounded-xl'
              onClick={() => {
                push(urls.addProperties);
              }}
            />
            <Button
              icon={Delete}
              text='Delete'
              isOutline
              className='flex border border-red text-red shadow-red w-full gap-x-2 rounded-xl hover:bg-white hover:text-red'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPropertyCard;
