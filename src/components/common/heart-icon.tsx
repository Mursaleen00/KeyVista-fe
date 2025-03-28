import Image from 'next/image';
import React from 'react';
import Heart from '@/../public/icons/Heart.svg';
import { Props } from '@/interfaces/herat-icon-interface';

const HeartIcon = ({ className }: Props) => {
  return (
    <div
      className={`bg-primary-light w-fit p-3 rounded-full items-center justify-center text-primary ${className}`}
    >
      <Image
        src={Heart}
        alt=''
      />
    </div>
  );
};

export default HeartIcon;
