"use client";

import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaSearch, FaStar } from 'react-icons/fa';
import Image from 'next/image';
import { imageDetails } from '../data/Templates';

gsap.registerPlugin(ScrollTrigger);

const Categories = ({
  title,
}: {
  title: string;
}) => {
  const [activeButton, setActiveButton] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const itemsPerPage = 4; // Number of items per page on mobile

  const handleClick = (buttonName: string) => {
    setActiveButton(buttonName);
    setCurrentPage(1); // Reset to the first page when category changes
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
    setCurrentPage(1); // Reset to the first page when search changes
  };

  // Filter images based on search query and selected category
  const filteredImageDetails = imageDetails.filter(detail => 
    (activeButton === 'All' || detail.category === activeButton) &&
    detail.text.toLowerCase().includes(searchQuery)
  );

  // Pagination logic for mobile devices
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredImageDetails.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredImageDetails.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage(prevPage => (prevPage < totalPages ? prevPage + 1 : prevPage));
  };

  const handlePrevPage = () => {
    setCurrentPage(prevPage => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  // Animation setup
  useEffect(() => {
    // Animate flex boxes on larger screens
    gsap.fromTo(
      ".flex-box-large",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".flex-box-large",
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
        stagger: 0.3,
      }
    );

    // Animate flex boxes on mobile screens
    gsap.fromTo(
      ".flex-box-mobile",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".flex-box-mobile",
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
        stagger: 0.3,
      }
    );
  }, []);

  // Flex boxes for larger screens (show all items)
  const flexBoxesForLargeScreens = filteredImageDetails.map((detail, index) => (
    <div key={index} className="relative w-1/4 p-2 group flex-box-large">
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

  // Flex boxes for mobile screens (show paginated items)
  const flexBoxesForMobile = currentItems.map((detail, index) => (
    <div key={index} className="relative w-full md:w-1/4 md:p-2 p-1 group flex-box-mobile">
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
          <h1 className="font-light max-w-[33rem] mx-auto" style={{ fontSize: '6vw', marginTop: '0' }}>
            {title}
          </h1>

          <div className="flex flex-col md:flex-row justify-between items-center w-full px-4 md:px-16">
            <div className="bg-[#E1E6ED] p-2 rounded-full flex flex-wrap gap-2 justify-center md:justify-start mx-2 pl-4 pr-4 mb-4 md:mb-0">
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

            <div className="relative mx-2 flex items-center mb-4 md:mb-0">
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

          {/* Flex boxes for larger screens */}
          <div className="hidden md:flex flex-wrap mt-8 gap-4 justify-center">
            {flexBoxesForLargeScreens}
          </div>

          {/* Flex boxes for mobile screens */}
          <div className="flex md:hidden flex-wrap mt-8 gap-4 justify-center">
            {flexBoxesForMobile}
          </div>

          {/* Pagination controls for mobile devices */}
          {filteredImageDetails.length > itemsPerPage && (
            <div className="flex justify-center mt-4 md:hidden"> {/* Hide on larger screens */}
              <button
                className="bg-white text-black px-3 py-1 rounded-full mr-2"
                onClick={handlePrevPage}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <button
                className="bg-white text-black px-3 py-1 rounded-full"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Categories;
