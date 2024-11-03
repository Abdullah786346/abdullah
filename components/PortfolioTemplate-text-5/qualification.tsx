import React from 'react';

const Qualification = () => {
  const educationData = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Arid University Rawalpindi',
      year: '2023 - 2027',
      details: 'Studying Programming, algorithms, data structures, and web development.',
    },
    {
      degree: 'Fsc Pre Engineering',
      institution: 'Punjab College of Information Technology',
      year: '2020 - 2022',
      details: 'Focused on Mathematics, Physics, and Chemistry.',
    },
  ];

  return (
    <div className="bg-black min-h-screen py-10 px-5 md:px-4">
      <h2 className="text-3xl font-bold text-center text-white mb-10">Qualification</h2>
      <div className="space-y-8 max-w-4xl mx-auto">
        {educationData.map((edu, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200">
            <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
            <p className="text-gray-400">{edu.institution}</p>
            <p className="text-gray-500">{edu.year}</p>
            <p className="mt-4 text-gray-300">{edu.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Qualification;
