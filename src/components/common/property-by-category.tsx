import { props } from '@/interfaces/properties/property-by-category-interface';
import Image from 'next/image';
import React from 'react';

const PropertyByCategory = ({ icon, tittle, text }: props) => {
  return (
    <div className='flex  gap-x-2 items-center rounded-md p-3 w-full bg-white shadow-md'>
      <Image
        src={icon || ''}
        alt=''
        width={80}
        height={100}
      />
      <div>
        <h1 className='font-semibold text-xl'>{tittle}</h1>
        <p className='text-text-light'> {text}</p>
      </div>
    </div>
  );
};

export default PropertyByCategory;
