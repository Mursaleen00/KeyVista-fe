import house from '@/../public/images/bgHouse.png';
import whiteLogo from '@/../public/images/whiteLogo.png';
import Image from 'next/image';
import React from 'react';

const GreenHouse = () => {
  return (
    <div className='relative grid'>
      <Image
        src={house}
        alt='house'
        width={400}
        height={100}
        className='flex h-[600px] md:h-screen w-full'
      />
      <div className=''>
        <Image
          src={whiteLogo}
          alt='whiteLogo'
          width={200}
          className=' flex absolute top-12 left-10 '
        />
        <p className='grid absolute bottom-12 left-4 right-4 text-white text-4xl  font-semibold'>
          Lorem Ipsum is simply dummy text of the printing and
        </p>
      </div>
    </div>
  );
};

export default GreenHouse;
