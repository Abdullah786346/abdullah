"use client";

import React, { useState } from 'react';
import Image from 'next/image';

type Texts = {
  frontend: { heading: string; description: string };
  backend: { heading: string; description: string };
  uiDesigner: { heading: string; description: string };
};

const initialTexts: Texts = {
  frontend: { heading: 'Frontend Developer', description: 'I’m a front-end developer with experience in building responsive and optimized sites.' },
  backend: { heading: 'Backend Developer', description: 'I have experience developing fast and optimized back-end systems and APIs.' },
  uiDesigner: { heading: 'UI Designer', description: 'I have designed multiple landing pages and created design systems as well.' }
};

const About: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editText, setEditText] = useState<string>('');
  const [editHeading, setEditHeading] = useState<string>('');
  const [currentText, setCurrentText] = useState<{ heading: string; description: string } | null>(null);
  const [selectedTextId, setSelectedTextId] = useState<'frontend' | 'backend' | 'uiDesigner' | null>(null);

  // State to store the texts dynamically
  const [texts, setTexts] = useState<Texts>(initialTexts);

  const openModal = (id: 'frontend' | 'backend' | 'uiDesigner') => {
    const selectedText = texts[id];
    setEditText(selectedText.description);
    setEditHeading(selectedText.heading);
    setCurrentText(selectedText);
    setSelectedTextId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    if (selectedTextId && currentText) {
      // Revert to the original text if not saved
      setEditText(currentText.description);
      setEditHeading(currentText.heading);
    }
  };

  const handleSave = () => {
    if (selectedTextId) {
      // Update the texts state with the edited value
      setTexts(prevTexts => ({
        ...prevTexts,
        [selectedTextId]: {
          heading: editHeading,
          description: editText
        }
      }));
    }
    closeModal();
  };

  return (
    <section className="bg-[#0a192f] py-20">
      <div className="flex justify-center">
        <div className="container mx-auto px-4 md:px-0 flex flex-col items-center">
          <div className="flex-1 bg-[#000000] border border-gray-600 rounded-xl p-6 md:p-8 max-w-4xl w-full flex flex-col md:flex-row relative">
            <div className="flex-shrink-0 flex justify-center md:justify-start md:mr-12 mt-auto mb-0"> 
              <Image
                src="/assets/portfolio3/About/image1.png" 
                alt="Profile Avatar"
                width={320}
                height={320} 
                className="rounded-full"
              />
            </div>
            <div className="flex-1">
              <h2 className="absolute top-6 left-6 text-4xl font-bold text-white">ABOUT</h2>
              <div className="mt-16 space-y-4 w-full flex flex-col items-start">
                <div
                  className="p-4 flex items-center space-x-4 rounded-lg cursor-pointer"
                  style={{
                    background: 'linear-gradient(90deg, rgba(165, 215, 232, 0.2) 0%, rgba(255, 255, 255, 0) 100%)'
                  }}
                  onClick={() => openModal('frontend')}
                >
                  <Image
                    src="/assets/portfolio3/About/image2.svg"
                    alt="Frontend Developer Icon"
                    width={48}
                    height={48}
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{texts.frontend.heading}</h3>
                    <p className="text-sm text-gray-300">
                      {texts.frontend.description}
                    </p>
                  </div>
                </div>
                <div
                  className="p-4 flex items-center space-x-4 bg-black max-w-sm cursor-pointer"
                  onClick={() => openModal('backend')}
                >
                  <Image
                    src="/assets/portfolio3/About/image3.svg" 
                    alt="Backend Developer Icon"
                    width={48}
                    height={48}
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{texts.backend.heading}</h3>
                    <p className="text-sm text-gray-300">
                      {texts.backend.description}
                    </p>
                  </div> 
                </div>
                <div
                  className="p-4 flex items-center space-x-4 bg-black max-w-sm cursor-pointer"
                  onClick={() => openModal('uiDesigner')}
                >
                  <Image
                    src="/assets/portfolio3/About/image4.svg" 
                    alt="UI Designer Icon"
                    width={48}
                    height={48}
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{texts.uiDesigner.heading}</h3>
                    <p className="text-sm text-gray-300">
                      {texts.uiDesigner.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-8 rounded-lg max-w-lg w-full">
                <h3 className="text-xl font-bold mb-4">Edit Text</h3>
                <input
                  className="w-full p-2 border border-gray-300 rounded-md mb-4"
                  placeholder="Heading"
                  value={editHeading}
                  onChange={(e) => setEditHeading(e.target.value)}
                />
                <textarea
                  className="w-full h-32 p-2 border border-gray-300 rounded-md"
                  placeholder="Description"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <div className="mt-4 flex justify-end space-x-4">
                  <button
                    className="bg-gray-500 text-white px-4 py-2 rounded-md"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                    onClick={handleSave}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
