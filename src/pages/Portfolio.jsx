import React from 'react'
import Header from '../components/Header'
import InnovateSection from '../components/Portfolio/PortfolioHeroSection'
import PortfolioCaseStudies from '../components/Portfolio/PortfolioCaseStudies'
import PortfolioCustomSoftware from '../components/Portfolio/PortfolioCustomSoftware'
import PortfolioDevelopment from '../components/Portfolio/PortfolioDevelopment'
import BookConsultation from '../components/Contact'
import Footer from '../components/Footer'
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
function Portfolio() {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: "ease-in-out",
        });
    }, []);
    return (
        <>
            <Header />
            <InnovateSection />
            <PortfolioCaseStudies />
            <PortfolioCustomSoftware />
            <PortfolioDevelopment />
            <BookConsultation />
            <Footer />
        </>
    )
}

export default Portfolio