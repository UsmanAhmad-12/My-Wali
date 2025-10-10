import React, { useEffect } from 'react'
import Hero from '../components/myCommunity/CommunityHero'
import CommunityFeatures from '../components/myCommunity/CommunityFeatures'
import OurCommunity from '../components/myCommunity/OurCommunity'
import Discover from '../components/myCommunity/Discover'
import HowToJoin from '../components/myCommunity/HowToJoin'
import JoinNow from '../components/myCommunity/JoinNow'
import CommunityFaq from '../components/myCommunity/CommunityFaq'
import Footer from '../components/navbar-footer/Footer'
import { myCommunityFooterBg } from '../assets/images'
// import { useAOS } from '../hooks/useAOS'
function MyCommunity() {
   // Use custom hook with 200ms delay
    // useAOS(200);
  
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
        <Hero />
        <CommunityFeatures />
        <OurCommunity />
        <Discover />
        <HowToJoin />
        <JoinNow />
        <CommunityFaq />
        <Footer image={myCommunityFooterBg}/>
    </div>
  )
}

export default MyCommunity