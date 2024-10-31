import type { Metadata } from 'next';
import './globals.css';
import { Source_Sans_3 } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// const poppins = Poppins({
//   weight: ['400', '600', '700'],
//   subsets: ['latin'],
// });

const sourceSans3 = Source_Sans_3({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sourceSans3.className}>
      <body className="relative min-h-screen w-full">
        <div className="container mx-auto px-20">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
