'use client';
import Image from 'next/image';
import React from 'react';
import notFound from '@/../public/images/not found.avif';
import Button from '@/components/buttons/button';
import { urls } from '@/constant/urls-data';
import { useRouter } from 'next/navigation';

const NotFound = () => {
  const router = useRouter();
  return (
    <div className='grid items-center justify-items-center w-full'>
      <Image
        src={notFound}
        alt='notFound'
        width={800}
        height={100}
      />
      <p className='flex font-semibold text-3xl'>Error 404 Page Not found </p>
      <Button
        text='Go to home'
        className='flex mt-6'
        onClick={() => router.push(urls.home)}
      />
    </div>
  );
};

export default NotFound;
