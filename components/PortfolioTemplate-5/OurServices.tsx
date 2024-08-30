export default function ServicesSection() {
  return (
    <div className="relative min-h-screen px-4 py-8 md:px-8 md:py-12 lg:px-16 lg:py-24 bg-black">
      <div className="text-center mb-12">
        <span className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold font-['Sen']">Our </span>
        <span className="text-[#01eeff] text-3xl md:text-4xl lg:text-5xl font-extrabold font-['Sen']">Services</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* First Box */}
        <div className="bg-[#323846] rounded-lg p-6 h-80 md:h-88 lg:h-96 flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_30px_15px_rgba(0,255,255,0.8)]">
          <div className="text-white text-xl md:text-2xl lg:text-3xl font-extrabold font-['Inter'] mb-4">
            UX-UI Designer
          </div>
          <div className="text-[#d9d9d9] text-base md:text-lg lg:text-xl font-normal font-['Poppins'] mb-4 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
          </div>
          <button className="bg-[#01eeff] text-white text-base md:text-lg lg:text-xl font-semibold font-['Poppins'] py-2 px-4 rounded-md shadow-[0_0_20px_10px_rgba(1,238,255,0.6)] hover:shadow-[0_0_30px_15px_rgba(1,238,255,0.8)] transition duration-300 mt-9">
            Read More
          </button>
        </div>

        {/* Second Box */}
        <div className="bg-[#323846] rounded-lg p-6 h-80 md:h-88 lg:h-96 flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_30px_15px_rgba(0,255,255,0.8)]">
          <div className="text-white text-xl md:text-2xl lg:text-3xl font-extrabold font-['Inter'] mb-4">
            Frontend Developer
          </div>
          <div className="text-[#d9d9d9] text-base md:text-lg lg:text-xl font-normal font-['Poppins'] mb-4 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
          </div>
          <button className="bg-[#01eeff] text-white text-base md:text-lg lg:text-xl font-semibold font-['Poppins'] py-2 px-4 rounded-md shadow-[0_0_20px_10px_rgba(1,238,255,0.6)] hover:shadow-[0_0_30px_15px_rgba(1,238,255,0.8)] transition duration-300 mt-9">
            Read More
          </button>
        </div>

        {/* Third Box */}
        <div className="bg-[#323846] rounded-lg p-6 h-80 md:h-88 lg:h-96 flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_30px_15px_rgba(0,255,255,0.8)]">
          <div className="text-white text-xl md:text-2xl lg:text-3xl font-extrabold font-['Inter'] mb-4">
            Backend Developer
          </div>
          <div className="text-[#d9d9d9] text-base md:text-lg lg:text-xl font-normal font-['Poppins'] mb-4 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
          </div>
          <button className="bg-[#01eeff] text-white text-base md:text-lg lg:text-xl font-semibold font-['Poppins'] py-2 px-4 rounded-md shadow-[0_0_20px_10px_rgba(1,238,255,0.6)] hover:shadow-[0_0_30px_15px_rgba(1,238,255,0.8)] transition duration-300 mt-9">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
