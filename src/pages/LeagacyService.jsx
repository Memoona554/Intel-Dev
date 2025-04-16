import React from 'react'
import Header from '../components/Header'
import LegacyModernizationHeroSection from '../components/services/LeagaceyHeroSection'
import CompanyLogo from '../components/services/CompanyLogo'
import LegacySoftwareDevelopment from '../components/services/LegacySoftwareDevelopment'
import ModernizationSteps from '../components/services/ModernizationSteps'
import ResultsCarousel from '../components/services/ResultCarousale'
import ModernizationPlans from '../components/services/ModernizationPlans'
import LagacyInfo from '../components/services/LagacyInfo'
import CertifiedAndTestimonials from '../components/services/SecurityCertifiedAndTestimonial'
import BookConsultation from '../components/Contact'
import LagceFAQ from '../components/services/LagceFAQ'
import Footer from '../components/Footer'
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
function LeagacyService() {
  useEffect(() => {
    AOS.init({
        duration: 1200,
        easing: "ease-in-out",
    });
}, []);
  return (
    <>
    <Header/>
    <LegacyModernizationHeroSection/>
    <CompanyLogo/>
    <LegacySoftwareDevelopment/>
    <ModernizationSteps/>
    <ResultsCarousel/>
    <ModernizationPlans/>
    <LagacyInfo/>
    <CertifiedAndTestimonials/>
    <BookConsultation />
    <LagceFAQ/>
    <Footer/>
    </>
  )
}

export default LeagacyService