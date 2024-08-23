"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <main className="bg-[#0a192f] py-20 min-h-screen flex justify-center items-center relative">
      <div className="relative flex flex-col md:flex-row justify-center items-center text-white max-w-6xl px-4 md:px-0">
        
       
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
        
        <div className="md:w-1/2 text-center md:text-left z-10">
          <h1 className="text-5xl font-bold mb-4">Hi, I’m Ada</h1>
          <p className="text-xl mb-4">
            I’m a full-stack developer with 5 years
          </p>
          <p className="text-xl mb-4">
            of experience using React and Node.js.
          </p>
          <p className="text-xl mb-8">
            Reach out if you’d like to learn more!
          </p>
          <button className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full transition duration-300">
            Contact Me
          </button>
        </div>
        
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
    </main>
  );
}
