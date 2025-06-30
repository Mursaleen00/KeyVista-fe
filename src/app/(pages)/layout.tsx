'use client';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/pages-layouts/navbar';
import { ReactNode } from 'react';
import HeroSection from '@/components/pages-layouts/hero-section';
import Filter from '@/components/common/filter';
import { urls } from '@/constant/router/routes';
import Footer from '@/components/pages-layouts/footer';

const Layout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  // showHero
  const showHero = [
    `${urls.home}`,
    `${urls.buyProperties}`,
    `${urls.favorite}`,
    `${urls.rentProperties}`,
  ].includes(pathname);

  // showFilter
  const showFilter = [
    `${urls.home}`,
    `${urls.buyProperties}`,
    `${urls.rentProperties}`,
  ].includes(pathname);

  // showFooter
  const showFooter = [
    `${urls.home}`,
    `${urls.map}`,
    `${urls.propertyDetails}`,
    `${urls.buyProperties}`,
    `${urls.favorite}`,
    `${urls.rentProperties}`,
  ].includes(pathname);
  return (
    <div>
      <Navbar />
      <div>
        {showHero && <HeroSection />}
        <div className='flex justify-center -mt-16'>
          {showFilter && <Filter />}
        </div>
      </div>
      <div className='flex flex-col py-14'>{children}</div>
      {showFooter && <Footer />}
    </div>
  );
};

export default Layout;
