import * as React from 'react';
import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Image from 'next/image';
import { SelectI } from '@/interfaces/common/select-interface';

const AllSelect = ({
  label,
  placeholder,
  icon,
  options,
  disabled = false,
}: SelectI) => {
  const [selected, setSelected] = useState('');

  return (
    <Select
      value={selected}
      onValueChange={setSelected}
      disabled={disabled}
    >
      <label className='text-md'>{label}</label>

      <SelectTrigger className='flex rounded-xl py-7'>
        <div className='text-text flex'>
          <SelectValue placeholder={placeholder} />
        </div>
        <Image
          src={icon}
          alt=''
        />
      </SelectTrigger>
      <SelectContent className='grid bg-white'>
        <SelectGroup>
          <div className='text-black'>
            {options.map(option => (
              <SelectItem
                key={option.value}
                value={option.value}
                className='p-2 cursor-pointer flex justify-between items-center hover:bg-gray-100 rounded-md text-black border-primary'
              >
                {option.label}
              </SelectItem>
            ))}
          </div>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default AllSelect;
