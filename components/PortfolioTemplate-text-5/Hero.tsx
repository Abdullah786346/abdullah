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
    <div className="bg-black min-h-screen flex flex-col justify-center items-center px-6 py-10">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-screen-lg mx-auto w-full">
        {/* Text Content */}
        <div className="text-center md:text-left md:w-1/2 space-y-4">
          <h1 className="text-white text-2xl md:text-4xl font-light tracking-wider">
            Hello It&apos;s Me
          </h1>
          <h2 className="text-white text-3xl md:text-5xl font-bold">
            Muhammad Abdullah
          </h2>
          <p className="text-white text-lg md:text-2xl">
            I&apos;m a <span className="text-cyan-400">{text}</span>
          </p>
          <p className="text-white text-sm md:text-lg">
            And I’m a passionate developer ready to bring ideas to life.
          </p>
          <a
            href="/abdullahcv.pdf"
            download="Muhammad_Abdullah_CV.pdf"
            className="bg-[#01eeff] text-white px-5 py-3 rounded-md shadow-lg hover:shadow-xl transition duration-300 inline-block text-center"
          >
            Download CV
          </a>
        </div>

        {/* Image Section */}
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
          <div className="w-48 sm:w-64 md:w-80 lg:w-[400px] relative">
            <Image 
              src="/assets/goodimage.png" 
              alt="Hero Image" 
              layout="responsive"
              width={500}
              height={500}
              className="object-cover rounded-full md:rounded-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
