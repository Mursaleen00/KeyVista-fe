'use client';
import { useRouter } from 'next/navigation';
import { IoArrowBack } from 'react-icons/io5';

import React from 'react';

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className='flex  items-center gap-x-2'
    >
      <IoArrowBack size={20} />

      <h1 className='text-lg fon'>Back</h1>
    </button>
  );
};

export default BackButton;
