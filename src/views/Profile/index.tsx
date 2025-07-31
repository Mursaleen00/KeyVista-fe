'use client';
import React from 'react';
import profile from '@/../public/images/profile.webp';
import Image from 'next/image';
import Title from '@/components/common/title';
import {
  ProfileInputData,
  ProfileSelectedData,
} from '@/constant/common/profile-data';
import Input from '@/components/inputs/input';
import Button from '@/components/buttons/button';
import Edit from '@/../public/icons/edit.svg';
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import SelectForm from '@/components/common/select-form';
import { useFormik } from 'formik';

const initialValues = {
  PriceFrom: '',
  PriceTo: '',
  AreaFrom: '',
  AreaTo: '',
  City: '',
};

const ProfileView = () => {
  const { values, setFieldValue } = useFormik({
    initialValues,
    // validationSchema: FilterSchema,
    onSubmit: () => {},
  });
  const [phone, setPhone] = useState('');
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className='grid bg-white shadow-2xl p-2 sm:p-9 rounded-3xl my-16 m-2 sm:m-6 md:mx-16 gap-y-6'>
      {/* Profile section */}
      <div className='flex flex-col md:flex-row rounded-3xl bg-profile-gradient w-full p-8 items-center justify-between gap-3'>
        <div className='flex md:flex-row flex-col items-center gap-x-4 text-center'>
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
          text={isEdit ? 'Update Profile' : 'Edit Profile'}
          isOutline
          icon={Edit}
          className='flex gap-x-2 py-7 px-8'
          onClick={() => setIsEdit(prev => !prev)}
        />
      </div>

      {/* Input Section */}
      <div className='grid gap-y-3'>
        {/* Name and Email input */}
        <div className='grid grid-cols-1 sm:grid-cols-2 w-full gap-x-4 gap-y-3'>
          {ProfileInputData.map((item, i) => (
            <div
              key={i}
              className='w-full'
            >
              <Input
                {...item}
                className='flex w-full'
                disabled={item.name === 'email' ? true : !isEdit}
              />
            </div>
          ))}
        </div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-3'>
          {/* Mobile input */}
          <div className='flex flex-col w-full sm:col-span-2 lg:col-span-1'>
            <label className=' flex text-md font-normal  text-text-dark mb-2'>
              Mobile
            </label>
            <PhoneInput
              country={'ae'}
              value={phone}
              onChange={setPhone}
              inputClass='!w-full !h-14 !text-sm !rounded-xl'
              buttonClass='!border-r !border-gray p-4 flex !rounded-l-xl'
              containerClass='flex !rounded-full text-text'
              disabled={!isEdit}
            />
          </div>

          {/* Select Section */}
          {ProfileSelectedData.map((item, i) => (
            <SelectForm
              {...item}
              key={i}
              setFieldValue={setFieldValue}
              name={item.name}
              value={values[item.name as keyof typeof values]}
              disabled={!isEdit}
              className={`flex gap-y-2 p-0`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
