import React from "react";
import '/styles.css';

const CreatePortfolio = ({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) => {
  return (
    <section
      className="h-[100vh] w-full flex items-center justify-center bg-cover bg-center bg-CreatePortfolio"
    >
      <div className="container mx-auto px-5 text-center">
        <div className="flex flex-col gap-4 text-white">
          <h1
            className="font-bold max-w-[33rem] mx-auto"
            style={{ fontSize: '4vw', marginTop: '0' }} // Adjusted margin
          >
            {title}
          </h1>
          <div className="flex flex-col items-center gap-6 mt-[-0.5rem]"> {/* Increased mt for spacing */}
            <p className="text-sm md:text-lg font-normal max-w-sm" style={{ fontSize: '1.25vw' }}> 
              {desc}
            </p>
            <img 
              src='/assets/CreatePortfolio.png' 
              alt="Create Portfolio" 
              className="max-w-[55%] h-auto mt-4 cursor-pointer hover:opacity-80 transition-opacity duration-300" 
              // Add cursor pointer and hover effect
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatePortfolio;
