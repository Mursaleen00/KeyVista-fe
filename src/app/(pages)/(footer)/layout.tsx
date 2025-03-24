import Footer from '@/components/pages-layouts/footer';
import React, { ReactNode } from 'react';

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};

export default layout;
