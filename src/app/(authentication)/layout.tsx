import house from '@/../public/images/bgHouse.png';
import whiteLogo from '@/../public/images/whiteLogo.png';
import Image from 'next/image';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='grid lg:grid-cols-2 xl:grid-cols-3 max-h-screen overflow-hidden h-full'>
      <div className='relative hidden lg:block'>
        <Image
          src={house}
          alt='house'
          width={400}
          height={100}
          className='flex h-[600px] md:h-screen w-full'
        />

        <div>
          <Image
            src={whiteLogo}
            alt='whiteLogo'
            width={200}
            className=' flex absolute top-12 left-10 '
          />
          <p className='grid absolute bottom-12 left-4 right-4 text-white text-4xl  font-semibold'>
            Lorem Ipsum is simply dummy text of the printing and
          </p>
        </div>
      </div>

      <div className='xl:col-span-2 px-6 grid min-h-screen place-items-center'>
        <div className='max-w-2xl w-full'>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
