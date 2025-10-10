import React from 'react'
import { howItWorksImage1, howItWorksImage2, howItWorksImage3 } from '../../assets/images/index.js'
function HowItWorks() {
  return (
    <div className='bg-[#fafafa]'>
    <div className='py-8 sm:py-16 md:py-24 px-5 sm:px-10 lg:px-16 max-w-[1600px] mx-auto overflow-hidden'>
        <div>
            <h1 data-aos="fade-down" className='dm-serif-display text-[43px] leading-[45px] font-medium text-center'>How It Works</h1>
            <p data-aos="fade-up" className='montserrat font-medium text-[13px] tracking-tight mx-auto lg:text-[18px] text-center leading-[25px] px-5 md:px-0 lg:w-[72%] 2xl:w-[60%] mt-4 text-[#403F3D]'>At MyWali, we understand that no two journeys to marriage are the same. That’s why our process is flexible and faith-centered, giving seekers and guardians the freedom to decide how they’d like to be involved, together, or at their own pace</p>
        </div>
        <div className="mt-10 md:mt-16 w-full flex  justify-center flex-wrap gap-10 px-5 sm:px-12">
            {/* Section 1: Seeker & Wali side by side */}
            <div data-aos="fade-down" className="rounded-lg  mx-auto w-full md:w-[45%] lg:w-[30%]">
                <div className='flex flex-col md:flex-row items-center mb-1'>
                    <div className="pt-5 flex-shrink-0">
                        <img src={howItWorksImage1} alt="Seeker & Wali side by side" className="w-[89px]" />
                    </div>
                    <div className="text-center md:text-left w-full md:w-auto">
                        <h6 className='dm-serif-display text-[26px] leading-[25px] w-full md:w-[70%] font-medium text-[#000000] tracking-tight'>Seeker & Wali side by side</h6>
                    </div>
                </div>
                <p className='montserrat text-[#403F3D] text-md font-medium leading-5 px-2 text-center md:text-left mt-5 md:mt-0 2xl:w-[80%]'>Seeker and Wali explore matches together, sharing insights and making decisions at every step.</p>
            </div>

           
            <div data-aos="fade-up" className="rounded-lg  w-full md:w-[45%] lg:w-[30%]">
                <div className='flex flex-col md:flex-row items-center mb-1'>
                    <div className="pt-5 flex-shrink-0">
                        <img src={howItWorksImage2} alt="Seeker led, Wali Guided" className="w-[89px]" />
                    </div>
                    <div className="text-center md:text-left w-full md:w-auto">
                        <h6 className='dm-serif-display text-[26px] leading-[25px] w-full md:w-[60%] font-medium text-[#000000] tracking-tight'>Seeker led, Wali Guided</h6>
                    </div>
                </div>
                <p className='montserrat text-[#000000] text-md font-medium w-[100%] leading-5 px-5 text-center md:text-left mt-5 md:mt-0 2xl:w-[80%]'>The seeker explores matches, with full transparency and guardian support.</p>
            </div>

            
            <div data-aos="fade-down" className="rounded-lg  mx-auto w-full md:w-[45%] lg:w-[30%]">
                <div className='flex flex-col md:flex-row items-center mb-1'>
                    <div className="pt-5 flex-shrink-0">
                        <img src={howItWorksImage3} alt="Wali led" className="w-[89px]" />
                    </div>
                    <div className="text-center md:text-left w-full md:w-auto">
                        <h6 className='dm-serif-display text-[26px] leading-[25px] w-full md:w-auto font-medium text-[#000000] tracking-tight'>Wali led
</h6>
                    </div>
                </div>
                <p className='montserrat text-[#403F3D] text-md font-medium leading-5 px-1 text-center md:text-left mt-5 md:mt-0 2xl:w-[100%]'>The guardian leads the process, always guided by the seeker’s values and preferences</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default HowItWorks