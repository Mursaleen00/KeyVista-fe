// src/app/views/Auth/registration.tsx

'use client';

// next Imports
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// components Imports
import Button from '@/components/buttons/button';
import Input from '@/components/inputs/input';
import Logo from '@/components/logo/logo';
import AuthHeading from '@/components/common/auth-heading';

// constants Imports
import { urls } from '@/constant/router/routes';
import { RegistrationData } from '@/constant/auth/registration-data';

// schema Import
import { registrationSchema } from '@/schema/auth/registration-schema';

// formik Import
import { useFormik } from 'formik';

// Images Imports
// import profile from '@/../public/images/profile.webp';
import profilePlaceholder from '@/../public/images/profilePlaceholder.png';

// Initial Values Imports
import { registrationInitialValues } from '@/initial-values/auth/auth-all-initial-values';
import { setCookie } from 'cookies-next';
import { useRegisterMutation } from '@/services/auth/registration-api';
import toast from 'react-hot-toast';

const RegistrationView = () => {
  // router
  const { push } = useRouter();

  const { mutateAsync } = useRegisterMutation();

  //  formik
  const formik = useFormik({
    initialValues: registrationInitialValues,
    validationSchema: registrationSchema,
    onSubmit: async ({
      email,
      password,
      fullName,
      profilePicture,
      country,
      city,
      phoneNumber,
      agreeWithPT,
    }) => {
      try {
        const { token } = await mutateAsync({
          email,
          password,
          fullName,
          city,
          country,
          phoneNumber,
          profilePicture,
          agreeWithPT,
        });
        setCookie('accessToken', token);
      } catch (error) {
        console.log('🚀 ~ LoginView ~ error:', error);
        toast.error(
          error instanceof Error ? error.message : 'Registration failed',
        );
      }
    },
  });
  const { values, errors, touched, handleChange, handleSubmit, setFieldValue } =
    formik;
  // console.log('🚀 ~ RegistrationView ~ values:', values);
  return (
    <div className='grid w-full py-7'>
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

      {/* AuthHeading & Profile */}
      <div className='flex flex-col sm:flex-row sm:items-center justify-between pt-10'>
        <AuthHeading
          text='Register to'
          className='order-2 sm:order-1'
        />
        <Image
          src={values.profilePicture || profilePlaceholder}
          alt=''
          width={170}
          height={170}
          className='flex rounded-full order-1 sm:order-2'
        />
      </div>

      {/* Inputs */}
      <div className='grid gap-x-2 gap-y-4'>
        {RegistrationData.map((item, i) => (
          <div
            key={i}
            className={`${item.type == 'country' || item.type == 'city' || item.type == 'email' ? 'sm:col-span-2' : ''}`}
          >
            <Input
              {...item}
              className='text-gray-700'
              // value={values[item.name as keyof typeof values]}
              // value={
              //   item.type === 'checkbox'
              //     ? undefined
              //     : values[item.name as keyof typeof values]
              // }
              checked={
                item.type === 'checkbox'
                  ? Boolean(values[item.name as keyof typeof values])
                  : undefined
              }
              error={errors[item.name as keyof typeof errors]}
              touched={touched[item.name as keyof typeof touched]}
              onChange={handleChange}
            />
          </div>
        ))}
      </div>

      {/* Privacy Policy & Terms of Service */}
      <div className='flex items-center pt-3'>
        <Input
          type='checkbox'
          checked={values.agreeWithPT}
          onChange={handleChange}
          onClick={() => setFieldValue('agreeWithPT', !values.agreeWithPT)}
        />

        <p className='text-text-light '>
          By signing up, you agree to our
          <span
            className='text-primary cursor-pointer'
            onClick={() => push(urls.privacyPolicy)}
          >
            {' '}
            Privacy Policy{' '}
          </span>{' '}
          &
          <span
            className='text-primary cursor-pointer'
            onClick={() => push(urls.termsAndConditions)}
          >
            {' '}
            Terms of Service
          </span>
        </p>
      </div>
      {/* button  */}
      <Button
        text='Register'
        className='flex w-full mt-7'
        onClick={handleSubmit}
      />
    </div>
  );
};

export default RegistrationView;
