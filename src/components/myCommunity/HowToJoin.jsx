import React from "react";
import { howToJoinImage1, howToJoinImage2 } from "../../assets/images/index.js";
function HowToJoin() {
  return (
    <div className="bg-[#fafafa]">
      <div className="py-20 px-5 sm:px-10 lg:px-24 max-w-[1600px] mx-auto overflow-hidden">
        <h1 data-aos="fade-down" className="text-center dm-serif-display text-[39px] sm:text-[44px] mb-5">
          How to access <span className="text-[#5a4685]"> MyCommunity</span>
        </h1>
        {/* 1st Card */}
        <div data-aos="fade-right" className="flex md:flex-row flex-col items-center  md:gap-16 gap-10 mt-16 lg:mt-0 ">
          <div  className="w-[40%] md:w-[20%] lg:w-[17%] ">
            <img className="" src={howToJoinImage1} alt="" />
          </div>
          <div className="md:w-[80%] lg:w-[60%] flex flex-col justify-center gap-2">
            <h1 className="dm-serif-display text-[25px] md:text-[30px] text-center md:text-left">
              Option 1: MyCommunity Only (Free Access)
            </h1>
            <p className="montserrat w-full md:w-[80%] text-[#403f3d] font-medium  md:text-[18px] text-[16px] tracking-tight text-center md:text-left mt-7 md:mt-0">
              Download the MyWali app and register for MyCommunity for
              free.  Join forums, discussions, events, groups and Q&A.
            </p>
          </div>
        </div>
        {/* 2nd Card */}
        <div data-aos="fade-left" className="flex md:flex-row-reverse flex-col items-center  justify-start mt-10 lg:mt-5 gap-10 md:gap-16">
          <div className="w-[40%] md:w-[20%] lg:w-[17%] ">
            <img className="" src={howToJoinImage2} alt="" />
          </div>
          <div className="md:w-[80%] lg:w-[60%] flex flex-col justify-center gap-2">
            <div className="md:ml-auto md:mr-0 md:w-[80%] ">
            <h1 className=" dm-serif-display md:text-[30px] text-[25px] tracking-wide md:ml-auto md:mr-0 text-center md:text-left">
              Option 2: MyCommunity + MyWali
            </h1>
            <p className="montserrat  text-[#403f3d] font-medium md:text-[18px] text-[16px] tracking-tight md:ml-auto md:mr-0 text-center md:text-left mt-7 md:mt-0">
              Download the MyWali app & register using MyWali option. Complete
              full registration with ID verification to access both the marriage
              platform & MyCommunity. 
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowToJoin;
