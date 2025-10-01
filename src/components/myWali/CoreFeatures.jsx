import React from 'react'
import { coreFeaturesImage1 } from '../../assets/images/index.js'
import { coreFeaturesImage2, coreFeaturesImage3, coreFeaturesImage4, coreFeaturesImage5, coreFeaturesImage6, ellipse} from '../../assets/images/index.js'
function CoreFeatures() {
  return (
    <div className='bg-[#fafafa] relative'>
    <div className='py-6 px-4 sm:py-8 sm:px-6 md:py-20 md:px-10 max-w-[1600px] mx-auto overflow-hidden'>
        
         {/* Heading Section */}
        <div className='flex flex-col items-center justify-center'>
            <img data-aos="fade-down" className='h-[60px] sm:h-[80px] md:h-[100px]' src={coreFeaturesImage1} alt="MyWali — Features" />
            <h1 data-aos="fade-up" className='dm-serif-display text-[28px] sm:text-[40px] md:text-[55px] font-medium text-center mt-4 sm:mt-5 md:mt-6'><span className='text-[#5A4685]'>MyWali</span> <span className='text-[#000000]'>— </span> Features</h1>
        </div>



        {/* Ellipse Section */}
            <div className='absolute left-0 hidden sm:block z-0'>
               <img className='w-[80px] sm:w-[120px] md:w-[150px] opacity-30' src={ellipse} alt="elipse" />
           </div>
            <div className='absolute top-[200px] sm:top-[300px] md:top-[380px] right-0 rotate-180 hidden sm:block z-0'>
               <img className='w-[80px] sm:w-[120px] md:w-[150px] opacity-30' src={ellipse} alt="elipse" />
            </div>
            <div className='absolute top-[400px] sm:top-[600px] md:top-[800px] left-0 hidden sm:block z-0'>
               <img className='w-[80px] sm:w-[120px] md:w-[150px] opacity-30' src={ellipse} alt="elipse" />
           </div>
           <div className='absolute top-[500px] sm:top-[800px] md:top-[1000px] right-0 rotate-180 hidden sm:block z-0'>
               <img className='w-[80px] sm:w-[120px] md:w-[150px] opacity-30' src={ellipse} alt="elipse" />
            </div>

        {/* Cards Section */}
        <div className='px-4 sm:px-8 md:px-7 lg:px-20 xl:px-32 mt-10 sm:mt-16 md:mt-20 relative z-10'>
            <div className=''>
                {/* first card */}
                <div data-aos="fade-right" className='flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 items-center mt-6 sm:mt-8 md:mt-10'>
                    <div className='flex-shrink-0 relative z-10'>
                        <img className='h-[80px] sm:h-[100px] md:h-[120px]' src={coreFeaturesImage2} alt="coreFeatures" />
                    </div>
                    <div className='text-center sm:text-left'>
                        <h5 className='dm-serif-display text-xl sm:text-2xl md:text-3xl font-medium'>Faith-Aligned Filters</h5>
                        <p className='montserrat w-full sm:w-[90%] md:w-[55%] lg:w-[70%] text-[#363533] font-medium tracking-tight mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg leading-5 sm:leading-6'>Search with sincerity using filters designed to reflect your faith, values, and preferences.</p>
                    </div>
                </div>
                {/* second card */}
                <div data-aos="fade-left" className='flex flex-col sm:flex-row-reverse gap-4 sm:gap-6 md:gap-8 items-center mt-8  md:mt-10'>
                    <div className='flex-shrink-0 relative z-10'>
                        <img className='h-[80px] sm:h-[100px] md:h-[120px]' src={coreFeaturesImage3} alt="coreFeatures" />
                    </div>
                     <div className='text-center sm:text-right'>
                         <h5 className='dm-serif-display w-full sm:w-[90%] md:w-[60%] sm:ml-auto text-xl sm:text-2xl md:text-3xl font-medium'>Transparent Communication</h5>
                         <p className='montserrat w-full sm:w-[90%] md:w-[60%] lg:w-[75%] sm:ml-auto text-[#363533] font-medium tracking-tighter mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg leading-5 sm:leading-6'>All connections and introductory messages are visible to both seekers & guardians. For seekers to begin a private chat, there must first be a post in the "group chat" initiated by either the guardian or seeker—ensuring every interaction starts with transparency and remains rooted in Islamic values.</p>
                     </div>
                </div>
                {/* third card */}
                <div data-aos="fade-right" className='flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 items-center mt-12 sm:mt-16 md:mt-20'>
                    <div className='flex-shrink-0 relative z-10'>
                        <img className='w-[80px] sm:w-[100px] md:w-[120px]' src={coreFeaturesImage4} alt="coreFeatures" />
                    </div>
                    <div className='text-center sm:text-left'>
                        <h5 className='dm-serif-display text-xl sm:text-2xl md:text-3xl font-medium'>Guardian-Verified Profiles </h5>
                        <p className='montserrat w-full sm:w-[90%] md:w-[60%] lg:w-[75%] text-[#363533] font-medium tracking-tight mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg leading-5 sm:leading-6'>Profiles of seekers validated by guardians display a Verified badge, giving Guardians / Seekers added reassurance. </p>
                    </div>
                </div>
                {/* fourth card */}
                <div data-aos="fade-left" className='flex flex-col sm:flex-row-reverse gap-4 sm:gap-6 md:gap-8 items-center mt-12 sm:mt-16 md:mt-20'>
                    <div className='flex-shrink-0 relative z-10'>
                        <img className='h-[80px] sm:h-[100px] md:h-[120px]' src={coreFeaturesImage5} alt="coreFeatures" />
                    </div>
                     <div className='text-center sm:text-right'>
                         <h5 className='dm-serif-display w-full sm:w-[90%] md:w-[60%] sm:ml-auto text-xl sm:text-2xl md:text-3xl font-medium'>Photo Privacy</h5>
                         <p className='montserrat w-full sm:w-[90%] md:w-[60%] lg:w-[75%] sm:ml-auto text-[#363533] font-medium tracking-tighter mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg leading-5 sm:leading-6'>Photos remain private by default — blurred or viewable just once & screenshots are prohibited.  You decide when & with whom to share, preserving dignity & control at every step.</p>
                     </div>
                </div>
                {/* fifth card */}
                <div data-aos="fade-right" className='flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 items-center mt-12 sm:mt-16 md:mt-20'>
                    <div className='flex-shrink-0 relative z-10'>
                        <img className='w-[100px] sm:w-[130px]' src={coreFeaturesImage6} alt="coreFeatures" />
                    </div>
                    <div className='text-center sm:text-left'> 
                        <h5 className='dm-serif-display text-xl sm:text-2xl md:text-3xl font-medium'>Masjid Partnerships</h5>
                        <p className='montserrat w-full sm:w-[90%] md:w-[55%] lg:w-[70%] text-[#363533] font-medium tracking-tight mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg leading-5 sm:leading-6'>Masjids offering marriage services through MyWali can connect directly with you, providing trusted guidance & community-backed matches.</p>
                    </div>
                </div>
            </div>

            
        </div>
    </div>
    </div>
  )
}

export default CoreFeatures