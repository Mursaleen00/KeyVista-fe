import React from 'react';
import bathrooms from '@/../public/icons/bath-rooms.svg';
import bedrooms from '@/../public/icons/bed-rooms.svg';
import HomeSpace from '@/../public/icons/home-space.svg';
import Tools from '@/../public/icons/tools.svg';
import Image from 'next/image';

const PropertyFeatures = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 bg-white border border-border rounded-xl p-2 md:p-7 sm:gap-x-4 gap-y-4'>
      {/* bedrooms */}
      <div className='flex flex-row sm:flex-col gap-x-4 sm:gap-x-0 sm:gap-y-4 items-center sm:items-start'>
        <h1 className='text-text text-md sm:text-xl order-2 sm:order-1'>
          Bedrooms
        </h1>
        <div className='flex gap-3 sm:order-2 order-1 items-center'>
          <Image
            src={bedrooms}
            alt=''
            width={35}
          />
          <p className='text-xl sm:text-2xl text-text-dark'>5</p>
        </div>
      </div>
      {/* Bathrooms */}
      <div className='flex flex-row sm:flex-col gap-x-4 sm:gap-x-0 sm:gap-y-4 items-center sm:items-start'>
        <h1 className='text-text text-md sm:text-xl order-2 sm:order-1'>
          Bathrooms
        </h1>
        <div className='flex gap-3 items-center sm:order-2 order-1'>
          <Image
            src={bathrooms}
            alt=''
            width={35}
          />
          <p className='text-xl sm:text-2xl text-text-dark'>6</p>
        </div>
      </div>
      {/* Square Area */}
      <div className='flex flex-row sm:flex-col gap-x-4 sm:gap-x-0 sm:gap-y-4 items-center sm:items-start truncate'>
        <h1 className='text-text text-md sm:text-xl order-2 sm:order-1'>
          Square Area
        </h1>
        <div className='flex gap-3 items-center sm:order-2 order-1'>
          <Image
            src={HomeSpace}
            alt=''
            width={35}
          />
          <p className='text-xl sm:text-2xl text-text-dark'>400 SQ.YD</p>
        </div>
      </div>
      {/* Repair Quality */}
      <div className='flex flex-row sm:flex-col gap-x-4 sm:gap-x-0 sm:gap-y-4 items-center sm:items-start truncate'>
        <h1 className='text-text text-md sm:text-xl order-2 sm:order-1'>
          Repair Quality
        </h1>
        <div className='flex gap-3 items-center sm:order-2 order-1'>
          <Image
            src={Tools}
            alt=''
            width={35}
          />
          <p className='flex items-start text-md sm:text-2xl'>Modern Loft</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyFeatures;
