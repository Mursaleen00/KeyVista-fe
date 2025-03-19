'use client';

import * as Select from '@radix-ui/react-select';
import Image from 'next/image';
import { useState } from 'react';
import Arrow from '@/../public/icons/DownArrow.svg';

const BedsSelect = () => {
  const [selected, setSelected] = useState('');

  const options = [
    { value: 'house', list: 'karachi' },
    { value: 'apartment', list: 'Apartment' },
    { value: 'villa', list: 'Villa' },
    { value: 'asdf', list: 'Villa' },
    { value: 'sdfa', list: 'Villa' },
    { value: 'vilsdla', list: 'Villa' },
    { value: 'villda', list: 'Villa' },
    { value: 'villas', list: 'Villa' },
    { value: 'villdsa', list: 'Villa' },
    { value: 'villaAsd', list: 'Villa' },
    { value: 'viaslla', list: 'Villa' },
    { value: 'vilsacla', list: 'Villa' },
    { value: 'vislla', list: 'Villa' },
    { value: 'vilsla', list: 'Villa' },
    { value: 'vilala', list: 'Villa' },
    { value: 'vidvclla', list: 'Villa' },
    { value: 'verxcilla', list: 'Villa' },
    { value: 'vilxcla', list: 'Villa' },
    { value: 'villaxzca', list: 'Villa' },
    { value: 'viasclla', list: 'Villa' },
    { value: 'vilascla', list: 'Villa' },
    { value: 'villsaca', list: 'Villa' },
    { value: 'villasa', list: 'Villa' },
    { value: 'vilas la', list: 'Villa' },
  ];

  return (
    <div className='w-full text-black'>
      <label className='block text-black mb-1'>Beds</label>

      <Select.Root
        value={selected}
        onValueChange={setSelected}
      >
        <Select.Trigger className='relative flex  items-center border border-border rounded-xl p-[15px] w-full bg-white h-[57px]'>
          <div className='absolute  text-text '>
            <Select.Value placeholder='Select Beds' />
          </div>

          <div className=' '>
            <Select.Value />
          </div>

          <Select.Icon className='absolute right-4'>
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

export default BedsSelect;
