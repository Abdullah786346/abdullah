"use client";

import React from 'react';

export default function AboutMeSection() {
  const [isSmallScreen, setIsSmallScreen] = React.useState(false);

  React.useEffect(() => {
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

  return (
    <div
      className={`relative min-h-screen p-8 bg-[#323846] flex ${isSmallScreen ? 'flex-col items-center text-center' : 'flex-row items-center text-left'}`}
    >
      <img
        src="/assets/circle.png"
        alt="Profile"
        className={`w-${isSmallScreen ? '4/5' : '1/2'} max-w-[400px] h-auto ${isSmallScreen ? 'mb-8' : 'mr-8'}`}
      />
      <div className="text-white max-w-[600px]">
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
        <button className="bg-[#01eeff] text-white py-3 px-6 rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl">
          See More
        </button>
      </div>
    </div>
  );
}
