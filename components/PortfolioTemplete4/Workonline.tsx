import Image from "next/image";
import { BsEnvelope } from "react-icons/bs";
export default function Workonline() {
  return (
    <>
      <div className="p-4 mt-9 h-96 w-full border-solid border-4 border-black-950 flex">
        <div className="p-2 h-full w-80">
          <Image
            src="/Frame 52427.png"
            className="h-full"
            height={100}
            width={300}
            alt="Work"
          />
        </div>

        <div className="p-8 h-full w-3/4 bg-yellow-950">
          <h1 className="mt-20 mb-4 text-7xl text-center text-white underline">
            WORK WITH ME
          </h1>
          <BsEnvelope className="p-2 text-6xl text-white inline-block" />
          <span className="text-2xl text-white">OLIVIAJAMES@GMAIL.COM</span>
        </div>
      </div>
    </>
  );
}
