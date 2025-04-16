import React from 'react'
import Header from '../components/Header'
import VividlyHeroSection from '../components/Portfolio/VividlyHeroSection'
import VividlyInfo from '../components/Portfolio/VividlyInfo'
import BookConsultation from '../components/Contact'
import Footer from '../components/Footer'
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
function VividlyPorject() {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: "ease-in-out",
        });
    }, []);
  return (
    <>
    <Header/>
    <VividlyHeroSection/>
    <VividlyInfo/>
    <BookConsultation />
    <Footer />
    </>
  )
}

export default VividlyPorject