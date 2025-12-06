// src/app/(pages)/layout.tsx

// React Imports
import { ReactNode, Suspense } from 'react';

// Components Imports
import Loader from '@/components/common/loader';
import PagesLayout from '@/components/layouts/pages-layout';
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
      <PagesLayout>
        <Providers>{children}</Providers>
      </PagesLayout>
    </Suspense>
  );
};

export default Layout;
