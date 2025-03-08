'use client';
import Button from '@/components/buttons/button';
import GreenHouse from '@/components/common/green-house';
import Input from '@/components/inputs/input';
import { PasswordData } from '@/constant/auth/password-data';
import { passwordSchema } from '@/schemas/password-schema';
import { useFormik } from 'formik';
import React from 'react';

const initialValues = {
  password: '',
  conformPassword: '',
};
const PasswordView = () => {
  const formik = useFormik({
    initialValues,
    validationSchema: passwordSchema,
    onSubmit: () => {},
  });
  const { values, errors, touched, handleChange, handleSubmit } = formik;

  return (
    <div className='flex flex-col md:flex-row items-center justify-items-center'>
      <GreenHouse />
      <div className='grid w-full right-64 sm:px-20 lg:px-40 gap-y-5 p-4'>
        <div className='flex gap-x-3  items-end justify-end md:absolute text-md md:top-10  right-20 md:right-40'>
          AlReady have an account?<span>Log in </span>
        </div>
        <div className='text-3xl '>
          New <span>Password</span>
        </div>
        <p>Enter your new password and remember it.</p>
        {/* Inputs */}
        {PasswordData.map((item, i) => (
          <div
            key={i}
            className='grid  w-full gap-y-5'
          >
            <Input
              {...item}
              className='flex  text-gray-700'
              value={values[item.name as keyof typeof values]}
              error={errors[item.name as keyof typeof errors]}
              touched={touched[item.name as keyof typeof touched]}
              onChange={handleChange}
            />
          </div>
        ))}

        {/* button  */}
        <Button
          text='Save'
          className='flex  w-full mt-7'
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default PasswordView;
