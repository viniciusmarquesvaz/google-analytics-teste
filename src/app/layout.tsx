import React, { useEffect } from 'react';
import dynamic from 'next/dynamic'; 

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  useEffect(() => {
  
    if (typeof window !== 'undefined') {
      const ReactGA = dynamic(() => import('react-ga'), { ssr: false });
      ReactGA.initialize('G-JRDW7FJ9XZ'); 
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
