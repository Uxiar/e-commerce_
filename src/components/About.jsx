import React from 'react';
import Navbar from './Navbar';

const AboutUs = () => {
  return (
    <>
       <Navbar/>
    <section className="bg-black text-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-8 text-center text-red-500">About Next. Buy</h2>
        
       
        <p className="text-lg leading-relaxed mb-8 text-center">
          Welcome to <span className="text-red-500 font-semibold">Next. Buy</span>, your go-to destination for a seamless and exciting online shopping experience.  
          Here at <span className="text-red-500 font-semibold">Next. Buy</span>, we’re on a mission to make shopping more than just a task—it’s an adventure. With us, you’ll find the perfect blend of innovation, style, and convenience that caters to all your needs.
        </p>
        
        <div className="bg-red-500 text-black rounded-lg p-6 mb-8 shadow-lg">
          <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
          <p className="text-lg">
            At <span className="font-semibold">Next. Buy</span>, we envision a world where online shopping is effortless, enjoyable, and accessible to everyone.  
            We aim to set new standards in quality, reliability, and customer satisfaction by delivering top-notch products and unmatched service every step of the way.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-semibold text-red-500 mb-4">What We Offer</h3>
            <ul className="list-disc list-inside space-y-3 text-lg">
              <li><span className="font-semibold">A Wide Selection:</span> From everyday essentials to luxury items, our catalog is curated to meet all your needs.</li>
              <li><span className="font-semibold">Unbeatable Deals:</span> Enjoy amazing discounts and exclusive promotions year-round.</li>
              <li><span className="font-semibold">Fast & Reliable Shipping:</span> Get your orders delivered swiftly, no matter where you are.</li>
              <li><span className="font-semibold">Safe & Secure Payments:</span> Shop confidently with our encrypted and user-friendly payment methods.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-red-500 mb-4">Why Choose Us?</h3>
            <p className="text-lg leading-relaxed">
              When you shop with <span className="text-red-500 font-semibold">Next. Buy</span>, you’re choosing a partner that values quality, integrity, and customer happiness.  
              Our team works tirelessly to handpick products that you’ll love and provide support whenever you need it.
            </p>
          </div>
        </div>
        
        <div className="bg-white text-black rounded-lg p-6 mb-8 shadow-lg">
          <h3 className="text-3xl font-bold text-center text-red-500 mb-4">Our Promise to You</h3>
          <p className="text-lg text-center leading-relaxed">
            We’re here to ensure that every shopping experience you have with <span className="text-red-500 font-semibold">Next. Buy</span> is smooth, secure, and memorable.  
            Your trust is our top priority, and we promise to go above and beyond to exceed your expectations.
          </p>
        </div>
        
        <p className="text-lg leading-relaxed text-center">
          Whether you’re shopping for the latest gadgets, trendy outfits, or home essentials, <span className="text-red-500 font-semibold">Next. Buy</span> is your one-stop shop.  
          The next big thing in online shopping is just a click away. Start your journey with us today!
        </p>
      </div>
    </section>
    </>
  );
};

export default AboutUs;
