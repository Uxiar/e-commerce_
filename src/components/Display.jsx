import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import watch from "../assets/mens watch.png";
import shoes from "../assets/mens shoes.png";
import beauty from "../assets/beauty.png";
import skincare from "../assets/skin-care.png";
import tops from "../assets/tops.png";
import furniture from "../assets/furniture.png";
import groceries from "../assets/groceries.png";
import fragrances from "../assets/fragrances.png";
import accessories from "../assets/Accesories.png";


// Custom next arrow button
const NextArrow = ({ onClick }) => {
  return (
    <div className="absolute right-0 z-10 transform -translate-y-1/2 cursor-pointer top-1/2" onClick={onClick}>
      <button className="p-2 text-white bg-gray-800 rounded-full ">&gt;
      </button>
    </div>
  );
};

// Custom previous arrow button
const PrevArrow = ({ onClick }) => {
  return (
    <div className="absolute left-0 z-10 transform -translate-y-1/2 cursor-pointer top-1/2" onClick={onClick}>
      <button className="p-2 text-white bg-gray-800 rounded-full ">&lt;

      </button>
    </div>
  );
};

function Display() {
  // Slick carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />, // Assigning custom next arrow
    prevArrow: <PrevArrow />, // Assigning custom previous arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  


  return (
    <>
    
    <div className='relative p-10'>
      <h1 className='py-10 text-4xl text-center text-neutral-950'>Shop by Top Categories</h1>
      <Slider {...settings}>
        <Link to="/category/mens-watches" className='p-4 transition-shadow duration-300 hover:shadow-lg'>
          <img src={watch} alt="Mens Watch" />
          <p className='text-3xl text-center'>Mens Watch</p>
        </Link>

        <Link to="/category/mens-shoes" className='p-4 transition-shadow duration-300 hover:shadow-lg'>
          <img src={shoes} alt="Shoes" />
          <p className='text-3xl text-center'>Shoes</p>
        </Link>

        <Link to="/category/skin-care" className='p-4 transition-shadow duration-300 hover:shadow-lg'>
          <img src={skincare} alt="Smartphone" />
          <p className='text-3xl text-center'>Skin-care</p>
        </Link>

        <Link to="/category/mobile-accessories" className='p-4 transition-shadow duration-300 hover:shadow-lg'>
          <img src={accessories} alt="Accessories" />
          <p className='text-3xl text-center'>Mobile Acces...</p>
        </Link>

        <Link to="/category/beauty" className='p-4 transition-shadow duration-300 hover:shadow-lg'>
          <img src={beauty} alt="Beauty" />
          <p className='text-3xl text-center'>Beauty</p>
        </Link>

        <Link to="/category/furniture" className='p-4 transition-shadow duration-300 hover:shadow-lg'>
          <img src={furniture} alt="Furniture" />
          <p className='text-3xl text-center'>Furniture</p>
        </Link>

        <Link to="/category/groceries" className='p-4 transition-shadow duration-300 hover:shadow-lg'>
          <img src={groceries} alt="Groceries" />
          <p className='text-3xl text-center'>Groceries</p>
        </Link>

        <Link to="/category/fragrances" className='p-4 transition-shadow duration-300 hover:shadow-lg'>
          <img src={fragrances} alt="Fragrances" />
          <p className='text-3xl text-center'>Fragrances</p>
        </Link>

        <Link to="/category/tops" className='p-4 transition-shadow duration-300 hover:shadow-lg'>
          <img src={tops} alt="Tops" />
          <p className='text-3xl text-center'>Tops</p>
        </Link>
      </Slider>
    </div>
    </>
  );
}

export default Display;
