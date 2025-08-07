import HomeLayout from '@/components/layouts/home-layout';
import { ReactNode, Suspense } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeLayout>{children}</HomeLayout>
    </Suspense>
  );
};

export default Layout;
