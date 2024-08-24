import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <div
      style={{ backgroundColor: 'rgba(25, 55, 109, 1)' }}
      className="text-white py-16 px-8 flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-16"
    >
      <div className="text-center lg:text-left space-y-4">
        <h2 className="text-4xl font-bold">Contact</h2>
        <p className="text-lg">Feel free to reach out!</p>
          </div>
          
          <div className="text-center lg:text-left space-y-4">
              
        <div className="flex items-center justify-center lg:justify-start space-x-3">
          <FaEnvelope className="text-2xl" />
          <p>duaainshrah@email.com</p>
              </div>
              
        <div className="flex items-center justify-center lg:justify-start space-x-3">
          <FaLinkedin className="text-2xl" />
          <p>linkedin.com/myname</p>
              </div>
              
        <div className="flex items-center justify-center lg:justify-start space-x-3">
          <FaGithub className="text-2xl" />
          <p>github.com/myname</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
