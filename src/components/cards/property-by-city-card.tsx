import { PropertyByCityCardData } from '@/constant/cards/property-by-city-card-data';
import Image from 'next/image';
import React from 'react';

const PropertyByCityCard = () => {
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-around py-9 gap-6'>
      {PropertyByCityCardData.map((item, i) => (
        <div
          key={i}
          className=' bg-white w-fit rounded-xl shadow-xl '
        >
          <Image
            src={item.icon}
            alt=''
            width={300}
            height={100}
          />
          <div className=' p-4'>
            <h1 className='font-semibold text-xl'> {item.title} </h1>
            <p className='text-text-light'> {item.text} </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyByCityCard;
