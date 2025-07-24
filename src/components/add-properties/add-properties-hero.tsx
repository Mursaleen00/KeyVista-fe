import Image from 'next/image';
import React from 'react';
import heroImage from '@/../public/properties-hero/add-properties-hero.png';
import { AddPropertiesHeroI } from '@/interfaces/properties/Add-properties-interface';

const AddPropertiesHero: React.FC<AddPropertiesHeroI> = ({
  title,
  description,
}) => {
  return (
    <div className='flex flex-col lg:flex-row justify-around items-center bg-hero-gradient w-full h-full pt-9 px-8 gap-y-6 xl:justify-between'>
      <div className='flex flex-col h-full text-white'>
        <h1 className='text-3xl font-bold'>{title}</h1>
        <p className='mt-2 text-lg'>{description}</p>
      </div>
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
