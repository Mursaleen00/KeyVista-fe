// src/component/common/auth-heading.tsx

// React Import
import React from 'react';

// interfaces Import
import { Props } from '@/interfaces/common/auth-heading-interface';

const AuthHeading = ({ text, className }: Props) => {
  return (
    <div className={`text-2xl pb-6 font-semibold text-heading ${className}`}>
      {text}
      <span className='text-primary'> Agile</span>
      <span className='font-normal'>Space</span>
    </div>
  );
};

export default AuthHeading;
