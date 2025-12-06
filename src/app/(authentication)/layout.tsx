// src/app/(authentication)/layout.tsx

// React Import
import { ReactNode } from 'react';
import AuthLayout from '@/components/layouts/auth-layout';

const Layout = ({ children }: { children: ReactNode }) => (
  <AuthLayout>{children}</AuthLayout>
);

export default Layout;
