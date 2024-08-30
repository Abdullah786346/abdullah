import React from 'react';
import Image from 'next/image';

const About = () => {
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
            <div className="p-4 flex items-center space-x-4 rounded-lg" style={{
             background: 'linear-gradient(90deg, rgba(165, 215, 232, 0.2) 0%, rgba(255, 255, 255, 0) 100%)'
             }} >
                  <Image
                    src="/assets/portfolio3/About/image2.svg"
                    alt="Frontend Developer Icon"
                    width={48}
                    height={48}
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Frontend Developer</h3>
                    <p className="text-sm text-gray-300">
                      I’m a front-end developer with experience in building responsive and optimized sites.
                    </p>
                  </div>
                </div>
                <div className="p-4 flex items-center space-x-4 bg-black max-w-sm">
                  <Image
                    src="/assets/portfolio3/About/image3.svg" 
                    alt="Backend Developer Icon"
                    width={48}
                    height={48}
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Backend Developer</h3>
                    <p className="text-sm text-gray-300">
                      I have experience developing fast and optimized back-end systems and APIs.
                    </p>
                  </div> 
                </div>

              
                <div className="p-4 flex items-center space-x-4 bg-black max-w-sm">
                  <Image
                    src="/assets/portfolio3/About/image4.svg" 
                    alt="UI Designer Icon"
                    width={48}
                    height={48}
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white">UI Designer</h3>
                    <p className="text-sm text-gray-300">
                      I have designed multiple landing pages and created design systems as well.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
