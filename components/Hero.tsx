'use client'; 

import React, { useEffect } from "react";
import { gsap } from "gsap";
import Button from "./Button";

const Hero = ({
  title,
  desc1,
  desc2,
  desc3,
  btnText,
}: {
  title: React.ReactNode;
  desc1: string;
  desc2: string;
  desc3: string;
  btnText: string;
}) => {
  useEffect(() => {
    // GSAP animation for title
    gsap.fromTo(
      ".hero-title",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    // GSAP animation for descriptions
    gsap.fromTo(
      ".hero-desc",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.3, ease: "power3.out" }
    );

    // GSAP animation for button
    gsap.fromTo(
      ".hero-btn",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, delay: 1, ease: "power3.out" }
    );

    // GSAP animation for grid items
    gsap.fromTo(
      ".hero-grid-item",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.3, ease: "power3.out", delay: 1.5 }
    );
  }, []);

  return (
    <section
      className="min-h-screen w-full flex flex-col md:justify-center bg-cover bg-center bg-hero relative"
      style={{ backgroundImage: 'url(/assets/Hero.png)' }}
    >
      <div className="container mx-auto px-5 pt-[9rem] md:pt-0">
        <div className="flex flex-col gap-4 text-white md:mt-[-11rem] hero-title">
          <h1
            className="font-bold lg:w-[100%] hero-title"
            style={{ fontSize: 'clamp(2rem, 5vw, 5rem)', lineHeight: '1.2' }}
          >
            {title}
          </h1>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-4">
            <div className="flex items-center hero-desc">
              <img src="/assets/tick.png" alt="Tick" className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              <p className="text-sm md:text-lg font-normal max-w-sm" style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1.125rem)' }}>{desc1}</p>
            </div>
            <div className="flex items-center hero-desc">
              <img src="/assets/tick.png" alt="Tick" className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              <p className="text-sm md:text-lg font-normal max-w-sm" style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1.125rem)' }}>{desc2}</p>
            </div>
            <div className="flex items-center hero-desc">
              <img src="/assets/tick.png" alt="Tick" className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              <p className="text-sm md:text-lg font-normal max-w-sm" style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1.125rem)' }}>{desc3}</p>
            </div>
          </div>
          <div className="mt-6 md:mt-8 hero-btn">
            <Button variant="blue" type="button" disabled={false} size="lg">
              {btnText}
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 mx-auto bg-black bg-opacity-[0.4] text-white py-4 md:py-6" style={{ width: '100%', maxWidth: '90%' }}>
        <div className="container mx-auto px-5">
          <div className="flex justify-center">
            <div className="w-full max-w-screen-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 text-[11px] md:text-sm">
                <div className="flex flex-col hero-grid-item">
                  <h2 className="font-bold mb-2 md:mb-4">Showcase Your Skills Seamlessly</h2>
                  <p>Present your expertise with a design that speaks for itself, making a lasting impact.</p>
                </div>
                <div className="flex flex-col hero-grid-item">
                  <h2 className="font-bold mb-2 md:mb-4">Crafted for Your Success</h2>
                  <p>Highlight your talents with tailored templates that elevate your online presence.</p>
                </div>
                <div className="flex flex-col hero-grid-item">
                  <h2 className="font-bold mb-2 md:mb-4">Build Your Brand Instantly</h2>
                  <p>Create a portfolio that reflects your identity, capturing attention in moments.</p>
                </div>
                <div className="flex flex-col hero-grid-item">
                  <h2 className="font-bold mb-2 md:mb-4">Designed to Impress</h2>
                  <p>Make a statement with a sleek, professional layout that stands out effortlessly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;