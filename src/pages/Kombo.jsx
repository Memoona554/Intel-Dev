import React from 'react'
import Header from '../components/Header'
import KomboHeroSection from '../components/Portfolio/KomboHeroSection'
import KomboInfo from '../components/Portfolio/KomboInfo'
import BookConsultation from '../components/Contact'
import Footer from '../components/Footer'
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
function Kombo() {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: "ease-in-out",
        });
    }, []);
  return (
    <>
    <Header/>
    <KomboHeroSection/>
    <KomboInfo/>
    <BookConsultation />
    <Footer />
    </>
  )
}

export default Kombo