import Image from 'next/image';
import React from 'react';
import Title from '../common/title';
import Location from '@/../public/icons/location.svg';
import Star from '@/../public/icons/star.svg';
import bathrooms from '@/../public/icons/bathrooms.svg';
import bedrooms from '@/../public/icons/bedrooms.svg';
import HomeSpace from '@/../public/icons/homeSpace.svg';
import Paragraph from '../common/paragraph';
import { ProductCardHorizontalInterfaces } from '@/interfaces/properties/product-card-horizontal-interface';
import HeartIcon from '../common/heart-icon';

const ProductCardHorizontal = ({
  thumbnail,
  washRoom,
  tvLaunch,
  lounge,
  kitchen,
  location,
  title,
  price,
  rate,
  beds,
  bath,
  square,
}: ProductCardHorizontalInterfaces) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 m-2 md:m-0 p-2 sm:p-4 ld::p-7 border-2 bg-white shadow-2xl max-w-7xl sm:gap-x-5 gap-y-6 rounded-xl'>
      {/* image section */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 w-full h-full lg:col-span-2'>
        <div className='flex w-full lg:col-span-2'>
          <Image
            src={thumbnail ?? ''}
            alt='Placeholder'
            className='rounded-lg w-full h-[300px]'
            width={500}
            height={500}
          />
        </div>
        {/* room details  */}
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
        {/* Heading */}
        <div className='flex flex-row justify-between'>
          <div className='flex flex-col gap-y-2'>
            <Title text={title} />
            <div className='flex md:items-center items-start'>
              <Image
                src={Location}
                alt='location'
              />
              <Paragraph text={location} />
            </div>
          </div>
          <div>
            <HeartIcon />
          </div>
        </div>
        <div className='grid gap-y-4'>
          {/* Prise And rate */}
          <div className='flex justify-between'>
            <div className='flex items-center'>
              <Title
                text={price}
                className='text-primary'
              />
              <p className='flex text-text text-lg'>/mouth</p>
            </div>
            <div className='flex items-center text-2xl gap-x-1'>
              <Image
                src={Star}
                alt=''
              />
              <p className='flex text-text text-md font-normal'>{rate}</p>
            </div>
          </div>
          {/* border */}
          <div className='flex border h-[1px]' />
          {/* House details */}
          <div className='flex px-2 sm:px-4 pb-4 gap-2 justify-around items-center'>
            <div className='flex flex-col lg:flex-row gap-y-2 sm:gap-x-1 items-start lg:items-center'>
              <Image
                src={bedrooms}
                alt=''
              />
              <Paragraph
                text={beds}
                className='text-heading'
              />
            </div>
            <div className='flex flex-col lg:flex-row gap-y-2 sm:gap-x-1 items-start lg:items-center'>
              <Image
                src={bathrooms}
                alt=''
              />
              <Paragraph
                text={bath}
                className='text-heading'
              />
            </div>
            <div className='flex flex-col lg:flex-row gap-y-2 sm:gap-x-1 items-start lg:items-center'>
              <Image
                src={HomeSpace}
                alt=''
              />
              <Paragraph
                text={square}
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
