import React from 'react'
import Header from '../components/Header'
import XANAHeroSection from '../components/Portfolio/XANAHeroSection'
import XANAInfo from '../components/Portfolio/XANAInfo'
import BookConsultation from '../components/Contact'
import Footer from '../components/Footer'
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
function XANA() {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: "ease-in-out",
        });
    }, []);
  return (
    <>
    <Header/>
    <XANAHeroSection/>
    <XANAInfo/>
    <BookConsultation />
    <Footer />
    </>
  )
}

export default XANA