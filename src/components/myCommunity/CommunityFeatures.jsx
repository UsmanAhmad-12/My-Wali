import React from 'react'
import { communityFeaturesImage1, featuresImage2 } from "../../assets/images/index.js";
function CommunityFeatures() {
  return (
    <div className="bg-[#fafafa]">
    <div className="flex lg:flex-row flex-col px-5 md:px-20 lg:px-10 xl:px-28 py-12 md:py-24 max-w-[1600px] mx-auto overflow-hidden  "> 
      <div className="w-full lg:w-[90%] ">
        <img data-aos="fade-right" className="sm:h-[72px] mx-auto md:mx-0" src={communityFeaturesImage1} alt="" />
        <h1 data-aos="fade-right" className="mt-12 text-[28px] md:text-[32px] text-center md:text-left lg:text-[46px] dm-serif-display lg:w-[523px] leading-[30px] lg:leading-[45px] sm:mt-10">
            What is MyCommunity? 
        </h1>
        <p data-aos="fade-right" className="montserrat tracking-tight text-[16px] mx-auto md:mx-0 lg:text-[21px] text-left leading-[25px] w-[90%] mt-6 text-[#403F3D] font-bold pt-2 sm:pt-0">
             MyCommunity is a free and inclusive space for all Muslims, whether or not they are actively seeking marriage.
        </p>
        <p data-aos="fade-right" className="montserrat tracking-tight text-[16px] lg:text-[18px] mx-auto md:mx-0 text-justify leading-[25px] w-[90%] mt-6 text-[#403F3D] font-medium">
            Designed to uplift the Muslim community, MyCommunity sparks authentic, faith-aligned conversations through Q&A, Islamic discussions, dedicated groups, events, and the sharing of personal experiences.
        </p>
        <p data-aos="fade-right" className="montserrat tracking-tight text-[16px] lg:text-[18px] mx-auto md:mx-0 text-justify leading-[25px] w-[90%] mt-6 text-[#403F3D] font-medium">
            In this supportive space, users can ask questions, seek advice & guidance, and engage in meaningful dialogue on Islam, relationships, marriage, family values, and more, all within a respectful environment firmly grounded in Islamic principles. 
        </p>
        
      </div>
      <div className="w-full lg:w-[33%] mt-10 lg:mt-0 flex items-center">
        <img data-aos="fade-left" className="md:w-[50%] lg:w-[100%]  mx-auto lg:mx-0" src={featuresImage2} alt="featursImage2" />
      </div>
    </div>
    </div>
  )
}

export default CommunityFeatures