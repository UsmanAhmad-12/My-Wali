import { useEffect } from 'react'
import React from 'react'
import GetInTouch from '../components/GetInTouch/GetInTouch'
import LetsTalk from '../components/GetInTouch/LetsTalk'
// import { useAOS } from '../hooks/useAOS'    
    
function ContactUs() {
  // useAOS(200); // Use custom hook with 200ms delay
    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>
      <GetInTouch />
      <LetsTalk />
    </div>
  )
}

export default ContactUs