import React from "react";
import { BsApple } from "react-icons/bs";
import { playstore } from "../../assets/images/index.js";
function GetTheMasjidApp() {
  return (
    <div className="bg-[#F4F1FA]">
    <div className="px-5 sm:px-10 py-5 sm:py-20 max-w-[1600px] mx-auto overflow-hidden">
      <h1 data-aos="fade-down" className="text-center pt-10 dm-serif-display text-3xl md:text-5xl lg:w-[75%] mx-auto">Join the<span className="text-[#5A4685]"> Masjid</span> journey & Strengthen your community today</h1>
      <p className='text-center montserrat text-[#403F3D] font-medium  sm:text-lg sm:w-[65%] 2xl:w-[55%] mx-auto mt-[45px]'>If you’re a Masjid click below to get started and become part of the growing MyWali network supporting families and seekers. </p>
      <h5 data-aos="fade-up" className="text-center dm-serif-display text-[24px] sm:text-[27px] lg:text-[37px] pt-5">Download the app</h5>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-4 mt-10 pb-10 px-4">
        <a data-aos="fade-right"
          href="#"
          className="flex items-center bg-gradient-to-b from-[#363636] to-[#060606] text-white px-4 py-3 sm:px-6 sm:py-5 rounded-full border-2 border-white hover:scale-105 transition-all duration-300 w-fit"
        >
          <img src={playstore} alt="Google Play" className="w-8 h-8 sm:w-10 sm:h-10 mr-2" />
          <div className="text-left">
            <div className="text-xs sm:text-sm leading-none">GET IT ON</div>
            <div className="text-lg sm:text-2xl font-semibold leading-none">
              Google Play
            </div>
          </div>
        </a>
        
        <a data-aos="fade-left"
          href="#"
          className="flex items-center bg-gradient-to-b from-[#363636] to-[#060606] hover:scale-105 text-white px-6 py-3 sm:px-8 sm:py-5 rounded-full border-2 border-white transition-all duration-200 w-fit"
        >
          <BsApple className="w-8 h-8 sm:w-10 sm:h-10 mr-2 sm:mr-3" />
          <div className="text-left">
            <div className="text-xs sm:text-sm leading-none">Download on the</div>
            <div className="text-lg sm:text-2xl font-semibold leading-none">App Store</div>
          </div>
        </a>

        
      </div>
    </div>
    </div>
  )
}

export default GetTheMasjidApp