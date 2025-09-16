// src/components/buttons/button.tsx
'use client';
// Interfaces Import
import { ButtonInterface } from '@/interfaces/common/button-interface';

// Next & React Imports
import Image from 'next/image';
import React from 'react';

const Button = ({
  type,
  isOutline,
  onClick,
  className,
  icon,
  text,
  value,
  name,
  onBlur,
  onChange,
}: ButtonInterface) => {
  return (
    // button
    <button
      value={value}
      name={name}
      type={type}
      onBlur={onBlur}
      onChange={onChange}
      onClick={onClick}
      className={`${
        isOutline
          ? 'border border-primary text-primary bg-white font-semibold hover:bg-primary-medium hover:text-white'
          : 'bg-primary text-white shadow-sm shadow-primary hover:bg-primary-medium font-semibold'
      } ${className}  flex px-11 rounded-lg items-center justify-center w-fit h-11 text-lg cursor-pointer`}
    >
      {icon && (
        // Image
        <Image
          src={icon}
          alt='icon'
          height={15}
          width={20}
        />
      )}
      {text}
    </button>
  );
};

export default Button;
