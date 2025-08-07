// src/components/add-properties/features-&-price.tsx
'use client';

// Import React
import React from 'react';

// Import Icons
import Arrow from '@/../public/icons/down-arrow.svg';

// Import Constants
import {
  AmenitiesData,
  bathroomsData,
  bedroomsData,
} from '@/constant/add-properties/feature-price-data';
import { FeatureAndPriceInitial } from '@/constant/add-properties/initial-values/add-properties-initial-values';

// Import Interfaces
import { featurePriceI } from '@/interfaces/properties/Add-properties-interface';

// Import Formik
import { useFormik } from 'formik';

// Import Components
import Button from '../buttons/button';
import SelectForm from '../common/select-form';
import Input from '../inputs/input';

// Import Schema
import { featurePriceSchema } from '@/schema/add-properties-schema';

const FeatureAndPrice: React.FC<featurePriceI> = ({
  setStep,
  setData,
  prevStep,
}) => {
  // formik
  const {
    values,
    setFieldValue,
    errors,
    touched,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useFormik({
    initialValues: FeatureAndPriceInitial,
    validationSchema: featurePriceSchema,
    onSubmit: v => {
      setData(prev => ({ ...prev, ...v }));
      setStep();
    },
  });
  return (
    <div className='flex flex-col gap-y-4 mt-6 text-text-light'>
      {/* Main Hading */}
      <h1 className='flex text-text-dark font-semibold text-xl'>
        Feature & Price
      </h1>
      {/* feature & price */}
      <div className='flex gap-2 flex-col items-center text-start w-full justify-center'>
        <div className='flex flex-col w-full max-w-[600px]'>
          {/* 1st input */}
          <div className='w-full'>
            <Input
              type='text'
              name='size'
              label='What is the size of your property?'
              placeholder='Enter Property Size'
              className='p-1 flex w-full text-text-dark'
              value={values.size || ''}
              error={errors.size}
              touched={touched.size}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {/* bedrooms Section */}
          <div className='flex flex-col w-full py-7'>
            <h1 className='flex text-text-dark text-sm'>
              How many bedrooms does it have?
            </h1>
            <div className='flex flex-wrap gap-2 w-full mt-4'>
              {bedroomsData.map((item, i) => {
                const isSelected = values.bedrooms === item.bedrooms;
                return (
                  <Button
                    key={i}
                    isOutline={!isSelected}
                    isSelected={isSelected}
                    onClick={() =>
                      setFieldValue('bedrooms', item.bedrooms || '')
                    }
                    text={item.bedrooms || ''}
                    value={item.bedrooms || ''}
                    name='bedrooms'
                  />
                );
              })}
              {errors.bedrooms && touched.bedrooms && !values.bedrooms && (
                <p className='flex text-red'>{errors.bedrooms}</p>
              )}
            </div>
          </div>
          {/* bathrooms Section */}
          <div className='flex flex-col w-full'>
            <h1 className='flex text-text-dark text-sm'>
              How many bathrooms does it have?
            </h1>
            <div className='flex flex-wrap gap-2 w-full mt-4'>
              {bathroomsData.map((item, i) => {
                const isSelected = values.bathrooms === item.bathrooms;
                return (
                  <Button
                    key={i}
                    isOutline={!isSelected}
                    isSelected={isSelected}
                    onClick={() =>
                      setFieldValue('bathrooms', item.bathrooms || '')
                    }
                    text={item.bathrooms || ''}
                    value={item.bathrooms || ''}
                    name='bathrooms'
                  />
                );
              })}
              {errors.bathrooms && touched.bathrooms && !values.bathrooms && (
                <p className='flex text-red'>{errors.bathrooms}</p>
              )}
            </div>
          </div>
          {/* Amenities */}
          <div className='flex flex-col w-full my-4'>
            <h1 className='flex text-text-dark text-sm'>
              What amenities are available?
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 w-full'>
              {AmenitiesData.map((item, i) => (
                <div
                  key={i}
                  className='flex items-center w-full mt-4 gap-x-2'
                >
                  <label
                    htmlFor={item.Amenities}
                    className='flex items-center gap-x-2'
                  >
                    <input
                      id={item.Amenities}
                      type='checkbox'
                      name='amenities'
                      className='w-4 h-4 rounded-2xl'
                      value={values[item.Amenities as keyof typeof values]}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <p className='text-text-light'>{item.Amenities}</p>
                  </label>
                </div>
              ))}
            </div>
          </div>
          {/* 2nd input */}
          <div className='flex flex-col w-full gap-y-3'>
            <Input
              type='text'
              name='price'
              label='What is the prize of your property?'
              placeholder='Enter Property Price'
              className='p-1 flex w-full gap-y-6 mt-96 text-text-dark'
              value={values.price || ''}
              error={errors.price}
              touched={touched.price}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {/* Select Section */}
          <div className='flex flex-col w-full gap-y-2 mt-4'>
            <SelectForm
              label={'What is the condition of your property?'}
              placeholder={'Select the Condition'}
              icon={Arrow}
              name='condition'
              setFieldValue={setFieldValue}
              value={values.condition || ''}
              error={errors.condition}
              touched={touched.condition}
              options={[
                { value: 'house', label: 'House' },
                { value: 'apartment', label: 'Apartment' },
                { value: 'villa', label: 'Villa' },
              ]}
            />
          </div>
          {/* Last and Button Section */}
          <div className='flex flex-col sm:flex-row gap-5 items-end mt-4 justify-end '>
            <Button
              text='Back'
              onClick={prevStep}
            />
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

export default FeatureAndPrice;
