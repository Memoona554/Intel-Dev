import React from 'react'
import Header from '../components/Header'
import AndriodDeveloperHeroSection from '../components/staffAugmentation/AndriodDeveloperHeroSection'
import AndroidDevelopmentSection from '../components/staffAugmentation/AndriodDevelopmentSection'
import WhyHireAndroid from '../components/staffAugmentation/WhyHiredAndriod'
import AndriodFAQ from '../components/staffAugmentation/AndriodFAQ'
import BookConsultation from '../components/Contact'
import Footer from '../components/Footer'
function AndoridDeveloper() {
  return (
    <>
    <Header/>
    <AndriodDeveloperHeroSection/>
    <AndroidDevelopmentSection/>
    <WhyHireAndroid/>
    <AndriodFAQ/>
    <BookConsultation/>
    <Footer/>
    </>
  )
}

export default AndoridDeveloper