import React from "react";
import { BsApple } from "react-icons/bs";
import { playstore } from "../../assets/images/index.js";
function WhyMyWali() {
  return (
    <div className="bg-[#f4f1fa]">
    <div className="max-w-[1600px] mx-auto overflow-hidden">
      <div className="md:py-32 py-12">
        <h1 data-aos="fade-down" className="mx-auto text-center px-5 md:px-0 text-[32px] md:text-[44px] md:w-[50%] dm-serif-display leading-[45px] font-medium"><span className="text-[#5A4685] dm-serif-display">MyWali,</span> Born from real struggles, built for the ummah</h1>
        <p data-aos="fade-down" className="montserrat  tracking-tight  text-[13px] mx-auto lg:text-[18px] text-center leading-[23px] px-5 md:px-0 md:w-[69%] mt-12 text-[#403F3D] font-medium">
        MyWali was born from the struggles of parents seeking a halal, dignified way for their children to find compatible matches. Today, too many young Muslims are pushed onto dating apps or practices not aligned with Islamic values, practices that compromise modesty, sideline families and undermine core principles, leaving seekers alone and parents powerless.
        </p>
        <p data-aos="fade-down" className="montserrat  tracking-tight text-[13px] mx-auto lg:text-[18px] text-center leading-[23px] px-5 md:px-0 md:w-[65%] mt-6 text-[#403F3D] font-medium">Rooted in faith and shaped by parents, scholars, and community leaders, MyWali restores family involvement, safeguards Islamic values, and provides a safe, halal path to marriage.</p>
        <div className="flex flex-col sm:flex-row gap-6 md:gap-4 mt-10 justify-center items-center">
          <a data-aos="fade-right"
            href="#"
            className="flex items-center bg-black text-white px-3 py-2 rounded-lg border-2 border-white   duration-300 w-52 hover:scale-105 transition-all"
          >
            <BsApple className="w-10 h-10 mr-3" />
            <div className="text-left">
              <div className="text-sm leading-none">Download on the</div>
              <div className="text-2xl font-semibold leading-none">
                App Store
              </div>
            </div>
          </a>

          <a data-aos="fade-left"
            href="#"
            className="flex items-center bg-black text-white px-3 py-2 rounded-lg border-2 border-white transition-all w-52 hover:scale-105 duration-300"
          >
            <img src={playstore} alt="Google Play" className="w-10 h-10 mr-2" />
            <div className="text-left">
              <div className="text-sm leading-none">GET IT ON</div>
              <div className="text-2xl font-semibold leading-none">
                Google Play
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}

export default WhyMyWali;
