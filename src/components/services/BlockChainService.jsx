import React from "react";
import { FaCircle } from "react-icons/fa";

import {
    FaWallet,
    FaCoins,
    FaFileContract,
    FaExchangeAlt,
    FaNetworkWired,
    FaMobileAlt,
    FaRocket,
    FaCubes,
    FaProjectDiagram,
    FaCodeBranch,
    FaUsers,
    FaCommentsDollar,
} from "react-icons/fa";

const services = [
    {
        title: "Cryptocurrency Development",
        description:
            "Step into the world of digital finance with our cryptocurrency development services.  We provide custom solutions tailored to your unique business ideas. Whether you're dreaming of a custom coin or a secure blockchain network, we have the expertise to make it happen.",
        icon: <FaCoins size={28} />,
    },
    {
        title: "Crypto Wallet Development",
        description:
            "Securely manage your digital assets with our Crypto Wallet Development services. We offer multi-currency support, blockchain integration, two-factor authentication and much more. Our user-friendly solutions ensure convenient and secure cryptocurrency transactions.",
        icon: <FaWallet size={28} />,
    },
    {
        title: "NFT Marketplace Development",
        description:
            "We provide end-to-end solutions to enable you to create, list and sell unique digital assets. Our solutions include smart contract integration, user-friendly interfaces and secure payment gateways, making it easy for both buyers and sellers to make transactions.",
        icon: <FaFileContract size={28} />,
    },
    {
        title: "Smart Contract Development",
        description:
            "Our smart contract development services enable you to automate and secure agreements across various domains. From conceptualization to coding and deployment, our expert team ensures seamless integration and functionality.",
        icon: <FaFileContract size={28} />,
    },
    {
        title: "Decentralized / Dex Development",
        description:
            "Revolutionize your trading experience with our DEX Development. We create reliable decentralized platforms, leveraging the power of blockchain and smart contracts. Our services transparency in peer-to-peer transactions while enhancing overall operational efficiency.",
        icon: <FaExchangeAlt size={28} />,
    },
    {
        title: "Decentralized DeFi Solutions",
        description:
            "Empower your financial ecosystem with our end-to-end DeFi solutions that are designed to enhance efficiency, security and profitability of your business. We craft reliable, decentralized financial platforms that utilize cutting-edge blockchain technology.",
        icon: <FaNetworkWired size={28} />,
    },
    {
        title: "DApps Development",
        description:
            "Transform your ideas into reality with our comprehensive app development services. We leverage advanced blockchain technologies and robust communication protocols to ensure your DApp delivers exceptional user experience that is secure and resilient.",
        icon: <FaMobileAlt size={28} />,
    },
    {
        title: "IEO and ICO Development",
        description:
            "Experience decentralized fundraising with our IEO and ICO Development services. From strategic planning and token creation to seamless platform development and marketing, our blockchain experts ensure a streamlined and effective fundraising process.",
        icon: <FaRocket size={28} />,
    },
    {
        title: "POC Development",
        description:
            "Unlock the true potential blockchain with our POC development services. We provide robust prototypes that showcase the viability and benefits of your concepts. Our solutions offer a clear vision of your project's potential, laying the groundwork for success.",
        icon: <FaProjectDiagram size={28} />,
    },
    {
        title: "Hyperledger Solutions",
        description:
            "We leverage hyperledger frameworks to deliver custom blockchain development solutions, ensuring transparent, secure, and scalable systems. Our experts help you design, develop and deploy custom Hyperledger solutions to meet your enterprise needs",
        icon: <FaCubes size={28} />,
    },
    {
        title: "Blockchain Staff Augmentation",
        description:
            "Optimize your blockchain initiatives with our Staff Augmentation services. Our seasoned professionals deliver custom blockchain solutions that align with your business goals. Benefit from enhanced expertise and streamlined workflows with Vaival as your partner.",
        icon: <FaUsers size={28} />,
    },
    {
        title: "Blockchain Consulting",
        description:
            "We provide comprehensive blockchain consultation services that cover everything from concept to implementation. Our seasoned consultants guide you through the intricate landscape of blockchain technology, offering tailored advice for seamless integration into your business processes.",
        icon: <FaCommentsDollar size={28} />,
    },
];
const stats = [
    "Blockchain market size is poised to grow at a compound annual growth rate (CAGR) of 85.7% during the forecast period 2023 to 2032. (Precedence Research)",
    "The global spending on blockchain solutions will reach $19 billion by 2024.",
    "The global blockchain in gaming market size is expected to reach USD 301.53 billion by 2030, growing at a CAGR of 68.3% from 2023 to 2030. (Grand View Research)",
];
const BlockchainServicesGrid = () => {
    return (
        <>
            <section className="bg-white py-16 px-4 md:px-10 lg:px-16"  data-aos="fade-up" data-aos-delay="100">
                <div className="max-w-7xl mx-auto text-center mb-12">
                    <h2 className="text-4xl font-bold">
                        Our <span className="text-blue-600">Blockchain</span> Development Services
                    </h2>
                </div>
                <div className="2xl:w-[70%] 2xl:mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8"  data-aos="fade-up" data-aos-delay="100">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-b-[4px] hover:border-blue-600"
                        >
                            <div className="text-blue-600 mb-4">{service.icon}</div>
                            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-600 text-sm">{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="bg-white py-16 px-4 md:px-10 lg:px-16"  data-aos="fade-up" data-aos-delay="300">
                <div className=" mx-auto grid grid-cols-1 lg:w-[60%] lg:bg-center lg:bg-cover gap-3 items-center text-center md:text-left" >

                    <div className="space-y-6 space-x-10 p-10" style={{
                        backgroundImage: "url('/blockchain-bg.webp')",

                    }}>
                        <h2 className="text-3xl text-white font-bold">Did You Know?</h2>
                        <h2 className="text-2xl font-semibold text-white">Blockchain Stats</h2>

                        <ul className="space-y-4"  data-aos="fade-up" data-aos-delay="300">
                            {stats.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <FaCircle className="text-white mt-1 text-[0.5rem]" />
                                    <span className="text-white text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </section>
        </>

    );
};

export default BlockchainServicesGrid;
