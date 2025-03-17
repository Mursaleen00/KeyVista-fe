import { propertyByCategoryData } from '@/constant/property-by-category-data';
import Image from 'next/image';
import React from 'react';
import Title from './title';

const PropertyByCategory = () => {
  return (
    <div className='grid '>
      <Title
        text='Browse Property by Category'
        className='px-6'
      />
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-6 gap-5 bg'>
        {propertyByCategoryData.map((item, i) => (
          <div
            key={i}
            className='flex  gap-x-2 items-center rounded-md p-3 w-full bg-white shadow-md'
          >
            <Image
              src={item.icon}
              alt=''
              width={80}
              height={100}
            />
            <div className=''>
              <h1 className='font-semibold text-xl'>{item.tittle}</h1>
              <p className='text-text-light'> {item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyByCategory;
