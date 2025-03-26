'use client';
import { urls } from '@/constant/routes';
import { useRouter } from 'next/navigation';
import React from 'react';

const BreadCrumb = () => {
  const router = useRouter();
  return (
    <div className='flex text-text-light'>
      <div className='flex gap-1 sm:gap-3 text-sm sm:text-md'>
        <p onClick={() => router.push(urls.home)}>Home</p>/
        <p onClick={() => router.push(urls.rentProperties)}>Rent Properties</p>/
        <p className='text-primary'>Arabian Villas</p>
      </div>
    </div>
  );
};

export default BreadCrumb;
