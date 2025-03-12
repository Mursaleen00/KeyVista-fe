import Button from '@/components/buttons/button';
import Input from '@/components/inputs/input';
import { EmailVerificationData } from '@/constant/auth/email-verification-data';
import Image from 'next/image';
import React from 'react';
import logo from '@/../public/images/logo.png';

const EmailVerificationView = () => {
  return (
    <div className='grid  w-full gap-y-9 justify-center'>
      <Image
        src={logo}
        alt='logo'
        width={200}
        height={100}
        className='flex lg:hidden pb-11'
      />
      <div className='grid gap-y-3'>
        <div className='text-3xl font-semibold'>
          <span>Email</span> verification
        </div>
        <p>Enter the 6-digit verification code send to your email address.</p>
      </div>

      {/* Inputs */}
      <div className='flex flex-wrap gap-2 '>
        {EmailVerificationData.map((item, i) => (
          <div
            key={i}
            className='grid '
          >
            <Input
              {...item}
              className='flex text-gray-700 w-[80px] h-[80px] hover:border-primary'
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
        className='flex w-full'
      />
    </div>
  );
};

export default EmailVerificationView;
