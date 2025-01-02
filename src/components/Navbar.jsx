import React, { useState } from 'react';
import logo from "../assets/logo (2).png";
import { FaShoppingBag } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { FiAlignJustify } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const hamburgerClick = () => {
    setActive(!active);
  };

  return (
    <>
      <header className='fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-5 pr-10 bg-white shadow-md max-lg:pr-5'>
        <div>
          <img
            src={logo}
            alt='logo'
            width={140}
          />
        </div>
        {
          active === true ? <RxCross2 size={40} className='md:hidden' onClick={hamburgerClick} /> :
          <FiAlignJustify size={40} className='md:hidden' onClick={hamburgerClick} />
        }

        <div className='flex gap-8 max-md:hidden max-lg:gap-5'>
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive ? 'text-red-500' : 'text-black'
            }>
            HOME
          </NavLink>
          <NavLink 
            to='/CategoriesLists' 
            className={({ isActive }) => 
              isActive ? 'text-red-500' : 'text-black'
            }>
            ALL CATEGORIES
          </NavLink>
          <NavLink 
            to="/About" 
            className={({ isActive }) => 
              isActive ? 'text-red-500' : 'text-black'
            }>
            ABOUT US
          </NavLink>
          <NavLink 
            to="/Contact" 
            className={({ isActive }) => 
              isActive ? 'text-red-500' : 'text-black'
            }>
            CONTACT US
          </NavLink>
          <NavLink 
            to="/Orders"
            className={({ isActive }) => 
              isActive ? 'text-red-500' : 'text-black'
            }>
            ORDERS
          </NavLink>
          <NavLink 
            to="/ShoppingCart" 
            className={({ isActive }) => 
              isActive ? 'text-red-500 flex gap-2 items-center' : 'text-black flex gap-1 items-center'
            }>
            ADD TO <FaShoppingBag className='mb-1'/>
          </NavLink>
        </div>
      </header>

      {
        active ?
        <div className="fixed top-0 z-20 flex flex-col items-center justify-center w-full h-full gap-6 py-20 bg-white">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive ? 'text-red-500' : 'text-black'
            }>
            HOME
          </NavLink>
          <NavLink 
            to='/CategoriesLists' 
            className={({ isActive }) => 
              isActive ? 'text-red-500' : 'text-black'
            }>
            ALL CATEGORIES
          </NavLink>
          <NavLink 
            to="/About" 
            className={({ isActive }) => 
              isActive ? 'text-red-500' : 'text-black'
            }>
            ABOUT US
          </NavLink>
          <NavLink 
            to="/Contact" 
            className={({ isActive }) => 
              isActive ? 'text-red-500' : 'text-black'
            }>
            CONTACT US
          </NavLink>
          <NavLink 
            to="/Orders"
            className={({ isActive }) => 
              isActive ? 'text-red-500' : 'text-black'
            }>
            ORDERS
          </NavLink>
          <NavLink 
            to="/ShoppingCart" 
            className={({ isActive }) => 
              isActive ? 'text-red-500 flex gap-2 items-center' : 'text-black flex gap-1 items-center'
            }>
            ADD TO <FaShoppingBag />
          </NavLink>
        </div> : ""
      }
    </>
  );
};

export default Navbar;
