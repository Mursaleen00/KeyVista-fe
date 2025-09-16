// src/components/properties/property-details/amenities.tsx

// React & Next imports
import React, { FC } from 'react';
import Image from 'next/image';

// Components imports
import Title from '../../common/title';

// Interface imports
import { amenitiesProps } from '@/interfaces/properties/property-details-interface';

const Amenities: FC<amenitiesProps> = ({ amenities }) => {
  if (!amenities || amenities.length === 0) {
    return null;
  }
  return (
    <div className='grid gap-6'>
      <Title text='Features / Amenities' />
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-y-4 text-md'>
        {amenities.map((items, i) => (
          <div
            className='flex gap-x-4'
            key={i}
          >
            <Image
              src={items.image}
              alt={items.title}
              width={20}
              height={20}
            />
            <p>{items.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
