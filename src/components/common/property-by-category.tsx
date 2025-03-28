// src/component/common/auth-heading.tsx

// interface Import
import { props } from '@/interfaces/properties/property-by-category-interface';

// Next Import
import Image from 'next/image';

// React Import
import React from 'react';

const PropertyByCategory = ({ icon, tittle, text }: props) => {
  return (
    <div className='flex  gap-x-2 items-center rounded-md p-3 w-full bg-white shadow-md'>
      {/* Image  */}
      <Image
        src={icon || ''}
        alt=''
        width={80}
        height={100}
      />
      {/* text section */}
      <div>
        <h1 className='font-semibold text-xl'>{tittle}</h1>
        <p className='text-text-light'> {text}</p>
      </div>
    </div>
  );
};

export default PropertyByCategory;
