import React from 'react'
import Header from '../components/Header'
import PhpDeveloperHeroSection from '../components/staffAugmentation/PhpDeveloperHeroSection'
import PhpDevelopmentServices from '../components/staffAugmentation/PhpDevelopmentServices'
import HirePhpDevelopers from '../components/staffAugmentation/HirePhpDeveloper'
import PhpFAQ from '../components/staffAugmentation/PhpFAQ'
import BookConsultation from '../components/Contact'
import Footer from '../components/Footer'
function PhpDeveloper() {
  return (
    <>
    <Header/>
    <PhpDeveloperHeroSection/>
    <PhpDevelopmentServices/>
    <HirePhpDevelopers/>
    <PhpFAQ/>
    <BookConsultation/>
    <Footer/>
    </>
  )
}

export default PhpDeveloper