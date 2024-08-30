"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navlogo from "../public/nav-logo.png";
import Button from "./Button";
import { DM_Sans } from "next/font/google";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

const dmSans = DM_Sans({
  weight: "400",
  subsets: ["latin"],
});

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav
      className={`flex flex-col sm:flex-row items-center justify-between p-4 bg-black text-white ${dmSans.className}`}
    >
      {/* Left Side: Logo and Text */}
      <div className="flex items-center justify-between w-full sm:w-auto mb-4 sm:mb-0">
        <Image
          src={Navlogo}
          alt="Logo"
          width={60}
          height={60}
          className="mr-2"
        />
        <span className="text-xs sm:text-sm font-light text-gray-300">
          CODIC SOLUTION
        </span>

        {/* Hamburger Icon */}
        <button
          className="block sm:hidden text-white ml-auto"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Right Side: Buttons */}
      <div
        className={`flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 gap-[1.5rem] ${
          menuOpen ? "block" : "hidden"
        } sm:flex`}
      >
        <Link href="/pricing">
          <button className="px-4 py-2 bg-transparent text-xs sm:text-sm font-light text-gray-300 hover:text-gray-100">
            PRICING
          </button>
        </Link>
        <Link href="/signin">
          <Button variant="blue" disabled={false} size="sm">
            LOGIN
          </Button>
        </Link>
        <Link href="/signup">
          <Button variant="blue" disabled={false} size="sm">
            SIGNUP
          </Button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
