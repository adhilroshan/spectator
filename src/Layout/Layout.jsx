import React from 'react';
import Navbar from '../components/Navbar/Navbar';

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <div className="bg-gray-900 min-h-screen flex-grow flex flex-col">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
export default Layout;
