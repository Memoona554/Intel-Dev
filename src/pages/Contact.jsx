import React from 'react'
import Header from '../components/Header'
import ContactHeroSection from '../components/ContactHeroSection'
import Calendly from '../components/Calendly'
import GetInTouch from '../components/GetInTouch'
import StatsSection from '../components/StatsSection'
import Footer from '../components/Footer'
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
function Contact() {
    useEffect(() => {
        AOS.init({
          duration: 1200,
          easing: "ease-in-out",
        });
      }, []);
  return (
    <>
    <Header/>
    <ContactHeroSection/>
    <h1 className='text-4xl py-10 text-center'><span className='text-5xl font-bold'>Let's create progress </span><span>together</span></h1>
    <Calendly/>
    <GetInTouch/>
    <StatsSection/>
    <Footer/>
    </>
  )
}

export default Contact