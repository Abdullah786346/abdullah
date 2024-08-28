import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="p-10 w-full bg-wheat-950 flex items-center justify-between">
        <div className="p-4 h-96 w-1/2 ">
          <h1 className="p-4 text-6xl text-black">ABOUT</h1>
          <Image
            src="/Frame 52429.png"
            className="h-64"
            height={100}
            width={200}
            alt="img"
          />
        </div>
        <div className="p-4 h-96 w-2/3 relative ">
          <Image
            src="/Frame 52429.png"
            className="top-3 right-3 h-64 absolute"
            height={100}
            width={200}
            alt=""
          />
          <h1 className="mt-40 text-6xl text-black">ME</h1>
          <p className="mt-8 text-black">
            I am a dedicatod and Passnate educator with a Strong background in
            teaching computer Science to students of various age groups. My
            teaching approach is centered around
            <br /> making complex concepts accessable and engaging ensuring that
            each student develops <br />a solid understanding of the Subject
            matter.
          </p>
        </div>
      </div>
    </>
  );
}
