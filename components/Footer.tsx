import React from 'react';
import { Space_Grotesk, Poppins } from 'next/font/google';
import '/styles.css';

const space = Space_Grotesk({ 
  weight: '400',
  subsets: ['latin'] 
});
const poppins = Poppins({ 
  weight: '400',
  subsets: ['latin'] 
});

function Footer() {
  return (
    <footer className={`bg-black text-white p-8 rounded-t-[20px] fixed bottom-0 left-0 w-full ${space.className}`}>
      <div className="container mx-auto">
        <div className="flex flex-col-reverse md:flex-row justify-between items-start">
          <div className="mb-6 md:mb-0">
            <img src="footer-logo.png" alt="Logo" className="h-12 mb-8" />
            <div className="flex space-x-4 mb-8">
              <a href="#" className="text-white hover:text-gray-300">
                <i><img src="assets/linkedin.png" alt="" /></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <i><img src="assets/facebook.png" alt="" /></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <i><img src="assets/twitter.png" alt="" /></i>
              </a>
            </div>
            <div className={`space-y-2 ${poppins.className}`}>
              <p className="font-bold">Contact Us:</p>
              <p>Email: info@positivus.com</p>
              <p>Phone: 555-567-8901</p>
              <p>Address: 1234 Main St</p>
              <p>Moonstone City, Stardust State 12345</p>
            </div>
          </div>
          <div className="mt-6 md:mt-[7rem] footer-subscription-box">
            <div className="bg-white p-6 rounded-md shadow-md min-h-[150px] flex items-center justify-center">
              <form className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="bg-customGray text-black px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Subscribe to news
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 flex items-center">
          <p>&copy; 2023 Positivus. All Rights Reserved.</p>
          <a href="#" className="text-gray-300 hover:text-white ml-4 underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
