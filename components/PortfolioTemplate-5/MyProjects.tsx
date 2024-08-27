"use client";

import React, { useState } from 'react';

const ProjectGallery: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const projectImages: { src: string, url: string }[] = [
    { src: '/assets/pic 1.svg', url: 'https://example.com/project1' },
    { src: '/assets/pic 2.svg', url: 'https://example.com/project2' },
    { src: '/assets/pic 3.svg', url: 'https://example.com/project3' },
    { src: '/assets/pic 4.svg', url: 'https://example.com/project4' },
    { src: '/assets/pic 5.svg', url: 'https://example.com/project5' },
    { src: '/assets/pic 6.svg', url: 'https://example.com/project6' },
  ];

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl text-white mb-8">Our Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectImages.map((project, index) => (
          <div
            key={index}
            className="relative group h-64 w-full flex justify-center items-center p-4"
            onMouseEnter={() => setActiveImage(project.src)}
            onMouseLeave={() => setActiveImage(null)}
          >
            <img
              src={project.src}
              alt={`Project ${index + 1}`}
              className="h-full w-full object-cover rounded-lg transition-transform duration-300 transform group-hover:scale-105"
            />
            {activeImage === project.src && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 rounded-lg p-4">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-lg font-semibold bg-[#01eeff] px-4 py-2 rounded-md shadow-lg hover:shadow-2xl transition duration-300"
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
