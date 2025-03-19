import Footer from '@/components/pages-layouts/footer';
import HeroSection from '@/components/pages-layouts/hero-section';
import Navbar from '@/components/pages-layouts/navbar';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
