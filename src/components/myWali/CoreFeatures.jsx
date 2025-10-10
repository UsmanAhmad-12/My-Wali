import React from 'react'
import { coreFeaturesImage1 } from '../../assets/images/index.js'
import { coreFeaturesImage2, coreFeaturesImage3, coreFeaturesImage4, coreFeaturesImage5, coreFeaturesImage6,coreFeaturesImage7,coreFeaturesImage8, ellipse} from '../../assets/images/index.js'
import LeftRightSections from '../LeftRightSections.jsx'
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
            {/* <div className='absolute left-0 hidden sm:block z-0'>
               <img className='w-[80px] sm:w-[120px] md:w-[150px] opacity-30' src={ellipse} alt="elipse" />
           </div> */}
            <div className='absolute top-[200px] sm:top-[300px] md:top-[280px] right-0 rotate-180 hidden sm:block z-0'>
               <img className='w-[80px] sm:w-[120px] md:w-[130px] opacity-30' src={ellipse} alt="elipse" />
            </div>
            <div className='absolute top-[400px] sm:top-[600px] md:top-[800px] left-0 hidden sm:block z-0'>
               <img className='w-[80px] sm:w-[120px] md:w-[150px] opacity-30' src={ellipse} alt="elipse" />
           </div>
           <div className='absolute top-[500px] sm:top-[800px] md:top-[1500px] right-0 rotate-180 hidden sm:block z-0'>
               <img className='w-[80px] sm:w-[120px] md:w-[150px] opacity-30' src={ellipse} alt="elipse" />
            </div>

        {/* Cards Section */}
        <div className='px-4 sm:px-8 md:px-7 lg:px-20 xl:px-32 mt-10 sm:mt-16 md:mt-20 relative z-10'>
            <div>
                {leftRightData?.map((items,index)=>(

                <LeftRightSections icon={items.icon} heading={items.heading} para={items.para} index={index}/>
                ))}
            </div>
            {/* <div className=''>
                <div data-aos="fade-left" className='flex flex-col mx-auto md:mx-0 md:flex-row-reverse gap-4 sm:gap-6 md:gap-8  mt-8  md:mt-10 md:w-[67%] md:mr-0 md:ml-auto'>
                    <div className='flex-shrink-0 flex justify-center relative z-10'>
                        <img className='h-[90px] sm:h-[100px] md:h-[120px]' src={coreFeaturesImage3} alt="coreFeatures" />
                    </div>
                     <div className='text-center md:text-start'>
                         <h5 className='dm-serif-display w-full  text-xl sm:text-2xl md:text-3xl font-medium'>Build Your Presence, Earn Trust</h5>
                         <p className='montserrat w-full  text-[#363533] font-medium tracking-tighter mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg  md:text-left !leading-5'>By asking questions, offering guidance, or sharing experiences in MyCommunity, you actively shape your profile and reputation. This creates a more authentic, holistic picture of who you are, helping other MyWali members understand your character and values, so connections are based on real insight, trust, and authenticity.</p>
                     </div>
                </div>
                <div data-aos="fade-left" className='flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8  mt-8  md:mt-10 w-[67%]'>
                    <div className='flex-shrink-0 relative z-10'>
                        <img className='h-[80px] sm:h-[100px] md:h-[120px]' src={coreFeaturesImage2} alt="coreFeatures" />
                    </div>
                     <div className='text-center sm:text-right '>
                         <h5 className='dm-serif-display w-full text-start text-xl sm:text-2xl md:text-3xl font-medium'>Faith-Aligned Filters</h5>
                         <p className='montserrat w-full  text-[#363533] font-medium tracking-tighter mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg  text-left !leading-5'>Search with sincerity using filters designed to reflect your faith, values, and preferences.</p>
                     </div>
                </div>
                <div data-aos="fade-left" className='flex flex-col mx-auto md:mx-0 md:flex-row-reverse gap-4 sm:gap-6 md:gap-8  mt-8  md:mt-10 md:w-[67%] md:mr-0 md:ml-auto'>
                    <div className='flex-shrink-0 relative z-10'>
                        <img className='h-[80px] sm:h-[100px] md:h-[120px]' src={coreFeaturesImage3} alt="coreFeatures" />
                    </div>
                     <div className='text-center md:text-start '>
                         <h5 className='dm-serif-display w-full  text-xl sm:text-2xl md:text-3xl font-medium'>Transparent Communication</h5>
                         <p className='montserrat w-full  text-[#363533] font-medium tracking-tighter mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg  text-left !leading-5'>At MyWali, every connection begins with openness and respect. Seekers and guardians can view matches and introductions together, ensuring transparency. Private chats open only after a shared group introduction , creating a safe, faith-aligned space where real connections grow with confidence.</p>
                     </div>
                </div>
                <div data-aos="fade-left" className='flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8  mt-8  md:mt-10 w-[67%]'>
                    <div className='flex-shrink-0 relative z-10'>
                        <img className='h-[80px] sm:h-[100px] md:h-[120px]' src={coreFeaturesImage4} alt="coreFeatures" />
                    </div>
                     <div className='text-center sm:text-right '>
                         <h5 className='dm-serif-display w-full text-start text-xl sm:text-2xl md:text-3xl font-medium'>Guardian-Verified Profiles </h5>
                         <p className='montserrat w-full  text-[#363533] font-medium tracking-tighter mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg  text-left !leading-5'>Guardian-Verified badges give you the confidence that every seeker’s details are confirmed by those who know them best.</p>
                     </div>
                </div>
                <div data-aos="fade-left" className='flex flex-col sm:flex-row-reverse gap-4 sm:gap-6 md:gap-8  mt-8  md:mt-10 w-[67%] mr-0 ml-auto'>
                    <div className='flex-shrink-0 relative z-10'>
                        <img className='h-[80px] sm:h-[100px] md:h-[120px]' src={coreFeaturesImage5} alt="coreFeatures" />
                    </div>
                     <div className='text-center sm:text-right '>
                         <h5 className='dm-serif-display w-full text-start text-xl sm:text-2xl md:text-3xl font-medium'>Photo Privacy</h5>
                         <p className='montserrat w-full  text-[#363533] font-medium tracking-tighter mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg  text-left !leading-5'>Photos remain private by default, blurred or viewable just once  with screenshots prohibited.  You decide when & with whom to share, preserving dignity & control at every step</p>
                     </div>
                </div>
                <div data-aos="fade-left" className='flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8  mt-8  md:mt-10 w-[67%]'>
                    <div className='flex-shrink-0 relative z-10'>
                        <img className='h-[80px] sm:h-[100px] md:h-[120px]' src={coreFeaturesImage6} alt="coreFeatures" />
                    </div>
                     <div className='text-center sm:text-right '>
                         <h5 className='dm-serif-display w-full text-start text-xl sm:text-2xl md:text-3xl font-medium'>Masjid Partnerships</h5>
                         <p className='montserrat w-full  text-[#363533] font-medium tracking-tighter mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg  text-left !leading-5'>Masjids offering marriage services through MyWali can connect directly with you, providing trusted guidance & community-backed matches.</p>
                     </div>
                </div>
                <div data-aos="fade-left" className='flex flex-col sm:flex-row-reverse gap-4 sm:gap-6 md:gap-8  mt-8  md:mt-10 w-[67%] mr-0 ml-auto'>
                    <div className='flex-shrink-0 relative z-10'>
                        <img className='h-[80px] sm:h-[100px] md:h-[120px]' src={coreFeaturesImage3} alt="coreFeatures" />
                    </div>
                     <div className='text-center sm:text-right '>
                         <h5 className='dm-serif-display w-full text-start text-xl sm:text-2xl md:text-3xl font-medium'>Community Platform</h5>
                         <p className='montserrat w-full  text-[#363533] font-medium tracking-tighter mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg  text-left !leading-5'>MyCommunity: A free, inclusive space for Muslims to connect, share, and engage in meaningful, faith-based conversations.</p>
                     </div>
                </div>
            </div> */}

            
        </div>
    </div>
    </div>
  )
}

export default CoreFeatures

const leftRightData = [
    {
        icon : coreFeaturesImage7,
        heading : "Build Your Presence, Earn Trust",
        para : "By asking questions, offering guidance, or sharing experiences in MyCommunity, you actively shape your profile and reputation. This creates a more authentic, holistic picture of who you are, helping other MyWali members understand your character and values, so connections are based on real insight, trust, and authenticity."
    },
    {
        icon : coreFeaturesImage2,
        heading : "Faith-Aligned Filters",
        para : "Search with sincerity using filters designed to reflect your faith, values, and preferences."
    },
    {
        icon : coreFeaturesImage3,
        heading : "Transparent Communication",
        para : "At MyWali, every connection begins with openness and respect. Seekers and guardians can view matches and introductions together, ensuring transparency. Private chats open only after a shared group introduction , creating a safe, faith-aligned space where real connections grow with confidence."
    },
    {
        icon : coreFeaturesImage4,
        heading : "Guardian-Verified Profiles ",
        para : "Guardian-Verified badges give you the confidence that every seeker’s details are confirmed by those who know them best."
    },
    {
        icon : coreFeaturesImage5,
        heading : "Photo Privacy",
        para : "Photos remain private by default, blurred or viewable just once  with screenshots prohibited.  You decide when & with whom to share, preserving dignity & control at every step"
    },
    {
        icon : coreFeaturesImage6,
        heading : "Masjid Partnerships",
        para : "Masjids offering marriage services through MyWali can connect directly with you, providing trusted guidance & community-backed matches."
    },
    {
        icon : coreFeaturesImage8,
        heading : "Community Platform",
        para : "MyCommunity: A free, inclusive space for Muslims to connect, share, and engage in meaningful, faith-based conversations."
    },
]