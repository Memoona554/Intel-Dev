import React from 'react'
import Header from '../components/Header'
import BookConsultation from '../components/Contact'
import MernDeveloperHeroSection from '../components/staffAugmentation/MernDeveloperHeroSection'
import MernDeveloperService from '../components/staffAugmentation/MernDeveloperService'
import MernDevelopers from '../components/staffAugmentation/MernDevelopers'
import MernFAQ from '../components/staffAugmentation/MernFAQ'
import Footer from '../components/Footer'
function MernDeveloper() {
  return (
    <>
    <Header/>
    <MernDeveloperHeroSection/>
    <MernDeveloperService/>
    <MernDevelopers/>
    <MernFAQ/>
    <BookConsultation/>
    <Footer/>
    </>
  )
}

export default MernDeveloper