import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-black  to-blue-900 py-4">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        <div className="text">
          <Link href="/">
            <div className="text-white font-bold text-xl">Portfolio.</div>
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/">
                <div className="text-white hover:text-gray-300">Home</div>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <div className="text-white hover:text-gray-300">About</div>
              </Link>
            </li>
            <li>
              <Link href="/experience">
                <div className="text-white hover:text-gray-300">Experience</div>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <div className="text-white hover:text-gray-300">Projects</div>
              </Link>
            </li>
            <li>
              <Link href="/contacts">
                <div className="text-white hover:text-gray-300">Contacts</div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;