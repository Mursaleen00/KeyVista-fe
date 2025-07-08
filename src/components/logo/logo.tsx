import React from 'react';
import purpleLogo from '@/../public/icons/purple-logo.svg';
import WhiteHouse from '@/../public/images/white-logo.png';

import { LogoInterfaces } from '@/interfaces/common/logo';
import Image from 'next/image';

const Logo = ({ className, WhiteLogo }: LogoInterfaces) => {
  return (
    <div className={`${className} flex items-center gap-x-2`}>
      <div>
        {WhiteLogo ? (
          <Image
            src={WhiteHouse}
            alt=''
            width={50}
            height={100}
          />
        ) : (
          <Image
            src={purpleLogo}
            alt=''
            width={50}
            height={100}
          />
        )}
      </div>
      <div>
        {WhiteLogo ? (
          <div className='flex text-2xl text-white'>
            <span className='font-semibold'> Key </span> Vista
          </div>
        ) : (
          <div className='flex text-2xl text-black'>
            <span className='font-semibold text-primary'> Key </span> Vista
          </div>
        )}
      </div>
    </div>
  );
};

export default Logo;
