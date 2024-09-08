"use client";
import React, { useState } from 'react';
import Image from 'next/image'; // Import Image from next/image
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

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

const Hero: React.FC = () => {
  const [helloText, setHelloText] = useState("Hello It's Me");
  const [nameText, setNameText] = useState("Duaa Inshrah");
  const [roleText, setRoleText] = useState("I'm a Frontend Developer");
  const [socialText, setSocialText] = useState("And I’m aAnd I’m aAnd I’m aAnd I’m aAnd I’m aAnd I’m aAnd I’m aAnd I’m aAnd I’m aAnd I’m a");
  const [buttonText, setButtonText] = useState("Download CV");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newText, setNewText] = useState('');
  const [editingField, setEditingField] = useState('');

  const handleEdit = (field: string, currentValue: string) => {
    setEditingField(field);
    setNewText(currentValue);
    setIsModalOpen(true);
  };

  const handleSave = () => {
    switch (editingField) {
      case 'helloText':
        setHelloText(newText);
        break;
      case 'nameText':
        setNameText(newText);
        break;
      case 'roleText':
        setRoleText(newText);
        break;
      case 'socialText':
        setSocialText(newText);
        break;
      case 'buttonText':
        setButtonText(newText);
        break;
      default:
        break;
    }
    setIsModalOpen(false);
  };

  return (
    <div className="pt-20 bg-black">
      <div className="flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 md:px-16 py-8 md:py-20 relative z-10 space-y-8 md:space-y-0">
        {/* Text Content */}
        <div className="flex flex-col items-start text-left mb-8 md:mb-0 md:pr-16 mt-9 pt-5">
          <h1 
            className="text-white text-lg sm:text-xl md:text-2xl font-light tracking-wider uppercase mb-2 sm:mb-4 cursor-pointer hover:underline"
            onClick={() => handleEdit('helloText', helloText)}
          >
            {helloText}
          </h1>

          <h2 
            className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 cursor-pointer hover:underline"
            onClick={() => handleEdit('nameText', nameText)}
          >
            {nameText}
          </h2>

          <p 
            className="text-white sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 cursor-pointer hover:underline"
            onClick={() => handleEdit('roleText', roleText)}
          >
            {roleText}
          </p>

          {/* Editable New Text Above Social Links */}
          <p 
            className="text-white mb-4 cursor-pointer hover:underline"
            onClick={() => handleEdit('socialText', socialText)}
          >
            {socialText}
          </p>

          {/* Social Media Links */}
          <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-6 mb-4 sm:mb-6">
            <FaTwitter className="text-blue-400 hover:text-blue-500 transition duration-300 cursor-pointer text-xl sm:text-2xl md:text-3xl" />
            <FaFacebook className="text-blue-400 hover:text-blue-500 transition duration-300 cursor-pointer text-xl sm:text-2xl md:text-3xl" />
            <FaInstagram className="text-blue-400 hover:text-blue-500 transition duration-300 cursor-pointer text-xl sm:text-2xl md:text-3xl" />
            <FaYoutube className="text-blue-400 hover:text-blue-500 transition duration-300 cursor-pointer text-xl sm:text-2xl md:text-3xl" />
          </div>

          {/* Editable Button */}
          <button 
            className="bg-[#01eeff] text-white px-4 sm:px-6 md:px-10 py-2 sm:py-3 md:py-4 rounded-md shadow-[0_0_20px_10px_rgba(1,238,255,0.6)] hover:shadow-[0_0_30px_15px_rgba(1,238,255,0.8)] transition duration-300 cursor-pointer"
            onClick={() => handleEdit('buttonText', buttonText)}
          >
            {buttonText}
          </button>
        </div>

        {/* Circle and Image */}
        <div className="relative flex items-center justify-center w-full md:w-1/2">
          {/* Circle */}
          <div className="absolute w-[60%] h-[80%] bg-[#01eeff] rounded-full shadow-[0_0_60px_20px_rgba(0,255,255,0.5)] opacity-80"></div>
          
          {/* Image inside circle */}
          <img 
            src="/assets/Maskgroup.svg" 
            alt="Girl Image" 
            className="relative z-10 w-56 sm:w-64 md:w-80 h-auto object-cover absolute bottom-1/6 md:bottom-1/5 translate-y-1/5 md:translate-y-8"
          />
        </div>
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
};

export default Hero;
