import { ButtonInterface } from '@/interfaces/button-interface';
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
    <button
      type={type}
      onClick={onClick}
      className={`${
        isOutline
          ? 'border border-primary text-primary bg-white shadow-sm shadow-[#25D7D2]'
          : 'bg-primary text-white  shadow-sm shadow-primary hover:bg-[#36b1ad]'
      } ${className} flex px-11 rounded-lg items-center justify-center w-fit h-11 text-lg  `}
    >
      {icon && (
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
