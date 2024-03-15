import React from "react";
import Image from "next/image";
import Bed from "../public/bedSuite.png";
import room1 from "../public/property1.png";

const Card = () => {
  return (
    <main className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/2 lg:w-1/3 drop-shadow-md hover:drop-shadow-xl">
        <div className="bg-transparent text-gray-700 rounded-lg overflow-hidden relative">
          {/* Gray and underlined heading */}
          <h1 className="text-xl font-semibold absolute top-0 left-0 p-4 underline text-gray-500">Property-1</h1>
          {/* White bottom text, ensuring it does not overlap */}
          <h2 className="text-white text-lg font-medium absolute bottom-0 left-0 p-4 mb-10">Elon Musk Sector</h2>
          <Image src={Bed} alt="bed" width={500} height={300} className="z-0" />
          {/* White bottom text, ensuring it does not overlap */}
          <h3 className="text-white text-lg font-medium absolute bottom-0 right-0 p-4">Good property</h3>
        </div>
      </div>
      <div className="p-4 md:w-1/2 lg:w-1/3">
        <div className="bg-transparent text-gray-700 rounded-lg overflow-hidden relative">
          {/* Gray and underlined heading */}
          <h1 className="text-xl font-semibold absolute top-0 left-0 p-4 underline text-gray-500">Property-2</h1>
          {/* White bottom text, ensuring it does not overlap */}
          <h2 className="text-white text-lg font-medium absolute bottom-0 left-0 p-4 mb-10">Ibrahim Sector</h2>
          <Image src={room1} alt="room1" width={500} height={300} className="z-0" />
          {/* White bottom text, ensuring it does not overlap */}
          <h3 className="text-white text-lg font-medium absolute bottom-0 right-0 p-4">Also good</h3>
        </div>
      </div>
      
      <div className="p-4 md:w-1/2 lg:w-1/3 drop-shadow-md hover:drop-shadow-xl">
        <div className="bg-transparent text-gray-700 rounded-lg overflow-hidden relative">
          {/* Gray and underlined heading */}
          <h1 className="text-xl font-semibold absolute top-0 left-0 p-4 underline text-gray-500">Property-1</h1>
          {/* White bottom text, ensuring it does not overlap */}
          <h2 className="text-white text-lg font-medium absolute bottom-0 left-0 p-4 mb-10">Elon Musk Sector</h2>
          <Image src={Bed} alt="bed" width={500} height={300} className="z-0" />
          {/* White bottom text, ensuring it does not overlap */}
          <h3 className="text-white text-lg font-medium absolute bottom-0 right-0 p-4">Good property</h3>
        </div>
      </div>
      <div className="p-4 md:w-1/2 lg:w-1/3">
        <div className="bg-transparent text-gray-700 rounded-lg overflow-hidden relative">
          {/* Gray and underlined heading */}
          <h1 className="text-xl font-semibold absolute top-0 left-0 p-4 underline text-gray-500">Property-2</h1>
          {/* White bottom text, ensuring it does not overlap */}
          <h2 className="text-white text-lg font-medium absolute bottom-0 left-0 p-4 mb-10">Ibrahim Sector</h2>
          <Image src={room1} alt="room1" width={500} height={300} className="z-0" />
          {/* White bottom text, ensuring it does not overlap */}
          <h3 className="text-white text-lg font-medium absolute bottom-0 right-0 p-4">Also good</h3>
        </div>
      </div>

    </main>
  );
};

export default Card;
