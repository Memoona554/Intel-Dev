import React from 'react'
import Header from '../components/Header'
import ServiceHeroSection from '../components/services/ServiceHeroSection'
import Services from '../components/services/ServiceSection'
import CompanyLogo from '../components/services/CompanyLogo'
import ProjectSection from '../components/services/ServiceProjectSection'
import ITStaffAugmentationSection from '../components/services/ITStaffAugmentation'
import FeatureList from '../components/services/InfoSection'
import ServiceFAQ from '../components/services/ServiceFAQ'
import BookConsultation from '../components/Contact'
import Footer from '../components/Footer'

function Service() {
  
  return (
    <>
    <Header/>
    <ServiceHeroSection/>
    <Services/>
    <CompanyLogo/>
    <ProjectSection/>
    <ITStaffAugmentationSection/>
    <FeatureList/>
    <ServiceFAQ/>
    <BookConsultation/>
    <Footer/>
    </>
  )
}

export default Service