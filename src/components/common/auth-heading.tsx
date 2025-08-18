// src/component/common/auth-heading.tsx

// React Import
import React from 'react';

// interfaces Import
import { Props } from '@/interfaces/common/auth-heading-interface';

const AuthHeading = ({ text, className }: Props) => {
  return (
    <div
      className={`flex gap-x-2 text-2xl pb-6 font-semibold text-heading ${className}`}
    >
      {text}
      <div className='flex gap-x-1 cursor-pointer'>
        <span className='text-primary'> Key</span>
        <span className='font-normal'>Vista</span>
      </div>
    </div>
  );
};

export default AuthHeading;
