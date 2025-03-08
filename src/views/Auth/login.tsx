import Button from '@/components/buttons/button';
import Input from '@/components/inputs/input';
// import Input from '@/components/inputs/input ';
import { LoginData } from '@/constant/auth/login-data';

const LoginView = () => {
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
      />
    </div>
  );
};

export default LoginView;
