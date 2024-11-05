"use client";
import Image from 'next/image';
import React, { useState, useEffect } from "react";

export default function AboutMeSection() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const title = "About";
  const subtitle = "Frontend Website Developer";
  const description =
    "Front end developer with one year of experience also doing internship at Codic Solutions.  muhammadabdullahfscem@gmail.com";
  const linkedInUrl =
    "https://www.linkedin.com/in/muhammad-abdullah-7572762b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";

  // Handle screen resizing
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Adjust breakpoint for small screens
    };

    handleResize(); // Check screen size on mount
    window.addEventListener("resize", handleResize); // Listen to window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up event listener
    };
  }, []);

  // Handler to open LinkedIn URL
  const handleButtonClick = () => {
    window.open(linkedInUrl, "_blank");
  };

  return (
    <div
      className={`relative min-h-screen flex ${
        isSmallScreen
          ? "flex-col items-center justify-center text-center pt-12"
          : "flex-row items-center justify-center"
      } bg-[#2F393F]`}
    >
      {/* Image section */}
      <div
        className={`relative flex justify-center items-center ${
          isSmallScreen ? "w-full h-auto mb-8" : "w-[400px] h-[400px] mr-[30px]"
        }`}
      >
        <Image
          src="/assets/circle.png"
          alt="Profile"
          width={300} // adjust dimensions as needed
          height={450} // adjust dimensions as needed
          className={`object-cover rounded-full shadow-lg ${
            isSmallScreen ? "w-[200px] h-[300px]" : "w-[300px] h-[450px]"
          }`}
          priority // Ensures this image loads immediately for performance
        />
      </div>

      {/* Text section */}
      <div
        className={`text-white relative ${isSmallScreen ? "max-w-[90%] text-sm" : "max-w-[700px] text-lg"} z-10 p-6`}
      >
        {/* Title */}
        <div
          className={`font-sen font-extrabold ${
            isSmallScreen ? "text-3xl" : "text-5xl"
          } mb-4`}
        >
          {title}{" "}
          <span className="text-[#01eeff]">
            Me
          </span>
        </div>

        {/* Subtitle */}
        <div
          className={`font-inter font-extrabold ${
            isSmallScreen ? "text-2xl" : "text-4xl"
          } mb-4`}
        >
          {subtitle}
        </div>

        {/* Description */}
        <div
          className={`font-poppins font-normal ${
            isSmallScreen ? "text-base" : "text-xl"
          } mb-6`}
        >
          {description}
        </div>

        {/* Button */}
        <button
          onClick={handleButtonClick}
          className={`bg-[#01eeff] text-white py-2 px-6 rounded-lg ${
            isSmallScreen ? "text-base" : "text-lg"
          } shadow-[0_0_10px_5px_rgba(1,238,255,0.4)] hover:shadow-[0_0_15px_10px_rgba(1,238,255,0.6)] transition-all duration-300`}
        >
          See More
        </button>
      </div>
    </div>
  );
}
