'use client';
import { PriceAndAreaData, SelectData } from '@/constant/common/filter-data';
// import { FilterSchema } from '@/schema/filter-schema';
import { useFormik } from 'formik';
import Button from '../buttons/button';
import Input from '../inputs/input';
import SelectForm from './select-form';

const initialValues = {
  priceFrom: '',
  priceTo: '',
  areaFrom: '',
  AreaTo: '',
  location: '',
  property: '',
  purpose: '',
  beds: '',
  city: '',
};

const Filter = () => {
  // formik
  const { values, handleSubmit, handleChange, setFieldValue } = useFormik({
    initialValues,
    onSubmit: () => {},
  });

  return (
    <div className='flex flex-col bg-white p-3 sm:p-6 gap-3 rounded-xl shadow-md max-w-4xl w-full'>
      {/* SelectForm section */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
        {SelectData.map((item, i) => (
          <SelectForm
            {...item}
            key={i}
            setFieldValue={setFieldValue}
            name={item.name}
            value={values[item.name as keyof typeof values]}
            className={`${i == 0 ? 'col-span-1' : i == 1 ? 'md:col-span-2' : i == 2 ? 'flex flex-col' : i == 3 ? '' : 'sm:col-span-2 md:col-span-1'}`}
          />
        ))}
      </div>
      {/* PriceAndArea section */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-end gap-3 w-full justify-end'>
        {/* PriceAndAreaData */}
        <div className='grid grid-cols-1 sm:grid-cols-4 gap-2 w-full sm:col-span-2'>
          {PriceAndAreaData.map((item, i) => (
            <Input
              key={i}
              type={item.type}
              label={item.label}
              name={item.name}
              placeholder={item.placeholder}
              className={`p-1 ${i == 1 ? 'mt-7' : i == 3 ? 'mt-7' : 'm-0'}`}
              value={values[item.name as keyof typeof values]}
              onChange={handleChange}
            />
          ))}
        </div>
        {/* Button */}
        <div className='grid grid-cols-1 w-full sm:col-span-2 md:col-auto '>
          <Button
            text='Find Properties'
            className='flex w-full py-6 my-1'
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
