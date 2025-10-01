import React, { useEffect } from 'react'
import Hero from '../components/MyWali/Hero'
import Features from '../components/MyWali/Features'
import WhyMyWali from '../components/MyWali/WhyMyWali'
import HowItWorks from '../components/MyWali/HowItWorks'
import Flow from '../components/myWali/Flow'
import CoreFeatures from '../components/myWali/CoreFeatures'
import Subscription from '../components/myWali/Subscription'
import GetTheApp from '../components/myWali/GetTheApp'
import Faq from '../components/myWali/Faq'
export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div>
            <Hero />
            <Features />
            <WhyMyWali />
            <HowItWorks />
            <Flow />
            <CoreFeatures />
            <Subscription />
            <GetTheApp />
            <Faq />
        </div>
    )
}
