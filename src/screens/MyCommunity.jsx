import React from 'react'
import Hero from '../components/myCommunity/CommunityHero'
import CommunityFeatures from '../components/myCommunity/CommunityFeatures'
import OurCommunity from '../components/myCommunity/OurCommunity'
import Discover from '../components/myCommunity/Discover'
import HowToJoin from '../components/myCommunity/HowToJoin'
import JoinNow from '../components/myCommunity/JoinNow'
import CommunityFaq from '../components/myCommunity/CommunityFaq'
function MyCommunity() {
  return (
    <div>
        <Hero />
        <CommunityFeatures />
        <OurCommunity />
        <Discover />
        <HowToJoin />
        <JoinNow />
        <CommunityFaq />
    </div>
  )
}

export default MyCommunity