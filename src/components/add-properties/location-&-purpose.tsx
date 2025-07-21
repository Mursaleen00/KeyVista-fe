import React from 'react';
import Button from '../buttons/button';
import { ResidentialData } from '@/constant/add-properties/residential-data';

const LocationAndPurpose = () => {
  return (
    <div>
      <h1 className='flex text-text-dark font-semibold text-xl'>
        Purpose & Location
      </h1>
      <div className='flex flex-col gap-y-2 mt-4 items-center justify- text-start '>
        <div className='flex flex-col gap-y-7'>
          <div className='flex flex-col gap-y-2 mt-4'>
            <h1 className='text-text-normal cursor-pointer'>Select purpose</h1>
            <div className='flex gap-x-4'>
              <Button
                // className=' bg-white text-primary hover:bg-primary hover:text-white cursor-pointer border border-black'
                text='Sell'
                isOutline
              />
              <Button
                text='Rent'
                isOutline
              />
            </div>
          </div>
          <h1 className='text-text-normal'>
            What kind of property do you have?
          </h1>
          <div className='flex flex-col gap-y-5 justify-start items-start text-start'>
            <h1 className='text-primary pb-2 border-b-primary border-2 border-t-white border-x-white'>
              Residential
            </h1>
            <div className='flex flex-wrap w-[600px] gap-2'>
              {ResidentialData.map((item, i) => (
                <Button
                  key={i}
                  text={item.text}
                  // className='flex hover:bg-primary hover:text-white cursor-pointer border border-black'
                  isOutline
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationAndPurpose;
