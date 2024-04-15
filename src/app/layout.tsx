import './globals.css';

import Header from '@/components/header';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Agro App',
  description: 'Where Farmers and Business meets',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
