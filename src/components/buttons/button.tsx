// src/components/buttons/button.tsx
// Interfaces Import
import { ButtonInterface } from '@/interfaces/button-interface';

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
}: ButtonInterface) => {
  return (
    // button
    <button
      type={type}
      onClick={onClick}
      className={`${
        isOutline
          ? 'border border-primary text-primary bg-white font-semibold '
          : 'bg-primary text-white shadow-sm shadow-primary hover:bg-primary-normal '
      } ${className} flex px-11 rounded-lg items-center justify-center w-fit h-11 text-lg`}
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
