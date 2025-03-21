import Image from 'next/image';
import React from 'react';
import heroSection from '@/../public/images/heroHouse.png';

const HeroSection = () => {
  return (
    <div className='relative'>
      <Image
        src={heroSection}
        alt='heroSection'
        width={2000}
        height={600}
        className='grid w-full h-[400px]'
      />
      <div className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-white  justify-center flex flex-col items-center gap-y-7'>
        <h1 className='flex text-5xl font-bold md:text-center'>
          Buy, Rent, or Sell Your
          <br /> Property Easily
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
