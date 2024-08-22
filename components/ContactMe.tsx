import React from 'react';

const ContactMe: React.FC = () => {
  return (
    <div className="bg-black flex flex-col items-center justify-center">
      <h2 className=" text-2xl font-bold text-white mb-7 text-center pt-8">
        Contact <span className="text-teal-400">Me</span>
      </h2>
      <div className="w-[70%] pb-8 pt-8 rounded-lg shadow-lg">
        <form className="space-y-7">
          <div className="flex space-x-8">
            <input
              type="text"
              placeholder="First Name"
              className="w-[48%] h-[40px] px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-[48%] h-[40px] px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
          <div className="flex space-x-8">
            <input
              type="text"
              placeholder="Mob. Number"
              className="w-[48%] h-[40px] px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-[48%] h-[40px] px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
          <textarea
            placeholder="Your Message..."
            rows={5} 
            className="w-full h-[190px] px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 mt-4 bg-teal-400 text-white font-semibold rounded hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;