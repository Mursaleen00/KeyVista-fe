'use client';
import React from 'react';
import profile from '@/../public/images/profile.webp';
import Image from 'next/image';
import Title from '@/components/common/title';
// import { useFormik } from 'formik';
// import { ProfileSchema } from '@/schema/profile-schema';
import { ProfileData } from '@/constant/common/profile-data';
import Input from '@/components/inputs/input';
// const initialValues = {
//   name: '',
//   email: '',
// };

const ProfileView = () => {
  // const formik = useFormik({
  //   initialValues,
  //   validationSchema: ProfileSchema,
  //   onSubmit: () => {},
  // });
  // const { values, errors, touched, handleChange, handleSubmit } = formik;

  return (
    <div className='grid bg-white shadow-2xl p-4 sm:p-9 rounded-3xl my-16 m-2 sm:m-6 md:mx-16 gap-y-6'>
      <div className='flex sm:flex-row flex-col rounded-3xl bg-primary w-full p-8 items-center gap-x-8 text-center'>
        <Image
          src={profile}
          alt=''
          width={150}
          height={500}
          className='rounded-full'
        />
        <div>
          <Title
            text='jhon doe'
            className='text-white'
          />
          <p className='text-sm text-text-veryLight'>JohnDoe@gmail.com</p>
        </div>
      </div>
      <div>
        <div className='grid grid-cols-1 sm:grid-cols-2 w-full gap-x-4'>
          {ProfileData.map((item, i) => (
            <div
              key={i}
              className='w-full'
            >
              <Input
                {...item}
                className='flex w-full'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
