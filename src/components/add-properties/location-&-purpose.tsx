'use client';
import React from 'react';
import Button from '../buttons/button';
import { ResidentialData } from '@/constant/add-properties/residential-data';
import AllSelect from '../common/select';
import Arrow from '@/../public/icons/down-arrow.svg';

const LocationAndPurpose = () => {
  return (
    <div>
      {/* Main Hading */}
      <h1 className='flex text-text-dark font-semibold text-xl'>
        Purpose & Location
      </h1>
      {/* Location and Purpose Section */}
      <div className='flex flex-col gap-y-2 mt-4 items-center text-start'>
        <div className='flex flex-col gap-y-7'>
          {/* purpose Section */}
          <div className='flex flex-col gap-y-2 mt-4'>
            <h1 className='text-text-normal'>Select purpose</h1>
            <div className='flex flex-col sm:flex-row gap-x-4'>
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
          {/* Question */}
          <h1 className='text-text-normal'>
            What kind of property do you have?
          </h1>
          {/* Residential Section */}
          <div className='flex flex-col gap-y-5 justify-start items-start text-start'>
            <h1 className='text-primary pb-2 border-b-primary border-2 border-t-white border-x-white'>
              Residential
            </h1>
            <div className='flex flex-wrap max-w-[600px] gap-2'>
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
          {/* Select Section */}
          <div className='flex flex-col gap-y-5 justify-start items-start text-start'>
            <AllSelect
              label={'Which City is your property in?'}
              placeholder={'Select City'}
              icon={Arrow}
              options={[
                { value: 'house', label: 'House' },
                { value: 'apartment', label: 'Apartment' },
                { value: 'villa', label: 'Villa' },
              ]}
            />
            <AllSelect
              label={'Which Area is your property in?'}
              placeholder={'Select Area'}
              icon={Arrow}
              options={[
                { value: 'house', label: 'House' },
                { value: 'apartment', label: 'Apartment' },
                { value: 'villa', label: 'Villa' },
              ]}
            />
          </div>
          {/* Button and Section */}
          <div className='flex flex-col gap-y-5 items-end'>
            <Button text='Next' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationAndPurpose;
