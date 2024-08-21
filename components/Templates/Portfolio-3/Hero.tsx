"use client"; // Ensure this component runs on the client side
import Image from "next/image";

export default function HeroSection() {
  return (
    <main className="bg-gradient-to-r from-black to-blue-900 py-20 min-h-screen flex justify-center items-center">
      <div className="flex flex-col md:flex-row justify-center items-center text-white max-w-6xl px-4 md:px-0">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-bold mb-4">Hi, Im Ada</h1>
          <p className="text-xl mb-4">
            Im a full-stack developer with 5 years
          </p>
          <p className="text-xl mb-4">
            of experience using React and Node.js.
          </p>
          <p className="text-xl mb-8">
            Reach out if youd like to learn more!
          </p>
          <button className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full transition duration-300">
            Contact Me
          </button>
        </div>
        <div className="md:mr-12 mb-8 md:mb-0 md:w-1/2">
          <Image
            src="/assets/profile.png" // Update to your image path
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