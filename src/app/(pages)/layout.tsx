// src/app/(pages)/layout.tsx

// React Imports
import { ReactNode, Suspense } from 'react';

// Components Imports
import Loader from '@/components/common/loader';
import HomeLayout from '@/components/layouts/home-layout';
import Providers from '@/providers';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Suspense
      fallback={
        <div className='flex justify-center items-center h-screen w-full'>
          <Loader />
        </div>
      }
    >
      <HomeLayout>
        <Providers>{children}</Providers>
      </HomeLayout>
    </Suspense>
  );
};

export default Layout;
