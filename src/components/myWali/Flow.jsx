import React, { useState } from "react";
import { guardianFlowImage1 } from "../../assets/images/index.js";
function Flow() {
  const guardianFlow = [
    {
      image: guardianFlowImage1,
      title: "Guardian registers complete",
      description: "Need to add description here",
    },
    {
      image: guardianFlowImage1,
      title: "Guardian completes ID verification",
      description: "Need to add description here",
    },
    {
      image: guardianFlowImage1,
      title: "Guardian links seeker account",
      description: "Need to add description here",
    },
    {
      image: guardianFlowImage1,
      title: "Guardian or seeker create seeker profile",
      description: "Need to add description here",
    },
    {
      image: guardianFlowImage1,
      title: "Both Guardian & seeker access profiles",
      description: "Need to add description here",
    },
  ];
  const seekerFlow = [
    {
      image: guardianFlowImage1,
      title: "Seeker registers account",
      description: "Need to add description here",
    },
    {
      image: guardianFlowImage1,
      title: "Seeker completes ID verification",
      description: "Need to add description here",
    },
    {
      image: guardianFlowImage1,
      title: "Seeker creates profile",
      description: "Need to add description here",
    },
    {
      image: guardianFlowImage1,
      title: "Seeker reviews and updates details",
      description: "Need to add description here",
    },
    {
      image: guardianFlowImage1,
      title: "Seeker connects with guardian or begins matching",
      description: "Need to add description here",
    },
  ];

  const [activeFlow, setActiveFlow] = useState("guardian");

  return (
    <div className="py-5 md:py-28 bg-[#f4f1fa] px-5 md:px-20">
      <div className="flex justify-center  gap-4 sm:gap-6 md:gap-8">
        <div onClick={() => setActiveFlow("guardian")}>
          <button data-aos="fade-right"
            className={`dm-serif-display leading-[25px] font-medium tracking-tight transition-all duration-300 ${
              activeFlow === "guardian"
                ? "text-3xl sm:text-4xl text-black"
                : "text-2xl sm:text-3xl text-gray-400"
            }`}
          >
            Guardian flow
          </button>
        </div>
        <div onClick={() => setActiveFlow("seeker")}>
          <button data-aos="fade-left"
            className={`dm-serif-display leading-[25px] font-medium tracking-tight transition-all duration-300 ${
              activeFlow === "seeker"
                ? "text-3xl sm:text-4xl text-black"
                : "text-2xl sm:text-3xl text-gray-400"
            }`}
          >
            Seeker flow
          </button>
        </div>
      </div>

      {activeFlow === "guardian" && (
        <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {guardianFlow.map((item, index) => (
            <div className="mt-20 flex flex-col items-center gap-4" key={index}>
              <img className="w-[60%] sm:w-[80%] mx-auto" src={item.image} alt="" />
              <div className="flex flex-col items-center gap-2 w-full">
                <h6 className="dm-serif-display text-lg text-center leading-tight w-full">
                  {item.title}
                </h6>
                <p className="montserrat text-[11px] md:text-xs font-medium text-[#403F3D] text-center w-full">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
      {activeFlow === "seeker" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {seekerFlow.map((item, index) => (
            <div className="mt-20 flex flex-col items-center gap-4" key={index}>
              <img className="w-[60%] sm:w-[80%] mx-auto" src={item.image} alt="" />
              <div className="flex flex-col items-center gap-2 w-full">
                <h6 className="dm-serif-display text-lg text-center leading-tight w-full">
                  {item.title}
                </h6>
                <p className="montserrat text-[11px] md:text-xs font-medium text-[#403F3D] text-center w-full">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Flow;
