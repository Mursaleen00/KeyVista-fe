// src/components/common/dropdown.tsx
'use client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Image from 'next/image';
import { FC } from 'react';
import { DropdownProps } from '@/interfaces/common/navbar-interfaces';

const Dropdown: FC<DropdownProps> = ({
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
        {items.map(({ name, value }, i) => {
          return (
            <DropdownMenuItem
              key={i}
              className={`
                hover:bg-primary-medium cursor-pointer rounded-xl text-text-light
                     hover:text-white hover:border-none py-2 px-4 pl-4 m-2 text-md 
                ${selectedValue?.toLowerCase() == value?.toLowerCase() ? 'bg-primary text-white' : 'bg-white text-text-light'}
               ${className}
              `}
              onClick={() => onClick?.(value)}
            >
              {img && img[i] && (
                <Image
                  src={img[i]}
                  alt='icon'
                  width={30}
                  height={30}
                />
              )}
              {name}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;
// truncate
