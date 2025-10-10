import React from 'react'
import { BsApple } from "react-icons/bs";
import { playstore } from "../../assets/images/index.js";
import { Link } from 'react-router-dom'; 
function Register() {
  return (
    <div className='bg-[#F4F1FA]'>
    <div className='max-w-[1600px] mx-auto overflow-hidden'>
    <div className=" px-5 sm:px-10 sm:py-10  md:py-20 overflow-hidden max-w-[1600px] mx-auto">
      <h1 data-aos="fade-down" className="text-center pt-10 dm-serif-display text-4xl md:text-5xl lg:w-[45%] mx-auto">Join the<span className="text-[#5A4685]"> MyMasjid</span> Network</h1>
      <p data-aos="fade-down" className='text-center montserrat text-[#403F3D] font-medium  sm:text-lg sm:w-[80%] mx-auto mt-[45px]'>Be part of a growing network of respected Islamic institutions guiding their communities toward safer, Sharia-compliant marriage pathway through MyWali. </p>
      <div data-aos="fade-up" className='flex justify-center'>
        <Link to="/register-masjid"> 
        <button  className='mb-10 sm:mb-0 bg-[#5A4685] hover:bg-[#47376b] text-white px-7 tracking-wide py-4 sm:px-6 sm:py-6 sm:text-xl rounded-full border-2 border-white  mt-[45px] transition-all hover:scale-105 duration-300'>Register Your Masjid</button>
        </Link>
      </div>
      
    </div>
    </div>
    </div>
  )
}

export default Register