import React, { useEffect } from 'react'

import RegisterTheMasjid from '../components/Register/RegisterTheMasjid'
import RegisterHero from '../components/Register/RegisterHero'

function RegisterMasjid() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    
    <div>
        <RegisterHero/>
        <RegisterTheMasjid/>
    </div>
  )
}

export default RegisterMasjid