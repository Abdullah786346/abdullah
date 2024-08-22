import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="bg-black text-white h-screen flex flex-col relative overflow-hidden">
      {/* Navbar */}
      <nav className="absolute top-5 right-0 mt-4 mr-4 z-10 flex items-center space-x-6 sm:space-x-8 text-sm sm:text-lg">
        <a href="#" className="hover:text-teal-400 transition duration-300">Home</a>
        <a href="#" className="hover:text-teal-400 transition duration-300">About</a>
        <a href="#" className="hover:text-teal-400 transition duration-300">Services</a>
        <a href="#" className="hover:text-teal-400 transition duration-300">Portfolio</a>
        <a href="#" className="hover:text-teal-400 transition duration-300">Contacts</a>
      </nav>

      {/* Portfolio Text */}
      <div className="absolute top-10 left-4 text-lg sm:text-xl md:text-2xl font-bold text-teal-400 z-10">
        Portfolio
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-16 py-8 md:py-20 relative z-10">
        {/* Text Content */}
        <div className="flex flex-col items-start text-left mb-8 md:mb-0 md:pr-16 mt-10 pt-10">
          <h1 className="text-lg sm:text-xl md:text-2xl font-light tracking-wider uppercase mb-2 sm:mb-4">
            Hello It's Me
          </h1>
          <h2 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Duaa Inshrah
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6">
            And I'm a <span className="text-blue-500">Full Stack Developer</span>
          </p>
          <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-6 mb-4 sm:mb-6">
            <FaTwitter className="text-blue-400 hover:text-blue-500 transition duration-300 cursor-pointer text-xl sm:text-2xl md:text-3xl" />
            <FaFacebook className="text-blue-400 hover:text-blue-500 transition duration-300 cursor-pointer text-xl sm:text-2xl md:text-3xl" />
            <FaInstagram className="text-blue-400 hover:text-blue-500 transition duration-300 cursor-pointer text-xl sm:text-2xl md:text-3xl" />
            <FaYoutube className="text-blue-400 hover:text-blue-500 transition duration-300 cursor-pointer text-xl sm:text-2xl md:text-3xl" />
          </div>
          <button className="bg-[#01eeff] from-teal-400 to-teal-600 text-white px-4 sm:px-6 md:px-10 py-2 sm:py-3 md:py-4 rounded-lg shadow-lg shadow-teal-400/70 hover:shadow-2xl hover:shadow-teal-500/80 transition duration-300">
            Download CV
          </button>
        </div>

        {/* Circle and Image */}
        <div className="relative flex items-center justify-center w-full md:w-1/2">
          {/* Circle */}
          <div className="absolute w-[60%] h-[60%] bg-[#01eeff] from-teal-400 to-teal-600 rounded-full shadow-[0_0_80px_30px_rgba(0,255,255,0.6)] opacity-80 translate-y-4 md:translate-y-6"></div>
          
          {/* Image inside circle */}
          <img 
            src="/assets/Maskgroup.svg" 
            alt="Girl Image" 
            className="relative z-10 w-56 sm:w-64 md:w-80 h-auto object-cover absolute bottom-1/6 md:bottom-1/5 translate-y-1/6 md:translate-y-1/4 mb-4 pb-9"

          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
