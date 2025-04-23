import React from 'react'
import Header from '../components/Header'
import PythonDeveloperHeroSection from '../components/staffAugmentation/PythonDeveloperHeroSection'
import PythonExpertiseSection from '../components/staffAugmentation/PythonExpertiesSection'
import WhyChooseIntelDevs from '../components/staffAugmentation/WhyChoseIntelDev'
import HiringModels from '../components/staffAugmentation/PythonHiringModel'
import PythonFAQ from '../components/staffAugmentation/PythonFAQ'
import BookConsultation from '../components/Contact'
import Footer from '../components/Footer'
function PythonDeveloper() {
  return (
    <>
    <Header/>
    <PythonDeveloperHeroSection/>
    <PythonExpertiseSection/>
    <WhyChooseIntelDevs/>
    <HiringModels/>
    <PythonFAQ/>
    <BookConsultation/>
    <Footer/>
    </>
  )
}

export default PythonDeveloper