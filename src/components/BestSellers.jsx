import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import bestsellers1 from "../assets/bestsellers-1.png";
import bestsellers2 from "../assets/bestsellers-2.png";
import bestsellers3 from "../assets/bestsellers-3.png";
import bestsellers4 from "../assets/bestsellers-4.png";
import bestsellers5 from "../assets/bestsellers-5.png";
import bestsellers6 from "../assets/bestsellers-6.png";
import bestsellers7 from "../assets/bestsellers-7.png";
import bestsellers8 from "../assets/bestsellers-8.png";
import bestsellers9 from "../assets/bestsellers-9.png";
import bestsellers10 from "../assets/bestsellers-10.png";


const NextArrow = ({ onClick }) => {
  return (
    <div className="absolute right-0 z-10 transform -translate-y-1/2 cursor-pointer top-1/2" onClick={onClick}>
      <button className="p-2 text-white bg-gray-800 rounded-full ">&gt;
      </button>
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="absolute left-0 z-10 transform -translate-y-1/2 cursor-pointer top-1/2" onClick={onClick}>
      <button className="p-2 text-white bg-gray-800 rounded-full ">&lt;
      </button>
    </div>
  );
};

function BestSellers() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />, 
    prevArrow: <PrevArrow />, 
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
     
      <div className='relative p-10 text-center '>
        <h1 className='py-5 text-4xl text-center text-neutral-950'>BestSellers</h1>
        <Slider {...settings}>
          <Link to="/singleProduct/7" className='p-4 transition-shadow duration-300 hover:shadow-lg'>
            <img src={bestsellers1} alt="Fragrance" className='object-cover ' />
            <div className='flex flex-col gap-3 '>
              <p className='text-3xl text-center'>Chanel Coco...</p>
              <p>Fragrances</p>
              <p className='px-4 py-2 text-xl border border-black rounded-full '>129.99$</p>
            </div>
          </Link>

          <Link to="/singleProduct/93" className='p-4 transition-shadow duration-300 hover:shadow-lg'>
            <img src={bestsellers2} alt="furniture" />
            <div className='flex flex-col gap-3 '>
              <p className='text-3xl '>Annibale...</p>
              <p>Furniture</p>
              <p className='px-4 py-2 text-xl border border-black rounded-full '>2499.99$</p>
            </div>

          </Link>

          <Link to="/singleProduct/93" className='p-4 transition-shadow duration-300 hover:shadow-lg'>
            <img src={bestsellers3} alt="watch" className=' max-sm:'/>
            <div className='flex flex-col gap-3 '>
              <p className='text-3xl text-center'>Brown Leather...</p>
              <p>Mens-watches</p>
              <p className='px-4 py-2 text-xl border border-black rounded-full '>89.99$</p>
            </div>
          </Link>

          <Link to="/singleProduct/165" className='p-4 transition-shadow duration-300 hover:shadow-lg'>
            <img src={bestsellers4} alt="top" />
            <div className='flex flex-col gap-3 '>
              <p className='text-3xl text-center'>Short frock</p>
              <p>Tops</p>
              <p className='px-4 py-2 text-xl border border-black rounded-full '>24.99$</p>
            </div>
          </Link>

          <Link to="/singleProduct/4" className='p-4 transition-shadow duration-300 hover:shadow-lg'>
            <img src={bestsellers5} alt="Beauty" />
            <div className='flex flex-col gap-3'>
              <p className='text-3xl text-center'>Red Lipsick</p>
              <p>Beauty</p>
              <p className='px-4 py-2 text-xl border border-black rounded-full '>12.99$</p>
            </div>
          </Link>

          <Link to="/singleProduct/124" className='p-4 transition-shadow duration-300 hover:shadow-lg'>
            <img src={bestsellers6} alt="smartphone" />
            <div className='flex flex-col gap-3 '>
              <p className='text-3xl text-center'>Iphone X</p>
              <p>Smartphone</p>
              <p className='px-4 py-2 text-xl border border-black rounded-full '>899.99$</p>
            </div>
          </Link>

          <Link to="/singleProduct/100" className='p-4 transition-shadow duration-300 hover:shadow-lg'>
            <img src={bestsellers7} alt="earpods" />
            <div className='flex flex-col gap-3 '>
              <p className='text-3xl text-center'>Apple Airpods</p>
              <p>Mobile-Accessories</p>
              <p className='px-4 py-2 text-xl border border-black rounded-full '>129.99$</p>
            </div>
          </Link>

          <Link to="/singleProduct/79" className='p-4 transition-shadow duration-300 hover:shadow-lg'>
            <img src={bestsellers8} alt="laptop" />
            <div className='flex flex-col gap-3 '>
              <p className='text-3xl text-center'>Asus Zenbook...</p>
              <p>laptops</p>
              <p className='px-4 py-2 text-xl border border-black rounded-full '>1799.99$</p>
            </div>
          </Link>

          <Link to="/singleProduct/160" className='p-4 transition-shadow duration-300 hover:shadow-lg'>
            <img src={bestsellers9} alt="tablet" />
            <div className='flex flex-col gap-3 '>
              <p className='text-3xl text-center'>Samsung Galaxy... </p>
              <p>Tablets</p>
              <p className='px-4 py-2 text-xl border border-black rounded-full '>599.99$</p>
            </div>
          </Link>

          <Link to="/singleProduct/155" className='p-4 transition-shadow duration-300 hover:shadow-lg'>
            <img src={bestsellers10} alt="sunglass" />
            <div className='flex flex-col gap-3 '>
              <p className='text-3xl text-center'>Classic Sun...</p>
              <p>Sunglasses</p>
              <p className='px-4 py-2 text-xl border border-black rounded-full '>24.99$</p>
            </div>
          </Link>
        </Slider>
      </div>
    </>
  );
}

export default BestSellers;
