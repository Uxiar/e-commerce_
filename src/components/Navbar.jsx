import React from 'react';
import logo from "../assets/logo (2).png";
import { FaShoppingBag } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

  return (
    <header className='flex py-5 items-center justify-between max-lg:pr-5 pr-10 '>
      <div>
        <img
          src={logo}
          alt='logo'
          width={140}
        />
      </div>

      <div className='flex gap-8 max-lg:gap-5'>
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
  );
};

export default Navbar;
