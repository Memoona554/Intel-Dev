import React from 'react'
import Header from '../components/Header'
import VueDeveloperHeroSection from '../components/staffAugmentation/VueDeveloperHeroSection'
import VueExpertiseSection from '../components/staffAugmentation/VueExtpertiesSection'
import VueDeveloperServices from '../components/staffAugmentation/VueDeveloperServices'
import CompanyHighlights from '../components/staffAugmentation/VueCompanyHighLights'
import VueHiringSection from '../components/staffAugmentation/VueHiringSection'
import VueFAQ from '../components/staffAugmentation/VueFAQ'
import BookConsultation from '../components/Contact'
import Footer from '../components/Footer'
function VueDeveloper() {
  return (
    <>
    <Header/>
    <VueDeveloperHeroSection/>
    <VueExpertiseSection/>
    <VueDeveloperServices/>
    <CompanyHighlights/>
    <VueHiringSection/>
    <VueFAQ/>
    <BookConsultation/>
    <Footer/>
    </>
  )
}

export default VueDeveloper