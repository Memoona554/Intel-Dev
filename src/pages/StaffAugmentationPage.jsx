import React from 'react'
import Header from '../components/Header'
import StaffAugmentationHero from '../components/staffAugmentation/StaffAugmentationHeroSection'
import AIPoweredHighlights from '../components/staffAugmentation/StaffAugmentationAIDevelopment'
import ITTalentGrid from '../components/staffAugmentation/ITTalentGrid'
import ITStaffBenefits from '../components/staffAugmentation/ITStaffBenifit'
import StaffAugmentationProcess from '../components/staffAugmentation/StaffAugmentationProcess'
import TechStackGrid from '../components/staffAugmentation/TechStackGrid'
import WhyChooseUs from '../components/staffAugmentation/WhyChoseStaff'
import WhyChooseIntel from '../components/staffAugmentation/WhyChoseIntel'
import BookConsultation from '../components/Contact'
import Footer from '../components/Footer'
function StaffAugmentationPage() {
    return (
        <>
            <Header />
            <StaffAugmentationHero />
            <AIPoweredHighlights />
            <ITTalentGrid />
            <ITStaffBenefits />
            <StaffAugmentationProcess />
            <TechStackGrid />
            <WhyChooseUs />
            <WhyChooseIntel />
            <BookConsultation />
            <Footer />
        </>

    )
}

export default StaffAugmentationPage