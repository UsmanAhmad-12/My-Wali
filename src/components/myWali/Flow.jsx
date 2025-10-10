import React, { useState } from "react";
import { guardianFlowImage1, guardianFlowIcon1, guardianFlowIcon2, guardianFlowIcon3, guardianFlowIcon4, guardianFlowIcon5, seekerFlowIcon1, seekerFlowIcon2, seekerFlowIcon3, seekerFlowIcon4 } from "../../assets/images/index.js";
function Flow() {
  const guardianFlow = [
    {
      image: guardianFlowIcon5,
      title: "Guardian registers",
      description: "Begin your MyWali journey by registering guardian and seeker mobile number (optional). A one-time password (OTP) confirms both accounts, ensuring guardian involvement from the start.",
    },
    {
      image: guardianFlowIcon4,
      title: "Guardian completes ID verification",
      description: "Guardian uses password to complete ID verification, protecting your experience & maintaining the integrity of every profile on MyWali.",
    },
    {
      image: guardianFlowIcon1,
      title: "Guardian links seeker account (optional)",
      description: "Link your seeker mobile number to your account using the provided code for join access or guardian can independently lead the search.",
    },
    {
      image: guardianFlowIcon2,
      title: "Guardian or seeker create seeker profile",
      description: "Create a profile that highlights seekers background, personality, & preferences - designed to reflect faith and values.",
    },
    {
      image: guardianFlowIcon3,
      title: "Both Guardian & seeker access profiles",
      description: "Guardian can lead the marriage search or with shared access, both guardian and seeker can review, manage, and explore potential connections.",
    },
  ];
  const seekerFlow = [
    {
      image: seekerFlowIcon1,
      title: "Seeker Registration",
      description: "Start your MyWali journey by registering both guardian and seeker mobile numbers. A simple OTP verification ensures your guardian is involved from the start—giving you guidance and confidence every step of the way.",
    },
    {
      image: seekerFlowIcon3,
      title: "Guardian Verification",
      description: "Your guardian completes secure ID and facial verification - protecting your experience and maintaining the integrity of every profile on MyWali.",
    },
    {
      image: seekerFlowIcon2,
      title: "Seeker Profile Creation",
      description: "Showcase your personality, background, and values in a profile designed to reflect your faith and lifestyle—making meaningful connections easier.",
    },
    {
      image: seekerFlowIcon4,
      title: "Joint Access to profiles",
      description: "Both seeker and guardian can explore and manage profiles together, promoting transparency, guidance, and peace of mind throughout your journey",
    },
    // {
    //   image: guardianFlowIcon1,
    //   title: "Seeker connects with guardian or begins matching",
    //   description: "Need to add description here",
    // },
  ];

  const [activeFlow, setActiveFlow] = useState("guardian");

  return (
    <div className="bg-[#f4f1fa]">
    <div className="py-5 md:py-16  px-5  lg:px-20 max-w-[1600px] mx-auto overflow-hidden">
        <h1 className="flex justify-center dm-serif-display text-[28px] sm:text-[45px] pb-12 px-5 sm:px-10 text-center py-5 lg:py-10">Choose a path that is right for you</h1>
      <div className="flex justify-center  gap-4 sm:gap-6 md:gap-8">
        <div onClick={() => setActiveFlow("guardian")}>
          <button data-aos="fade-right"
            className={`dm-serif-display leading-[25px] font-medium tracking-tight transition-all duration-300 ${
              activeFlow === "guardian"
                ? "text-2xl sm:text-[27px] text-[#ffffff] bg-[#5A4685] rounded-full px-5 py-3 sm:px-8 sm:py-5"
                : "text-2xl sm:text-3xl text-gray-400 mt-3"
            }`}
          >
            Guardian flow
          </button>
        </div>
        <div onClick={() => setActiveFlow("seeker")}>
          <button data-aos="fade-left"
            className={`dm-serif-display leading-[25px] font-medium tracking-tight transition-all duration-300 ${
              activeFlow === "seeker"
                ? "text-2xl sm:text-[27px] text-[#ffffff] bg-[#5A4685] rounded-full px-5 py-3 sm:px-8 sm:py-5"
                : "text-2xl sm:text-3xl text-gray-400 mt-3"
            }`}
          >
            Seeker flow
          </button>
        </div>
      </div>

      {activeFlow === "guardian" && (
        <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:gap-8 pb-10 md:pb-0">
          {guardianFlow.map((item, index) => (
            <div className="mt-20 md:mt-24 xl:mt-28 flex flex-col items-center gap-2 md:gap-4" key={index}>
              <img className="w-[20%] md:w-[30%] xl:w-[55%] lg:w-[35%] mx-auto" src={item.image} alt="" />
              <div className="flex flex-col items-center gap-2 w-full">
                <h6 className={`dm-serif-display  text-base sm:text-xl md:text-lg text-center !leading-tight ${index==0 ? "w-[40%] lg:w-[30%]":"w-[50%] lg:w-[82%]"}`}>
                  {item.title}
                </h6>
                <p className={`montserrat text-[10px] md:text-xs font-medium text-[#403F3D] text-center w-full px-5 sm:px-0`}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
      {activeFlow === "seeker" && (
        <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-8 pb-10 md:pb-0">
          {seekerFlow.map((item, index) => (
            <div className="mt-20 md:mt-24 xl:mt-28 flex flex-col items-center gap-2 md:gap-4" key={index}>
              <img className="w-[20%] md:w-[30%] xl:w-[40%] lg:w-[35%] mx-auto" src={item.image} alt="" />
              <div className="flex flex-col items-center gap-2 w-full">
                <h6 className={`dm-serif-display  text-base md:text-lg sm:text-xl text-center !leading-tight ${(index==2 || index==0) ? "w-[70%]":"md:w-[50%] lg:w-[82%]"}`}>
                  {item.title}
                </h6>
                <p className="montserrat text-[10px] md:text-xs font-medium text-[#403F3D] text-center w-full px-5 sm:px-0">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
}

export default Flow;
