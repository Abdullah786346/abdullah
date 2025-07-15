"use client";
import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscriptionMessage, setSubscriptionMessage] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);
    setSubscriptionMessage('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubscriptionMessage('Successfully subscribed to newsletter!');
        setEmail('');
      } else {
        setSubscriptionMessage(data.message || 'Failed to subscribe. Please try again.');
      }
    } catch (error) {
      setSubscriptionMessage('Network error. Please try again later.');
    } finally {
      setIsSubscribing(false);
    }
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/muhammad-abdullah-7572762b9', label: 'LinkedIn' },
    { icon: FaGithub, href: 'https://github.com/Abdullah786346', label: 'GitHub' },
    { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#Hero' },
    { name: 'About', href: '#AboutUs' },
    { name: 'Services', href: '#OurServices' },
    { name: 'Projects', href: '#MyProjects' },
    { name: 'Contact', href: '#ContactMe' },
  ];

  const services = [
    'UI/UX Design',
    'Frontend Development',
    'React Development',
    'Next.js Development',
    'Responsive Design',
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#01eeff] mb-4">Muhammad Abdullah</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Passionate frontend developer with expertise in React, Next.js, and modern web technologies. 
              Creating beautiful, responsive, and user-friendly web applications.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <MdEmail className="text-[#01eeff]" />
                <span>muhammadabdullahfscem@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MdPhone className="text-[#01eeff]" />
                <span>+92 300 1234567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MdLocationOn className="text-[#01eeff]" />
                <span>Rawalpindi, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#01eeff] transition duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Stay Updated</h4>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to get updates about new projects and blog posts.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-3 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-[#01eeff] text-sm"
              />
              <button
                type="submit"
                disabled={isSubscribing}
                className="w-full bg-[#01eeff] text-white py-2 px-4 rounded hover:bg-cyan-600 transition duration-300 disabled:opacity-50 text-sm font-medium"
              >
                {isSubscribing ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
            {subscriptionMessage && (
              <p className={`text-sm ${subscriptionMessage.includes('Successfully') ? 'text-green-400' : 'text-red-400'}`}>
                {subscriptionMessage}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Social Links & Copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#01eeff] transition duration-300 group"
                >
                  <social.icon className="w-4 h-4 text-gray-300 group-hover:text-white" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © {currentYear} Muhammad Abdullah. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Built with Next.js & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;