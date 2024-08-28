import React from 'react';

const ContactMe: React.FC = () => {
  return (
    <div className="bg-black flex flex-col items-center justify-center min-h-screen px-4">
      <h4 className="text-4xl font-bold text-white text-center pt-8">
        Contact <span className="text-teal-400">Me</span>
      </h4>
      <div className="w-full md:w-[70%] pb-8 pt-8 rounded-lg shadow-lg">
        <form className="space-y-6">
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
            <input
              type="text"
              placeholder="First Name"
              aria-label="First Name"
              className="w-full md:w-[48%] h-[50px] px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              aria-label="Last Name"
              className="w-full md:w-[48%] h-[50px] px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
            <input
              type="text"
              placeholder="Mob. Number"
              aria-label="Mobile Number"
              className="w-full md:w-[48%] h-[50px] px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              aria-label="Email Address"
              className="w-full md:w-[48%] h-[50px] px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>
          <textarea
            placeholder="Your Message..."
            aria-label="Your Message"
            rows={5}
            className="w-full h-[190px] px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
          />
          <div className="text-center mt-2">
            <button
              type="submit"
              className="px-6 py-2 bg-[#01eeff] rounded-md shadow-[0_0_20px_10px_rgba(1,238,255,0.6)] hover:shadow-[0_0_30px_15px_rgba(1,238,255,0.8)] transition duration-300 "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
