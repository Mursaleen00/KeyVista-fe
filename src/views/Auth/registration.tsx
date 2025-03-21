'use client';
import Button from '@/components/buttons/button';
import Input from '@/components/inputs/input';
import { RegistrationData } from '@/constant/auth/registration-data';
import { urls } from '@/constant/routers-data';
import { registrationSchema } from '@/schema/registration-schema';
import { useFormik } from 'formik';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import logo from '@/../public/images/logo.png';
import profile from '@/../public/images/profile.webp';

import AuthHeading from '@/components/common/auth-heading';

const initialValues = {
  fullName: '',
  email: '',
  password: '',
  conformPassword: '',
  country: '',
  city: '',
  number: '',
};
const RegistrationView = () => {
  // router
  const router = useRouter();
  //  formik
  const formik = useFormik({
    initialValues,
    validationSchema: registrationSchema,
    onSubmit: () => {},
  });
  const { values, errors, touched, handleChange, handleSubmit } = formik;
  return (
    <div className='grid w-full '>
      <Image
        src={logo}
        alt='logo'
        width={200}
        height={100}
        className='flex lg:hidden pb-11'
      />
      <div className='flex flex-col md:flex-row  items-center justify-between'>
        <AuthHeading
          text='Register to'
          className='order-2 md:order-1'
        />
        <Image
          src={profile}
          alt=''
          width={170}
          className='flex  rounded-full order-1 md:order-2'
        />
      </div>

      {/* Inputs */}
      <div className='grid  gap-2'>
        {RegistrationData.map((item, i) => (
          <div
            key={i}
            className={` ${item.type == 'country' || item.type == 'city' || item.type == 'email' ? 'md:col-span-2' : ''}`}
          >
            <Input
              {...item}
              className=' text-gray-700'
              value={values[item.name as keyof typeof values]}
              error={errors[item.name as keyof typeof errors]}
              touched={touched[item.name as keyof typeof touched]}
              onChange={handleChange}
            />
          </div>
        ))}
      </div>
      <div className='flex w-full gap-x-2 items-center pt-3'>
        <input
          type='checkbox'
          className='flex w-[20px]  accent-primary border border-black '
        />

        <p className='text-text-light '>
          By signing up, you agree to our
          <span className='text-primary'> Privacy Policy </span> &
          <span className='text-primary'> Terms of Service</span>
        </p>
      </div>
      {/* button  */}
      <Button
        text='Register'
        className='flex  w-full mt-7'
        onClick={handleSubmit}
      />
      {/* go to login */}
      <div
        className='flex gap-x-2  items-end justify-center  lg:absolute text-md
       md:top-7  right-20 md:right-40 text-black'
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

export default RegistrationView;
