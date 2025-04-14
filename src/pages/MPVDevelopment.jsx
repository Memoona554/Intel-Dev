import React from 'react'
import Header from '../components/Header'
import MVPSection from '../components/services/MPVHeroSection'
import MVPServices from '../components/services/MVPService'
import MvpSteps from '../components/services/MVPSteps'
import MvpTimeline from '../components/services/MvpSolutionSection'
import OnboardingSwiper from '../components/services/MvpOnbording'
import MVPType from '../components/services/MvpType'
import MVPComparison from '../components/services/MVPComparision'
import BookConsultation from '../components/Contact'
import Footer from '../components/Footer'
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
function MPVDevelopment() {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: "ease-in-out",
        });
    }, []);
    return (
        <>
            <Header />
            <MVPSection />
            <MVPServices />
            <MvpSteps />
            <MvpTimeline />
            <OnboardingSwiper />
            <MVPType />
            <MVPComparison />
            <BookConsultation />
            <Footer />
        </>
    )
}

export default MPVDevelopment