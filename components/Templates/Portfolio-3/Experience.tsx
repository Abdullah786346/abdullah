import Image from 'next/image';

const skills = [
  { name: 'HTML', icon: '/assets/portfolio3/experience/Html.png' },
  { name: 'CSS', icon: '/assets/portfolio3/experience/Css.png' },
  { name: 'React', icon: '/assets/portfolio3/experience/React.png' },
  { name: 'Node', icon: '/assets/portfolio3/experience/Node.png' },
  { name: 'GraphQL', icon: '/assets/portfolio3/experience/GraphQL.png' },
  { name: 'MongoDB', icon: '/assets/portfolio3/experience/MongoDB.png' },
  { name: 'Figma', icon: '/assets/portfolio3/experience/Figma.png' },
];

const experiences = [
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

export default function Experience() {
  return (
    <section className="bg-[#0a192f] text-white p-8">
 
      <h2 className="text-3xl font-bold mb-6">EXPERIENCE</h2>

     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
        <div className="space-y-4">
         
          <div className="grid grid-cols-3 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center"
              >
                <div
                  className="bg-[rgba(25,55,109,1)] rounded-full flex items-center justify-center"
                  style={{ width: '70px', height: '70px' }}
                >
                  <Image src={skill.icon} alt={skill.name} width={40} height={40} />
                </div>
                <span className="mt-1 text-sm text-center">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          {experiences.map((exp) => (
            <div key={exp.title} className="rounded-lg p-6 flex items-start" style={{
              background: 'linear-gradient(90deg, rgba(25, 55, 109, 1) 0%, rgba(25, 55, 109, 0) 100%)'
            }}>
              <Image src={exp.logo} alt={exp.title} width={48} height={48} className="mr-4" />
              <div>
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-sm text-gray-400">{exp.period}</p>
                <ul className="list-disc list-inside mt-2">
                  {exp.details.map((detail, index) => (
                    <li key={index} className="text-sm">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
