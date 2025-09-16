// src/app/views/Auth/otp-email.tsx

'use client';
// components Imports
import Button from '@/components/buttons/button';
import Input from '@/components/inputs/input';
import Logo from '@/components/logo/logo';

// constants Imports
import { OtpEmailData } from '@/constant/auth/otp-email-data';
import { urls } from '@/constant/router/routes';

// formik Import
import { useFormik } from 'formik';

// Next Imports
import { useRouter } from 'next/navigation';

// schema Import
import { OtpEmailSchema } from '@/schema/otp-email-schema';

// Initial Values Import
import { otpEmailInitialValues } from '@/initial-values/auth/auth-all-initial-values';

const EmailVerificationView = () => {
  // router
  const { push } = useRouter();

  // formik
  const formik = useFormik({
    initialValues: otpEmailInitialValues,
    validationSchema: OtpEmailSchema,
    onSubmit: () => {},
  });
  const { values, errors, touched, handleChange, handleSubmit } = formik;

  return (
    <div className='grid w-full gap-y-5 my-9'>
      <div className='flex flex-col sm:flex-row sm:items-center justify-between'>
        {/* logo */}
        <Logo className='flex lg:hidden pb-11 md:pb-0 pr-20 sm:pr-0' />
        {/* Already have an account? */}
        <div className='flex gap-x-2 items-end justify-end lg:absolute text-md md:top-7 right-20 md:right-40 text-black'>
          Already have an account?
          <span
            className='text-primary cursor-pointer'
            onClick={() => push(urls.login)}
          >
            Login
          </span>
        </div>
      </div>

      {/* Heading */}
      <div className='flex flex-col gap-y-6 justify-center my-20'>
        <div className='text-2xl text-heading font-semibold'>
          Forgot Password
        </div>
        <p className='text-text-light'>
          Enter a email address associated Your account
        </p>
        {/* Inputs */}
        {OtpEmailData.map((item, i) => (
          <div
            key={i}
            className='grid w-full gap-y-5'
          >
            <Input
              {...item}
              type='email'
              className='flex text-gray-700 p-2'
              value={values[item.name as keyof typeof values]}
              error={errors[item.name as keyof typeof errors]}
              touched={touched[item.name as keyof typeof touched]}
              onChange={handleChange}
            />
          </div>
        ))}

        {/* button  */}
        <Button
          text='Continue'
          className='flex w-full mt-7'
          onClick={handleSubmit}
        />
        {/* Create an account? */}
        <div className='flex gap-x-2 items-end justify-center text-lg text-black'>
          New User?
          <span
            className='text-primary cursor-pointer'
            onClick={() => push(urls.registration)}
          >
            Create an account
          </span>
        </div>
      </div>
    </div>
  );
};

export default EmailVerificationView;
// lg:absolute  xl:text-xl  md:top-3  right-20 md:right-40
