import React from 'react'
import Header from '../components/Header'
import DjangoHeroSection from '../components/staffAugmentation/DjangoHeroSection'
import DjangoServices from '../components/staffAugmentation/DjangoServices'
import HireDjangoDevelopers from '../components/staffAugmentation/HireDjangoDeveloper'
import DjangoFAQ from '../components/staffAugmentation/DjangoFAQ'
import BookConsultation from '../components/Contact'
import Footer from '../components/Footer'
function DjangoDeveloper() {
  return (
    <>
    <Header/>
    <DjangoHeroSection/>
    <DjangoServices/>
    <HireDjangoDevelopers/>
    <DjangoFAQ/>
    <BookConsultation/>
    <Footer/>
    </>
  )
}

export default DjangoDeveloper