'use client';
import Filter from '@/components/common/filter';
import Footer from '@/components/pages-layouts/footer';
import HeroSection from '@/components/pages-layouts/hero-section';
import Navbar from '@/components/pages-layouts/navbar';
import { urls } from '@/constant/router/routes';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
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
      <Navbar />
      <div className={`${showFilter && 'mb-[700px] md:mb-36'} relative`}>
        {showHero && <HeroSection />}
        <div className='flex justify-center'>{showFilter && <Filter />}</div>
      </div>
      <div className='flex flex-col py-10'>{children}</div>
      {showFooter && <Footer />}
    </div>
  );
};

export default Layout;
