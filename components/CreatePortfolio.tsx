import React from "react";

const CreatePortfolio = ({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) => {
  return (
    <section
      className="min-h-screen w-full flex flex-col justify-between bg-cover bg-center bg-CreatePortfolio"
    >
      <div className="container mx-auto px-5 text-center flex-grow flex flex-col md:justify-center">
        <div className="flex flex-col gap-4 text-white w-full mt-[8rem] md:mt-0">
          <h1
            className="font-bold max-w-[33rem] mx-auto"
            style={{ fontSize: 'clamp(30px, 4vw, 48px)' }}
          >
            {title}
          </h1>
          <p
            className="text-sm md:text-lg font-normal max-w-sm mx-auto mb-6 md:mb-0"
            style={{ fontSize: 'clamp(14px, 1.25vw, 20px)' }}
          >
            {desc}
          </p>
          <div className="flex-grow flex items-center justify-center mt-4 md:mt-[-0.5rem]">
            <img
              src='/assets/CreatePortfolio.png'
              alt="Create Portfolio"
              className="max-w-[80%] md:max-w-[55%] h-auto cursor-pointer hover:opacity-80 transition-opacity duration-300"
            />
          </div>
        </div>
      </div>
      {/* Styled HR element at the end of the page */}
      <hr className="border-t-3 border-white w-full" style={{ borderWidth: '3px' }} />
    </section>
  );
};

export default CreatePortfolio;