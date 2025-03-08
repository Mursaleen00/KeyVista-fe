'use client';
import Button from '@/components/buttons/button';
import Input from '@/components/inputs/input';
import { LoginData } from '@/constant/auth/login-data';
import { loginSchema } from '@/schemas/login-schema';
import { useFormik } from 'formik';

const initialValues = {
  email: '',
  password: '',
};
const LoginView = () => {
  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: () => {},
  });
  const { values, errors, touched, handleChange, handleSubmit } = formik;
  return (
    <div className='space-y-3'>
      {/* <div className='flex gap-x-3 items-end justify-end md:absolute text-md md:top-10  right-20 md:right-40'>
        New User? <span> Create an Account</span>
      </div> */}

      <div className='text-3xl pb-6'>
        Log in to <span> Agile </span>Spaces
      </div>

      {/* Inputs */}
      {LoginData.map((item, i) => (
        <div
          key={i}
          className='grid  w-full gap-y-5'
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

      <div className='flex w-full items-end justify-end pt-0 '>
        <p>Forgot password?</p>
      </div>

      {/* button  */}
      <Button
        text='Login'
        className='flex w-full mt-7'
        onClick={handleSubmit}
        isOutline
      />
    </div>
  );
};

export default LoginView;
