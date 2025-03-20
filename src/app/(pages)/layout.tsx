import Filter from '@/components/common/filter';
import Footer from '@/components/pages-layouts/footer';
import HeroSection from '@/components/pages-layouts/hero-section';
import Navbar from '@/components/pages-layouts/navbar';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className='flex justify-center -mt-20'>
        <Filter />
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
