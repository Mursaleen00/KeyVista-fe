import Button from '@/components/buttons/button';
import Title from '@/components/common/title';
import Input from '@/components/inputs/input';
import { ChangePasswordData } from '@/constant/change-password-data';
import React from 'react';

const ChangePasswordView = () => {
  return (
    <div className='bg-white shadow-lg p-9 rounded-2xl '>
      <h1>
        <Title text='Change Password ' />
      </h1>
      <div className='flex flex-col items-center justify-around  w-full border gap-7 '>
        {ChangePasswordData.map((item, i) => (
          <div
            key={i}
            className='  max-w-2xl w-full'
          >
            <Input
              {...item}
              className=''
            />
          </div>
        ))}
        <div className='flex items-start justify-start'>
          <Button text='Conform' />
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordView;
