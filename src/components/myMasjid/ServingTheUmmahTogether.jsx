import React from 'react'
import { servingTheUmmahImage1, featuresImage2, myWaliFeaturesRightImage } from "../../assets/images/index.js"; 
function ServingTheUmmahTogether() {
  return (
    <div className="bg-[#fafafa]">
    <div className="flex lg:flex-row-reverse gap-10 flex-col px-5 md:px-20 lg:px-10 xl:px-24 py-8 md:py-12 sm:py-0 lg:py-16 max-w-[1600px] mx-auto overflow-hidden  "> 
      <div data-aos="fade-left" className="w-full lg:w-[100%] ">
        {/* <img data-aos="fade-right" className="sm:h-[72px] mx-auto md:mx-0" src={communityFeaturesImage1} alt="" /> */}
        <h1 className="mt-12 text-[28px] md:text-[32px] text-center md:text-left lg:text-[46px] dm-serif-display lg:w-[600px] leading-[30px] lg:leading-[45px] sm:mt-10">
            A Platform That Serves the Whole Ummah 
        </h1>
        
        <p data-aos="" className="montserrat tracking-tight text-[16px] lg:text-[18px] px-5 md:px-0 mx-auto md:mx-0 text-justify leading-[25px] w-[100%] mt-6 text-[#403F3D] font-medium">
        MyWali is more than a platform, it is a movement to restore dignity, trust, and faith in the institution of marriage. It empowers seekers to move forward with their families by their side, enables parents to guide with clarity and confidence, and equips masjids to support their communities without administrative strain. 
        </p>
        <p data-aos="" className="montserrat tracking-tight text-[16px] lg:text-[18px] px-5 md:px-0 mx-auto md:mx-0 text-justify leading-[25px] w-[100%] mt-6 text-[#403F3D] font-medium">
        Through the dedicated MyMasjid  feature, mosques can once again embrace their traditional role as trusted guides, offering a free, Sharia-compliant space to support families seeking marriage, share knowledge, and foster meaningful community engagement. 
        </p>
        <p data-aos="" className="montserrat tracking-tight text-[16px] lg:text-[18px] px-5 md:px-0 mx-auto md:mx-0 text-justify leading-[25px] w-[100%] mt-6 text-[#403F3D] font-medium">
        Together, we revive tradition, strengthen families, and re-establish the masjid as a trusted pillar at the heart of Muslim community life. 
        </p>
        
      </div>
      <div className="w-full lg:w-[60%] md:mt-10 lg:mt-0 flex items-center">
        <img data-aos="fade-right" className="w-[70%] md:w-[50%] lg:w-[100%]  mx-auto lg:mx-0" src={servingTheUmmahImage1} alt="featursImage2" />
      </div>
    </div>
    </div>
  )
}

export default ServingTheUmmahTogether