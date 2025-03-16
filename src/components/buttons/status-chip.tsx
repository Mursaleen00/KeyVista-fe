import React from 'react';
interface Props {
  text: string;
  className?: string;
}

const StatusChip = ({ text, className }: Props) => {
  return (
    <div
      className={`bg-primary-medium w-fit px-5 py-1 rounded-full items-center justify-center text-primary ${className}`}
    >
      {text}
    </div>
  );
};

export default StatusChip;
