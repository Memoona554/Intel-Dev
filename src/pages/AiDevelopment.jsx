import React from 'react'
import Header from '../components/Header'
import AIServiceSection from '../components/services/AiDevelopmentHeroSection'
import AIDevelopmentServices from '../components/services/AiDevelopmenServices'
import AIDevOverview from '../components/services/AiDevOverview'
import AITechSection from '../components/services/AiTechSection'
import IndustriesSection from '../components/services/AiIndustiresSection'
import FAQSection from '../components/services/AiFAQ'
import BookConsultation from '../components/Contact'
import Footer from '../components/Footer'

function AiDevelopment() {

  return (
    <>
    <Header/>
    <AIServiceSection/>
    <AIDevelopmentServices/>
    <AIDevOverview/>
    <AITechSection/>
    <IndustriesSection/>
    <FAQSection/>
    <BookConsultation/>
    <Footer/>
    </>
  )
}

export default AiDevelopment