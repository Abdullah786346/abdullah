"use client";
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faYoutube, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(100);
  const [loopNum, setLoopNum] = useState(0);
  const toRotate = ["UI/UX Designer", "Backend Developer", "Frontend Developer"];
  const period = 1000;

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
  }, [text, delta, isDeleting, loopNum]);

  return (
    <div className="bg-black h-screen flex flex-col justify-left items-left px-4 py-8">
      <div className="flex flex-col md:flex-row items-center justify-left md:justify-left max-w-screen-xl mx-auto w-full">
        {/* Text Content */}
        <div className="flex flex-col items-left md:items-start text-left md:text-left mb-[-40px] md:mb-0 md:w-1/2 mt-[100px] ml-[20px]">
          <div className="mb-0 md:mb-0">
            <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-wider uppercase mb-2 sm:mb-4">
              Hello It's Me
            </h1>

            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Muhammad Abdullah
            </h2>

            <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 sm:mb-6">
              I'm a <span className="text-cyan-400">{text}</span>
            </p>

            <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl mb-4">
              And I’m a passionate developer ready to bring ideas to life.
             
            </p>
         
            <a
              href="/abdullahcv.pdf" // Link to your CV file
              download="Muhammad_Abdullah_CV.pdf" // Filename for download
              className="bg-[#01eeff] text-white px-4 sm:px-6 md:px-10 py-2 sm:py-3 md:py-4 rounded-md shadow-[0_0_20px_10px_rgba(1,238,255,0.6)] hover:shadow-[0_0_30px_15px_rgba(1,238,255,0.8)] transition duration-300 cursor-pointer mb-8 inline-block text-center"
            >
              Download CV
            </a>
          </div>

          {/* Social Links Section */}
          
        </div>

        {/* Image Section */}
        <div className="relative w-full md:w-1/2 flex justify-center items-center">
          <img 

            src="/assets/goodimage (1).png" 
            alt="image" 
            className="relative z-10 w-30 sm:w-40 md:w-[350px] h-auto object-cover absolute bottom-[80px] md:bottom-1/5 translate-y-1/5 md:translate-y-8"

            src="/assets/goodimage.png" 
            alt="Girl Image" 
            className="w-56 sm:w-72 lg:w-[500px] h-auto object-cover" 

          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
