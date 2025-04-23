import React from 'react'
import Header from '../components/Header'
import BlockChainHeroSection from '../components/staffAugmentation/BlockChainHeroSection'
import BlockChainDevelopmentSection from '../components/staffAugmentation/BlockChainDevelopmentSection'
import BlockChainFAQ from '../components/services/BlockChainFAQ'
import BookConsultation from '../components/Contact'
import Footer from '../components/Footer'
function BlockChainDeveloper() {
  return (
    <>
    <Header/>
    <BlockChainHeroSection/>
    <BlockChainDevelopmentSection/>
    <BlockChainFAQ/>
    <BookConsultation/>
    <Footer/>
    </>
  )
}

export default BlockChainDeveloper