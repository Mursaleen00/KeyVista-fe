import Image from 'next/image';
import React from 'react';
import notFound from '@/../public/images/not found.avif';

const NotFound = () => {
  return (
    <div>
      <Image
        src={notFound}
        alt='notFound'
        width={1000}
        height={500}
        className='grid w-full mt-14'
      />
    </div>
  );
};

export default NotFound;
