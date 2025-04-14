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
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
function AiDevelopment() {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: "ease-in-out",
        });
    }, []);
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