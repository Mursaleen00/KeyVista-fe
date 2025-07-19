import { StepBarData } from '@/constant/properties/step-bar-data';
import Image from 'next/image';
import React from 'react';

const StepBar = () => {
  return (
    <div>
      <div className='relative flex justify-between items-center w-full'>
        <div className='border border-text-normal w-full absolute -z-10 top-4 px-56 flex' />
        {/* steps view */}
        {StepBarData.map((item, i) => (
          <div
            className='flex flex-col items-center'
            key={i}
          >
            <div
              className={`p-2 border border-text-normal rounded-full bg-slate-700 `}
            >
              <Image
                src={item.icon}
                alt='o'
                width={20}
                height={20}
              />
            </div>
            <p className={`text-text-normal`}>{item.tittle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepBar;
