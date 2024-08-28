'use client'; 
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Steps = ({ title }: { title: string }) => {
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    stepsRef.current.forEach((step, index) => {
      if (step) {
        gsap.fromTo(
          step,
          {
            opacity: 0,
            y: 100,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: step,
              start: "top 80%",
              end: "top 50%",
              scrub: true,
            },
          }
        );
      }
    });
  }, []);

  const steps = [
    {
      number: 1,
      description: "Start by signing up or logging in using your social media accounts for a seamless experience.",
      icon: "assets/step1.svg",
      height: "11rem",
      paddingLeft: "0",
    },
    {
      number: 2,
      description: "Choose the field that best represents your expertise or interest. Browse through a selection of templates tailored to your chosen field and pick the one that suits you best.",
      icon: "assets/step2.svg",
      height: "11rem",
      paddingLeft: "0",
    },
    {
      number: 3,
      description: "Personalize your chosen template by adjusting the colors, sizes, and design elements to match your style and preferences.",
      icon: "assets/step3.svg",
      height: "14rem",
      paddingLeft: "0",
    },
    {
      number: 4,
      description: "Explore the pricing options and choose a plan that fits your needs. Once satisfied with your customization, publish your portfolio to showcase your work to the world.",
      icon: "assets/step4.svg",
      height: "14rem",
      paddingLeft: "0",
    },
  ];

  return (
    <section className="min-h-screen w-full flex flex-col bg-indigo-900 p-4 sm:p-8">
      <h1 className="text-white text-3xl sm:text-5xl font-light text-center mb-8 sm:mb-16">
        {title}
      </h1>
      <div className="flex flex-col items-center space-y-8 sm:space-y-16">
        {steps.map((step, index) => (
          <div
            key={step.number}
            ref={(el) => {
              stepsRef.current[index] = el;
            }}
            className={`flex w-full ${
              step.number % 2 === 0 ? "justify-end" : "justify-start"
            } flex-col sm:flex-row`}
          >
            <div
              className="bg-white rounded-lg p-4 sm:p-8 flex flex-col sm:flex-row items-center w-full sm:w-3/5 h-auto sm:h-[16rem]"
              style={{ paddingLeft: step.paddingLeft }}
            >
              <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
                <img
                  src={step.icon}
                  alt={`Step ${step.number} icon`}
                  style={{ height: step.height }}
                  className="w-16 steps-icons sm:w-full object-contain"
                />
              </div>
              <div className="flex flex-col justify-center h-full text-center sm:text-left px-4 sm:px-0">
                <h2 className="text-indigo-800 text-xl sm:text-2xl font-bold mb-2 sm:mb-4">
                  Step {step.number}
                </h2>
                <hr className="border-t-2 border-blue-500 mb-4 sm:mb-4 sm:w-[23%] mx-auto sm:mx-0 w-[20%]" />
                <p className="text-gray-900 font-bold text-sm sm:text-base">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Steps;
