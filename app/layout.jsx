import '@/assets/styles/globals.css';
import React from 'react';

export const metadata = {
    title: 'PropertyPulse | Find The Perfect Rental',
    description: 'Find Your Dream Rental Property',
    keywords: 'rental, find retals, find properties',
};

const MainLayout = ({ children }) => {
  return (
    <html lang='en'>
        <body>
            <div>{ children }</div>
        </body>
    </html>    
  );
}

export default MainLayout