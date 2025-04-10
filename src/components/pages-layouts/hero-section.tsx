import Image from 'next/image';
import React from 'react';
import heroHouse from '@/../public/images/heroHouse.png';

const HeroSection = () => {
  return (
    <div className='relative'>
      <Image
        src={heroHouse}
        alt='heroHouse'
        width={2000}
        height={600}
        className='grid w-full h-[450px]'
      />
      <div className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-white justify-center flex flex-col items-center gap-y-7'>
        <h1 className='flex text-2xl sm:text-5xl font-bold gap-y-5 items-center justify-center text-center'>
          Buy, Rent, or Sell Your Property Easily
        </h1>
        <p>
          A great platform to buy, sell, or even rent your properties without
          any commisions.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
