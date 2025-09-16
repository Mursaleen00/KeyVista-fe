// src/components/properties/property-details/properties-price.tsx

// React & Next imports
import React from 'react';
import { useRouter } from 'next/navigation';

// Components imports
import Button from '../../buttons/button';

// constant imports
import { urls } from '@/constant/router/routes';

// Icons imports
import call from '@/../public/icons/call.svg';

interface propertyPriceI {
  status: string;
  price: string;
  duration?: boolean;
}

const PropertiesPrice = ({ status, price, duration }: propertyPriceI) => {
  const { push } = useRouter();
  return (
    <div className='grid bg-white rounded-xl shadow-text shadow-md w-full sm:p-8 p-5 h-fit gap-y-6'>
      {/* text section */}
      <div className='grid gap-y-2'>
        <p className='text-text text-lg'>{status}</p>
        <h1 className='flex text-text-dark text-3xl font-bold items-center'>
          {price}
          {duration && (
            <span className='text-text-light font-normal text-md'>/month</span>
          )}
        </h1>
      </div>
      {/* Button section */}
      <div className='grid gap-y-3 font-semibold'>
        <Button
          text='Chat with owner'
          className='w-full truncate'
          onClick={() => push(urls.chat)}
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
