import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaRegStar } from 'react-icons/fa';
import Navbar from './Navbar';
import { motion } from "framer-motion";
import loading from "../assets/logo (2).png";

function AllProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);


  if (products.length === 0) {
    return  <div className="flex items-center justify-center min-h-screen">
    <motion.img
        src={loading}
        alt="loading"
        width="200"
        animate={{
            y: [0, -20, 0],  
        }}
        transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
        }}
    />
</div>
  }

  return (
    <>
        <Navbar/>
      <div className='p-10 text-center'>
        <h1 className='text-4xl mb-10'>All products</h1>
        <div className='grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1'>
          {products?.map((product) => (
            <Link to={`/singleProduct/${product.id}`} key={product.id} className='p-4 border shadow-md hover:shadow-lg'>
              <img src={product.thumbnail} alt={product.title} className='h-50 w-full object-cover' />
              <h3 className='mt-2 text-lg font-bold'>{product.title}</h3>
              <p className='font-light'>{product.brand}</p>

              <div className='flex justify-center mt-2'>
                {Array(5).fill().map((_, index) => {
                  if (index < product.rating) {
                    return <FaStar key={index} className='text-yellow-400' />;
                  } else {
                    return <FaRegStar key={index} className='text-yellow-400' />;
                  }
                })}
              </div>

              <p className='font-medium mt-3'>${product.price}</p>
              <p className='font-semibold mt-4'>In Stock left: {product.stock}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default AllProducts;
