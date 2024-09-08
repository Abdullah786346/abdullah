"use client";

import React, { useState, useEffect } from 'react';

// Define the types for the Modal props
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  text: string;
  setText: (value: string) => void;
}

// Modal Component for Editing Text
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSave, text, setText }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4">Edit Text</h2>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md h-32 mb-4"
        />
        <div className="flex justify-end space-x-4">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded-md">Cancel</button>
          <button onClick={onSave} className="px-4 py-2 bg-blue-500 text-white rounded-md">Save</button>
        </div>
      </div>
    </div>
  );
};

export default function AboutMeSection() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newText, setNewText] = useState('');
  const [editingField, setEditingField] = useState<'title' | 'subtitle' | 'description'>('title');

  // Default text values
  const [title, setTitle] = useState('About Me');
  const [subtitle, setSubtitle] = useState('Full Stack Developer');
  const [description, setDescription] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.');

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000); // 1 second delay before showing the content

    return () => clearTimeout(timer);
  }, []);

  // Open modal and set the field being edited
  const handleEdit = (field: 'title' | 'subtitle' | 'description', currentValue: string) => {
    setEditingField(field);
    setNewText(currentValue);
    setIsModalOpen(true);
  };

  // Save the edited text
  const handleSave = () => {
    if (editingField === 'title') {
      setTitle(newText);
    } else if (editingField === 'subtitle') {
      setSubtitle(newText);
    } else if (editingField === 'description') {
      setDescription(newText);
    }
    setIsModalOpen(false);
  };

  return (
    <div
      className={`relative min-h-screen flex ${isSmallScreen ? 'flex-col items-center text-center pt-6' : 'flex-row items-center justify-center'}`}
      style={{ background: '#2F393F' }}
    >
      <div
        className={`relative transition-transform duration-1000 ease-out transform ${showContent ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'} ${isSmallScreen ? 'w-full h-auto' : 'w-[400px] h-[400px]'} ${isSmallScreen ? 'mb-3' : 'mr-3'}`}
      >
        <img
          src="/assets/circle.png"
          alt="Profile"
          className={`object-cover ${isSmallScreen ? 'w-full h-auto' : 'w-full h-full'} `}
        />
      </div>
      <div
        className={`text-white relative z-10 p-6 transition-transform duration-1000 ease-out transform ${showContent ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} ${isSmallScreen ? 'max-w-[90%]' : 'max-w-[600px]'}`}
      >
        <div 
          className="font-sen font-extrabold text-3xl mb-4 cursor-pointer hover:underline"
          onClick={() => handleEdit('title', title)}
        >
          About <span className="text-[#01eeff]">Me</span>
        </div>
        <div 
          className="font-inter font-extrabold text-2xl mb-4 cursor-pointer hover:underline"
          onClick={() => handleEdit('subtitle', subtitle)}
        >
          {subtitle}
        </div>
        <div 
          className="font-poppins font-normal text-lg mb-6 cursor-pointer hover:underline"
          onClick={() => handleEdit('description', description)}
        >
          {description}
        </div>
        <button className="bg-[#01eeff] text-white py-3 px-6 rounded-md shadow-[0_0_20px_10px_rgba(1,238,255,0.6)] hover:shadow-[0_0_30px_15px_rgba(1,238,255,0.8)] transition duration-300 ">
          See More
        </button>
      </div>
      {/* Modal */}
      <Modal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        text={newText}
        setText={setNewText}
      />
    </div>
  );
}
