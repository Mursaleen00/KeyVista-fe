import Image from 'next/image';
import React from 'react';
import noFavoriteProperties from '@/../public/images/no-favorite-properties.jpg';
import Button from '../buttons/button';
import { urls } from '@/constant/router/routes';
import { useRouter } from 'next/navigation';
const NoFavoriteProperties = () => {
  const { push } = useRouter();
  return (
    <div className='flex flex-col items-center justify-center px-7 pt-6'>
      <Image
        src={noFavoriteProperties}
        alt='NoFavoriteProperties'
        className='flex justify-center items-center rounded-3xl'
        width={500}
        height={300}
      />
      <div className='flex flex-col items-center justify-center pt-6 gap-y-4'>
        <h1 className='text-xl sm:text-2xl font-bold'>
          No favorite properties found
        </h1>
        <p className='text-text-light'>
          You have not added any favorite properties yet.
        </p>
        <Button
          className='flex'
          text='Go to properties'
          onClick={() => {
            push(urls.buyProperties);
          }}
        />
      </div>
    </div>
  );
};

export default NoFavoriteProperties;
