"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CreatePortfolio = ({ title, desc }: { title: string; desc: string }) => {
  useEffect(() => {
    // Animate title and description on scroll
    gsap.fromTo(
      ".portfolio-title, .portfolio-desc",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".portfolio-title",
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
        stagger: 0.3,
      }
    );

    // Animate image on scroll
    gsap.fromTo(
      ".portfolio-image",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".portfolio-image",
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section className="min-h-screen w-full flex flex-col justify-between bg-cover bg-center bg-CreatePortfolio py-8 md:py-16">
      <div className="container mx-auto px-5 text-center flex-grow flex flex-col md:justify-center">
        <div className="flex flex-col gap-4 text-white w-full mt-[8rem] md:mt-0">
          <h1
            className="font-bold max-w-[33rem] mx-auto portfolio-title"
            style={{ fontSize: "clamp(30px, 4vw, 48px)" }}
          >
            {title}
          </h1>
          <p
            className="text-sm md:text-lg font-normal max-w-sm mx-auto mb-6 md:mb-0 portfolio-desc"
            style={{ fontSize: "clamp(14px, 1.25vw, 20px)" }}
          >
            {desc}
          </p>
          <div className="flex-grow flex items-center justify-center mt-4 md:mt-[-0.5rem]">
            <img
              src="/assets/CreatePortfolio.png"
              alt="Create Portfolio"
              className="max-w-[80%] md:max-w-[55%] h-auto cursor-pointer hover:opacity-80 transition-opacity duration-300 portfolio-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatePortfolio;
