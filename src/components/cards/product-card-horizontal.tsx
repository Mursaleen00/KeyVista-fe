import Image from 'next/image';
import React from 'react';
import Title from '../common/title';
import location from '@/../public/icons/location.svg';
import Star from '@/../public/icons/star.svg';
import bathrooms from '@/../public/icons/bathrooms.svg';
import bedrooms from '@/../public/icons/bedrooms.svg';
import HomeSpace from '@/../public/icons/homeSpace.svg';
import Paragraph from '../common/paragraph';
import HeartIcon from '../common/heart-icon';

const ProductCardHorizontal = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 p-2 sm:p-7 border border-black max-w-6xl sm:gap-x-6'>
      {/* image section */}
      <div className='grid grid-cols-1 sm:grid-cols-5 gap-3 w-full border border-red'>
        <div className='flex w-full sm:col-span-3'>
          <Image
            src='https://placehold.co/900x700'
            alt='Placeholder'
            className='rounded-lg w-full h-full'
            width={500}
            height={1000}
          />
        </div>
        <div className='grid grid-cols-2 w-full h-full gap-2 sm:col-span-2'>
          <div className='flex w-full rounded-lg'>
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
      <div className='grid grid-cols-1'>
        {/* Heading */}
        <div className='relative flex flex-col gap-y-3'>
          <Title text='Charming Triplex' />
          <div className='flex items-center'>
            <Image
              src={location}
              alt='location'
            />
            <Paragraph text='1213 Rue Papineau, Montreal, QC H2L 3B5' />
          </div>
          <div className='absolute right-0 top-0'>
            <HeartIcon />
          </div>
        </div>
        <div>
          {/* Prise And rate */}
          <div className='flex justify-between'>
            <div className='flex items-center'>
              <Title
                text='$ 1,050'
                className='text-primary'
              />
              <p className='flex text-text text-lg'>/mouth</p>
            </div>
            <div className='flex items-center text-2xl gap-x-1'>
              <Image
                src={Star}
                alt=''
              />
              <p className='flex text-text text-md font-normal'>4.8</p>
            </div>
          </div>
          <div className='flex border' />
          <div className='flex px-2 sm:px-4 pb-4 gap-4 justify-around items-center'>
            <div className='flex flex-col sm:flex-row gap-y-2  sm:gap-x-1 items-start sm:items-center text-center justify-center'>
              <Image
                src={bedrooms}
                alt=''
                className='flex justify-center items-center'
              />
              <Paragraph
                text='6 badRooms'
                className='text-heading'
              />
            </div>
            <div className='flex flex-col sm:flex-row gap-y-2  sm:gap-x-1 items-start sm:items-center'>
              <Image
                src={bathrooms}
                alt=''
              />
              <Paragraph
                text='5 bathrooms'
                className='text-heading'
              />
            </div>
            <div className='flex flex-col sm:flex-row gap-y-2  sm:gap-x-1 items-start sm:items-center'>
              <Image
                src={HomeSpace}
                alt=''
              />
              <Paragraph
                text='150 SQ.YD'
                className='text-heading'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardHorizontal;
