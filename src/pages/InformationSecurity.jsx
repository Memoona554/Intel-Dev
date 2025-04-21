import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
function InformationSecurity() {
    return (
        <>
            <Header />
            <section className="bg-white py-20 bg-no-repeat" style={{
                backgroundImage: "url('/career-bg.webp')",

            }}>
                <div className="container mx-auto  px-4">
                    <div className="text-center">
                        <h1 className="text-3xl md:text-4xl text-white font-bold leading-snug">
                            Information Security
                        </h1>
                    </div>

                </div>
            </section>
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h1 className="text-3xl font-bold text-center mb-6">
                        Information Security Policy
                    </h1>

                    <p className="text-gray-700 text-justify mb-6">
                        Intel Devs Technologies, engaged in software development and IT services, is dedicated to safeguarding its information assets by implementing information security controls to minimize the impact of security incidents. To establish, maintain, and continually improve the Information Security Management System (ISMS) and provide a framework for defining objectives and targets, Intel Devs commits to the following:
                    </p>

                    <ul className="list-disc pl-6 space-y-4 text-gray-700">
                        <li>Compliance with all applicable legal and contractual requirements will be diligently ensured.</li>
                        <li>Intel Devs will maintain the highest standards for information protection, ensuring the Confidentiality, Integrity, and Availability (CIA) of information assets through the systematic deployment of security controls.</li>
                        <li>Robust business continuity plans will be developed, maintained, and regularly tested.</li>
                        <li>Risks to all corporate assets, including tangible/intangible and human resources, will be assessed, and appropriate controls, mitigation, and contingency plans will be implemented.</li>
                        <li>A secure and safe environment will be provided for the preservation of all corporate assets, including tangible/intangible assets and personnel.</li>
                        <li>A conducive work environment, free from accidental and occupational hazards, will be maintained for the human resource.</li>
                        <li>All personnel will undergo training in information security practices, roles, and responsibilities.</li>
                        <li>Appropriate data protection controls will be applied throughout Intel Devs.</li>
                    </ul>

                    <p className="text-gray-700 mt-6 text-justify">
                        Personal information will be safeguarded in compliance with industry standards, applicable laws, and Intel Devs’s security protocols.
                    </p>
                    
                </div>
            </section>
            <Footer />
        </>
    )
}

export default InformationSecurity