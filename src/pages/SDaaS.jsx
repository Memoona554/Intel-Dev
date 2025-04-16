import React from 'react'
import Header from '../components/Header'
import SDAASHeroSection from '../components/services/SDAASHeroSection'
import CompanyLogo from '../components/services/CompanyLogo'
import SDAASFeature from '../components/services/SDAASFeature'
import WhySDAAS from '../components/services/WhySdaas'
import SassProjects from '../components/services/SassProjects'
import DevCostSection from '../components/services/DevCostSection'
import SubscriptionPlans from '../components/services/SubscriptionPlans'
import TechExpertise from '../components/services/TechExperties'
import ExperienceExcellence from '../components/services/ExperienceExcellence'
import SdaasFAQ from '../components/services/SDAASFAQ'
import BookConsultation from '../components/Contact'
import Footer from '../components/Footer'

function SDaaS() {
  return (
    <>
    <Header/>
    <SDAASHeroSection></SDAASHeroSection>
    <CompanyLogo/>
    <SDAASFeature/>
    <WhySDAAS/>
    <SassProjects/>
    <DevCostSection/>
    <SubscriptionPlans/>
    <TechExpertise/>
    <ExperienceExcellence/>
    <SdaasFAQ/>
    <BookConsultation />
    <Footer />
    </>
  )
}

export default SDaaS