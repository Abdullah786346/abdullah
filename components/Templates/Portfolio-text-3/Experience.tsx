"use client";
import { useState } from 'react';
import Image from 'next/image';

interface EditableExperience {
  title: string;
  period: string;
  details: string[];
  logo: string;
}

const initialExperiences: EditableExperience[] = [
  {
    title: 'Software Engineer, Google',
    period: 'Sept. 2022 - Present',
    details: ['Worked on Google Maps', 'Reduced load times by 50%'],
    logo: '/assets/portfolio3/experience/Google.png',
  },
  {
    title: 'UI Designer, Microsoft',
    period: 'Aug. 2021 - Aug. 2022',
    details: ['Worked on Windows 11', 'Designed the control panel'],
    logo: '/assets/portfolio3/experience/Microsoft.png',
  },
  {
    title: 'SWE Intern, Netflix',
    period: 'Apr. 2020 - Jun. 2020',
    details: ['Worked on component library', 'Helped create UI components'],
    logo: '/assets/portfolio3/experience/Netflix.png',
  },
];


function EditModal({
  experience,
  onSave,
  onClose,
}: {
  experience: EditableExperience;
  onSave: (updatedExperience: EditableExperience) => void;
  onClose: () => void;
}) {
  const [newTitle, setNewTitle] = useState(experience.title);
  const [newPeriod, setNewPeriod] = useState(experience.period);
  const [newDetails, setNewDetails] = useState(experience.details.join('\n'));

  const handleSave = () => {
    if (newTitle.trim() === '' || newPeriod.trim() === '') {
      alert('Title and Period cannot be empty');
      return;
    }

    const updatedExperience = {
      ...experience,
      title: newTitle,
      period: newPeriod,
      details: newDetails.split('\n'),
    };
    onSave(updatedExperience);
    onClose();
  };

  return (
    <div className="modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg">
        {/* Title */}
        <label className="block text-gray-700">Title</label>
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg text-black"
          placeholder="Enter title here"
        />

        {/* Period */}
        <label className="block text-gray-700 mt-4">Period</label>
        <input
          type="text"
          value={newPeriod}
          onChange={(e) => setNewPeriod(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg text-black"
          placeholder="Enter period here"
        />

        {/* Details */}
        <label className="block text-gray-700 mt-4">Details</label>
        <textarea
          value={newDetails}
          onChange={(e) => setNewDetails(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg text-black"
          placeholder="Enter details here"
        />

        <div className="mt-4 flex justify-end">
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg mr-2"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-black rounded-lg"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}


export default function Experience() {
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [experiences, setExperiences] = useState<EditableExperience[]>(initialExperiences);

  const handleSaveExperience = (index: number, updatedExperience: EditableExperience) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index] = updatedExperience;
    setExperiences(updatedExperiences);
    setEditingIndex(null);
  };

  return (
    <section className="bg-[#0a192f] text-white p-8">
      <h2 className="text-3xl font-bold mb-6">EXPERIENCE</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            {['HTML', 'CSS', 'React', 'Node', 'GraphQL', 'MongoDB', 'Figma'].map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center"
              >
                <div
                  className="bg-[rgba(25,55,109,1)] rounded-full flex items-center justify-center"
                  style={{ width: '70px', height: '70px' }}
                >
                  <Image src={`/assets/portfolio3/experience/${skill}.png`} alt={skill} width={40} height={40} />
                </div>
                <span className="mt-1 text-sm text-center">{skill}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="rounded-lg p-6 flex items-start"
              style={{
                background: 'linear-gradient(90deg, rgba(25, 55, 109, 1) 0%, rgba(25, 55, 109, 0) 100%)',
              }}
            >
              <Image src={exp.logo} alt={exp.title} width={48} height={48} className="mr-4" />
              <div>
                <h3
                  className="text-xl font-semibold cursor-pointer"
                  onClick={() => setEditingIndex(index)}
                >
                  {exp.title}
                </h3>
                <p className="text-sm text-gray-400">{exp.period}</p>
                <ul className="list-disc list-inside mt-2">
                  {exp.details.map((detail, i) => (
                    <li key={i} className="text-sm">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Render the Edit Modal when editing */}
              {editingIndex === index && (
                <EditModal
                  experience={exp}
                  onSave={(updatedExperience) => handleSaveExperience(index, updatedExperience)}
                  onClose={() => setEditingIndex(null)}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
