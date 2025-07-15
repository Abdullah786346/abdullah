"use client";
import React, { useState } from 'react';

const ContactMe: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage('Your message has been sent successfully! I will get back to you soon.');
        setFormData({
          firstName: '',
          lastName: '',
          mobileNumber: '',
          email: '',
          message: ''
        });
      } else {
        setSubmitMessage(data.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('Network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-black flex flex-col items-center justify-center min-h-screen px-4">
      <h4 className="text-4xl font-bold text-white text-center pt-8">
        Contact <span className="text-teal-400">Me</span>
      </h4>
      <div className="w-full md:w-[70%] pb-8 pt-8 rounded-lg shadow-lg">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
            <div className="flex-1">
              <label htmlFor="firstName" className="sr-only">First Name</label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="First Name"
                aria-label="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full h-[50px] px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
            </div>
            <div className="flex-1">
              <label htmlFor="lastName" className="sr-only">Last Name</label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Last Name"
                aria-label="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full h-[50px] px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
            <div className="flex-1">
              <label htmlFor="mobileNumber" className="sr-only">Mobile Number</label>
              <input
                id="mobileNumber"
                name="mobileNumber"
                type="text"
                placeholder="Mob. Number"
                aria-label="Mobile Number"
                value={formData.mobileNumber}
                onChange={handleChange}
                className="w-full h-[50px] px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
            </div>
            <div className="flex-1">
              <label htmlFor="email" className="sr-only">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email Address"
                aria-label="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-[50px] px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="sr-only">Your Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message..."
              aria-label="Your Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full h-[190px] px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>
          {submitMessage && (
            <div className={`text-center p-3 rounded ${
              submitMessage.includes('successfully') 
                ? 'bg-green-600 text-white' 
                : 'bg-red-600 text-white'
            }`}>
              {submitMessage}
            </div>
          )}
          <div className="text-center mt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 bg-[#01eeff] rounded-md shadow-[0_0_20px_10px_rgba(1,238,255,0.6)] hover:shadow-[0_0_30px_15px_rgba(1,238,255,0.8)] transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
