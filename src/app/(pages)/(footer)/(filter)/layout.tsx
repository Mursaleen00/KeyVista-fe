import Filter from '@/components/common/filter';
import HeroSection from '@/components/pages-layouts/hero-section';
import React, { ReactNode } from 'react';

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <HeroSection />
      <div className='flex justify-center -mt-20'>
        <Filter />
      </div>
      {children}
    </div>
  );
};

export default layout;
