'use client';
import Image from 'next/image';
import React from 'react';
import StatusChip from '../common/status-chip';
import Title from '../common/title';
import Paragraph from '../common/paragraph';
import Bathrooms from '@/../public/icons/bathrooms.svg';
import Bedrooms from '@/../public/icons/bedrooms.svg';
import HomeSpace from '@/../public/icons/homeSpace.svg';
import { CardsInterfaces } from '@/interfaces/properties/cards-interface';
import { useState } from 'react';
import { IoMdHeartEmpty } from 'react-icons/io';
import { GoHeartFill } from 'react-icons/go';

const PropertyCard = ({
  duration,
  status,
  title,
  location,
  price,
  thumbnail,
  bedrooms,
  bathrooms,
  area,
}: CardsInterfaces) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className='grid w-full border border-border rounded-3xl'>
      {/* Image Section  */}
      <div className='relative'>
        <Image
          src={thumbnail || ''}
          alt='building'
          width={260}
          height={10}
          className='w-full'
        />

        <StatusChip
          text={status}
          className='absolute top-3 right-3'
        />
      </div>
      {/* Properties details section */}
      <div className='relative px-4 pt-4 gap-y-3 grid'>
        <button
          onClick={() => setLiked(!liked)}
          className={`absolute top-3 right-3 bg-primary-light w-fit p-3 rounded-full items-center 
            justify-center text-primary`}
        >
          {liked ? <GoHeartFill /> : <IoMdHeartEmpty />}
        </button>
        {/* <HeartIcon className='absolute top-3 right-3' /> */}
        <Title text={title} />
        <Paragraph text={location} />
        <p className='text-primary text-2xl items-center flex'>
          {price}
          <span className='text-text-light text-[15px]'> {duration}</span>
        </p>
      </div>
      {/* border */}
      <div className='border border-border-light m-4'></div>
      {/* Home information */}
      <div className='flex px-2 sm:px-4 pb-4 gap-4 justify-around items-center'>
        <div className='flex flex-col sm:flex-row gap-y-2 sm:gap-x-1 items-start sm:items-center'>
          <Image
            src={Bedrooms}
            alt=''
            className='flex justify-center items-center'
          />
          <Paragraph
            text={bedrooms}
            className='text-heading'
          />
        </div>
        <div className='flex flex-col sm:flex-row gap-y-2 sm:gap-x-1 items-start sm:items-center'>
          <Image
            src={Bathrooms}
            alt=''
          />
          <Paragraph
            text={bathrooms}
            className='text-heading'
          />
        </div>
        <div className='flex flex-col sm:flex-row gap-y-2 sm:gap-x-1 items-start sm:items-center'>
          <Image
            src={HomeSpace}
            alt=''
          />
          <Paragraph
            text={area}
            className='text-heading'
          />
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
