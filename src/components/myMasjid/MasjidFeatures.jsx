import React from 'react'
import { masjidFeaturesImage1, featuresImage2 } from "../../assets/images/index.js";
function MasjidFeatures() {
  return (
    <div className="bg-[#fafafa]">
    <div className="flex lg:flex-row flex-col px-5 md:px-20 lg:px-10 xl:px-28 pt-10 sm:py-12  lg:py-24 max-w-[1600px] mx-auto overflow-hidden  "> 
      <div className="w-full lg:w-[75%] ">
        <img data-aos="fade-right" className="h-[60px] sm:h-[72px] mx-auto md:mx-0" src={masjidFeaturesImage1} alt="" />
        <h1 data-aos="fade-right" className="pt-8 md:mt-6 text-[25px] md:text-[32px] text-center md:text-left lg:text-[46px] dm-serif-display lg:w-[600px] leading-[30px] lg:leading-[49px] sm:mt-10">
            Trusted Support for Families & Marriage Seekers. 
        </h1>
        <p data-aos="fade-right" className="lg:mt-16 montserrat tracking-tight text-[16px] lg:text-[18px] mx-auto md:mx-0 text-justify leading-[25px] w-[90%] mt-6 text-[#403F3D] font-medium">
            Marriage is one of Islam’s greatest blessings. It strengthens families, builds the Ummah, and fulfils half of one’s Deen. Yet today, many young Muslims are left to search alone. Parents feel powerless in a digital world of unsuitable apps and un-Islamic pathways, while masjids, once central to community life, have been sidelined.
        </p>
        <p data-aos="fade-right" className="montserrat tracking-tight text-[16px] lg:text-[18px] mx-auto md:mx-0 text-justify leading-[26px] w-[90%] mt-6 text-[#403F3D] font-medium">
             MyWali was created to change this. Rooted in Islamic values, it restores dignity to the marriage process by placing guardians at the centre, protecting seekers, and reconnecting masjids with families in guiding the marriage journey. 
        </p>
        
      </div>
      <div className="w-full lg:w-[33%] mt-10 lg:mt-0 flex items-center">
        <img data-aos="fade-left" className="w-[70%] md:w-[50%] lg:w-[100%]  mx-auto lg:mx-0" src={featuresImage2} alt="featursImage2" />
      </div>
    </div>
    </div>
  )
}

export default MasjidFeatures