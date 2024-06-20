import Navbar from '@/components/Navbar';
import '@/assets/styles/globals.css';
import React from 'react';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'PropertyPulse | Find The Perfect Rental',
    description: 'Find Your Dream Rental Property',
    keywords: 'rental, find retals, find properties',
};

const MainLayout = ({ children }) => {
  return (
    <html lang='en'>
        <body>
          <Navbar />
          <main>{ children }</main>
          <Footer />
        </body>
    </html>    
  );
}

export default MainLayout