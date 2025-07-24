'use client';
import React from 'react';
import Button from '../buttons/button';
import Input from '../inputs/input';
import {
  bedroomsData,
  bathroomsData,
  AmenitiesData,
} from '@/constant/add-properties/add-properties-data';
import AllSelect from '../common/select';
import Arrow from '@/../public/icons/down-arrow.svg';
import { featurePriceI } from '@/interfaces/properties/Add-properties-interface';

const FeatureAndPrice: React.FC<featurePriceI> = ({ setStep, prevStep }) => {
  return (
    <div className='flex flex-col gap-y-4 mt-6 text-text-light'>
      {/* Main Hading */}
      <h1 className='flex text-text-dark font-semibold text-xl'>
        Feature & Price
      </h1>
      {/* feature & price */}
      <div className='flex gap-2 flex-col items-center text-start w-full justify-center'>
        <div className='flex flex-col w-full max-w-[600px]'>
          {/* 1st input */}
          <div className='w-full'>
            <Input
              type='text'
              label='What is the size of your property?'
              placeholder='Enter Property Size'
              className='p-1 flex w-full'
            />
          </div>
          {/* bedrooms Section */}
          <div className='flex flex-col w-full py-7'>
            <h1 className='flex text-text-dark'>
              How many bathrooms does it have?
            </h1>
            <div className='flex flex-wrap gap-2 w-full mt-4'>
              {bedroomsData.map((item, i) => (
                <Button
                  text={item.bedrooms || ''}
                  isOutline
                  key={i}
                  className='flex rounded-xl'
                />
              ))}
            </div>
          </div>
          {/* bathrooms Section */}
          <div className='flex flex-col w-full'>
            <h1 className='flex text-text-dark'>
              How many bathrooms does it have?
            </h1>
            <div className='flex flex-wrap gap-2 w-full mt-4'>
              {bathroomsData.map((item, i) => (
                <Button
                  text={item.bathrooms || ''}
                  isOutline
                  key={i}
                  className='flex rounded-xl'
                />
              ))}
            </div>
          </div>
          {/* Amenities */}
          <div className='flex flex-col w-full my-4'>
            <h1 className='flex text-text-dark'>
              What amenities are available?
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 w-full'>
              {AmenitiesData.map((item, i) => (
                <div
                  key={i}
                  className='flex items-center w-full mt-4 gap-x-2'
                >
                  <input
                    type='checkbox'
                    className='w-4 h-4 rounded-2xl'
                  />
                  <p className='text-text-light'>{item.Amenities}</p>
                </div>
              ))}
            </div>
          </div>
          {/* 2nd input */}
          <div className='flex flex-col w-full gap-y-3'>
            <Input
              type='text'
              label='What is the prize of your property?'
              placeholder='Enter Property Price'
              className='p-1 flex w-full gap-y-6 mt-96'
            />
          </div>
          {/* Select Section */}
          <div className='flex flex-col w-full gap-y-2 mt-4'>
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
          </div>
          {/* Last and Button Section */}
          <div className='flex flex-col sm:flex-row gap-5 items-end mt-4 justify-end '>
            <Button
              text='Back'
              onClick={prevStep}
            />
            <Button
              text='Next'
              onClick={setStep}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureAndPrice;
//
