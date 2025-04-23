import React from 'react'
import Header from '../components/Header'
import AngularDeveloperHeroSection from '../components/staffAugmentation/AngularDeveloperHeroSection'
import DevelopmentServicesSection from '../components/staffAugmentation/AngularDevelopmentServices'
import BookConsultation from '../components/Contact'
import Footer from '../components/Footer'
import AngularFAQ from '../components/staffAugmentation/AngularFaq'
function AngularDeveloper() {
  return (
    <>
    <Header/>
    <AngularDeveloperHeroSection/>
    <DevelopmentServicesSection/>
    <AngularFAQ/>
    <BookConsultation/>
    <Footer/>
    </>
  )
}

export default AngularDeveloper