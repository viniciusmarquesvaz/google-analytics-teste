'use client'
import { useEffect } from 'react';
import ReactGA from 'react-ga';


import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });


const RootLayout = ({ children }: { children: any }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      ReactGA.initialize('G-JRDW7FJ9XZ'); 
      ReactGA.pageview(window.location.pathname + window.location.search);
      console.log('entrou aq')
    }
  }, []);
  ReactGA.initialize('G-JRDW7FJ9XZ'); 
  ReactGA.send({
    hitType:"pageview",
    page: window.location.pathname
  })
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
