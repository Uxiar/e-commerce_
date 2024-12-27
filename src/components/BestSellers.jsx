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
    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer" onClick={onClick}>
      <button className="bg-gray-800 text-white p-2 ">&gt;
      </button>
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer" onClick={onClick}>
      <button className="bg-gray-800 text-white p-2 ">&lt;

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
     
      <div className='p-10 relative text-center '>
        <h1 className='text-4xl text-neutral-950 text-center  py-5'>BestSellers</h1>
        <Slider {...settings}>
          <Link to="/singleProduct/7" className='p-4 hover:shadow-lg transition-shadow duration-300'>
            <img src={bestsellers1} alt="Fragrance" className=' object-cover' />
            <div className='flex flex-col gap-3 '>
              <p className='text-3xl text-center'>Chanel Coco...</p>
              <p>Fragrances</p>
              <p className=' text-xl border border-black rounded-full py-2 px-4 '>129.99$</p>
            </div>
          </Link>

          <Link to="/singleProduct/93" className='p-4 hover:shadow-lg transition-shadow duration-300'>
            <img src={bestsellers2} alt="furniture" />
            <div className='flex flex-col gap-3 '>
              <p className='text-3xl '>Annibale...</p>
              <p>Furniture</p>
              <p className=' text-xl border border-black rounded-full py-2 px-4 '>2499.99$</p>
            </div>

          </Link>

          <Link to="/singleProduct/93" className='p-4 hover:shadow-lg transition-shadow duration-300'>
            <img src={bestsellers3} alt="watch" className=' max-sm:'/>
            <div className='flex flex-col gap-3 '>
              <p className='text-3xl text-center'>Brown Leather...</p>
              <p>Mens-watches</p>
              <p className=' text-xl border border-black rounded-full py-2 px-4 '>89.99$</p>
            </div>
          </Link>

          <Link to="/singleProduct/165" className='p-4 hover:shadow-lg transition-shadow duration-300'>
            <img src={bestsellers4} alt="top" />
            <div className='flex flex-col gap-3 '>
              <p className='text-3xl text-center'>Short frock</p>
              <p>Tops</p>
              <p className=' text-xl border border-black rounded-full py-2 px-4 '>24.99$</p>
            </div>
          </Link>

          <Link to="/singleProduct/4" className=' p-4 hover:shadow-lg transition-shadow duration-300'>
            <img src={bestsellers5} alt="Beauty" />
            <div className='flex flex-col gap-3'>
              <p className='text-3xl text-center'>Red Lipsick</p>
              <p>Beauty</p>
              <p className=' text-xl border border-black rounded-full py-2 px-4 '>12.99$</p>
            </div>
          </Link>

          <Link to="/singleProduct/124" className='p-4 hover:shadow-lg transition-shadow duration-300'>
            <img src={bestsellers6} alt="smartphone" />
            <div className='flex flex-col gap-3 '>
              <p className='text-3xl text-center'>Iphone X</p>
              <p>Smartphone</p>
              <p className=' text-xl border border-black rounded-full py-2 px-4 '>899.99$</p>
            </div>
          </Link>

          <Link to="/singleProduct/100" className='p-4 hover:shadow-lg transition-shadow duration-300'>
            <img src={bestsellers7} alt="earpods" />
            <div className='flex flex-col gap-3 '>
              <p className='text-3xl text-center'>Apple Airpods</p>
              <p>Mobile-Accessories</p>
              <p className=' text-xl border border-black rounded-full py-2 px-4 '>129.99$</p>
            </div>
          </Link>

          <Link to="/singleProduct/79" className='p-4 hover:shadow-lg transition-shadow duration-300'>
            <img src={bestsellers8} alt="laptop" />
            <div className='flex flex-col gap-3 '>
              <p className='text-3xl text-center'>Asus Zenbook...</p>
              <p>laptops</p>
              <p className=' text-xl border border-black rounded-full py-2 px-4 '>1799.99$</p>
            </div>
          </Link>

          <Link to="/singleProduct/160" className='p-4 hover:shadow-lg transition-shadow duration-300'>
            <img src={bestsellers9} alt="tablet" />
            <div className='flex flex-col gap-3 '>
              <p className='text-3xl text-center'>Samsung Galaxy... </p>
              <p>Tablets</p>
              <p className=' text-xl border border-black rounded-full py-2 px-4 '>599.99$</p>
            </div>
          </Link>

          <Link to="/singleProduct/155" className='p-4 hover:shadow-lg transition-shadow duration-300'>
            <img src={bestsellers10} alt="sunglass" />
            <div className='flex flex-col gap-3 '>
              <p className='text-3xl text-center'>Classic Sun...</p>
              <p>Sunglasses</p>
              <p className=' text-xl border border-black rounded-full py-2 px-4 '>24.99$</p>
            </div>
          </Link>
        </Slider>
      </div>
    </>
  );
}

export default BestSellers;
