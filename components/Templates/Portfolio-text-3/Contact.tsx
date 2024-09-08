"use client";
import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact: React.FC = () => {
  // State for modal visibility and text values
  const [isEditing, setIsEditing] = useState(false);
  const [editingField, setEditingField] = useState<string>('');
  const [email, setEmail] = useState<string>('duaainshrah@email.com');
  const [linkedin, setLinkedin] = useState<string>('linkedin.com/myname');
  const [github, setGithub] = useState<string>('github.com/myname');
  const [contactText, setContactText] = useState<string>('Feel free to reach out!');
  const [tempValue, setTempValue] = useState<string>('');

  // Functions to handle modal actions
  const handleTextClick = (field: 'email' | 'linkedin' | 'github' | 'contact', value: string) => {
    setEditingField(field);
    setTempValue(value);
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editingField === 'email') setEmail(tempValue);
    if (editingField === 'linkedin') setLinkedin(tempValue);
    if (editingField === 'github') setGithub(tempValue);
    if (editingField === 'contact') setContactText(tempValue);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div
      style={{ backgroundColor: 'rgba(25, 55, 109, 1)' }}
      className="text-white py-16 px-8 flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-16"
    >
      <div className="text-center lg:text-left space-y-4">
        <h2 className="text-4xl font-bold">
          <span
            onClick={() => handleTextClick('contact', contactText)}
            className="cursor-pointer text-gray-300 hover:text-white"
          >
            Contact
          </span>
        </h2>
        <p className="text-lg">
          <span
            onClick={() => handleTextClick('contact', contactText)}
            className="cursor-pointer text-gray-300 hover:text-white"
          >
            {contactText}
          </span>
        </p>
      </div>
      
      <div className="text-center lg:text-left space-y-4">
        <div className="flex items-center justify-center lg:justify-start space-x-3">
          <FaEnvelope className="text-2xl" />
          <p
            onClick={() => handleTextClick('email', email)}
            className="cursor-pointer text-gray-300 hover:text-white"
          >
            {email}
          </p>
        </div>
        
        <div className="flex items-center justify-center lg:justify-start space-x-3">
          <FaLinkedin className="text-2xl" />
          <p
            onClick={() => handleTextClick('linkedin', linkedin)}
            className="cursor-pointer text-gray-300 hover:text-white"
          >
            {linkedin}
          </p>
        </div>
        
        <div className="flex items-center justify-center lg:justify-start space-x-3">
          <FaGithub className="text-2xl" />
          <p
            onClick={() => handleTextClick('github', github)}
            className="cursor-pointer text-gray-300 hover:text-white"
          >
            {github}
          </p>
        </div>
      </div>

      {/* Modal */}
      {isEditing && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Edit {editingField.charAt(0).toUpperCase() + editingField.slice(1)}
            </h3>
            <div>
              <label className="block text-gray-700 mb-2">
                {editingField.charAt(0).toUpperCase() + editingField.slice(1)}:
              </label>
              <input
                type="text"
                value={tempValue}
                onChange={(e) => setTempValue(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded text-gray-800 bg-gray-200"
              />
            </div>
            <div className="mt-4 flex justify-end space-x-4">
              <button
                onClick={handleCancel}
                className="px-4 py-2 bg-gray-500 text-white rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
