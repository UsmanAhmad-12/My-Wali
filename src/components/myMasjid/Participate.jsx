import React from 'react'
import { howToJoinImage1, howToJoinImage2, ellipse } from "../../assets/images/index.js";
function Participate() {
  return (
    <div className="bg-[#fafafa] relative">
      {/* Ellipse Section */}
      <div className="hidden md:block absolute left-0 top-[200px] sm:top-[300px] md:top-[890px] lg:top-[760px] xl:top-[700px] z-0">
          <img
            className="w-[60px] sm:w-[120px] md:w-[150px] opacity-30"
            src={ellipse}
            alt="elipse"
          />
        </div>
        <div className="absolute hidden md:block top-[100px] sm:top-[200px] md:top-[400px]  lg:top-[280px] xl:top-[290px]  right-0 rotate-180  z-0">
          <img
            className="w-[60px] sm:w-[120px] md:w-[150px] lg:w-[150px] opacity-30"
            src={ellipse}
            alt="elipse"
          />
        </div>


      <div className="py-10 md:py-20 px-5 sm:px-10 lg:px-24 max-w-[1600px] mx-auto overflow-hidden ">
        <h1 data-aos="fade-down" className="w-full  lg:w-[50%]  mx-auto text-center dm-serif-display text-[30px] sm:text-[44px] mb-5">
            Masjids can participate in two key ways: 
        </h1>
        {/* 1st Card */}
        <div data-aos="fade-right" className="flex md:flex-row flex-col items-center  md:gap-16 gap-10 md:mt-2 lg:mt-0 ">
          <div  className="w-[80%] md:w-[40%] lg:w-[17%] ">
            <img className="" src={howToJoinImage1} alt="" />
          </div>
          <div className="md:w-[80%] lg:w-[64%] flex flex-col justify-center gap-2">
            <h1 className="dm-serif-display text-[25px] md:text-[30px] text-center md:mt-16 md:text-left">
             Option 1: Guide Families Toward a Trusted Path
            </h1>
            <p className="montserrat w-full md:w-[80%] lg:w-[100%] text-[#403f3d] font-medium  md:text-[18px] text-[16px] tracking-tight text-center md:text-left mt-7 md:mt-0">
                Without directly managing marriage requests, your masjid can play a vital role in signposting families and seekers to MyWali. This can be done through khutbahs, posters, WhatsApp groups, and social media channels. 
            </p>
            <p className="montserrat w-full md:w-[80%] lg:w-[100%] text-[#403f3d] font-medium  md:text-[17px] text-[16px] tracking-tight text-center md:text-left mt-7 md:mt-3">
                MyWali provides a dignified, Islamic alternative to unregulated apps and informal matchmaking. Families feel supported, seekers gain reassurance, and your masjid is recognised as a trusted source of guidance. 
            </p>
            <p className="montserrat w-full md:w-[80%] lg:w-[100%] text-[#403f3d] font-medium  md:text-[18px] text-[16px] tracking-tight text-center md:text-left mt-7 md:mt-3">
            Each referral made using your masjid’s unique code also gives families access to subsidised MyWali memberships.  
            </p>
          </div>
        </div>
        {/* 2nd Card */}
        <div data-aos="fade-left" className="flex md:flex-row-reverse flex-col items-center  justify-start mt-10 lg:mt-5 gap-10 md:gap-16">
          <div className="w-[80%] md:w-[40%] lg:w-[17%] ">
            <img className="" src={howToJoinImage2} alt="" />
          </div>
          <div className="md:w-[80%] lg:w-[64%] flex flex-col justify-center gap-2">
            <div className="md:ml-auto md:mr-0 md:w-[80%] ">
            <h1 className=" dm-serif-display md:text-[30px] text-[25px] tracking-wide md:ml-auto md:mr-0 text-center md:mt-16 md:text-left">
                Option 2: Offer Structured Marriage Support 
            </h1>
            <p className="montserrat w-full md:w-[100%] text-[#403f3d] font-medium  md:text-[18px] text-[16px] tracking-tight text-center md:text-left mt-7 md:mt-3">
            For masjids wishing to take a more active role, MyWali equips Imams and organisation members with secure tools to support families with structure and trust.
            </p>
            <p className="montserrat w-full md:w-[100%] text-[#403f3d] font-medium  md:text-[17px] text-[16px] tracking-tight text-center md:text-left mt-7 md:mt-3">
            Masjids offering matrimonial services can access MyWali’s secure marriage database to help identify suitable candidates within their community.
            </p>
            <p className="montserrat w-full md:w-[100%] text-[#403f3d] font-medium  md:text-[18px] text-[16px] tracking-tight text-center md:text-left mt-7 md:mt-3">
            MyWali manages the technology and privacy — allowing your masjid to guide families effectively, without the burden of running a platform or handling admin.
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Participate