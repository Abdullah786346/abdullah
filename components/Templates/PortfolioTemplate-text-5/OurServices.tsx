"use client";
import React, { useState } from 'react';

interface Service {
  title: string;
  description: string;
  modalContent: string; // Add this field to provide different text for the modal
}

const ServiceModal: React.FC<{ service: Service; onClose: () => void }> = ({ service, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="bg-white rounded-lg p-6 max-w-md mx-4">
        <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
        <p className="text-base mb-6">{service.modalContent}</p> {/* Displaying modal-specific content */}
        <button
          onClick={onClose}
          className="bg-[#01eeff] text-white py-2 px-4 rounded-lg font-semibold shadow-md hover:shadow-lg transition duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default function ServicesSection() {
  const [services] = useState<Service[]>([
    {
      title: 'UX-UI Designer',
      description: 'One year of experience in making the best UI/UX designs using Figma and Canva.',
      modalContent: 'As a UI/UX Developer, I specialize in creating visually appealing and user-friendly interfaces. I focus on layout, color schemes, typography, and interactive elements. I use Figma and Canva to design prototypes.',
    },
    {
      title: 'Frontend Developer',
      description: 'One year of experience in Frontend development with React.js, Next.js, and Tailwind CSS.',
      modalContent: 'As a Frontend Developer, I have experience creating dynamic and responsive websites using JavaScript, React.js, and Next.js. I ensure that web applications are optimized for performance and usability. I also worked in company and gain practical environment',
    },
  ]);

  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleOpenModal = (service: Service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center px-4 py-8 bg-black">
      {/* Section Title */}
      <div className="text-center mb-12">
        <span className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold font-['Sen']">
          My{' '}
        </span>
        <span className="text-[#01eeff] text-3xl md:text-4xl lg:text-5xl font-extrabold font-['Sen']">
          Services
        </span>
      </div>

      {/* Centered Grid for Service Boxes */}
      <div className="w-full max-w-[1200px] flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[800px]">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#323846] rounded-lg p-6 flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_30px_15px_rgba(0,255,255,0.8)]"
            >
              {/* Service Title */}
              <div className="text-white text-xl md:text-2xl lg:text-3xl font-extrabold font-['Inter'] mb-4 text-center">
                {service.title}
              </div>

              {/* Service Description */}
              <div className="text-[#d9d9d9] text-base md:text-lg lg:text-xl font-normal font-['Poppins'] mb-6 text-center">
                {service.description}
              </div>

              {/* Button */}
              <button
                onClick={() => handleOpenModal(service)}
                className="bg-[#01eeff] text-white text-base md:text-lg lg:text-xl font-semibold font-['Poppins'] py-2 px-6 rounded-md shadow-[0_0_20px_10px_rgba(1,238,255,0.6)] hover:shadow-[0_0_30px_15px_rgba(1,238,255,0.8)] transition duration-300 mt-auto"
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Render the modal if a service is selected */}
      {selectedService && (
        <ServiceModal service={selectedService} onClose={handleCloseModal} />
      )}
    </div>
  );
}
