import React from 'react'
import Header from '../components/Header'
import AboutHeroSection from '../components/AboutHeroSection'
import CompanyIntro from '../components/CompanyIntro'
import CoreValue from '../components/CoreValue'
import AboutUsSection from '../components/AboutThirdSection'
import HistorySection from '../components/HistorySection'
import WorkLifeSymphony from '../components/WorkLifeSection'
import StatsSection from '../components/StatsSection'
import Footer from '../components/Footer'

function About() {
    
    return (
        <>
            <Header />
            <AboutHeroSection />
            <CompanyIntro />
            <CoreValue />
            <AboutUsSection />
            <HistorySection />
            <WorkLifeSymphony />
            <StatsSection />
            <Footer />
        </>
    )
}

export default About