"use client";

import React, { useState } from "react";
import Image from "next/image";

// Define the type for editableText state
interface EditableText {
  heading: string;
  line1: string;
  line2: string;
  line3: string;
}

const HeroSection: React.FC = () => {
  const [editableText, setEditableText] = useState<EditableText>({
    heading: "Hi, I’m Ada",
    line1: "I’m a full-stack developer with 5 years",
    line2: "of experience using React and Node.js.",
    line3: "Reach out if you’d like to learn more!",
  });

  const [currentField, setCurrentField] = useState<keyof EditableText | null>(null);

  const handleTextClick = (field: keyof EditableText) => {
    setCurrentField(field);
  };

  const handleSave = (value: string) => {
    if (currentField) {
      setEditableText((prev) => ({ ...prev, [currentField]: value }));
    }
    setCurrentField(null);  // Close the modal
  };

  const handleClose = () => {
    setCurrentField(null);  // Close the modal
  };

  return (
    <main className="bg-[#0a192f] py-20 min-h-screen flex justify-center items-center relative">
      <div className="relative flex flex-col md:flex-row justify-center items-center text-white max-w-6xl px-4 md:px-0">
        
        {/* Background Ellipses */}
        <div className="absolute top-[-40%] left-[-20%]">
          <Image
            src="/assets/portfolio3/Hero/Ellipse2.png"
            alt="Ellipse Image 2"
            width={700}
            height={600}
            className="opacity-80"
          />
        </div>

        <div className="absolute right-16 top-1/2 transform translate-x-1/2 -translate-y-1/2">
          <Image
            src="/assets/portfolio3/Hero/Ellipse1.png"
            alt="Ellipse Image 1"
            width={470}
            height={900}
            className="opacity-90"
          />
        </div>
        
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left z-10">
          <h1
            className="text-5xl font-bold mb-4 cursor-pointer"
            onClick={() => handleTextClick("heading")}
          >
            {editableText.heading}
          </h1>
          <p
            className="text-xl mb-4 cursor-pointer"
            onClick={() => handleTextClick("line1")}
          >
            {editableText.line1}
          </p>
          <p
            className="text-xl mb-4 cursor-pointer"
            onClick={() => handleTextClick("line2")}
          >
            {editableText.line2}
          </p>
          <p
            className="text-xl mb-8 cursor-pointer"
            onClick={() => handleTextClick("line3")}
          >
            {editableText.line3}
          </p>

          <button className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full transition duration-300">
            Contact Me
          </button>
        </div>

        {/* Profile Image */}
        <div className="md:mr-12 mb-8 md:mb-0 md:w-1/2 relative z-20">
          <Image
            src="/assets/portfolio3/Hero/profile.png"
            alt="Profile Image"
            width={500}
            height={500}
            className="rounded-full md:ml-auto"
          />
        </div>
      </div>

      {/* Modal */}
      {currentField && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h2 className="text-2xl font-bold mb-4">
              Edit {currentField.charAt(0).toUpperCase() + currentField.slice(1)}
            </h2>
            <input
              type="text"
              value={editableText[currentField]}
              onChange={(e) => setEditableText((prev) => ({ ...prev, [currentField]: e.target.value }))}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoFocus
            />
            <div className="mt-4 flex justify-end">
              <button
                className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full transition duration-300 mr-2"
                onClick={() => handleSave(editableText[currentField]!)}
              >
                Save
              </button>
              <button
                className="bg-gray-400 hover:bg-gray-300 text-white font-bold py-2 px-4 rounded-full transition duration-300"
                onClick={handleClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default HeroSection;
