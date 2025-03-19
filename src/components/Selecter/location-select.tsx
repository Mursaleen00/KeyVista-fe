'use client';

import * as Select from '@radix-ui/react-select';
import Image from 'next/image';
import { useState } from 'react';
import location from '@/../public/icons/location.svg';

const LocationsSelect = () => {
  const [selected, setSelected] = useState('');

  const options = [
    { value: 'house', list: 'karachi' },
    { value: 'apartment', list: 'Apartment' },
    { value: 'villa', list: 'Villa' },
  ];

  return (
    <div className='w-full text-black'>
      <label className='block text-black mb-1'>Location</label>

      <Select.Root
        value={selected}
        onValueChange={setSelected}
      >
        <Select.Trigger className='relative flex  items-center border border-border rounded-xl p-[15px] w-full bg-white h-[57px]'>
          <div className='absolute  text-text '>
            <Select.Value placeholder='Add Location' />
          </div>

          <div className=' '>
            <Select.Value />
          </div>

          <Select.Icon className='absolute right-4'>
            <Image
              src={location}
              alt=''
              width={25}
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
                    className='p-2 cursor-pointer flex justify-between items-center hover:bg-gray-100 rounded-md text-black border-primary'
                  >
                    <Select.ItemText>{option.list}</Select.ItemText>
                    {/* <Select.ItemIndicator></Select.ItemIndicator> */}
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

export default LocationsSelect;
