"use client";
import React, { useState, useEffect, useMemo, useRef } from 'react';
import Image from 'next/image';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(100);
  const [loopNum, setLoopNum] = useState(0);
  const period = 1000;
  const textRef = useRef(null);
  const imageRef = useRef(null);
  
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

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = { threshold: 0.2 };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    if (textRef.current) observer.observe(textRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <div className="bg-black min-h-screen flex flex-col justify-center items-center px-6 py-10">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-screen-lg mx-auto w-full">
        
        {/* Text Content with Scroll Animation */}
        <div
          ref={textRef}
          className="text-content text-center md:text-left md:w-1/2 space-y-5 px-4 md:px-0 mb-8 md:mb-0 opacity-0 transform transition-opacity duration-800 ease-out translate-y-12 fade-in"
        >
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-light tracking-wider">
            Hello It&apos;s Me
          </h1>
          <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold">
            Muhammad Abdullah
          </h2>
          <p className="text-white text-xl sm:text-2xl md:text-3xl">
            I&apos;m a <span className="text-cyan-400">{text}</span>
          </p>
          <p className="text-white text-lg sm:text-xl md:text-2xl">
            And I’m a passionate developer ready to bring ideas to life.
          </p>
          <a
            href="/abdullahcv.pdf"
            download="Muhammad_Abdullah_CV.pdf"
            className="bg-[#01eeff] text-white px-5 py-3 rounded-md shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105 inline-block text-center"
          >
            Download CV
          </a>
        </div>

        {/* Image Section with Scroll Animation */}
        <div
          ref={imageRef}
          className="image-content md:w-1/2 flex justify-center opacity-0 transform transition-opacity duration-800 ease-out translate-y-12 fade-in"
        >
          <div className="w-60 sm:w-72 md:w-80 lg:w-[400px]">
            <Image 
              src="/assets/goodimage.png" 
              alt="Hero Image" 
              width={500}
              height={500}
              className="object-cover rounded-full"
            />
          </div>
        </div>
      </div>

      <style global jsx>{`
        .fade-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </div>
  );
};

export default Hero;
