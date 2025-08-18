// src/app/views/Auth/login.tsx

'use client';

// Next Import
import { useRouter } from 'next/navigation';

// components Imports
import Button from '@/components/buttons/button';
import AuthHeading from '@/components/common/auth-heading';
import Input from '@/components/inputs/input';
import Logo from '@/components/logo/logo';

// constant Imports
import { LoginData } from '@/constant/auth/login-data';
import { urls } from '@/constant/router/routes';

// schema Import
import { loginSchema } from '@/schema/login-schema';

// formik
import { useFormik } from 'formik';

// Initial Values Import
import { loginInitialValues } from '@/initial-values/auth/auth-all-initial-values';
import { useLoginMutation } from '@/services/auth/login-api';
import { setCookie } from 'cookies-next';

const LoginView = () => {
  // router
  const router = useRouter();

  const { mutateAsync } = useLoginMutation();

  // formik
  const formik = useFormik({
    initialValues: loginInitialValues,
    validationSchema: loginSchema,
    onSubmit: async ({ email, password }) => {
      try {
        const { token } = await mutateAsync({ email, password });
        setCookie('accessToken', token);
      } catch (error) {
        console.log('🚀 ~ LoginView ~ error:', error);
      }
    },
  });
  const { values, errors, touched, handleChange, handleSubmit } = formik;

  return (
    <div className='grid w-full gap-y-5 p-4 mt-40 lg:mt-0'>
      {/* logo */}
      <Logo className='flex lg:hidden pb-11' />

      {/* AuthHeading */}
      <AuthHeading text='Log in to' />

      {/* Inputs */}
      {LoginData.map((item, i) => (
        <div
          key={i}
          className='grid w-full gap-y-5'
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

      <div
        className='flex w-full items-end justify-end text-primary cursor-pointer'
        onClick={() => router.push(urls.otpEmail)}
      >
        Forgot password?
      </div>

      {/* button  */}
      <Button
        text='Login'
        className='flex w-full mt-7'
        onClick={handleSubmit}
      />
      {/* Create an account? */}
      <div className='flex gap-x-2 items-end justify-center lg:absolute text-lg xl:text-xl  md:top-3  right-20 md:right-40 text-black pt-5'>
        New User?
        <span
          className='text-primary cursor-pointer'
          onClick={() => router.push(urls.registration)}
        >
          Create an account
        </span>
      </div>
    </div>
  );
};

export default LoginView;
