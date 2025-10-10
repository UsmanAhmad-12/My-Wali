import React,{useEffect} from 'react'
import MasjidHero from '../components/myMasjid/MasjidHero';
import MasjidFeatures from '../components/myMasjid/MasjidFeatures';
import ServingTheUmmahTogether from '../components/myMasjid/ServingTheUmmahTogether';
import WhatIsMyMasjid from '../components/myMasjid/WhatIsMyMasjid';
import MasjidFaq from '../components/myMasjid/MasjidFaq';
import Register from '../components/myMasjid/Register';
import Participate from '../components/myMasjid/Participate';
import GetTheMasjidApp from '../components/myMasjid/GetTheMasjidApp';
import Footer from '../components/navbar-footer/Footer';
import { myMasjidFooterBg } from '../assets/images';
import TrustedCommunity from '../components/myMasjid/TrustedCommunity';
// import { useAOS } from '../hooks/useAOS';
function MyMasjid() {
  // Use custom hook with 200ms delay
  // useAOS(200);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
        <MasjidHero />
        <MasjidFeatures />
        <ServingTheUmmahTogether />
        <TrustedCommunity/>
        <WhatIsMyMasjid />
        <Register />
        <Participate />
        <GetTheMasjidApp />
        <MasjidFaq />
        <Footer image={myMasjidFooterBg}/>
    </div>
  )
}

export default MyMasjid