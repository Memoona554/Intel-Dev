import React from 'react'
import Header from '../components/Header'
import MeanDeveloperHeroSection from '../components/staffAugmentation/MeanDeveloperHeroSection'
import MeanStackServices from '../components/staffAugmentation/MeanStackServices'
import MeanFAQ from '../components/staffAugmentation/MeanFAQ'
import BookConsultation from '../components/Contact'
import Footer from '../components/Footer'
function MeanDeveloper() {
  return (
    <>
    <Header/>
    <MeanDeveloperHeroSection/>
    <MeanStackServices/>
    <MeanFAQ/>
    <BookConsultation/>
    <Footer/>
    </>
  )
}

export default MeanDeveloper