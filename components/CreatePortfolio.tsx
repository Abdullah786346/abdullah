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
      className="h-[100vh] w-full flex flex-col justify-between bg-cover bg-center bg-CreatePortfolio"
    >
      <div className="container mx-auto px-5 text-center flex-grow flex items-center justify-center">
        <div className="flex flex-col gap-4 text-white">
          <h1
            className="font-bold max-w-[33rem] mx-auto"
            style={{ fontSize: '4vw', marginTop: '0' }}
          >
            {title}
          </h1>
          <div className="flex flex-col items-center gap-6 mt-[-0.5rem]">
            <p
              className="text-sm md:text-lg font-normal max-w-sm"
              style={{ fontSize: '1.25vw' }}
            >
              {desc}
            </p>
            <img
              src='/assets/CreatePortfolio.png'
              alt="Create Portfolio"
              className="max-w-[55%] h-auto mt-4 cursor-pointer hover:opacity-80 transition-opacity duration-300"
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
