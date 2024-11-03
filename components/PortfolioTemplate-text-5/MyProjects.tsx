"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const ProjectGallery: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const projectImages: { src: string; url: string }[] = [
    { src: '/assets/pic 1.svg', url: 'https://github.com/Abdullah786346/abdullah.git' },
    { src: '/assets/pic 2.svg', url: 'https://github.com/Abdullah786346/WebisteForDonation.git' },
    { src: '/assets/pic 3.svg', url: 'https://github.com/Abdullah786346/javascriptprojects.git' },
  ];

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center py-12 px-6">
      {/* Section Title */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-12 text-center">
        My Projects
      </h1>

      {/* Grid for Project Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] w-full">
        {projectImages.map((project, index) => (
          <div
            key={index}
            className="relative group h-72 w-full flex justify-center items-center overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            onMouseEnter={() => setActiveImage(project.src)}
            onMouseLeave={() => setActiveImage(null)}
          >
            <Image
              src={project.src}
              alt={`Project ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 transform group-hover:scale-110"
            />

            {/* Overlay with Button */}
            {activeImage === project.src && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 transition-opacity duration-300 p-4 rounded-lg">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-lg md:text-xl lg:text-2xl font-semibold bg-[#01eeff] px-6 py-3 rounded-md shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  View Project
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;
