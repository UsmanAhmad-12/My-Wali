import React from 'react'
import { communityHeroVideo } from '../../assets/videos/index.js'
import { myCommunityHeroImage, playstore } from '../../assets/images/index.js'
import { BsApple } from "react-icons/bs"
function Hero() {
  return (
    <div>
            <div className='w-full py-20 sm:py-40 md:py-24  relative max-w-[1600px] mx-auto overflow-hidden'>
                
                <video 
                    src={communityHeroVideo} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className='absolute inset-0 w-full h-full object-cover z-0'
                />
                
                <div className='absolute inset-0 bg-black bg-opacity-40 z-10'></div>
                
                <div className='relative z-20'>
                    <div className='flex flex-col justify-center items-center'>
                        <img data-aos="fade-up" className='w-[400px] px-5 md:px-0' src={myCommunityHeroImage} alt="" />
                        <p data-aos="fade-up" className='mt-8 w-[90%] md:w-[80%] lg:w-[87%] 2xl:w-[63%] tracking-wide text-lg sm:text-xl  md:text-2xl  montserrat text-center  text-white'>My community helps Muslims stay connected through events, updates, local initiatives <span className='font-bold'>Engage, Share & Build MyCommunity</span>
                        </p>


                        <div className='flex flex-col sm:flex-row gap-6 md:gap-4 mt-10 md:mt-20'>

                            <a data-aos="fade-right"
                                href="#"
                                className='flex items-center bg-black text-white px-6 py-2 rounded-lg border-2 border-white hover:bg-gray-800 transition-colors duration-200'
                            >
                                <BsApple className='w-10 h-10 mr-3' />
                                <div className='text-left'>
                                    <div className='text-sm leading-none'>Download on the</div>
                                    <div className='text-2xl font-semibold leading-none'>App Store</div>
                                </div>
                            </a>


                            <a data-aos="fade-left"
                                href="#"
                                className='flex items-center bg-black text-white px-6 py-2 rounded-lg border-2 border-white hover:bg-gray-800 transition-colors duration-200'
                            >
                                <img src={playstore} alt="Google Play" className='w-10 h-10 mr-2' />
                                <div className='text-left'>
                                    <div className='text-sm leading-none'>GET IT ON</div>
                                    <div className='text-2xl font-semibold leading-none'>Google Play</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Hero