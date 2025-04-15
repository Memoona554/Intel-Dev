import React from 'react'
import Header from '../components/Header'
import SecuritySubscriptionSection from '../components/services/SecurityServiceHeroSection'
import CompanyLogo from '../components/services/CompanyLogo'
import SecaaSSection from '../components/services/SecaasSection'
import BusinessProcessSection from '../components/services/BussinessProcessSection'
import ResultsTimeline from '../components/services/SecurityRealResult'
import PricingPlans from '../components/services/SecurityPricingPlan'
import CertifiedAndTestimonials from '../components/services/SecurityCertifiedAndTestimonial'
import RightFitAndLosses from '../components/services/RightFit'
import BorrowOurTeamSection from '../components/services/SecurityBorrow'
import BookConsultation from '../components/Contact'
import SecurityFAQ from '../components/services/SecurityFAQ'
import Footer from '../components/Footer'
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
function SecurityService() {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: "ease-in-out",
        });
    }, []);
  return (
    <>
    <Header/>
    <SecuritySubscriptionSection/>
    <CompanyLogo/>
    <SecaaSSection/>
    <BusinessProcessSection/>
    <ResultsTimeline/>
    <PricingPlans/>
    <CertifiedAndTestimonials/>
    <RightFitAndLosses/>
    <BorrowOurTeamSection/>
    <BookConsultation />
    <SecurityFAQ/>
    <Footer/>

    </>
  )
}

export default SecurityService