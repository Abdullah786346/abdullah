import React from "react";
import Button from "./Button";

const Hero = ({
  title,
  desc,
  btnText,
}: {
  title: React.ReactNode;
  desc: string;
  btnText: string;
}) => {
  return (
    <section
      className="h-[100vh] w-full flex flex-col justify-center bg-cover bg-center bg-hero"
      style={{ backgroundImage: `url(/assets/Hero.png)` }}
    >
      <div className="container mx-auto px-5">
        <div className="flex flex-col gap-4 text-white mb-10">
          <h1 className="text-4xl md:text-5xl font-bold lg:w-[56%]">
            {title}
          </h1>
          <p className="text-md md:text-lg font-normal max-w-sm">{desc}</p>
        </div>

        <Button variant="blue" type="button" disabled={false}>
          {btnText}
        </Button>
      </div>
    </section>
  );
};

export default Hero;
