import Image from 'next/image';
import React from 'react';
import StatusChip from '../buttons/status-chip';
import Title from '../common/title';
import Paragraph from '../common/paragraph';
import HeartIcon from '../common/heart-icon';
import bathrooms from '@/../public/icons/bathrooms.svg';
import bedrooms from '@/../public/icons/bedrooms.svg';
import HomeSpace from '@/../public/icons/homeSpace.svg';
import beautifulHouse from '@/../public/images/beautifulHouse.png';

const BuyCard = () => {
  return (
    <div className='grid w-fit border border-border rounded-3xl m-2'>
      {/* Image Section  */}
      <div className='relative'>
        <Image
          src={beautifulHouse}
          alt='building'
          width={260}
          height={10}
          className='w-full'
        />
        <StatusChip
          text='Buy'
          className='absolute top-3 right-3'
        />
      </div>
      {/* Properties details section */}
      <div className='relative px-4  pt-4 gap-y-3 grid'>
        <HeartIcon className='absolute top-3 right-3' />
        <Title text='Tha Cozy condo' />
        <Paragraph
          text='123 Elm Street, Toronto, ON M5V 1J2'
          className=''
        />
        <p className='text-primary text-2xl items-center flex '>$1,200</p>
      </div>
      {/* border */}
      <div className='border border-border-light  m-4 '></div>
      {/* Home information */}
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
  );
};

export default BuyCard;
