"use client";
import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(100);
  const [loopNum, setLoopNum] = useState(0);
  const period = 1000;

  const toRotate = useMemo(() => ["UI/UX Designer", "Backend Developer", "Frontend Developer"], []);

  useEffect(() => {
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 3);
      } else {
        setDelta(200);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(100);
      }
    };

    const ticker = setInterval(tick, delta);

    return () => clearInterval(ticker);
  }, [text, delta, isDeleting, loopNum, toRotate]);

  return (
    <div className="bg-black min-h-screen flex flex-col justify-center items-center px-4 py-8">
      <div className="flex flex-col md:flex-row items-center justify-center max-w-screen-xl mx-auto w-full">
        {/* Text Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left mb-6 md:mb-0 md:w-1/2 mt-4 md:mt-20 px-4 md:px-0">
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-light tracking-wide mb-2 sm:mb-4">
            Hello It&apos;s Me
          </h1>
          <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
            Muhammad Abdullah
          </h2>
          <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 sm:mb-6">
            I&apos;m a <span className="text-cyan-400">{text}</span>
          </p>
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl mb-4">
            And I’m a passionate developer ready to bring ideas to life.
          </p>
          <a
            href="/abdullahcv.pdf"
            download="Muhammad_Abdullah_CV.pdf"
            className="bg-[#01eeff] text-white px-4 sm:px-6 md:px-10 py-2 sm:py-3 md:py-4 rounded-md shadow-[0_0_20px_10px_rgba(1,238,255,0.6)] hover:shadow-[0_0_30px_15px_rgba(1,238,255,0.8)] transition duration-300 cursor-pointer mb-16 inline-block text-center"
          >
            Download CV
          </a>
        </div>

        {/* Image Section */}
        <div className="relative w-full md:w-1/2 flex justify-center items-center px-4 md:px-0">
          <Image 
            src="/assets/goodimage.png" 
            alt="Hero Image" 
            className="w-48 sm:w-64 md:w-80 lg:w-[500px] h-auto object-contain md:object-cover"
            layout="intrinsic"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
