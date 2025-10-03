import React,{useEffect} from 'react'
import MasjidHero from '../components/myMasjid/MasjidHero';
import MasjidFeatures from '../components/myMasjid/MasjidFeatures';
import ServingTheUmmahTogether from '../components/myMasjid/ServingTheUmmahTogether';
import WhatIsMyMasjid from '../components/myMasjid/WhatIsMyMasjid';
import MasjidFaq from '../components/myMasjid/MasjidFaq';
import Register from '../components/myMasjid/Register';
import Participate from '../components/myMasjid/Participate';
import GetTheMasjidApp from '../components/myMasjid/GetTheMasjidApp';
function MyMasjid() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
        <MasjidHero />
        <MasjidFeatures />
        <ServingTheUmmahTogether />
        <WhatIsMyMasjid />
        <Register />
        <Participate />
        <GetTheMasjidApp />
        <MasjidFaq />
    </div>
  )
}

export default MyMasjid