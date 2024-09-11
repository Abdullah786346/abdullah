"use client";

import React, { useState, useEffect } from 'react';

export default function AboutMeSection() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const title = 'About';
  const subtitle = 'Frontend website Developer';
  const description = 'Front end developer with one year of experience also doing internship at Codic Solutions.';

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Adjust the breakpoint for smaller screens
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`relative min-h-screen flex ${isSmallScreen ? 'flex-col items-center text-center pt-6' : 'flex-row items-center justify-center'} `}
      style={{ background: '#2F393F' }}
    >
      <div
        className={`relative transition-transform duration-1000 ease-out transform ${showContent ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'} 
        ${isSmallScreen ? 'w-3/4 h-auto mb-4' : 'w-[400px] h-[400px] mr-8'}`} 
      >
        <img
          src="/assets/circle.png"
          alt="Profile"
          className={`object-cover ${isSmallScreen ? 'w-full h-auto' : 'w-full h-full'}`}
          loading="lazy"
        />
      </div>
      <div
        className={`text-white relative z-10 p-6 transition-transform duration-1000 ease-out transform ${showContent ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} 
        ${isSmallScreen ? 'max-w-[90%] text-sm' : 'max-w-[700px] text-lg'}`}
      >
        <div className={`font-sen font-extrabold ${isSmallScreen ? 'text-3xl' : 'text-5xl'} mb-4`}>
          {title} <span className="text-[#01eeff]">Me</span>
        </div>
        <div className={`font-inter font-extrabold ${isSmallScreen ? 'text-2xl' : 'text-4xl'} mb-4`}>
          {subtitle}
        </div>
        <div className={`font-poppins font-normal ${isSmallScreen ? 'text-base' : 'text-xl'} mb-6`}>
          {description}
        </div>
        <button className={`bg-[#01eeff] text-white py-2 px-4 ${isSmallScreen ? 'text-base' : 'text-lg'} rounded-md shadow-[0_0_10px_5px_rgba(1,238,255,0.4)] hover:shadow-[0_0_15px_10px_rgba(1,238,255,0.6)] transition duration-300`}>
          See More
        </button>
      </div>
    </div>
  );
}
