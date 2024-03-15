import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../public/noblenest.png';
import Navbar from './navbar';

interface ImageProps {
  src: string;
  alt: string;
}

interface CardProps {
  title: string;
  sector: string;
  description: string;
  imageProps: ImageProps;
}

const cards: CardProps[] = [
  {
    title: 'Property-1',
    sector: 'Elon Musk Sector',
    description: 'Good property',
    imageProps: { src: '/bedSuite.png', alt: 'bed' }, // Corrected path
  },
  {
    title: 'Property-2',
    sector: 'Ibrahim Sector',
    description: 'Also good',
    imageProps: { src: '/property1.png', alt: 'room1' }, // Corrected path
  },
  // Add more cards as needed
];

const Carousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex justify-end"> {/* Corrected class */}
        <Image
          src={Logo}
          width={380}
          height={300}
          alt="logo"
        />
      </div>
      <div className="flex items-center"> {/* Corrected class */}
        <Navbar />
      </div>
      <div className="flex justify-between items-center w-full max-w-4xl p-4">
        <button
          onClick={goToPrevious}
          className="p-2 bg-gray-300 hover:bg-gray-400 rounded-full"
        >
          <span>{'<'}</span>
        </button>
        <div className="flex flex-wrap justify-center items-center -m-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`p-4 md:w-1/2 lg:w-1/3 ${
                index === activeIndex ? 'block' : 'hidden'
              }`}
            >
              <div className="bg-transparent text-gray-700 rounded-lg overflow-hidden relative">
                <h1 className="text-xl font-semibold absolute top-0 left-0 p-4 underline text-gray-500">{card.title}</h1>
                <h2 className="text-white text-lg font-medium absolute bottom-0 left-0 p-4 mb-10">{card.sector}</h2>
                <Image {...card.imageProps} width={500} height={300} className="z-0" />
                <h3 className="text-white text-lg font-medium absolute bottom-0 right-0 p-4">{card.description}</h3>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={goToNext}
          className="p-2 bg-gray-300 hover:bg-gray-400 rounded-full"
        >
          <span>{'>'}</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
