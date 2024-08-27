"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const offsetValue = -10; // Adjust this value based on your navbar height and desired centering

  return (
    <header className="fixed top-0 w-full bg-black text-white z-50">
      <div className="flex justify-between items-center px-4 sm:px-8 py-4">
        {/* Desktop Content */}
        <div className="flex items-center w-full">
          <Link href="/" className="text-[20px] text-white px-4 py-2">
            Portfolio
          </Link>
          <nav className="hidden md:flex items-center space-x-6 sm:space-x-8 text-sm sm:text-lg ml-auto">
            <ScrollLink activeClass="text-yellow-400" to="Hero" spy={true} smooth={true} offset={offsetValue} duration={500} className="hover:text-teal-400 transition duration-300 cursor-pointer">Home</ScrollLink>
            <ScrollLink activeClass="text-yellow-400" to="AboutUs" spy={true} smooth={true} offset={offsetValue} duration={500} className="hover:text-teal-400 transition duration-300 cursor-pointer">About</ScrollLink>
            <ScrollLink activeClass="text-yellow-400" to="OurServices" spy={true} smooth={true} offset={offsetValue} duration={500} className="hover:text-teal-400 transition duration-300 cursor-pointer">Services</ScrollLink>
            <ScrollLink activeClass="text-yellow-400" to="ContactMe" spy={true} smooth={true} offset={offsetValue} duration={500} className="hover:text-teal-400 transition duration-300 cursor-pointer">Contacts</ScrollLink>
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-teal-400 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Open menu</span>
          {isMenuOpen ? (
            <GiCancel className="w-6 h-6" />
          ) : (
            <GiHamburgerMenu className="w-6 h-6" />
          )}
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
            <GiCancel className="w-6 h-6" />
          </button>
          <nav className="flex flex-col space-y-4 mt-12">
            <ScrollLink activeClass="text-yellow-400" to="Hero" spy={true} smooth={true} offset={offsetValue} duration={500} className="hover:text-teal-400 transition duration-300 cursor-pointer">Home</ScrollLink>
            <ScrollLink activeClass="text-yellow-400" to="AboutUs" spy={true} smooth={true} offset={offsetValue} duration={500} className="hover:text-teal-400 transition duration-300 cursor-pointer">About</ScrollLink>
            <ScrollLink activeClass="text-yellow-400" to="OurServices" spy={true} smooth={true} offset={offsetValue} duration={500} className="hover:text-teal-400 transition duration-300 cursor-pointer">Services</ScrollLink>
            <ScrollLink activeClass="text-yellow-400" to="ContactMe" spy={true} smooth={true} offset={offsetValue} duration={500} className="hover:text-teal-400 transition duration-300 cursor-pointer">Contacts</ScrollLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
