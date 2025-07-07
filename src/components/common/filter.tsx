'use client';
import Arrow from '@/../public/icons/DownArrow.svg';
import location from '@/../public/icons/location.svg';
import Button from '../buttons/button';
import Input from '../inputs/input';
import AllSelect from './select';

const Filter = () => {
  return (
    <div className='flex absolute top-96 md:top-[75%] z-10 flex-col bg-white max-w-4xl p-6 gap-3 rounded-xl m-3 shadow-md'>
      {/* 1st section  */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
        <div className='col-span-1'>
          {/* <CitySelect /> */}
          <AllSelect
            label={'City'}
            placeholder={'Select City'}
            icon={Arrow}
            options={[
              { value: 'house', label: 'House' },
              { value: 'apartment', label: 'Apartment' },
              { value: 'villa', label: 'Villa' },
            ]}
          />
        </div>
        <div className='md:col-span-2'>
          <AllSelect
            label={'Location'}
            placeholder={'Add location'}
            icon={location}
            options={[
              { value: 'house', label: 'House' },
              { value: 'apartment', label: 'Apartment' },
              { value: 'villa', label: 'Villa' },
            ]}
          />
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
        <div>
          <AllSelect
            label={'Property'}
            placeholder={'Select Property Type'}
            icon={Arrow}
            options={[
              { value: 'house', label: 'House' },
              { value: 'apartment', label: 'Apartment' },
              { value: 'villa', label: 'Villa' },
            ]}
          />
        </div>
        <div>
          <AllSelect
            label={'Purpose'}
            placeholder={'Select Purpose'}
            icon={Arrow}
            options={[
              { value: 'house', label: 'House' },
              { value: 'apartment', label: 'Apartment' },
              { value: 'villa', label: 'Villa' },
            ]}
          />
        </div>

        <div className='sm:col-span-2 md:col-span-1'>
          <AllSelect
            label={'Beds'}
            placeholder={'Select Beds'}
            icon={Arrow}
            options={[
              { value: 'house', label: 'House' },
              { value: 'apartment', label: 'Apartment' },
              { value: 'villa', label: 'Villa' },
            ]}
          />
        </div>
      </div>
      {/* 3rd section  */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-end gap-3'>
        <div className='flex gap-x-2 '>
          <Input
            type='number'
            label='Price'
            placeholder='From'
            className='p-1'
          />
          <Input
            placeholder='To'
            className='mt-6 p-1'
          />
        </div>
        <div className='flex gap-x-2'>
          <Input
            type='number'
            label='Area'
            placeholder='From'
            className='p-1'
          />
          <Input
            placeholder='To'
            className='mt-6 p-1'
          />
        </div>
        <div className='w-full sm:col-span-2 md:col-span-1'>
          <Button
            text='Find Properties'
            className='flex w-full py-6 md:mb-1 '
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
