import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <div className='bg-black text-white flex justify-between items-center py-14 px-16 max-md:flex-col max-md:gap-6'>
        <div className='flex flex-row gap-20'>
          {/* First Column */}
          <div className='flex flex-col'>
            <Link to="/About" className='text-lg max-sm:text-base	 hover:text-red-500'>About Us</Link>
          </div>

          {/* Second Column */}
          <div className='flex flex-col'>
          
            <Link to="/Contact"className='text-lg max-sm:text-base	 hover:text-red-500'>Contact</Link>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className='flex gap-6 '>
          <a href='#' className='p-3 bg-white text-black rounded-full hover:bg-red-500 hover:text-white'>
            <FaFacebook className='text-2xl' />
          </a>
          <a href='#' className='p-3 bg-white text-black rounded-full hover:bg-red-500 hover:text-white'>
            <FaTwitter className='text-2xl' />
          </a>
          <a href='#' className='p-3 bg-white text-black rounded-full hover:bg-red-500 hover:text-white'>
            <FaInstagram className='text-2xl' />
          </a>
          <a href='#' className='p-3 bg-white text-black rounded-full hover:bg-red-500 hover:text-white'>
            <FaMapMarkerAlt className='text-2xl' />
          </a>
          <a href='#' className='p-3 bg-white text-black rounded-full hover:bg-red-500 hover:text-white'>
            <FaYoutube className='text-2xl' />
          </a>
        </div>
      </div>

      {/* Second Footer Section */}
      <div className='bg-white text-black flex justify-between py-8 px-20 max-sm:px-4 max-sm:py-4 '>
        <p className='text-sm max-sm:text-xs	'>
          Copyright © 2024 <span className='text-red-500'>Next. Buy</span>
        </p>
        <p className='text-sm max-sm:text-xs	'>
          Powered by <span className='text-red-500'>Next. Buy</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
