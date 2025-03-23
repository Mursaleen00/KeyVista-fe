import BreadCrumb from '@/components/common/bread-crumb';
import Title from '@/components/common/title';
import Image from 'next/image';
import React from 'react';
import location from '@/../public/icons/location.svg';
import share from '@/../public/icons/share.svg';
import Heart from '@/../public/icons/blackHeart.svg';
import blackHouse from '@/../public/images/blackHouse.png';
import stairs from '@/../public/images/stairs.png';
import TvLaunch from '@/../public/images/TvLaunch.png';
import Rooms from '@/../public/images/Rooms.png';
import Bathrooms from '@/../public/images/Bathrooms.png';

const PropertyDetailsView = () => {
  return (
    <div className='grid px-2 sm:px-14 py-9 gap-y-4'>
      {/* BreadCrumb */}
      <BreadCrumb />
      {/* Title */}
      <div className='flex flex-col gap-y-3'>
        <Title
          text='Le Plateau Mont-Royal'
          className='flex'
        />
        {/* location section */}
        <div className='flex md:flex-row flex-col md:justify-between gap-4'>
          {/* location */}
          <div className='flex items-start gap-1'>
            <Image
              src={location}
              alt=''
              width={30}
            />
            <p className='text-text-dark'>
              1011 Robson Street, Vancouver, BC V6E 1C2
            </p>
          </div>
          {/* Like & share */}
          <div className='flex text-text-dark px-7 items-center justify-center gap-2 font-semibold'>
            <div className='flex items-center gap-1'>
              <Image
                src={share}
                alt=''
              />
              <p>Share</p>
            </div>
            <div className='flex items-center gap-1'>
              <Image
                src={Heart}
                alt=''
              />
              <p>Like</p>
            </div>
          </div>
        </div>
      </div>
      {/* image section */}
      <div className='flex flex-col md:flex-row gap-7 w-full'>
        <div>
          <Image
            src={blackHouse}
            alt=''
            className='flex w-full lg:w-[4000px] h-[500px]'
          />
        </div>
        <div className='grid grid-cols-2  w-full h-full gap-4'>
          <div>
            <Image
              src={Rooms}
              alt=''
              width={200}
              className='flex w-'
            />
          </div>
          <div>
            <Image
              src={TvLaunch}
              alt=''
              width={200}
              className='flex w-fu'
            />
          </div>
          <Image
            src={Bathrooms}
            alt=''
            width={200}
            className='flex w-ful'
          />
          <Image
            src={stairs}
            alt=''
            width={200}
            className='flex w-fu'
          />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsView;
