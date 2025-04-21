import React from 'react'
import Header from '../components/Header'
import NodeDeveloperHeroSection from '../components/staffAugmentation/NodeDeveloperHeroSection'
import ExpertiseSection from '../components/staffAugmentation/ExpertiesSection'
import NodeJsServices from '../components/staffAugmentation/NodeJsServices'
import NodeJsHiringSteps from '../components/staffAugmentation/NodeJsHiringSteps'
import NodeJsExpertise from '../components/staffAugmentation/NodeJsExperties'
import NodeJsFAQ from '../components/staffAugmentation/NodeJsFAQ'
import BookConsultation from '../components/Contact'
import Footer from '../components/Footer'
function NodeDeveloper() {
  return (
    <>
    <Header/>
    <NodeDeveloperHeroSection/>
    <ExpertiseSection/>
    <NodeJsServices/>
    <NodeJsHiringSteps/>
    <NodeJsExpertise/>
    <NodeJsFAQ/>
    <BookConsultation/>
    <Footer/>
    </>
  )
}

export default NodeDeveloper