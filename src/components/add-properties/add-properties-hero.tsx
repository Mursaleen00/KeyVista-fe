// src/components/add-properties/add-properties-hero.tsx

// Import Interfaces
import { AddPropertiesHeroI } from '@/interfaces/properties/Add-properties-interface';

// Import React And Next Image
import Image from 'next/image';
import React from 'react';

// Import Image
import heroImage from '@/../public/properties-hero/add-properties-hero.png';

const AddPropertiesHero: React.FC<AddPropertiesHeroI> = ({
  title,
  description,
}) => {
  return (
    <div className='flex flex-col lg:flex-row justify-around items-center bg-hero-gradient w-full h-full pt-9 px-8 gap-y-6 xl:justify-between'>
      <div className='flex flex-col h-full text-white'>
        {/* Title */}
        <h1 className='text-3xl font-bold'>{title}</h1>
        {/* Description */}
        <p className='mt-2 text-lg'>{description}</p>
      </div>
      {/* Hero Image */}
      <Image
        src={heroImage}
        alt='Hero Image'
        width={500}
        height={300}
      />
    </div>
  );
};

export default AddPropertiesHero;
