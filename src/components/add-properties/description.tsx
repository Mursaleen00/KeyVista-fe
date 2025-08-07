// src/components/add-properties/description.tsx

// Import React And Next
import React, { useState } from 'react';
import Image from 'next/image';

// Import Components
import Input from '../inputs/input';
import Button from '../buttons/button';

// Import Icons
import upload from '@/../public/icons/upload.svg';

// Import Interfaces
import { descriptionI } from '@/interfaces/properties/Add-properties-interface';

// Import Formik
import { useFormik } from 'formik';

// Import Schema
import { descriptionSchema } from '@/schema/add-properties-schema';

// Import Initial Values
import { DescriptionInitial } from '@/constant/add-properties/initial-values/add-properties-initial-values';

const Description: React.FC<descriptionI> = ({
  setStep,
  setData,
  prevStep,
}) => {
  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: DescriptionInitial,
      validationSchema: descriptionSchema,
      onSubmit: v => {
        setData(prev => ({ ...prev, ...v }));
        setStep();
      },
    });
  const [preview, setPreview] = useState<string | null>(null);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className='flex flex-col gap-y-4 text-text-light'>
      {/* Main Hading */}
      <h1 className='flex text-text-dark font-semibold text-xl'>Description</h1>
      <div className='flex gap-2 flex-col items-center text-start w-full justify-center'>
        <div className='flex flex-col w-full max-w-[600px] gap-y-7'>
          {/* 1st input */}
          <div className='w-full'>
            <Input
              type='text'
              label='Name your property'
              placeholder='Enter Property Name'
              className='p-1 flex w-full'
              value={values.propertyName}
              name='propertyName'
              error={errors.propertyName}
              touched={touched.propertyName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {/* 2nd textarea */}
          <div className='flex flex-col w-full gap-y-3'>
            <label className='text-sm w-full'>Property Description</label>
            <textarea
              className={`resize border rounded-xl p-2 h-32 ${errors.description && touched.description && 'border-red'}`}
              placeholder='Write Property Description'
              value={values.description}
              name='description'
              onChange={handleChange}
              onBlur={handleBlur}
            ></textarea>
            {errors.description && touched.description && (
              <p className='text-red text-sm'>{errors.description}</p>
            )}
          </div>
          {/* image Section */}
          <div className='flex flex-col w-full gap-y-1'>
            <div
              className={`flex flex-col border border-dashed border-border mt-5 w-full h-60 rounded-xl bg-white-light justify-center
           items-center text-center gap-y-4 ${errors.sketch && touched.sketch && 'border-red'}`}
            >
              <div>
                <label
                  htmlFor='myfile'
                  className='cursor-pointer px-8 py-4 bg-white border border-primary text-white rounded-3xl hover:bg-primary-medium hover:text-white transition-colors duration-300'
                >
                  <Image
                    src={upload}
                    alt='upload icon'
                    width={24}
                    height={24}
                    className='inline-block'
                  />
                </label>
                <Input
                  type='file'
                  id='myfile'
                  className='hidden'
                />
              </div>
              <p className='text-text-dark'>
                Click here to upload your property image
              </p>
            </div>
            {errors.image && touched.image && (
              <p className='text-red text-sm'>{errors.image}</p>
            )}
          </div>
          {/* Sketch Section */}
          <div className='flex flex-col w-full gap-y-1'>
            <div
              className={`flex flex-col border border-dashed border-border mt-5 w-full h-60 rounded-xl bg-white-light justify-center
           items-center text-center gap-y-4 ${errors.sketch && touched.sketch && 'border-red'}`}
            >
              <div>
                <label
                  htmlFor='myfile'
                  className='cursor-pointer px-8 py-4 bg-white border border-primary text-white rounded-3xl hover:bg-primary-medium hover:text-white transition-colors duration-300'
                >
                  <Image
                    src={upload}
                    alt='upload icon'
                    width={24}
                    height={24}
                    className='inline-block'
                  />
                </label>
                <Input
                  type='file'
                  id='myfile'
                  className='hidden'
                />
              </div>
              <p className='text-text-dark'>
                Click here to upload your property Sketch
              </p>
            </div>

            {errors.sketch && touched.sketch && (
              <p className='text-red text-sm'>{errors.sketch}</p>
            )}
          </div>
          {/* gpt solve */}
          <div className='flex flex-col w-full gap-y-1'>
            <div
              className={`flex flex-col border border-dashed border-border mt-5 w-full h-60 rounded-xl bg-white-light justify-center items-center text-center gap-y-4 relative overflow-hidden ${
                errors.sketch && touched.sketch && 'border-red'
              }`}
            >
              {/* Image Preview Box */}
              {preview ? (
                <Image
                  src={preview}
                  alt='Preview'
                  fill
                  style={{ objectFit: 'cover' }}
                  className='rounded-xl'
                />
              ) : (
                <div>
                  <label
                    htmlFor='myfile'
                    className='cursor-pointer px-8 py-4 bg-white border border-primary text-white rounded-3xl hover:bg-primary-medium hover:text-white transition-colors duration-300'
                  >
                    <Image
                      src={upload}
                      alt='upload icon'
                      width={24}
                      height={24}
                      className='inline-block'
                    />
                  </label>
                  <Input
                    type='file'
                    id='myfile'
                    accept='image/*'
                    className='hidden'
                    onChange={handleFileChange}
                  />
                  <p className='text-text-dark mt-4'>
                    Click here to your property image
                  </p>
                </div>
              )}
            </div>

            {/* Validation Error */}
            {errors.image && touched.image && (
              <p className='text-red text-sm'>{errors.image}</p>
            )}
          </div>
          {/* Last and Button Section */}
          <div className='flex flex-col sm:flex-row gap-5 items-end mt-4 justify-end '>
            <Button
              text='Back'
              onClick={prevStep}
            />
            <Button
              text='Submit Ad'
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
