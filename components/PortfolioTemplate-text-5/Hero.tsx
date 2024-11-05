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
        setDelta((prevDelta) => prevDelta / 3);
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
      <div className="flex flex-col-reverse md:flex-row items-center max-w-screen-xl mx-auto w-full">
        {/* Text Content */}
        <div className="text-left md:text-left md:w-1/2 px-4 py-4 pt-[80px] md:pl-12 md:pr-12">
          <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-wider mb-1 sm:mb-2">
            Hello, It&apos;s Me
          </h1>
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-1 sm:mb-3">
            Muhammad Abdullah
          </h2>
          <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl mb-1 sm:mb-3">
            I&apos;m a <span className="text-cyan-400">{text}</span>
          </p>
          <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl mb-3 sm:mb-4">
            And I’m a passionate developer ready to bring ideas to life.
          </p>
          <a
            href="/abdullahcv.pdf"
            download="Muhammad_Abdullah_CV.pdf"
            className="bg-[#01eeff] text-white px-4 py-2 rounded-md shadow-lg hover:shadow-xl transition duration-300 mb-4 inline-block text-sm sm:text-base"
          >
            Download CV
          </a>
        </div>
        {/* Image Section */}
        <div className="relative w-64 sm:w-80 md:w-96 lg:w-[400px] xl:w-[470px] 2xl:w-[500px] flex justify-center items-center md:mb-0 md:ml-12">
          <Image
            src="/assets/goodimage.png"
            alt="Profile Image"
            className="rounded-full object-cover"
            layout="intrinsic"  // Using 'intrinsic' layout for responsive width and height
            width={800}         // Larger base width for the image
            height={800}        // Larger base height (keeping it square for the circular effect)
            sizes="(max-width: 640px) 35vw, (max-width: 768px) 25vw, 15vw"  // Adjust sizes for responsiveness
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
