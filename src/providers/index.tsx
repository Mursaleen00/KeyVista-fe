import React from 'react';
import { Toaster } from 'react-hot-toast';
import ReactQueryProvider from './query.provider';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactQueryProvider>
      <Toaster />
      {children}
    </ReactQueryProvider>
  );
};

export default Providers;
