'use client';
import React from 'react';
import profile from '@/../public/images/profile.webp';
// import flag from '@/../public/icons/flag.svg';

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
        {/*  From Uiverse.io by Yaya12085  */}
        {/* <div className='bg-white p-4 rounded-lg w-full '>
          <label className='text-gray-600 text-sm'>Phone number</label>
          <div className='relative mt-2 max-w-xs text-gray-500'>
            <div className='absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2'>
              <select className='text-sm outline-none rounded-lg h-full'>
                <option>
                  <img
                    src='@/../public/icons/flag.svg'
                    alt=''
                    width={9}
                  />
                  szd
                </option>

                <option>ES</option>
                <option>MR</option>
              </select>
            </div>
            <input
              type='number'
              placeholder='+92 (555) 000-000'
              className='w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-slate-600 shadow-sm rounded-lg'
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ProfileView;
