import React from 'react'
import Header from '../components/Header'
import MevnDeveloperHeroSection from '../components/staffAugmentation/MevnDeveloperHeroSection'
import MEVNDevelopmentServices from '../components/staffAugmentation/MevnServices'
import MevnFAQ from '../components/staffAugmentation/MevnFAQ'
import BookConsultation from '../components/Contact'
import Footer from '../components/Footer'
function MevnDeveloper() {
  return (
    <>
    <Header/>
    <MevnDeveloperHeroSection/>
    <MEVNDevelopmentServices/>
    <MevnFAQ/>
    <BookConsultation/>
    <Footer/>
    </>
  )
}

export default MevnDeveloper