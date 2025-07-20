import { StepBarData } from '@/constant/properties/step-bar-data';
import Image from 'next/image';
import React from 'react';

interface Props {
  step?: number;
}
const StepBar = ({ step }: Props) => {
  return (
    <div>
      <div className='relative flex justify-around items-center w-full'>
        <div className='flex border border-text w-full absolute -z-10 top-5' />
        {/* steps view */}
        {StepBarData.map((item, i) => (
          <div
            className={`flex flex-col items-center justify-center`}
            key={i}
          >
            <div
              className={`p-2 border border-text-normal rounded-full ${step == item.id ? 'bg-primary' : 'bg-white'}`}
            >
              <Image
                src={item.darkIcon || item.icon}
                alt='o'
                width={20}
                height={20}
                className={`${step == i ? 'bg-primary ' : 'block'}`}
              />
            </div>
            <p
              className={`text-text-normal text-xs md:text-sm xl:text-base ${step == item.id ? 'text-primary' : 'text-text-normal'}`}
            >
              {item.tittle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepBar;
