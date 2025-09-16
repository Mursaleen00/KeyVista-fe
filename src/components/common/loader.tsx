// src/components/common/loader.tsx

// React Imports
import React from 'react';
import { MoonLoader } from 'react-spinners';

const Loader = () => {
  return (
    // <div className='flex w-full h-full items-center justify-center max-h-screen border'>
    <MoonLoader
      color='#6A4C65'
      size={100}
      speedMultiplier={2}
      className='flex border'
    />
    // </div>
  );
};

export default Loader;
