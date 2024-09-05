"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define the type for a project
interface Project {
  title: string;
  description: string;
  tags: string[];
  demoLink: string;
  sourceLink: string;
}

const initialProjects: Project[] = [
  {
    title: "Project A",
    description: "This is a project made to learn the latest languages by building an app.",
    tags: ["React", "Express", "Node"],
    demoLink: "#", 
    sourceLink: "#", 
  },
  {
    title: "Project B",
    description: "This is a project made to learn the latest languages by building an app.",
    tags: ["React", "Express", "Node"],
    demoLink: "#", 
    sourceLink: "#", 
  },
  {
    title: "Project C",
    description: "This is a project made to learn the latest languages by building an app.",
    tags: ["React", "Express", "Node"],
    demoLink: "#", 
    sourceLink: "#", 
  },
];

const Projects = () => {
  const [projects, setProjects] = useState(initialProjects);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState<number | null>(null);
  const [editableProject, setEditableProject] = useState<Project | null>(null);

  const handleCardClick = (index: number) => {
    setCurrentProjectIndex(index);
    setEditableProject(projects[index]);
    setIsModalOpen(true);
  };

  const handleSave = () => {
    if (currentProjectIndex !== null && editableProject) {
      const updatedProjects = [...projects];
      updatedProjects[currentProjectIndex] = editableProject;
      setProjects(updatedProjects);
      setIsModalOpen(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (editableProject) {
      setEditableProject({
        ...editableProject,
        [name]: value
      });
    }
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-[#0a192f] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-white">PROJECTS</h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-4 rounded-lg shadow-lg text-white max-w-xs mx-auto cursor-pointer"
                style={{
                  background: "linear-gradient(180deg, #576CBC -14.75%, #132A53 50.1%);",
                }}
                onClick={() => handleCardClick(index)}
              >
                <Image
                  src="/assets/portfolio3/Projects/image1.png" 
                  alt={project.title}
                  width={250}
                  height={140}
                  className="rounded-lg mb-4 w-full h-auto object-cover"
                />
                <h3 className="text-xl font-semibold mb-2 text-center">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4 text-center">{project.description}</p>
                <div className="flex flex-wrap justify-center gap-4 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-transparent border border-blue-500 text-white text-xs font-medium px-3 py-1 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href={project.demoLink} passHref>
                    <span className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300 text-center cursor-pointer">
                      Demo
                    </span>
                  </Link>
                  <Link href={project.sourceLink} passHref>
                    <span className="bg-transparent border border-blue-500 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition duration-300 text-center cursor-pointer">
                      Source
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && editableProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h2 className="text-2xl font-bold mb-4">Edit Project</h2>
            <label className="block mb-2">
              Title
              <input
                type="text"
                name="title"
                value={editableProject.title}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>
            <label className="block mb-2">
              Description
              <textarea
                name="description"
                value={editableProject.description}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
              />
            </label>
            <label className="block mb-2">
              Tags (comma-separated)
              <input
                type="text"
                name="tags"
                value={editableProject.tags.join(', ')}
                onChange={(e) => setEditableProject({
                  ...editableProject,
                  tags: e.target.value.split(',').map(tag => tag.trim())
                })}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>
            <div className="mt-4 flex justify-end">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 mr-2"
                onClick={handleSave}
              >
                Save
              </button>
              <button
                className="bg-gray-400 hover:bg-gray-300 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                onClick={handleClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
