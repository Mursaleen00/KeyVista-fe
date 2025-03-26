import React from 'react';
import Title from '../common/title';
import Image from 'next/image';
import Star from '@/../public/icons/star.svg';

const Reviews = () => {
  return (
    <div className='grid gap-y-5'>
      {/* <div className='flex w-[500px]'></div> */}
      {/* Heading section */}
      <div className='grid gap-y-5'>
        <Title text='Reviews' />
        <div className='flex gap-x-2 text-md items-center'>
          <Image
            src={Star}
            alt=''
          />
          <p>4.8 - 20 Reviews</p>
        </div>
      </div>
      {/* Rate section */}
      <div className='grid '>
        {/* 1st Rate */}
        <div className='flex items-center gap-x-2 md:gap-x-4'>
          <p>5.0</p>
          <div className='grid gap-y-5'>
            <div className=' w-[200px] sm:w-[350px] h-[6px] bg-text-veryLight rounded-r-md rounded-l-md flex'>
              <div className='flex w-[95%] h-[6px] bg-orange rounded-l-md rounded-r-md '></div>
            </div>
          </div>
          <p>(12)</p>
        </div>
        {/* 2nd Rate */}
        <div className='flex items-center gap-x-2 md:gap-x-4'>
          <p>5.0</p>
          <div className='grid gap-y-5'>
            <div className=' w-[200px] sm:w-[350px] h-[6px] bg-text-veryLight rounded-r-md rounded-l-md flex'>
              <div className='flex w-[70%] h-[6px] bg-orange rounded-l-md rounded-r-md '></div>
            </div>
          </div>
          <p>(12)</p>
        </div>
        {/* 3rd Rate */}
        <div className='flex items-center gap-x-2 md:gap-x-4'>
          <p>5.0</p>
          <div className='grid gap-y-5'>
            <div className=' w-[200px] sm:w-[350px] h-[6px] bg-text-veryLight rounded-r-md rounded-l-md flex'>
              <div className='flex w-[65%] h-[6px] bg-orange rounded-l-md rounded-r-md '></div>
            </div>
          </div>
          <p>(12)</p>
        </div>
        {/* 4th Rate */}
        <div className='flex items-center gap-x-2 md:gap-x-4'>
          <p>5.0</p>
          <div className='grid gap-y-5'>
            <div className=' w-[200px] sm:w-[350px] h-[6px] bg-text-veryLight rounded-r-md rounded-l-md flex'>
              <div className='flex w-[55%] h-[6px] bg-orange rounded-l-md rounded-r-md '></div>
            </div>
          </div>
          <p>(12)</p>
        </div>
        {/* 5th Rate */}
        <div className='flex items-center gap-x-2 md:gap-x-4'>
          <p>5.0</p>
          <div className='grid gap-y-5'>
            <div className=' w-[200px] sm:w-[350px] h-[6px] bg-text-veryLight rounded-r-md rounded-l-md flex'>
              <div className='flex w-[45%] h-[6px] bg-orange rounded-l-md rounded-r-md '></div>
            </div>
          </div>
          <p>(12)</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
