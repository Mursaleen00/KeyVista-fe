// src/app/nat-found.tsx

'use client';

// Next & React Imports
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

// Components Imports
import Button from '@/components/buttons/button';
import Navbar from '@/components/pages-layouts/navbar';

// Constant Import
import { urls } from '@/constant/router/routes';

// Image  Import
import notFound from '@/../public/images/not found.jpg';

const NotFound = () => {
  // router
  const router = useRouter();

  return (
    <div className='grid items-center justify-items-center w-full'>
      <Navbar />
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
