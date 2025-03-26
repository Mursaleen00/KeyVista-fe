// src/app/views/Auth/Change-password/index.tsx

'use client';
// components Imports
import Button from '@/components/buttons/button';
import Title from '@/components/common/title';
import Input from '@/components/inputs/input';

// Constant Import
import { ChangePasswordData } from '@/constant/common/change-password-data';
import { ChangePasswordSchema } from '@/schema/change-password-schema';
import { useFormik } from 'formik';

// React Import
import React from 'react';

// initialValues
const initialValues = {
  OldPassword: '',
  conformPassword: '',
  NewPassword: '',
};
const ChangePasswordView = () => {
  // formik
  const formik = useFormik({
    initialValues,
    validationSchema: ChangePasswordSchema,
    onSubmit: () => {},
  });
  const { values, errors, touched, handleChange, handleSubmit } = formik;

  return (
    <div className='relative bg-white shadow-2xl p-3 md:p-9 pt-14 my-9 mx-2 sm:mx-9 rounded-2xl'>
      {/* Title */}
      <h1 className='absolute md:left-14 top-9'>
        <Title text='Change Password' />
      </h1>

      {/* Password Data */}
      <div className='grid grid-cols-1 w-full justify-center items-center pt-20 gap-y-9'>
        <div className='flex flex-col w-full gap-y-7 justify-center items-center'>
          {ChangePasswordData.map((item, i) => (
            <div
              key={i}
              className='max-w-2xl w-full'
            >
              <Input
                {...item}
                className='flex h-14 w-full'
                value={values[item.name as keyof typeof values]}
                error={errors[item.name as keyof typeof errors]}
                touched={touched[item.name as keyof typeof touched]}
                onChange={handleChange}
              />
            </div>
          ))}
          <Button
            onClick={handleSubmit}
            text='Conform'
            className='flex w-full max-w-sm'
          />
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordView;
