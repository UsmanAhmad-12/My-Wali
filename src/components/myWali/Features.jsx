import React from "react";
import { featuresImage1, featuresImage2 } from "../../assets/images/index.js";
function Features() {
  return (
    <div className="bg-[#fafafa]">
    <div className="flex lg:flex-row flex-col px-5 md:px-20 lg:px-10 xl:px-28 py-12 md:py-24  max-w-[1600px] mx-auto  overflow-hidden"> 
      <div className="w-full lg:w-[67%]">
        <img data-aos="fade-right" className="h-[72px] mx-auto md:mx-0" src={featuresImage1} alt="" />
        <h1 data-aos="fade-right" className="text-[28px] md:text-[32px] text-center md:text-left lg:text-[42px] dm-serif-display lg:w-[523px] leading-[30px] lg:leading-[45px] mt-10">
          Marriage is a sacred journey—you shouldn’t have to walk it alone.
        </h1>
        <p data-aos="fade-right" className="montserrat tracking-tight text-[16px] mx-auto md:mx-0 lg:text-[18px] text-justify leading-[25px] w-[90%] mt-6 text-[#403F3D] font-medium">
          MyWali is the first Islamic marriage platform that unites seekers,
          parents and guardians (walis) on a shared path to marriage —built on
          trust, transparency, and Islamic values. Unlike conventional apps, we
          remove secrecy and restore dignity to the process, ensuring that every
          interaction honors both faith and family.
        </p>
        <p data-aos="fade-right" className="montserrat tracking-tight text-[16px] lg:text-[18px] mx-auto md:mx-0 text-justify leading-[25px] w-[90%] mt-6 text-[#403F3D] font-medium">
          Too often, young Muslims search alone, without the guidance,
          modesty, or emotional safety and support that they need. MyWali
          changes that by making guardians an essential part of the journey,
          bringing back wisdom, and laying the foundation for marriage rooted in
          faith and mutual respect.
        </p>
        <p data-aos="fade-right" className="montserrat tracking-tight text-[16px] lg:text-[18px] mx-auto md:mx-0 text-justify leading-[25px] w-[90%] mt-6 text-[#403F3D] font-medium">
            Begin your journey with confidence - where every interaction is intentional, every connection dignified, and every step taken for the sake of marriage
        </p>
        
      </div>
      <div className="w-full lg:w-[33%] mt-10 lg:mt-0 flex items-center">
        <img data-aos="fade-left" className="md:w-[50%] lg:w-[100%]  mx-auto lg:mx-0" src={featuresImage2} alt="featursImage2" />
      </div>
    </div>
    </div>
  );
}

export default Features;
