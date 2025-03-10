'use client';
import Button from '@/components/buttons/button';
import Input from '@/components/inputs/input';
import { RegistrationData } from '@/constant/auth/registration-data';
import { urls } from '@/constant/urls-data';
import { registrationSchema } from '@/schemas/registration-schema';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';

const initialValues = {
  fullName: '',
  email: '',
  password: '',
  conformPassword: '',
};
const RegistrationView = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues,
    validationSchema: registrationSchema,
    onSubmit: () => {},
  });
  const { values, errors, touched, handleChange, handleSubmit } = formik;
  return (
    <div className='grid w-full right-64  gap-y-5 p-4'>
      <div className='flex gap-x-3  items-end justify-end md:absolute text-xl md:top-10  right-20 md:right-40'>
        Already have an Account?{' '}
        <span
          className='text-primary'
          onClick={() => router.push(urls.login)}
        >
          Login
        </span>
      </div>
      <div className='text-3xl pb-6'>
        Register to <span className='text-primary'> Agile </span>Spaces
      </div>
      {/* Inputs */}
      {RegistrationData.map((item, i) => (
        <div
          key={i}
          className='grid w-full gap-y-5'
        >
          <Input
            {...item}
            className='flex  text-gray-700'
            value={values[item.name as keyof typeof values]}
            error={errors[item.name as keyof typeof errors]}
            touched={touched[item.name as keyof typeof touched]}
            onChange={handleChange}
          />
        </div>
      ))}
      <div className='flex w-full gap-x-2 items-start'>
        <input
          type='checkbox'
          className='flex w-[20px] text-primary'
        />
        <p className='flex gap-2'>
          By signing up, you agree to our
          <span className='text-primary'>Privacy Policy </span> &
          <span className='text-primary'>Terms of Service</span>
        </p>
      </div>
      {/* button  */}
      <Button
        text='Register'
        className='flex  w-full mt-7'
        onClick={handleSubmit}
      />
    </div>
  );
};

export default RegistrationView;
