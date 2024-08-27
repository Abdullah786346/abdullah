"use client"; 
import React, { useState, useEffect } from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(100); // Set initial delta to 100ms for faster speed
  const [loopNum, setLoopNum] = useState(0);
  const toRotate = ["UI/UX Designer", "Backend Developer", "Frontend Developer"];
  const period = 1000; // Reduce period to 1 second for faster transition

  useEffect(() => {
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta(50); // Set a fixed small delta for fast deletion
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(100); // Reset delta to 100ms for the next word
      }
    };

    let ticker = setInterval(tick, delta);

    return () => clearInterval(ticker);
  }, [text, delta, isDeleting, loopNum]);

  return (
  
    <div className="pt-20 bg-black"> {/* Background color set to black */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-16 py-8 md:py-20 relative z-10">
        {/* Text Content */}
        <div className="flex flex-col items-start text-left mb-8 md:mb-0 md:pr-16 mt-9 pt-5">
          <h1 className="text-white text-lg sm:text-xl md:text-2xl font-light tracking-wider uppercase mb-2 sm:mb-4">
            Hello It's Me
          </h1>

          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Duaa Inshrah
          </h2>
          <p className="text-white sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6">
            And I'm a <span className="text-blue-500">{text}</span>
          </p>
          <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-6 mb-4 sm:mb-6">
            <FaTwitter className="text-blue-400 hover:text-blue-500 transition duration-300 cursor-pointer text-xl sm:text-2xl md:text-3xl" />
            <FaFacebook className="text-blue-400 hover:text-blue-500 transition duration-300 cursor-pointer text-xl sm:text-2xl md:text-3xl" />
            <FaInstagram className="text-blue-400 hover:text-blue-500 transition duration-300 cursor-pointer text-xl sm:text-2xl md:text-3xl" />
            <FaYoutube className="text-blue-400 hover:text-blue-500 transition duration-300 cursor-pointer text-xl sm:text-2xl md:text-3xl" />
          </div>

          {/* New Text */}
          <p className="text-white mb-4">
            And I’m aAnd I’m aAnd I’m aAnd I’m aAnd I’m aAnd I’m aAnd I’m<br/> aAnd
            I’m aAnd I’m aAnd I’m aAnd I’m aAnd I’m aAnd I’m aAnd I’m<br/> aAnd
            I’m 
            aAnd I’m  aAnd I’m aAnd I’m a
          </p>

          <button className="bg-[#01eeff] text-white px-4 sm:px-6 md:px-10 py-2 sm:py-3 md:py-4 rounded-lg shadow-lg shadow-teal-400/70 hover:shadow-2xl hover:shadow-teal-500/80 transition duration-300">
            Download CV
          </button>
        </div>

         {/* Circle and Image */}
         <div className="relative flex items-center justify-center w-full md:w-1/2">
          {/* Circle */}
          <div className="absolute w-[60%] h-[80%] bg-gradient-to-r from-teal-400 to-teal-600 rounded-full shadow-[0_0_60px_20px_rgba(0,255,255,0.5)] opacity-80"></div>
          
          {/* Image inside circle */}
          <img 
            src="/assets/Maskgroup.svg" 
            alt="Girl Image" 
            className="relative z-10 w-56 sm:w-64 md:w-80 h-auto object-cover absolute bottom-1/6 md:bottom-1/5 translate-y-1/5 md:translate-y-8"

          />

        </div>
      </div>
    </div>
  );
};

export default Hero;
