// src/components/layouts/home-layout.tsx
'use client';

// Hooks Imports
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

// Components Imports
import Filter from '@/components/common/filter';
import Footer from '@/components/pages-layouts/footer';
import HeroSection from '@/components/pages-layouts/hero-section';
import Navbar from '@/components/pages-layouts/navbar';

// Constant Imports
import { urls } from '@/constant/router/routes';

const HomeLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  // showHero
  const showHero = [
    urls.home,
    urls.favorite,
    '/properties/rent-buy-properties',
  ].includes(pathname);

  // showFilters
  const showFilter = [urls.home, '/properties/rent-buy-properties'].includes(
    pathname,
  );

  // showFooter
  const showFooter = [
    urls.home,
    urls.map,
    urls.propertyDetails,
    urls.favorite,
    '/properties/rent-buy-properties',
  ].includes(pathname);

  return (
    <div>
      {/* Navbar */}
      <Navbar />
      <div className={`relative`}>
        {/* Hero Section */}
        {showHero && <HeroSection />}
        <div className='flex justify-center w-full absolute top-[370px] md:top-[75%] z-10 p-4'>
          {/* Filter */}
          {showFilter && <Filter />}
        </div>
      </div>
      {/* Children */}
      <div
        className={`flex flex-col
           ${showFilter && <Filter /> && showHero && <HeroSection /> ? 'mt-[880px] sm:mt-[450px] md:mt-[240px]' : 'my-10'} 
            `}
      >
        {children}
      </div>
      {/* Footer */}
      {showFooter && <Footer />}
    </div>
  );
};

export default HomeLayout;
