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
import Arrow from '@/../public/icons/DownArrow.svg';
import AllSelect from '@/components/common/select';
import Button from '@/components/buttons/button';
import Edit from '@/../public/icons/edit.svg';

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
    <div className='grid bg-white shadow-2xl p-4 sm:p-9 rounded-3xl my-16 m-2 sm:m-6 md:mx-16 gap-y-6 w-full border border-black'>
      {/* Profile section */}
      <div className='flex rounded-3xl bg-profile-gradient w-full p-8 items-center justify-between'>
        <div className='flex sm:flex-row flex-col items-center gap-x-8 text-center'>
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
        <Button
          text='Edit Profile'
          isOutline
          icon={Edit}
          className='flex gap-x-2 py-7 px-8'
        />
      </div>
      {/* Input Section */}
      <div className='grid gap-y-5'>
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
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-x-5'>
          <div>
            <AllSelect
              label={'Country'}
              placeholder={'Select Country'}
              icon={Arrow}
              options={[
                { value: 'house', label: 'House' },
                { value: 'apartment', label: 'Apartment' },
                { value: 'villa', label: 'Villa' },
              ]}
            />
          </div>
          <div>
            <AllSelect
              label={'Country'}
              placeholder={'Select Country'}
              icon={Arrow}
              options={[
                { value: 'house', label: 'House' },
                { value: 'apartment', label: 'Apartment' },
                { value: 'villa', label: 'Villa' },
              ]}
            />
          </div>
          <div>
            <AllSelect
              label={'City'}
              placeholder={'Select City'}
              icon={Arrow}
              options={[
                { value: 'house', label: 'House' },
                { value: 'apartment', label: 'Apartment' },
                { value: 'villa', label: 'Villa' },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
