import React from 'react'
import Header from '../components/Header'
import ReactDeveloperHeroSection from '../components/staffAugmentation/ReactDeveloperHeroSection'
import ExpertiseSection from '../components/staffAugmentation/ExpertiesSection'
import ReactServicesSection from '../components/staffAugmentation/ReactServicesSection'
import ToolsAndTechnologies from '../components/staffAugmentation/Tools&Technologies'
import HireReactDevelopers from '../components/staffAugmentation/HireReactDeveloper'
import ReactFAQ from '../components/staffAugmentation/ReactFAQ'
import BookConsultation from '../components/Contact'
import Footer from '../components/Footer'
function ReactDeveloper() {
  return (
    <>
    <Header/>
    <ReactDeveloperHeroSection/>
    <ExpertiseSection/>
    <ReactServicesSection/>
    <ToolsAndTechnologies/>
    <HireReactDevelopers/>
    <ReactFAQ/>
    <BookConsultation/>
    <Footer/>
    </>
  )
}

export default ReactDeveloper