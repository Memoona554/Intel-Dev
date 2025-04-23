import React from 'react'
import Header from '../components/Header'
import DevOPsHeroSection from '../components/staffAugmentation/DevOPsHeroSection'
import DevOpsServices from '../components/staffAugmentation/DevOpsServices'
import DevOpsFAQ from '../components/staffAugmentation/DevOpsFAQ'
import BookConsultation from '../components/Contact'
import Footer from '../components/Footer'
function DevsOpsEngineer() {
  return (
    <>
    <Header/>
    <DevOPsHeroSection/>
    <DevOpsServices/>
    <DevOpsFAQ/>
    <BookConsultation/>
    <Footer/>
    </>
  )
}

export default DevsOpsEngineer