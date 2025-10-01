import React from 'react'
import { ourCommunityImage1 } from '../../assets/images/index.js'
function OurCommunity() {
  return (
    <div className='bg-[#fafafa]'>
    <div className=' pb-10 overflow-hidden max-w-[1600px] mx-auto'>
    <div className="flex w-full flex-col-reverse lg:flex-row px-5 sm:px-10 lg:px-12 xl:px-20 lg:py-8  max-w-[1600px] mx-auto ">
        <div data-aos="fade-right" className='w-full flex justify-center lg:w-[40%] py-16 lg:py-0'>
            <img className='w-[70%] sm:w-[50%] lg:w-[95%]' src={ourCommunityImage1} alt="" />
        </div>
        <div data-aos="fade-left" className='flex flex-col justify-center items-center px-5 md:px-0 lg:items-start w-full pt-5 lg:w-[60%] lg:pl-16'>
            <h1 className='dm-serif-display text-[rgb(90,70,133)] text-[44px] text-center lg:text-left'>MyCommunity</h1>
            <p className='dm-serif-display leading-7 text-[18px] sm:text-[24px] md:text-[32px] sm:w-[93%] pt-4 2xl:w-[75%] sm:leading-10  text-center lg:text-left'>A trusted space where Muslims can connect, support, and uplift one another - always with faith at the center. </p>
        </div>
    </div>
    </div>
    </div>
  )
}

export default OurCommunity