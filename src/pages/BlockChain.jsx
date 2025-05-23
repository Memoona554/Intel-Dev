import React from 'react'
import Header from '../components/Header'
import BlockchainDevelopment from '../components/services/BlockChainDevelopmentHeroSection'
import BlockchainServicesGrid from '../components/services/BlockChainService'
import BlockchainDevelopmentProcess from '../components/services/BlockChainDevelopmentProcess'
import BlockchainAdvantages from '../components/services/BlockChainAdvantage'
import IndustriesWeServe from '../components/services/INdustriesWeServe'
import BlockchainApproaches from '../components/services/BlockChainApproaches'
import TechnologyStack from '../components/services/BlockChainStack'
import PricingModels from '../components/services/PricingModal'
import BlockChainFAQ from '../components/services/BlockChainFAQ'
import BookConsultation from '../components/Contact'
import Footer from '../components/Footer'

function BlockChain() {
 
    return (
        <>
            <Header />
            <BlockchainDevelopment />
            <BlockchainServicesGrid />
            <BlockchainDevelopmentProcess />
            <BlockchainAdvantages />
            <IndustriesWeServe />
            <BlockchainApproaches />
            <TechnologyStack />
            <PricingModels />
            <BlockChainFAQ />
            <BookConsultation />
            <Footer />
        </>
    )
}

export default BlockChain