import React from 'react';
import heroImg from "../assets/hero.jpg";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div 
      className="relative h-screen bg-center bg-cover" 
      style={{ 
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroImg})` 
      }}
    >
      <div className='relative z-10 flex flex-col items-center justify-center h-full text-center max-sm:px-4'>
        <h1 className='mt-24 mb-5 text-6xl font-bold text-white max-sm:text-4xl drop-shadow-lg'>
          "Uncover the Latest Trends!"
        </h1>
        <p className='max-w-md mb-10 text-xl text-neutral-200'>
          Nam at congue diam etiam erat lectus, finibus eget commodo quis, congue diam etiam erat lectus.
        </p>
        <Link to="/AllProducts" className='px-4 py-2 transition duration-300 transform bg-red-600 rounded-2xl text-neutral-100 hover:bg-red-700 hover:scale-105'>
          &gt;&gt; EXPLORE STORE
        </Link>
      </div>
    </div>
  );
}

export default Hero;
