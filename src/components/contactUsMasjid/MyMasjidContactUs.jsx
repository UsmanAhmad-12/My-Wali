import React from 'react'
import { heroContactUsImage1 } from "../../assets/images/index.js";
function MyMasjidContactUs() {
  return (
    <div className="relative w-full h-[300px]  md:h-[500px] overflow-hidden">
          <img
            src={heroContactUsImage1}
            alt="Contact us hero"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* <div className="absolute inset-0 bg-black/40" /> */}
          <div className="relative z-10 h-full flex items-center justify-center px-4">
            <h1 data-aos="fade-up" className="dm-serif-display text-white text-4xl sm:text-5xl md:text-[70px] text-center leading-tight">
              Get in Touch With Us
            </h1>
          </div>
        </div>
  )
}

export default MyMasjidContactUs