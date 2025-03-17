'use client';
import Button from '@/components/buttons/button';
import Input from '@/components/inputs/input';
import { LoginData } from '@/constant/auth/login-data';
import { urls } from '@/constant/urls-data';
import { loginSchema } from '@/schemas/login-schema';
import { useFormik } from 'formik';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import logo from '@/../public/images/logo.png';
import AuthHeading from '@/components/common/auth-heading';

const initialValues = {
  email: '',
  password: '',
};
const LoginView = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: () => {},
  });
  const { values, errors, touched, handleChange, handleSubmit } = formik;
  return (
    <div className=' grid w-full   gap-y-5 p-4 mt-40 lg:mt-0'>
      <Image
        src={logo}
        alt='logo'
        width={200}
        height={100}
        className='flex lg:hidden absolute top-10 left-10'
      />
      <AuthHeading text='Log in to' />
      {/* <div className='text-2xl pb-6 font-semibold text-text-light'>
        Log in to <span className='text-primary'> Agile</span>
        <span>Space</span>
      </div> */}

      {/* Inputs */}
      {LoginData.map((item, i) => (
        <div
          key={i}
          className='grid  w-full gap-y-5'
        >
          <Input
            {...item}
            className='flex  text-gray-700 p-2'
            value={values[item.name as keyof typeof values]}
            error={errors[item.name as keyof typeof errors]}
            touched={touched[item.name as keyof typeof touched]}
            onChange={handleChange}
          />
        </div>
      ))}

      <div
        className='flex w-full items-end justify-end text-primary cursor-pointer'
        onClick={() => router.push(urls.forgetPassword)}
      >
        Forgot password?
      </div>

      {/* button  */}
      <Button
        text='Login'
        className='flex w-full mt-7'
        onClick={handleSubmit}
      />
      <div className='flex gap-x-3 items-end justify-center lg:absolute text-lg xl:text-xl  md:top-3  right-20 md:right-40 text-black pt-5'>
        New user?
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
