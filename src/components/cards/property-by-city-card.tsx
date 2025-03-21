// import { PropertyByCityCardData } from '@/constant/cards/property-by-city-card-data';
import building from '@/../public/images/building.png';

import Image from 'next/image';
import React from 'react';

const PropertyByCityCard = () => {
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-around py-9 gap-6'>
      <div className=' bg-white w-full rounded-3xl shadow-xl'>
        <Image
          src={building}
          alt=''
          width={300}
          height={100}
          className='w-full'
        />
        <div className=' p-4'>
          <h1 className='font-semibold text-xl'>Karachi </h1>
          <p className='text-text-light'>Browse 250 Properties </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyByCityCard;
