import React from 'react';
import Button from '../buttons/button';
import call from '@/../public/icons/call.svg';

const PropertiesPrice = () => {
  return (
    <div className='grid bg-white rounded-xl shadow-text shadow-md w-full sm:p-8 p-5 h-fit gap-y-6'>
      {/* text section */}
      <div className='grid gap-y-2'>
        <p className='text-text text-lg'>Rent Price</p>
        <h1 className='flex text-text-dark text-3xl font-bold items-center'>
          & 800
          <span className='text-text-light font-normal text-md'>/month</span>
        </h1>
      </div>
      {/* Button section */}
      <div className='grid gap-y-3 font-semibold'>
        <Button
          text='Chat with Buyer'
          className='w-full truncate'
        />
        <Button
          text='Call Now'
          isOutline
          icon={call}
          className='gap-2 w-full text-text-dark'
        />
      </div>
    </div>
  );
};

export default PropertiesPrice;
