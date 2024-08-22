"use client";

import React, { useState } from "react";
import { FaSearch, FaStar } from 'react-icons/fa';
import Image from 'next/image';
import { imageDetails } from '../data/Templates';

const Categories = ({
  title,
}: {
  title: string;
}) => {
  const [activeButton, setActiveButton] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  // Filter images based on search query and selected category
  const filteredImageDetails = imageDetails.filter(detail => 
    (activeButton === 'All' || detail.category === activeButton) &&
    detail.text.toLowerCase().includes(searchQuery)
  );

  const flexBoxes = filteredImageDetails.map((detail, index) => (
    <div key={index} className="relative w-1/4 p-2 group">
      <div className="relative h-40 mb-2 overflow-hidden">
        <Image
          src={`/assets/${detail.Template}`}
          alt={`Image ${index + 1}`}
          layout="fill"
          objectFit="cover"
          className="transition duration-300 group-hover:blur-sm"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-customBlue-800 text-white px-4 py-2 mb-2 rounded-full shadow-md">Edit</button>
          <button className="bg-customBlue-800 text-white px-4 py-2 rounded-full shadow-md">View</button>
        </div>
      </div>
      <div className="flex justify-between items-start">
        <p className="text-xs text-white">{detail.text}</p>
        <div className="flex">
          {Array(detail.stars).fill(null).map((_, starIndex) => (
            <FaStar key={starIndex} className="text-yellow-400" />
          ))}
        </div>
      </div>
    </div>
  ));

  return (
    <section className="h-[160vh] w-full flex flex-col bg-cover bg-center bg-black">
      <div className="container mx-auto px-5 text-center mt-16">
        <div className="flex flex-col gap-4 text-white w-full">
          <h1 className="font-light max-w-[33rem] mx-auto" style={{ fontSize: '4vw', marginTop: '0' }}>
            {title}
          </h1>

          <div className="flex justify-between items-center w-full px-16">
            <div className="bg-[#E1E6ED] p-2 rounded-full flex gap-2 mx-2 pl-4 pr-4">
              {["All", "Code", "NoCode", "Dark", "Light"].map((buttonName) => (
                <button
                  key={buttonName}
                  className={`${
                    activeButton === buttonName
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  } rounded-full px-2 py-1 text-sm hover:bg-gray-900 focus:outline-none`}
                  onClick={() => handleClick(buttonName)}
                >
                  {buttonName}
                </button>
              ))}
            </div>

            <div className="relative mx-2 flex items-center">
              <FaSearch className="absolute left-3 text-black" />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                className="bg-[#E1E6ED] text-black rounded-full px-4 py-2 pl-10 pr-4 focus:outline-none"
                placeholder="Search by name..."
              />
            </div>
          </div>

          <div className="flex flex-wrap mt-8 gap-4 justify-center">
            {flexBoxes}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
