import Image from 'next/image';
import Link from 'next/link';

const projects = [
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
  return (
    <div className="bg-[#0a192f] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">PROJECTS</h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-4 rounded-lg shadow-lg text-white max-w-xs mx-auto"
                style={{
                  background: "linear-gradient(180deg, #576CBC -14.75%, #132A53 50.1%);",
                }}
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
    </div>
  );
};

export default Projects;
