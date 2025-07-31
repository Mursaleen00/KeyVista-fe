'use client';
import React from 'react';
import Button from '../buttons/button';
import {
  CityAndAreaData,
  ResidentialData,
} from '@/constant/add-properties/location-purpose-data';
import { locationPurposeI } from '@/interfaces/properties/Add-properties-interface';
import SelectForm from '../common/select-form';
import { useFormik } from 'formik';

const initialValues = {
  area: '',
  city: '',
};

const LocationAndPurpose: React.FC<locationPurposeI> = ({ setStep }) => {
  const { values, setFieldValue } = useFormik({
    initialValues,
    // validationSchema: FilterSchema,
    onSubmit: () => {},
  });
  return (
    <div className='text-text-light flex flex-col'>
      {/* Main Hading */}
      <h1 className='flex text-text-dark font-semibold text-xl'>
        Purpose & Location
      </h1>
      {/* Location and Purpose Section */}
      <div className='flex flex-col gap-y-2 mt-4 items-center text-start'>
        <div className='flex flex-col gap-y-5'>
          {/* purpose Section */}
          <div className='flex flex-col gap-y-2 mt-4'>
            <h1 className='text-text-light text-lg'>Select Purpose</h1>
            <div className='flex flex-col sm:flex-row gap-x-4'>
              <Button
                text='Sell'
                isOutline
              />
              <Button
                text='Rent'
                isOutline
              />
            </div>
          </div>
          {/* Residential Section */}
          <div className='flex flex-col gap-y-3 justify-start items-start text-start'>
            {/* Question */}
            <h1 className='text-text-light text-lg py-0'>
              What kind of property do you have?
            </h1>
            {/* Heading */}
            <h1 className='text-primary pb-1 border-b-primary border-2 border-t-white border-x-white'>
              Residential
            </h1>
            <div className='flex flex-wrap max-w-[600px] gap-2'>
              {ResidentialData.map((item, i) => (
                <Button
                  // values={values[item.Residential as keyof typeof values]}
                  // errors={errors[item.Residential as keyof typeof errors]}
                  // onBlur={handleBlur}
                  key={i}
                  text={item.Residential || ''}
                  isOutline
                />
              ))}
            </div>
          </div>
          {/* Select Section */}
          <div className='flex flex-col gap-y-2 py-2 justify-start items-start text-start'>
            {/* Select Section */}
            {CityAndAreaData.map((item, i) => (
              <SelectForm
                {...item}
                key={i}
                setFieldValue={setFieldValue}
                name={item.name}
                value={values[item.name as keyof typeof values]}
                className={`flex gap-y-2 w-full`}
              />
            ))}
          </div>
          {/* Button and Section */}
          <div className='flex flex-col gap-y-5 items-end'>
            <Button
              text='Next'
              onClick={setStep}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationAndPurpose;
