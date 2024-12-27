import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Display from './Display'
import Footer from './Footer'
import Bestsellers from './BestSellers'
import Reviews from './Reviews'

const Home = () => {
  return (
    <div className='overflow-x-hidden text-neutral-900 antialiased selection:bg-cyan-300 selection:text-cyan-900'>  
   
    <Navbar/> 
    <Hero/>
    < Display/>
    < Bestsellers/>
    < Reviews />
    <Footer/>
  </div>
  )
}

export default Home;