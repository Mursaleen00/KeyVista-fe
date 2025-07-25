import { StepBarData } from '@/constant/add-properties/step-bar-data';
import Image from 'next/image';
import React from 'react';

interface Props {
  step: number;
}
const StepBar = ({ step }: Props) => {
  return (
    <div className='relative flex justify-between items-center w-full'>
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
