'use client';
import React from 'react';
import profile from '@/../public/images/profile.webp';
import Image from 'next/image';
import Title from '@/components/common/title';
import { ProfileData } from '@/constant/common/profile-data';
import Input from '@/components/inputs/input';
import Arrow from '@/../public/icons/DownArrow.svg';
import AllSelect from '@/components/common/select';
import Button from '@/components/buttons/button';
import Edit from '@/../public/icons/edit.svg';
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const ProfileView = () => {
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
          text={isEdit ? 'Set Profile' : 'Edit Profile'}
          isOutline
          icon={Edit}
          className='flex gap-x-2 py-7 px-8'
          onClick={() => setIsEdit(prev => !prev)}
        />
      </div>
      {/* Input Section */}
      <div className='grid gap-y-5'>
        {/* Name and Email input */}
        <div className='grid grid-cols-1 sm:grid-cols-2 w-full gap-x-4'>
          {ProfileData.map((item, i) => (
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
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-x-5'>
          {/* Mobile input */}
          <div>
            <label className='text-md font-medium text-text-dark mb-1'>
              Mobile
            </label>
            <PhoneInput
              country={'ae'}
              value={phone}
              onChange={setPhone}
              inputClass='!w-full !h-14 !text-sm !rounded-xl'
              buttonClass='!border-r !border-gray p-9 flex !rounded-l-xl'
              containerClass='flex !rounded-full text-text'
              disabled={!isEdit}
            />
          </div>
          {/* Other input */}
          {/* Country */}
          <div>
            <AllSelect
              label={'Country'}
              placeholder={'Select Country'}
              icon={Arrow}
              disabled={!isEdit}
              options={[
                { value: 'house', label: 'House' },
                { value: 'apartment', label: 'Apartment' },
                { value: 'villa', label: 'Villa' },
              ]}
            />
          </div>
          {/* City */}
          <div>
            <AllSelect
              label={'City'}
              placeholder={'Select City'}
              icon={Arrow}
              disabled={!isEdit}
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
