// src/app/views/Auth/email-verification.tsx

'use client';

// component Import
import Button from '@/components/buttons/button';

// Next Import
import Image from 'next/image';

// React Import
import React, { useState } from 'react';

// Images Import
import logo from '@/../public/images/logo.png';

//  package OTPInput Import
import OTPInput from 'react-otp-input';

const EmailVerificationView = () => {
  // UseState
  const [otp, setOtp] = useState('');

  return (
    <div className='grid w-full gap-y-9 justify-center p-4'>
      {/* Image  */}
      <Image
        src={logo}
        alt='logo'
        width={200}
        height={100}
        className='flex lg:hidden pb-11'
      />
      {/* heading */}
      <div className='grid gap-y-3'>
        <div className='text-3xl font-semibold'>
          <span>Email</span> verification
        </div>
        <p className='text-text-light'>
          Enter the 6-digit verification code send to your email address.
        </p>
      </div>

      {/* Inputs */}
      <div className='grid justify-center text-black'>
        {/* OTPInput */}
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span className=''></span>}
          renderInput={props => (
            <input
              {...props}
              className='flex justify-center text-gray-700 hover:border-primary text-center border w-[90px] h-[80px] rounded-lg m-1 py-2 px-9 '
            />
          )}
          inputType='number'
        />
      </div>
      {/* Timer */}
      <div className='grid items-center justify-items-center gap-y-2 w-full pt-0 '>
        <p>(00:52)</p>
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
