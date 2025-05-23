import React from 'react'
import Header from '../components/Header'
import MVPSection from '../components/services/MPVHeroSection'
import MVPServices from '../components/services/MVPService'
import MvpSteps from '../components/services/MVPSteps'
import MvpTimeline from '../components/services/MvpSolutionSection'
import MVPType from '../components/services/MvpType'
import MVPComparison from '../components/services/MVPComparision'
import BookConsultation from '../components/Contact'
import Footer from '../components/Footer'

function MPVDevelopment() {
    
    return (
        <>
            <Header />
            <MVPSection />
            <MVPServices />
            <MvpSteps />
            <MvpTimeline />
            <MVPType />
            <MVPComparison />
            <BookConsultation />
            <Footer />
        </>
    )
}

export default MPVDevelopment