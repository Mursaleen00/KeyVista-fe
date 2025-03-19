'use client';

import * as Select from '@radix-ui/react-select';
import Image from 'next/image';
import { useState } from 'react';
import Arrow from '@/../public/icons/DownArrow.svg';

const PropertyTypeSelect = () => {
  const [selected, setSelected] = useState('');

  const options = [
    { value: 'house', label: 'House' },
    { value: 'apartment', label: 'Apartment' },
    { value: 'villa', label: 'Villa' },
  ];

  return (
    <div className='w-full text-black'>
      <label className='block text-black mb-1'>Property Type</label>

      <Select.Root
        value={selected}
        onValueChange={setSelected}
      >
        <Select.Trigger className='flex justify-between items-center border border-border rounded-xl p-[15px] w-full bg-white'>
          <div className='text-text flex '>
            <Select.Value placeholder='Select Property Type' />
          </div>

          <Select.Icon>
            <Image
              src={Arrow}
              alt=''
              width={20}
            />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content className='bg-white border shadow-md rounded-lg'>
            <Select.Viewport className='p-1 text-black'>
              <div className='text-black'>
                {options.map(option => (
                  <Select.Item
                    key={option.value}
                    value={option.value}
                    className='p-2 cursor-pointer flex justify-between items-center hover:bg-gray-100 rounded-md text-black'
                  >
                    <Select.ItemText>{option.label}</Select.ItemText>
                    <Select.ItemIndicator></Select.ItemIndicator>
                  </Select.Item>
                ))}
              </div>
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
};

export default PropertyTypeSelect;
