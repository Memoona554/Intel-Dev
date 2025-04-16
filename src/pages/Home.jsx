import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import DiscoverSection from '../components/DiscoverSection'
import StaffAugmentation from '../components/StaffAugmentation'
import SoftwareDevelopmentSection from '../components/SoftwareDevelopmentSection'
import TechnologiesSection from '../components/TechnologySection'
import IndustriesSection from '../components/Industries'
import Portfolio from '../components/Portfolio'
import TestimonialSection from '../components/Testimonial'
import BookConsultation from '../components/Contact'
import Footer from '../components/Footer'

function Home() {
    
    return (
        <>
            <Header />
            <HeroSection />
            <DiscoverSection />
            <StaffAugmentation />
            <SoftwareDevelopmentSection />
            <TechnologiesSection />
            <IndustriesSection />
            <Portfolio />
            <TestimonialSection />
            <BookConsultation />
            <Footer />
        </>
    )
}

export default Home