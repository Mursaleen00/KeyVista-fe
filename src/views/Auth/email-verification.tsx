import Button from '@/components/buttons/button';
import GreenHouse from '@/components/common/green-house';
import Input from '@/components/inputs/input';
import { EmailVerificationData } from '@/constant/auth/email-verification-data';
import React from 'react';

const EmailVerificationView = () => {
  return (
    <div>
      <div className='flex flex-col md:flex-row items-center justify-items-center'>
        <GreenHouse />
        <div className='grid w-full right-64 sm:px-12 lg:px-32 gap-y-5 p-4'>
          <div className='grid gap-y-3'>
            <div className='text-3xl font-semibold'>
              <span>Email</span> verification
            </div>
            <p>
              Enter the 6-digit verification code send to your email address.
            </p>
          </div>
          {/* Inputs */}
          <div className='grid grid-cols-3 sm:grid-cols-6 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-2 xl:gap-0'>
            {EmailVerificationData.map((item, i) => (
              <div
                key={i}
                className='grid '
              >
                <Input
                  {...item}
                  className='flex text-gray-700 w-[80px] h-[50px] gap-x-2 xl:gap-0 text-center'
                />
              </div>
            ))}
          </div>

          <div className='grid items-center justify-items-center gap-y-2 w-full  pt-0 '>
            <p>(00:52) </p>
            <p>
              Did not receive the code?
              <span className='text-md font-semibold'> Resend Code</span>
            </p>
          </div>
          {/* button  */}
          <Button
            text='verify'
            className='flex  w-full mt-7'
          />
        </div>
      </div>
    </div>
  );
};

export default EmailVerificationView;
