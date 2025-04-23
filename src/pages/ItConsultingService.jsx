import React from 'react'
import Header from '../components/Header'
import ITConsultingHeroSection from '../components/services/ITConsultingHeroSection'
import ITConsultingServices from '../components/services/ITConsultingServices'
import ITConsultingStats from '../components/services/ITConsultingStats'
import AgileApproachSection from '../components/services/AgileApprocahesSection'
import ITConsultingFAQ from '../components/services/ITConsultingFAQ'
import BookConsultation from '../components/Contact'
import Footer from '../components/Footer'
function ItConsultingService() {
  return (
    <>
    <Header/>
    <ITConsultingHeroSection/>
    <ITConsultingServices/>
    <ITConsultingStats/>
    <AgileApproachSection/>
    <ITConsultingFAQ/>
    <BookConsultation/>
    <Footer/>
    </>
  )
}

export default ItConsultingService