import React from 'react'
import {discoverImage1, discoverImage2, discoverImage3, discoverImage4, discoverImage5 } from '../../assets/images/index.js'
function Discover() {
  return (
    <div className='bg-[#f4f1fa]'>
    <div className='py-12 lg:py-24 px-10 lg:px-16 xl:px-20 max-w-[1600px] mx-auto overflow-hidden'>
      <div data-aos="fade-down" className='flex justify-center'>
        <img className=' w-[80%] lg:w-[45%] object-cover' src={discoverImage1} alt="" />
      </div>
      <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1  gap-3 lg:gap-5  mt-20 '>
        <div data-aos="fade-down" data-aos-duration="1500" className='flex flex-col items-center  sm:pt-0'>
          <img className='w-[110px]' src={discoverImage2} alt="" />
          <h6 className='text-[22px] text-center dm-serif-display'>Community Engagement</h6>
          <p className='text-center montserrat text-[#403F3D] font-medium text-xs mt-3 w-[80%] lg:w-full '>Share ideas & posts, spark meaningful discussions, create polls, and create online groups.</p>
        </div>
        <div data-aos="fade-down" data-aos-duration="2000" className='flex flex-col items-center pt-12 sm:pt-0'>
          <img className='w-[110px]' src={discoverImage3} alt="" />
          <h6 className='text-[22px] text-center dm-serif-display'>Recognition Badges</h6>
          <p className='text-center montserrat mt-3 text-[#403F3D] font-medium text-xs md:w-[80%] xl:w-full'>Earn Bronze, Silver, Gold, and Platinum badges for positive contributions. Active, constructive voices are highlighted and celebrated enabling users to become recognised within MyCommunity </p>
        </div>
        <div data-aos="fade-down" data-aos-duration="2500" className='flex flex-col items-center pt-12 lg:pt-0'>
          <img className='w-[110px]' src={discoverImage4} alt="" />
          <h6 className='text-[22px] text-center dm-serif-display'> Seemless MyWali Integration</h6>
          <p className='text-center montserrat mt-3 text-[#403F3D] font-medium text-xs w-[80%] xl:w-full'>All MyWali users gain instant access to MyCommunity, creating a unified experience that connects marriage and community. </p>
        </div>
        <div data-aos="fade-down" data-aos-duration="3000" className='flex flex-col items-center pt-12 lg:pt-0'>
          <img className='w-[110px]' src={discoverImage5} alt="" />
          <h6 className='text-[22px] text-center dm-serif-display'>Organise Events</h6>
          <p className='text-center montserrat mt-3 text-[#403F3D] font-medium text-xs w-[80%] xl:w-full'>Enabling members and organizations to create, share, and manage events with ease, whether online or in person, helping the Muslim community stay connected and engaged.</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Discover