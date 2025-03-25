import React from 'react';
import bathrooms from '@/../public/icons/bathrooms.svg';
import bedrooms from '@/../public/icons/bedrooms.svg';
import HomeSpace from '@/../public/icons/homeSpace.svg';
import Tools from '@/../public/icons/Tools.svg';
import Image from 'next/image';

const PropertyFeatures = () => {
  return (
    <div className='grid sm:grid-cols-3 lg:grid-cols-4 border border-border w-full bg-white shadow-md rounded-lg px-4 sm:px-9 py-5 gap-y-5'>
      {/* bedrooms */}
      <div className='flex flex-row sm:flex-col gap-4 items-center'>
        <h1 className='text-text text-xl order-2 sm:order-1'>Bedrooms</h1>
        <div className='flex gap-3 sm:order-2 order-1'>
          <Image
            src={bedrooms}
            alt=''
            width={35}
          />
          <p className='text-2xl text-text-dark'>5</p>
        </div>
      </div>
      {/* Bathrooms */}
      <div className='flex flex-row sm:flex-col gap-4 items-center'>
        <h1 className='text-text text-xl order-2 sm:order-1'>Bathrooms</h1>
        <div className='flex gap-3 items-start sm:order-2 order-1'>
          <Image
            src={bathrooms}
            alt=''
            width={35}
          />
          <p className='text-2xl text-text-dark'>6</p>
        </div>
      </div>
      {/* Square Area */}
      <div className='flex flex-row sm:flex-col gap-4 items-center'>
        <h1 className='text-text text-xl order-2 sm:order-1'>Square Area</h1>
        <div className='flex gap-3 items-start sm:order-2 order-1'>
          <Image
            src={HomeSpace}
            alt=''
            width={35}
          />
          <p className='text-2xl text-text-dark'>400 SQ.YD</p>
        </div>
      </div>
      {/* Repair Quality */}
      <div className='flex flex-row sm:flex-col gap-4 items-center'>
        <h1 className='text-text text-xl order-2 sm:order-1'>Repair Quality</h1>
        <div className='flex gap-3 items-start sm:order-2 order-1'>
          <Image
            src={Tools}
            alt=''
            width={35}
          />
          <p className='flex items-start text-2xl'>Modern Loft</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyFeatures;
