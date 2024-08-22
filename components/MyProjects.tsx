import React from 'react';

const ProjectGallery = () => {
  const projectImages = [
    '/assets/pic 1.svg',
    '/assets/pic 2.svg',
    '/assets/pic 3.svg',
    '/assets/pic 4.svg',
    '/assets/pic 5.svg',
    '/assets/pic 6.svg',
  ];

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl text-white mb-8">Our Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectImages.map((image, index) => (
          <div key={index} className="h-64 w-full flex justify-center items-center p-4">
            <img src={image} alt={`Project ${index + 1}`} className="h-full w-full object-cover rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;
