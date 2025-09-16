// src/components/add-properties/step-bar.tsx

// React & Next Import
import Image from 'next/image';
import React from 'react';

// Constant Import
import { StepBarData } from '@/constant/add-properties/step-bar-data';

// interface Import
import { stepBarI } from '@/interfaces/add-properties/Add-properties-interface';

const StepBar = ({ step }: stepBarI) => {
  return (
    <div className='relative flex justify-between items-center w-full'>
      {/* Border */}
      <div className='flex border border-text w-full absolute -z-10 top-5' />

      {/* steps view */}
      <div className='flex justify-between w-full items-center'>
        {StepBarData.map((item, i) => (
          <div
            className={`flex flex-col items-center`}
            key={i}
          >
            {/* Inner Image */}
            <div
              className={`p-2 border border-text-normal rounded-full ${step >= i ? 'bg-primary' : 'bg-white'}`}
            >
              <Image
                src={(step >= i ? item.icon : item.darkIcon) || ''}
                alt='o'
                width={1}
                height={5}
                className='w-4 sm:w-5 h-4 sm:h-5'
              />
            </div>
            {/* Down Text */}
            <p
              className={`text-text-normal text-xs md:text-sm xl:text-base text-center ${step >= i ? 'text-xs md:text-sm text-primary' : 'text-text-normal'}`}
            >
              {item.tittle.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepBar;
