import '@/assets/styles/globals.css';
import React from 'react'

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