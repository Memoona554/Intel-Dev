import React from 'react'
import Header from '../components/Header'
import DexCheckHeroSection from '../components/Portfolio/DexCheckHeroSection'
import DexCheckInfo from '../components/Portfolio/DexCheckInfo'
import BookConsultation from '../components/Contact'
import Footer from '../components/Footer'
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
function DexCheck() {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: "ease-in-out",
        });
    }, []);
  return (
    <>
    <Header/>
    <DexCheckHeroSection/>
    <DexCheckInfo/>
    <BookConsultation />
    <Footer />
    </>
  )
}

export default DexCheck