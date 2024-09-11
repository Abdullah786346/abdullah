"use client";
import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(100); // Decreased initial speed for typing and deleting
  const [loopNum, setLoopNum] = useState(0);
  const toRotate = ["UI/UX Designer", "Backend Developer", "Frontend Developer"];
  const period = 1000; // Duration for which the full text is displayed

  useEffect(() => {
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 3); // Speed up the deleting
      } else {
        setDelta(200); // Increase typing speed
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period); // Pause before starting to delete
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(100); // Faster typing speed for the next cycle
      }
    };

    const ticker = setInterval(tick, delta);

    return () => clearInterval(ticker);
  }, [text, delta, isDeleting, loopNum]);

  return (
    <div className="bg-black">
      <div className="flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 md:px-16 py-8 relative z-10 space-y-8 md:space-y-0">
        {/* Text Content */}
        <div className="flex flex-col items-start text-left mb-8 md:mb-0 md:pr-16 mt-9 pt-5">
          <h1 className="text-white text-lg sm:text-xl md:text-2xl font-light tracking-wider uppercase mb-2 sm:mb-4">
            Hello It's Me
          </h1>

          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Muhammad Abdullah
          </h2>

          {/* Combined text with cyan highlight */}
          <p className="text-white sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6">
            And I'm a <span className="text-cyan-400">{text}</span>
          </p>

          <p className="text-white mb-4">
            And I’m a passionate developer ready to bring ideas to life.
          </p>

          {/* Social Media Links */}
          <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-6 mb-4 sm:mb-6">
            {/* Add social media icons */}
          </div>

          {/* Download CV Button */}
          <button className="bg-[#01eeff] text-white px-4 sm:px-6 md:px-10 py-2 sm:py-3 md:py-4 rounded-md shadow-[0_0_20px_10px_rgba(1,238,255,0.6)] hover:shadow-[0_0_30px_15px_rgba(1,238,255,0.8)] transition duration-300 cursor-pointer">
            Download CV
          </button>
        </div>

        <div className="relative flex items-center justify-center w-full md:w-1/2">
          <img 
            src="/assets/goodimage (1).png" 
            alt="Girl Image" 
            className="relative z-10 w-30 sm:w-40 md:w-[350px] h-auto object-cover absolute bottom-[80px] md:bottom-1/5 translate-y-1/5 md:translate-y-8"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
