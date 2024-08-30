"use client";

import React, { useState, useEffect } from 'react';

export default function AboutMeSection() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000); // 2 seconds delay before showing the content

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`relative min-h-screen flex ${isSmallScreen ? 'flex-col items-center text-center pt-6' : 'flex-row items-center justify-center'}`}
      style={{ background: '#2F393F' }}
    >
      <div
        className={`relative transition-transform duration-1000 ease-out transform ${showContent ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'} ${isSmallScreen ? 'w-full h-auto' : 'w-[400px] h-[400px]'} ${isSmallScreen ? 'mb-3' : 'mr-3'}`}
      >
        <img
          src="/assets/circle.png"
          alt="Profile"
          className={`object-cover ${isSmallScreen ? 'w-full h-auto' : 'w-full h-full'} `}
        />
      </div>
      <div
        className={`text-white relative z-10 p-6 transition-transform duration-1000 ease-out transform ${showContent ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} ${isSmallScreen ? 'max-w-[90%]' : 'max-w-[600px]'}`}
      >
        <div className="font-sen font-extrabold text-3xl mb-4">
          <span>About </span>
          <span className="text-[#01eeff]">Me</span>
        </div>
        <div className="font-inter font-extrabold text-2xl mb-4">
          Full Stack Developer
        </div>
        <div className="font-poppins font-normal text-lg mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
        </div>
        <button className="bg-[#01eeff] text-white py-3 px-6 rounded-md shadow-[0_0_20px_10px_rgba(1,238,255,0.6)] hover:shadow-[0_0_30px_15px_rgba(1,238,255,0.8)] transition duration-300 ">
          See More
        </button>
      </div>
    </div>
  );
}
