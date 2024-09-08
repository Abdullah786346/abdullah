"use client";
import React, { useState } from 'react';

interface Service {
  title: string;
  description: string;
}

const Modal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  service: Service;
  onSave: (title: string, description: string) => void;
}> = ({ isOpen, onClose, service, onSave }) => {
  const [title, setTitle] = useState(service.title);
  const [description, setDescription] = useState(service.description);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-11/12 max-w-lg">
        <h2 className="text-2xl mb-4">Edit Service</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <div className="flex justify-end gap-2">
          <button onClick={() => { onSave(title, description); onClose(); }} className="bg-blue-500 text-white py-2 px-4 rounded-md">Save</button>
          <button onClick={onClose} className="bg-gray-500 text-white py-2 px-4 rounded-md">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default function ServicesSection() {
  const [services, setServices] = useState<Service[]>([
    {
      title: 'UX-UI Designer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    },
    {
      title: 'Frontend Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    },
    {
      title: 'Backend Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedServiceIndex, setSelectedServiceIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedServiceIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const saveChanges = (title: string, description: string) => {
    if (selectedServiceIndex !== null) {
      const updatedServices = [...services];
      updatedServices[selectedServiceIndex] = { title, description };
      setServices(updatedServices);
    }
  };

  return (
    <div className="relative min-h-screen px-4 py-8 md:px-8 md:py-12 lg:px-16 lg:py-24 bg-black">
      <div className="text-center mb-12">
        <span className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold font-['Sen']">Our </span>
        <span className="text-[#01eeff] text-3xl md:text-4xl lg:text-5xl font-extrabold font-['Sen']">Services</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#323846] rounded-lg p-6 h-80 md:h-88 lg:h-96 flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_30px_15px_rgba(0,255,255,0.8)]"
            onClick={() => openModal(index)}
          >
            <div className="text-white text-xl md:text-2xl lg:text-3xl font-extrabold font-['Inter'] mb-4">
              {service.title}
            </div>
            <div className="text-[#d9d9d9] text-base md:text-lg lg:text-xl font-normal font-['Poppins'] mb-4 text-center">
              {service.description}
            </div>
            <button className="bg-[#01eeff] text-white text-base md:text-lg lg:text-xl font-semibold font-['Poppins'] py-2 px-4 rounded-md shadow-[0_0_20px_10px_rgba(1,238,255,0.6)] hover:shadow-[0_0_30px_15px_rgba(1,238,255,0.8)] transition duration-300 mt-9">
              Read More
            </button>
          </div>
        ))}
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        service={selectedServiceIndex !== null ? services[selectedServiceIndex] : { title: '', description: '' }}
        onSave={saveChanges}
      />
    </div>
  );
}
