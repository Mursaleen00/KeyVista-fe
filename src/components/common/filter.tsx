'use client';
import Arrow from '@/../public/icons/down-arrow.svg';
import location from '@/../public/icons/location.svg';
import Button from '../buttons/button';
import Input from '../inputs/input';
import AllSelect from '../common/select';
import { FilterData } from '@/constant/common/filter-data';
import { useFormik } from 'formik';
import { FilterSchema } from '@/schema/filter-schema';

const initialValues = {
  PriceFrom: '',
  PriceTo: '',
  AreaFrom: '',
  AreaTo: '',
};
const Filter = () => {
  // formik
  const formik = useFormik({
    initialValues,
    validationSchema: FilterSchema,
    onSubmit: () => {},
  });
  const { values, errors, touched, handleSubmit } = formik;

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
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-end gap-3 w-full justify-end'>
        <div className='grid grid-cols-1 sm:grid-cols-4 gap-x-2 w-full sm:col-span-2'>
          {FilterData.map((item, i) => (
            <Input
              key={i}
              type={item.type}
              label={item.label}
              placeholder={item.placeholder}
              className={`p-1 ${i == 1 ? 'mt-7' : i == 3 ? 'mt-7' : 'm-0'}`}
              value={values[item.name as keyof typeof values]}
              error={errors[item.name as keyof typeof errors]}
              touched={touched[item.name as keyof typeof touched]}
              onChange={e => {
                const { name, value } = e.target;
                formik.setFieldValue(name, value === '' ? '' : Number(value));
              }}
              // onChange={handleChange}
            />
          ))}
        </div>
        <div className='grid grid-cols-1 w-full sm:col-span-2 md:col-auto'>
          <Button
            text='Find Properties'
            className='flex w-full py-6 mb-1'
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
