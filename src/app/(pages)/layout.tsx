import HomeLayout from '@/components/layouts/home-layout';
import Providers from '@/providers';
import { ReactNode, Suspense } from 'react';
import { MoonLoader } from 'react-spinners';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Suspense
      fallback={
        <MoonLoader
          color='#6A4C65'
          size={100}
          speedMultiplier={2}
          className='flex justify-center items-center text-center'
        />
      }
    >
      <HomeLayout>
        {' '}
        <Providers>{children}</Providers>
      </HomeLayout>
    </Suspense>
  );
};

export default Layout;
