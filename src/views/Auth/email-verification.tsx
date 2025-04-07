// src/app/views/Auth/email-verification.tsx

'use client';

// component Import
import Button from '@/components/buttons/button';

// Next Import
import Image from 'next/image';

// React Import
import React, { useEffect, useState } from 'react';

// Images Import
import logo from '@/../public/images/logo.png';

import OtpInput from 'react-otp-input';
const EmailVerificationView = () => {
  const [timer, setTimer] = useState(60);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let a: NodeJS.Timeout | null = null;
    if (isActive && timer > 0) {
      a = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
    }
    return () => {
      if (a) clearInterval(a);
    };
  }, [isActive, timer]);

  const handleResend = () => {
    setTimer(60);
    setIsActive(true);
  };

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
      <div className='grid justify-center'>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderInput={props => <input {...props} />}
          inputStyle={{
            width: '54px',
            height: '54px',
            margin: '0 0.5rem',
            fontSize: '1.5rem',
            borderRadius: '10px',
            color: '#2C254B',
            backgroundColor: '#D0B4C3',
            textAlign: 'center',
          }}
          inputType='number'
        />
      </div>
      {/* Timer */}
      <div className='grid items-center justify-items-center gap-y-2 w-full pt-0 '>
        <p>
          {timer > 0 ? `(00:${timer < 10 ? `0${timer}` : timer})` : '(00:00)'}
        </p>
        <p>
          Did not receive the code?{' '}
          <button
            className='text-md font-semibold'
            onClick={handleResend}
            disabled={timer > 0}
          >
            {' '}
            Resend Code
          </button>
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
