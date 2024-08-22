export default function AboutMeSection() {
  return (
    <div className="relative min-h-screen px-4 py-8 md:px-8 md:py-12 lg:px-16 lg:py-24 bg-[#323846]">
      <div className="relative flex items-center justify-start h-screen">
        {/* Moderated circle shadow */}
        <div className="absolute left-[5%] top-1/2 transform -translate-y-1/2 w-[300px] h-[300px] border-8 border-[#01eeff] rounded-full animate-spin-slow shadow-[0_0_60px_20px_rgba(1,238,255,0.6)] z-0"></div>
        <img
          src="/assets/Maskgroup.svg"
          alt="Profile"
          className="absolute z-10 w-[500px] h-[400px] lg:left-[-3%] transform -translate-x-[3%] -translate-y-[13%]" // Position image left and slightly upward
        />
      </div>
      <div className="lg:absolute lg:left-1/2 lg:top-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:text-left lg:px-8 mt-12 lg:mt-0 lg:ml-[10%]"> {/* Added margin-left */}
        <div className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold font-['Sen']">
          <span className="block">About </span>
          <span className="block text-[#01eeff]">Me</span>
        </div>
        <div className="text-white text-2xl md:text-3xl lg:text-4xl font-extrabold font-['Inter'] mt-4">
          Full Stack Developer
        </div>
        <div className="text-[#eeeeee]/75 text-lg md:text-xl lg:text-2xl font-normal font-['Poppins'] mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
        </div>
        <div className="mt-8">
          {/* Button with moderated shadow */}
          <button className="bg-[#01eeff] text-white px-6 py-3 rounded-lg shadow-[0_0_20px_10px_rgba(1,238,255,0.6)] hover:shadow-[0_0_30px_15px_rgba(1,238,255,0.8)] transition duration-300">
            See More
          </button>
        </div>
      </div>
    </div>
  );
}