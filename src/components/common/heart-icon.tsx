import Image from 'next/image';
import React from 'react';
import Heart from '@/../public/icons/Heart.svg';
interface Props {
  className: string;
}

const HeartIcon = ({ className }: Props) => {
  return (
    <div
      className={`bg-primary-medium w-fit p-3 rounded-full items-center justify-center text-primary ${className}`}
    >
      <Image
        src={Heart}
        alt=''
      />
    </div>
  );
};

export default HeartIcon;
