// src/app/components/cards/property-by-city-card.tsx

// Image Import
import { PropertyByCityInterfaces } from '@/interfaces/properties/property-by-city-card-interface';

// Next Import
import Image from 'next/image';

// React Import
import React from 'react';

const PropertyByCityCard = ({
  icon,
  cityName,
  description,
}: PropertyByCityInterfaces) => {
  return (
    <div className='grid bg-white w-full rounded-3xl shadow-xl max-w-sm'>
      {/* Image */}
      {icon && (
        <Image
          src={icon}
          alt=''
          width={500}
          height={100}
          className='w-full'
        />
      )}

      {/* Text section */}
      <div className='p-4'>
        <h1 className='font-semibold text-xl'>{cityName} </h1>
        <p className='text-text-light'>{description} </p>
      </div>
    </div>
  );
};

export default PropertyByCityCard;
