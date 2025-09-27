import React from 'react'
import { howItWorksImage1, howItWorksImage2, howItWorksImage3 } from '../../assets/images/index.js'
function HowItWorks() {
  return (
    <div className='py-16 md:py-24 bg-[#fafafa] px-5 sm:px-10 lg:px-20'>
        <div>
            <h1 data-aos="fade-down" className='dm-serif-display text-[38px] leading-[45px] font-medium text-center'>How It Works</h1>
            <p data-aos="fade-up" className='montserrat font-medium text-[13px] tracking-tighter mx-auto lg:text-[18px] text-center leading-[25px] px-5 md:px-0 lg:w-[74%] mt-4 text-[#403F3D]'>At MyWali, we know that every marriage journey is unique. That’s why we’ve built three clear pathways, each rooted in faith, so guardians and seekers can choose the involvement that suits them best: </p>
        </div>
        <div className="mt-10 md:mt-16 w-full flex  justify-center flex-wrap gap-10 ">
            {/* Section 1: Seeker & Wali side by side */}
            <div data-aos="fade-down" className="rounded-lg  mx-auto w-full md:w-[45%] lg:w-[30%]">
                <div className='flex flex-col md:flex-row items-center mb-1'>
                    <div className="pt-5 flex-shrink-0">
                        <img src={howItWorksImage1} alt="Seeker & Wali side by side" className="w-24" />
                    </div>
                    <div className="text-center md:text-left w-full md:w-auto">
                        <h6 className='dm-serif-display text-[22px] leading-[25px] w-full md:w-[70%] font-medium text-[#000000] tracking-tight'>Seeker & Wali side by side</h6>
                    </div>
                </div>
                <p className='montserrat text-[#403F3D] text-md font-medium leading-5 px-2 text-center md:text-left mt-5 md:mt-0'>Seeker and guardian explore matches side by side, making decisions together at every step.</p>
            </div>

           
            <div data-aos="fade-up" className="rounded-lg  w-full md:w-[45%] lg:w-[30%]">
                <div className='flex flex-col md:flex-row items-center mb-1'>
                    <div className="pt-5 flex-shrink-0">
                        <img src={howItWorksImage2} alt="Seeker led, Wali Guided" className="w-24 " />
                    </div>
                    <div className="text-center md:text-left w-full md:w-auto">
                        <h6 className='dm-serif-display text-[22px] leading-[25px] w-full md:w-[60%] font-medium text-[#000000] tracking-tight'>Seeker led, Wali Guided</h6>
                    </div>
                </div>
                <p className='montserrat text-[#000000] text-md font-medium w-[100%] leading-5 px-5 text-center md:text-left mt-5 md:mt-0'>The seeker explores matches, with full transparency and guardian oversight.</p>
            </div>

            
            <div data-aos="fade-down" className="rounded-lg  mx-auto w-full md:w-[45%] lg:w-[30%]">
                <div className='flex flex-col md:flex-row items-center mb-1'>
                    <div className="pt-5 flex-shrink-0">
                        <img src={howItWorksImage3} alt="Wali led" className="w-24" />
                    </div>
                    <div className="text-center md:text-left w-full md:w-auto">
                        <h6 className='dm-serif-display text-[22px] leading-[25px] w-full md:w-auto font-medium text-[#000000] tracking-tight'>Wali led</h6>
                    </div>
                </div>
                <p className='montserrat text-[#403F3D] text-md font-medium leading-5 px-1 text-center md:text-left mt-5 md:mt-0'>The guardian takes the lead in finding a match, always guided by the seeker's values and preferences.</p>
            </div>
        </div>
    </div>
  )
}

export default HowItWorks