'use client';
import Button from '@/components/buttons/button';
import Input from '@/components/inputs/input';
import { urls } from '@/constant/routes';
import { useFormik } from 'formik';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import logo from '@/../public/images/logo.png';
import { OtpEmailData } from '@/constant/auth/otp-email-data';
import { OtpEmailSchema } from '@/schema/otp-email-schema';

const initialValues = {
  email: '',
};
const OtpEmailView = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues,
    validationSchema: OtpEmailSchema,
    onSubmit: () => {},
  });
  const { values, errors, touched, handleChange, handleSubmit } = formik;
  return (
    <div className=' grid w-full gap-y-5 p-4 mt-40 lg:mt-0'>
      <Image
        src={logo}
        alt='logo'
        width={200}
        height={100}
        className='flex lg:hidden absolute top-10 left-10'
      />

      <div className='text-2xl text-heading font-semibold'>Forgot Password</div>
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

export default OtpEmailView;
