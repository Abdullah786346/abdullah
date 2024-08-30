"use client";
import React, { useState, ChangeEvent } from 'react';

const ProjectSetupForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    basicInfo: '',
    media: null,
  });

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, files } = e.target as HTMLInputElement;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="text-gray-700 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="My Project"
            />
          </div>
        );
      case 2:
        return (
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="text-gray-700 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Describe your project"
            />
          </div>
        );
      case 3:
        return (
          <div>
            <label className="block text-sm font-medium text-gray-700">Basic Info</label>
            <input
              type="text"
              name="basicInfo"
              value={formData.basicInfo}
              onChange={handleInputChange}
              className="text-gray-700 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Basic info about your project"
            />
          </div>
        );
      case 4:
        return (
          <div>
            <label className="block text-sm font-medium text-gray-700">Media</label>
            <input
              type="file"
              name="media"
              onChange={handleInputChange}
              className="mt-1 block w-full text-sm text-gray-500"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-white bg-opacity-60">
      <div className="absolute inset-0 bg-gray-100 backdrop-filter backdrop-blur-lg"></div>
      <div className="relative z-10 w-full max-w-lg p-8 space-y-6 bg-white rounded-lg shadow-lg md:max-w-xl lg:max-w-2xl">
        {/* Step Indicators */}
        <div className="flex justify-between text-sm font-medium text-gray-500">
          <button
            className={currentStep === 1 ? 'text-blue-500' : ''}
            onClick={() => setCurrentStep(1)}
          >
            1. Project Title
          </button>
          <button
            className={currentStep === 2 ? 'text-blue-500' : ''}
            onClick={() => setCurrentStep(2)}
          >
            2. Description
          </button>
          <button
            className={currentStep === 3 ? 'text-blue-500' : ''}
            onClick={() => setCurrentStep(3)}
          >
            3. Basic Info
          </button>
          <button
            className={currentStep === 4 ? 'text-blue-500' : ''}
            onClick={() => setCurrentStep(4)}
          >
            4. Media
          </button>
        </div>

        {/* Form Title */}
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          {currentStep === 1 && 'Give your project a title'}
          {currentStep === 2 && 'Describe your project'}
          {currentStep === 3 && 'Provide basic information'}
          {currentStep === 4 && 'Upload media'}
        </h2>
        <p className="text-center text-gray-500">
          {currentStep === 1 && 'Get started by naming the project you want to showcase'}
          {currentStep === 2 && 'Add a description for your project'}
          {currentStep === 3 && 'Enter basic information about your project'}
          {currentStep === 4 && 'Upload media related to your project'}
        </p>

        {/* Step Content */}
        {renderStepContent()}

        {/* Buttons */}
        <div className="flex justify-end space-x-4 mt-6">
          <button
            className="text-sm font-medium text-gray-500 hover:text-gray-700"
            onClick={handleNext}
          >
            Skip
          </button>
          <button
            className="px-6 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectSetupForm;


// Fixed Size and Responsiveness:

// The form container has fixed max-width values for different screen sizes (max-w-lg, max-w-xl, lg:max-w-2xl). This keeps the form's dimensions consistent across devices.
// The size of the component is now controlled, so it doesn't change with content.
// Input Functionality:

// The input fields are properly linked to state and should now accept text or file uploads without issues.
// Responsive & Mobile-Friendly:

// The component is responsive and adapts to different screen sizes, maintaining usability on mobile devices.