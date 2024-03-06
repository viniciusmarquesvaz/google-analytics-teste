'use client'
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import Script from 'next/script';

import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const RootLayout = ({ children }: { children: any }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Código do Google Analytics
      ReactGA.initialize('G-JRDW7FJ9XZ');
      ReactGA.pageview(window.location.pathname + window.location.search);
      console.log('entrou aq');
    }
  }, []);

  return (
    <html lang="en">
      <head>
        {/* Adiciona o script do Google Analytics diretamente no head */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-JRDW7FJ9XZ" />
        <Script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JRDW7FJ9XZ');
          `}
        </Script>
        {/* ... outros meta tags e links de estilo ... */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
