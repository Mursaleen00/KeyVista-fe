'use client';
import React from 'react';
import Button from '../buttons/button';
import PropertyTypeSelect from '../Selecter/property-select';
import PurposeSelect from '../Selecter/purpose-select';
import BedsSelect from '../Selecter/beds-select';
import CitySelect from '../Selecter/city-select';
import LocationsSelect from '../Selecter/location-select';
import Input from '../inputs/input';

const Filter = () => {
  return (
    <div className='flex  h-[1000px] bg-primary w-full justify-center items-center'>
      <div className='grid  bg-white max-w-4xl p-6 gap-3 rounded-xl m-3'>
        {/* 1st section  */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
          <div className='col-span-1'>
            <CitySelect />
          </div>
          <div className='md:col-span-2'>
            <LocationsSelect />
          </div>
        </div>
        {/* 2nd section */}
        <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-3 '>
          <PropertyTypeSelect />

          <PurposeSelect />
          <div className=' sm:col-span-2 md:col-span-1'>
            <BedsSelect />
          </div>
        </div>
        {/* 3rd section  */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-end gap-3'>
          <div className='flex gap-x-2 '>
            <Input
              label='Price'
              placeholder='From'
              className='p-1'
            />
            <Input
              placeholder='To'
              className='mt-6 p-1'
            />
          </div>
          <div className='flex gap-x-2'>
            <Input
              label='Area'
              placeholder='From'
              className='p-1'
            />
            <Input
              placeholder='To'
              className='mt-6 p-1'
            />
          </div>
          <div className='w-full sm:col-span-2 md:col-span-1'>
            <Button
              text='Find Properties'
              className='flex w-full py-6 md:mb-1 '
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
