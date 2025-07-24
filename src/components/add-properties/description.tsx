import React from 'react';
import Input from '../inputs/input';
import Image from 'next/image';
import upload from '@/../public/icons/upload.svg';
import Button from '../buttons/button';
import { descriptionI } from '@/interfaces/properties/Add-properties-interface';

const Description: React.FC<descriptionI> = ({ prevStep, setStep }) => {
  return (
    <div className='flex flex-col gap-y-4 text-text-light'>
      {/* Main Hading */}
      <h1 className='flex text-text-dark font-semibold text-xl'>Description</h1>
      <div className='flex gap-2 flex-col items-center text-start w-full justify-center'>
        <div className='flex flex-col w-full max-w-[600px] gap-y-7'>
          {/* 1st input */}
          <div className='w-full'>
            <Input
              type='text'
              label='Name your property'
              placeholder='Enter Property Name'
              className='p-1 flex w-full'
            />
          </div>
          {/* 2nd textarea */}
          <div className='flex flex-col w-full gap-y-3'>
            <label className='text-sm w-full'>Property Description</label>
            <textarea
              className='resize border rounded-xl p-2 h-32'
              placeholder='Write Property Description'
            ></textarea>
          </div>
          {/* image Section */}
          <div
            className='flex flex-col border border-dashed border-border mt-5 w-full h-60 rounded-xl bg-white-light justify-center
           items-center text-center gap-y-4'
          >
            <div>
              <label
                htmlFor='myfile'
                className='cursor-pointer px-8 py-4 bg-white border border-primary text-white rounded-3xl hover:bg-primary-medium hover:text-white transition-colors duration-300'
              >
                <Image
                  src={upload}
                  alt='upload icon'
                  width={24}
                  height={24}
                  className='inline-block'
                />
              </label>
              <Input
                type='file'
                id='myfile'
                className='hidden'
              />
            </div>
            <p className='text-text-dark'>
              Click here to upload your property image
            </p>
          </div>
          {/* Sketch Section */}
          <div
            className='flex flex-col border border-dashed border-border mt-5 w-full h-60 rounded-xl bg-white-light justify-center
           items-center text-center gap-y-4'
          >
            <div>
              <label
                htmlFor='myfile'
                className='cursor-pointer px-8 py-4 bg-white border border-primary text-white rounded-3xl hover:bg-primary-medium hover:text-white transition-colors duration-300'
              >
                <Image
                  src={upload}
                  alt='upload icon'
                  width={24}
                  height={24}
                  className='inline-block'
                />
              </label>
              <Input
                type='file'
                id='myfile'
                className='hidden'
              />
            </div>
            <p className='text-text-dark'>
              Click here to upload your property Sketch
            </p>
          </div>
          {/* Last and Button Section */}
          <div className='flex flex-col sm:flex-row gap-5 items-end mt-4 justify-end '>
            <Button
              text='Back'
              onClick={prevStep}
            />
            <Button
              text='Submit Ad'
              onClick={setStep}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
