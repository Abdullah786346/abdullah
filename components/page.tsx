"use client";
import Image from "next/image";
import { BsInstagram, BsThreads, BsFacebook, BsLinkedin } from "react-icons/bs";
import Servise from "./PortfolioTemplete4/Servise";
import About from "./PortfolioTemplete4/About";
import Workonline from "./PortfolioTemplete4/Workonline";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
export default function Homepage() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <main className="bg-blue-950">
      <main className="mb-3 w-full flex items-center jusitfy-between">
        <div className="w-1/2 h-96">
          <Image
            src="/main-img.png"
            className="h-96"
            height={100}
            width={700}
            alt="img"
          />
        </div>
        <div className=" w-1/2 h-96 flex flex-col items-center justify-center bg-[url('/main-img.png')] bg-cover bg-center opacity-75">
          <h1 className="p-4 mt-5 text-5xl text-bold">Olivia</h1>
          <h1 className="0-4 text-5xl text-bold">James</h1>
          <p className="mt-4 text-2xl z-10 text-white-400 text-bold ">
            Front End Developer
          </p>
          <div className="mt-9 mx-32 w-96 h-28 flex items-center justify-evenly">
            <BsInstagram className="text-2xl text-rose-800" />
            <BsFacebook className="text-2xl text-rose-800" />
            <BsThreads className="text-2xl text-rose-800" />
            <BsLinkedin className="text-2xl text-rose-800" />
          </div>
        </div>
      </main>
      <About />
      <Servise />
      <h1 className="p-2 text-6xl text-center underline">RECENT</h1>
      <div className="p-12 h-96 w-full">
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true}
          // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div className="h-84">
            <Image
              src="/Frame 52432.png"
              className="h-60"
              height={100}
              width={200}
              alt="img"
            />
          </div>
          <div className="h-80 ">
            <Image
              src="/Frame 52433.png"
              className="h-60"
              height={100}
              width={200}
              alt="img"
            />
          </div>

          <div className="h-80 ">
            <Image
              src="/Frame 52434.png"
              className="h-60"
              height={100}
              width={200}
              alt="img"
            />
          </div>
          <div className="h-80 ">
            <Image
              src="/Frame 52435.png"
              className="h-60"
              height={100}
              width={200}
              alt="img"
            />
          </div>
        </Carousel>
      </div>
      <h1 className="p-2 text-6xl text-center underline">WORK</h1>
      <Workonline />
    </main>
  );
}
