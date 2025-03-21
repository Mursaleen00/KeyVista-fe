'use client';
import Button from '@/components/buttons/button';
import Input from '@/components/inputs/input';
import { PasswordData } from '@/constant/auth/forgot-password-data';
import { passwordSchema } from '@/schema/forgot-password-schema';
import { useFormik } from 'formik';
import React from 'react';
import { useRouter } from 'next/navigation';
import logo from '@/../public/images/logo.png';
import Image from 'next/image';
import { urls } from '@/constant/routes';

const initialValues = {
  password: '',
  conformPassword: '',
};
const PasswordView = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues,
    validationSchema: passwordSchema,
    onSubmit: () => {},
  });
  const { values, errors, touched, handleChange, handleSubmit } = formik;

  return (
    <div className='grid w-full  gap-y-5 p-5'>
      <Image
        src={logo}
        alt='logo'
        width={200}
        height={100}
        className='flex lg:hidden pb-11'
      />
      <div className='text-2xl text-heading font-semibold '>New Password</div>
      <p className='text-text-light'>
        Enter your new password and remember it.
      </p>
      {/* Inputs */}
      <div className='grid gap-y-5 '>
        {PasswordData.map((item, i) => (
          <div
            key={i}
            className='grid w-full gap-y-5 '
          >
            <Input
              {...item}
              className='flex text-gray-700 p-2'
              value={values[item.name as keyof typeof values]}
              error={errors[item.name as keyof typeof errors]}
              touched={touched[item.name as keyof typeof touched]}
              onChange={handleChange}
            />
          </div>
        ))}
      </div>

      {/* button  */}
      <Button
        text='Save'
        className='flex  w-full mt-7'
        onClick={handleSubmit}
      />
      <div
        className='flex gap-x-3  items-end justify-center  lg:absolute text-md
               md:top-10  right-20 md:right-40 text-black'
      >
        Already have an account?
        <span
          className='text-primary cursor-pointer'
          onClick={() => router.push(urls.login)}
        >
          Login
        </span>
      </div>
    </div>
  );
};

export default PasswordView;
