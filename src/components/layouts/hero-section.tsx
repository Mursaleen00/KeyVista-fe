import Image from 'next/image';
import React from 'react';
import heroSection from '@/../public/images/heroHouse.png';

const HeroSection = () => {
  return (
    <div>
      <Image
        src={heroSection}
        alt='heroSection'
        width={1500}
        height={100}
        className='relative flex w-full h-[500px]'
      />
      <div className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-white text-center justify-center flex flex-col items-center gap-y-9'>
        <h1 className='flex text-5xl font-bold '>
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
