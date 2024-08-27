import React from 'react';

const ContactMe: React.FC = () => {
  return (
    <div className="bg-black flex flex-col items-center justify-center">
      <h6 className="text-2xl font-bold text-white text-center pt-8">
        Contact <span className="text-teal-400">Me</span>
      </h6>
      <div className="w-[70%] pb-8 pt-8 rounded-lg shadow-lg">
        <form className="space-y-7">
          <div className="flex space-x-8">
            <input
              type="text"
              placeholder="First Name"
              aria-label="First Name"
              className="w-[48%] h-[50px] px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              aria-label="Last Name"
              className="w-[48%] h-[50px] px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>
          <div className="flex space-x-8">
            <input
              type="text"
              placeholder="Mob. Number"
              aria-label="Mobile Number"
              className="w-[48%] h-[50px] px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              aria-label="Email Address"
              className="w-[48%] h-[50px] px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
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
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 mt-1 bg-teal-400 text-white font-semibold rounded hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2"
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
