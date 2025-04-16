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

function SecurityService() {
   
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