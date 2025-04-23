import React from 'react'
import Header from '../components/Header'
import LaravelDeveloperHeroSection from '../components/staffAugmentation/LaravelDeveloperHeroSection'
import LaravelServices from '../components/staffAugmentation/LaravelServices'
import LaravelDeveloperHiringSection from '../components/staffAugmentation/LaravelDeveloperHiringSection'
import LaravelFAQ from '../components/staffAugmentation/LaravelFAQ'
import BookConsultation from '../components/Contact'
import Footer from '../components/Footer'
function LaravelDeveloper() {
  return (
    <>
    <Header/>
    <LaravelDeveloperHeroSection/>
    <LaravelServices/>
    <LaravelDeveloperHiringSection/>
    <LaravelFAQ/>
    <BookConsultation/>
    <Footer/>
    </>
  )
}

export default LaravelDeveloper