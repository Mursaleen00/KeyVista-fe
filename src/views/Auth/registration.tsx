import house from '@/../public/images/bgHouse.png';
import whiteLogo from '@/../public/images/whiteLogo.png';
import Input from '@/components/inputs/input ';
import { RegistrationData } from '@/constant/auth/registration-data';
import Image from 'next/image';

const RegistrationView = () => {
  return (
    <div className='grid grid-cols-2 border justify-center '>
      <div className=' relative '>
        <Image
          src={house}
          alt='house'
          width={400}
          height={100}
          className='flex '
        />
        <div className=''>
          <Image
            src={whiteLogo}
            alt='whiteLogo'
            width={200}
            className=' flex absolute top-12 left-10 bg-black'
          />
          <p className='grid absolute bottom-12 left-5 text-white text-4xl  font-semibold'>
            Lorem Ipsum is simply <br />
            dummy text of the <br />
            printing and
          </p>
        </div>
      </div>

      <div>
        {RegistrationData.map((item, i) => (
          <div
            key={i}
            className=''
          >
            <Input
              {...item}
              className='text-gray-700 w-full'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegistrationView;
