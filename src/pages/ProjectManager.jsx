import React from 'react'
import Header from '../components/Header'
import ProjectManagerHeroSection from '../components/staffAugmentation/ProjectManagerHeroSection'
import HireScrumMaster from '../components/staffAugmentation/HireScrumMaster'
import ProjectManagersIntelDevs from '../components/staffAugmentation/ProjectManagersIntelDevs'
import BookConsultation from '../components/Contact'
import Footer from '../components/Footer'
function ProjectManager() {
  return (
    <>
    <Header/>
    <ProjectManagerHeroSection/>
    <HireScrumMaster/>
    <ProjectManagersIntelDevs/>
    <BookConsultation/>
    <Footer/>
    </>
  )
}

export default ProjectManager