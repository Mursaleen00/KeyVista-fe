// src/components/add-properties/location-&-purpose.tsx
'use client';

// Import React
import React from 'react';

// Import Constants
import {
  CityAndAreaData,
  PurposeData,
  ResidentialData,
} from '@/constant/add-properties/location-purpose-data';

// Import Interfaces And Types
import { locationPurposeI } from '@/interfaces/properties/Add-properties-interface';
import { locationAndPurpose } from '@/types/add-properties-types/location-purpose-types';

// Import Schema
import { locationPurposeSchema } from '@/schema/add-properties-schema';

// Import Formik
import { useFormik } from 'formik';

// Import Components
import Button from '../buttons/button';
import SelectForm from '../common/select-form';

const initialValues: locationAndPurpose = {
  area: '',
  city: '',
  purpose: '',
  residential: '',
};

const LocationAndPurpose: React.FC<locationPurposeI> = ({
  setStep,
  setData,
}) => {
  const { values, setFieldValue, errors, touched, handleSubmit } = useFormik({
    initialValues,
    validationSchema: locationPurposeSchema,
    onSubmit: v => {
      setData(prev => ({ ...prev, ...v }));
      setStep();
    },
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
            <div className='flex flex-col gap-y-2'>
              <div className={`flex flex-col sm:flex-row gap-x-4`}>
                {PurposeData.map((item, i) => {
                  const isSelected = values.purpose === item.Purpose;
                  return (
                    <Button
                      key={i}
                      isOutline={!isSelected}
                      isSelected={isSelected}
                      onClick={() => {
                        setFieldValue('purpose', item.Purpose);
                      }}
                      text={item.Purpose || ''}
                      value={item.Purpose || ''}
                      name='purpose'
                    />
                  );
                })}
              </div>
              {errors.purpose && touched.purpose && !values.purpose && (
                <p className='flex text-red'>{errors.purpose}</p>
              )}
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
            {/* ResidentialData Map */}
            <div className='flex flex-col gap-y-2'>
              <div className='flex flex-wrap max-w-[600px] gap-2'>
                {ResidentialData.map((item, i) => {
                  const isSelected = values.residential === item.Residential;
                  return (
                    <Button
                      key={i}
                      isOutline={!isSelected}
                      isSelected={isSelected}
                      onClick={() => {
                        setFieldValue('residential', item.Residential);
                      }}
                      text={item.Residential || ''}
                      value={item.Residential || ''}
                      name='residential'
                    />
                  );
                })}
              </div>
              {errors.residential &&
                touched.residential &&
                !values.residential && (
                  <p className='flex text-red'>{errors.residential}</p>
                )}
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
                error={errors[item.name as keyof typeof errors]}
                touched={touched[item.name as keyof typeof touched]}
              />
            ))}
          </div>
          {/* Button and Section */}
          <div className='flex flex-col gap-y-5 items-end'>
            <Button
              text='Next'
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationAndPurpose;
