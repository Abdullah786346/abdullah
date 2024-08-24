"use client"; // Add this line at the top

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-black text-white z-50">
      <div className="flex justify-between items-center px-4 sm:px-8 py-4">
        {/* Desktop Content */}
        <div className="flex items-center w-full">
          {/* Desktop Portfolio Button (Left Side) */}
          <Link href="/" className="text-[20px] text-white px-4 py-2">
            Portfolio
          </Link>

          {/* Desktop Navbar (Right Side) */}
          <nav className="hidden md:flex items-center space-x-6 sm:space-x-8 text-sm sm:text-lg ml-auto">
            <Link href="/" className="hover:text-teal-400 transition duration-300">Home</Link>
            <Link href="/about" className="hover:text-teal-400 transition duration-300">About</Link>
            <Link href="/services" className="hover:text-teal-400 transition duration-300">Services</Link>
            <Link href="/contact" className="hover:text-teal-400 transition duration-300">Contacts</Link>
          </nav>
        </div>

        {/* Mobile Menu Button (Right Side) */}
        <button
          className="md:hidden text-teal-400 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Open menu</span>
          MENU
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full md:hidden bg-black text-white p-4 shadow-lg z-50">
          <button
            className="absolute right-4 left-4 text-teal-400"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            CLOSE
          </button>
          <nav className="flex flex-col space-y-4 mt-12">
            <Link href="/" className="hover:text-teal-400 transition duration-300">Home</Link>
            <Link href="/about" className="hover:text-teal-400 transition duration-300">About</Link>
            <Link href="/services" className="hover:text-teal-400 transition duration-300">Services</Link>
            <Link href="/portfolio" className="hover:text-teal-400 transition duration-300">Portfolio</Link>
            <Link href="/contact" className="hover:text-teal-400 transition duration-300">Contacts</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

