// src/app/(authentication)/layout.tsx

// Images Imports
import purpleAuthHouse from '@/../public/images/purpleAuthHouse.png';

// Next Import
import Image from 'next/image';

// React Import
import { ReactNode } from 'react';
import Logo from '@/components/logo/logo';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='grid lg:grid-cols-2 xl:grid-cols-3 overflow-hidden h-full'>
      <div className='relative hidden lg:block'>
        {/* Image */}
        <Image
          src={purpleAuthHouse}
          alt='purpleAuthHouse'
          width={400}
          height={100}
          className='flex h-[600px] md:h-screen w-full'
        />
        {/* logo */}
        <div>
          <div className='flex absolute top-12 left-10'>
            <Logo WhiteLogo />
          </div>
          <p className='grid absolute bottom-12 left-4 right-4 text-white text-4xl font-semibold'>
            Lorem Ipsum is simply dummy text of the printing and
          </p>
        </div>
      </div>
      {/* children */}
      <div className='xl:col-span-2 px-6 grid place-items-center h-full'>
        <div className='max-w-3xl w-full'>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
