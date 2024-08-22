import React from "react";
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
  return (
    <section
      className="h-[90vh] w-full flex flex-col justify-center bg-cover bg-center bg-hero"
      style={{ backgroundImage: `url(/assets/Hero.png)` }}
    >
      <div className="container mx-auto px-5">
        <div className="flex flex-col gap-4 text-white mt-[-11rem] hero-title">
          <h1
            className="font-bold lg:w-[100%] hero-title"
            style={{ fontSize: '5vw', lineHeight: '1.2' }}
          >
            {title}
          </h1>
          <div className="flex gap-6 mt-4">
            {/* Description 1 */}
            <div className="flex items-center">
              <img src="/assets/tick.png" alt="Tick" className="w-5 h-5 mr-2" />
              <p className="text-sm md:text-lg font-normal max-w-sm" style={{ fontSize: '1.25vw' }}>{desc1}</p>
            </div>
            {/* Description 2 */}
            <div className="flex items-center">
              <img src="/assets/tick.png" alt="Tick" className="w-5 h-5 mr-2" />
              <p className="text-sm md:text-lg font-normal max-w-sm" style={{ fontSize: '1.25vw' }}>{desc2}</p>
            </div>
            {/* Description 3 */}
            <div className="flex items-center">
              <img src="/assets/tick.png" alt="Tick" className="w-5 h-5 mr-2" />
              <p className="text-sm md:text-lg font-normal max-w-sm" style={{ fontSize: '1.25vw' }}>{desc3}</p>
            </div>
          </div>
          <div className="mt-8"> {/* Add space before the button */}
            <Button variant="blue" type="button" disabled={false} size="lg">
              {btnText}
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 mx-auto bg-black bg-opacity-[0.4] text-white py-6" style={{ width: '90%' }}>
  <div className="container mx-auto px-5">
    <div className="flex justify-center">
      <div className="w-full max-w-screen-lg">
        <div className="flex justify-between gap-8 text-[11px] border-custom-top">
          {/* Flex Box 1 with Blue Top Border */}
          <div className="relative flex flex-col flex-1">
  <h2 className=" font-bold mb-4">Showcase Your Skills Seamlessly</h2>
  <p className="">Present your expertise with a design that speaks for itself, making a lasting impact.</p>
</div>

          {/* Flex Box 2 */}
          <div className="flex flex-col flex-1">
            <h2 className=" font-bold mb-4">Crafted for Your Success</h2>
            <p className="">Highlight your talents with tailored templates that elevate your online presence.</p>
          </div>
          {/* Flex Box 3 */}
          <div className="flex flex-col flex-1">
            <h2 className=" font-bold mb-4">Build Your Brand Instantly</h2>
            <p className="">Create a portfolio that reflects your identity, capturing attention in moments.</p>
          </div>
          {/* Flex Box 4 */}
          <div className="flex flex-col flex-1">
            <h2 className=" font-bold mb-4">Designed to Impress</h2>
            <p className="">Make a statement with a sleek, professional layout that stands out effortlessly.</p>
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
