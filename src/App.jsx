import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import CategoryDisplay from './components/CategoryDisplay';
import AllProducts from './components/AllProducts';
import Navbar from './components/Navbar';
import bestsellersDisplay from './components/bestsellersDisplay'
import CategoriesLists from "./components/CategoriesLists"
import SingleProduct from './components/SingleProduct';
import Payment from "./components/Payment";
import ShoppingCart from './components/ShoppingCart';
import About from './components/About';
import Contact from './components/Contact';
import Orders from './components/Orders';

  function App() {
  
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/category/:category" element={<CategoryDisplay />} />
            <Route path="/AllProducts" element={<AllProducts />} />
            <Route path="/bestsellersDisplay" element={<bestsellersDisplay />} />
            <Route path="/CategoriesLists" element={<CategoriesLists />} />
            <Route path="/SingleProduct/:id" element={<SingleProduct />} />
            <Route path="/Payment" element={<Payment/>} />
            <Route path="/ShoppingCart" element={<ShoppingCart/>} />
            <Route path="/About" element = {<About/>} />
            <Route path="/Contact" element = {<Contact/>} />
            <Route path="/Orders" element = {<Orders/>} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }

export default App;
