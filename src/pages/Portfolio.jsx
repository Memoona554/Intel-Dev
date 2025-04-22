import React from 'react'
import Header from '../components/Header'
import InnovateSection from '../components/Portfolio/PortfolioHeroSection'
import PortfolioCaseStudies from '../components/Portfolio/PortfolioCaseStudies'
import PortfolioCustomSoftware from '../components/Portfolio/PortfolioCustomSoftware'
import BookConsultation from '../components/Contact'
import Footer from '../components/Footer'

function Portfolio() {
   
    return (
        <>
            <Header />
            <InnovateSection />
            <PortfolioCaseStudies />
            <PortfolioCustomSoftware />
            <BookConsultation />
            <Footer />
        </>
    )
}

export default Portfolio