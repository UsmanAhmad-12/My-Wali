import React from "react";

function RightLeftSections({ icon, heading, para, index }) {
  return (
    <div
      data-aos="fade-left"
      className={`flex flex-col  mx-auto md:mx-0  gap-4 sm:gap-6 md:gap-8  mt-8  md:mt-16 ${
        index % 2 == 0
          ? "md:flex-row md:ml-0 md:mr-auto"
          : "md:mr-0 md:ml-auto  md:flex-row-reverse"
      } md:w-[70%]`}
    >
      <div className="flex-shrink-0 flex justify-center relative z-10">
        <img
          className="h-[90px] sm:h-[100px] md:h-[120px]"
          src={icon}
          alt="coreFeatures"
        />
      </div>
      <div className="text-center md:text-start">
        <h5 className="dm-serif-display w-full  text-2xl sm:text-2xl md:text-3xl font-medium">
          {heading}
        </h5>
        <p className="montserrat w-full   text-[#363533] font-medium mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg  md:text-left !leading-5">
          {para}
        </p>
      </div>
    </div>
  );
}

export default RightLeftSections;
