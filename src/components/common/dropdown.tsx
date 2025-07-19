'use client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Image from 'next/image';
import { FC, ReactNode } from 'react';

interface IProps {
  trigger: ReactNode;
  items: Array<string>;
  onClick?: (selected: string) => void;
  className?: string;
  img?: string[];
  selectedValue?: string;
}

const Dropdown: FC<IProps> = ({
  items,
  trigger,
  onClick,
  className,
  img,
  selectedValue,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent className='flex flex-col rounded-lg'>
        {items.map((label, i) => {
          return (
            <DropdownMenuItem
              key={i}
              className={`
                hover:bg-primary-medium cursor-pointer rounded-xl text-text-light
                     hover:text-white hover:border-none py-2 px-4 pl-4 m-2 text-md 
                ${selectedValue == label ? 'bg-primary text-white' : 'bg-white text-text-light'}
               ${className}
              `}
              onClick={() => {
                if (onClick) onClick(label);
              }}
            >
              {img && img[i] && (
                <Image
                  src={img[i]}
                  alt='icon'
                  width={30}
                  height={30}
                />
              )}
              {label}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;
