import React from 'react';

import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div className="bg-slate-200 sticky top-0 z-50 shadow-2xl ">
    <nav className="relative container mx-auto  p-6">
      {/* Flex Container */}
      <div className="flex item-center justify-between">
        {/* Logo */}
        <div className="font-mono font-semibold text-gray-800 text-2xl">
          Spectator
        </div>
        {/* Right Section */}
        <div className="hidden md:flex space-x-6 font-mono font-semibold text-gray-800">
          <NavLink to="/" className="hover:text-amber-600 ">
            Home
          </NavLink>
          <NavLink to="/projects" className="hover:text-amber-600 ">
            Projects
          </NavLink>
          <NavLink to="/contact" className="hover:text-amber-600 ">
            Contact Us
          </NavLink>
        </div>
      </div>
      {/* Mobile menu */}
      <div className="md:hidden">
        <div
          id="menu"
          className="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
        >
          <NavLink to="/" className="hover:text-amber-600 ">
            Home
          </NavLink>
          <NavLink to="/projects" className="hover:text-amber-600 ">
            Projects
          </NavLink>
          <NavLink to="/contact" className="hover:text-amber-600 ">
            Contact Us
          </NavLink>
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;
