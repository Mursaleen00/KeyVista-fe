import React from 'react';
import Button from '../buttons/button';
import Input from '../inputs/input';
import { bedroomsData } from '@/constant/add-properties/bedrooms-data';
import { bathroomsData } from '@/constant/add-properties/bathrooms-data';

const FeatureAndPrice = () => {
  return (
    <div className='flex flex-col gap-y-4 mt-6'>
      <h1 className='flex text-text-dark font-semibold text-xl'>
        Feature & Price
      </h1>
      <div className='flex gap-2 flex-col items-center text-start w-full border justify-center'>
        <div className='flex flex-col w-full max-w-[600px]'>
          <div className='w-full'>
            <Input
              type='text'
              label='What is the size of your property?'
              placeholder='Enter Property Size'
              className='p-1 flex w-full'
            />
          </div>
          <div className='flex flex-col w-full py-7'>
            <h1 className='flex text-text-normal'>
              How many bathrooms does it have?
            </h1>
            <div className='flex flex-wrap gap-2 w-full mt-4'>
              {bedroomsData.map((item, i) => (
                <Button
                  text={item.text || ''}
                  isOutline
                  key={i}
                  className='flex rounded-xl'
                />
              ))}
            </div>
          </div>
          <div className='flex flex-col w-full'>
            <h1 className='flex text-text-normal'>
              How many bathrooms does it have?
            </h1>
            <div className='flex flex-wrap gap-2 w-full mt-4'>
              {bathroomsData.map((item, i) => (
                <Button
                  text={item.text || ''}
                  isOutline
                  key={i}
                  className='flex rounded-xl'
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureAndPrice;
//
