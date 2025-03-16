// src/Components/inputs/input.tsx
'use client';

// React import
import React, { Fragment, useState } from 'react';
// import { useTranslation } from 'react-i18next';
import { FiEye, FiEyeOff } from 'react-icons/fi';

// Use interface InputProps
interface InputProps {
  label?: string;
  error?: string;
  touched?: boolean;
}

const Input = ({
  label,
  type,
  error,
  touched,
  required,
  className,
  ...res
}: React.InputHTMLAttributes<HTMLInputElement> & InputProps) => {
  // State
  const [isVisible, setIsVisible] = useState(false);

  // is Error
  const isError = error && touched;

  return (
    // Label
    <label
      htmlFor='input'
      className='space-y-1 '
    >
      {label && (
        <p className='text-secondary-700 text-sm font-normal capitalize line-clamp-1'>
          {label}
          {required && <span className='text-red'>*</span>}
        </p>
      )}
      {/* Cn  */}
      <div
        className={`flex justify-between items-center w-full bg-white border !border-border rounded-xl shadow-box-shadow pr-3 ${className} ${isError && `!border-red`}`}
      >
        {/* Input  */}
        <input
          type={type === 'password' ? (isVisible ? 'text' : 'password') : type}
          id='input'
          className='w-full h-full px-3 py-3 outline-none ring-0 rounded-xl'
          {...res}
        />
        {type === 'password' && (
          // Fragment
          <Fragment>
            {isVisible ? (
              <FiEye
                size={24}
                onClick={() => setIsVisible(!isVisible)}
                className='cursor-pointer text-secondary-300'
              />
            ) : (
              <FiEyeOff
                size={24}
                onClick={() => setIsVisible(!isVisible)}
                className='cursor-pointer text-secondary-300'
              />
            )}
          </Fragment>
        )}
      </div>
      {/* Error  */}
      {isError && <p className='text-red text-xs'>{error}</p>}
    </label>
  );
};

export default Input;
