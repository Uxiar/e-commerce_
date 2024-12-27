import React from 'react';
import heroImg from "../assets/hero.jpg";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div 
      className="relative h-screen bg-cover bg-center" 
      style={{ 
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroImg})` 
      }}
    >
      <div className=' max-sm:px-4 relative z-10 flex flex-col justify-center items-center h-full text-center'>
        <h1 className='text-6xl max-sm:text-4xl font-bold mb-5 text-white drop-shadow-lg'>
          "Uncover the Latest Trends!"
        </h1>
        <p className='text-xl mb-10 text-neutral-200 max-w-md'>
          Nam at congue diam etiam erat lectus, finibus eget commodo quis, congue diam etiam erat lectus.
        </p>
        <Link to="/AllProducts" className=' rounded-2xl py-2 px-4 text-neutral-100 bg-red-600 hover:bg-red-700 transition duration-300 transform hover:scale-105'>
          &gt;&gt; EXPLORE STORE
        </Link>
      </div>
    </div>
  );
}

export default Hero;
