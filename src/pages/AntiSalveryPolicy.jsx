import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
function AntiSalveryPolicy() {
    return (
        <>
            <Header />
            <section className="bg-white py-20 bg-no-repeat" style={{
                backgroundImage: "url('/career-bg.webp')",

            }}>
                <div className="container mx-auto  px-4">
                    <div className="text-center">
                        <h1 className="text-3xl md:text-4xl text-white font-bold leading-snug">
                            Anti-Slavery Policy
                        </h1>
                    </div>

                </div>
            </section>
            <section className="px-4 md:px-10 py-12 max-w-5xl mx-auto text-gray-800">
                <h2 className="text-3xl font-bold mb-6">Overview</h2>
                <ul className="list-disc list-inside space-y-4">
                    <li>
                        Vaival Technologies strictly prohibits the use of forced, compulsory, or trafficked labor, whether in the form of workers or subcontractors, in any part of its business.
                    </li>
                    <li>
                        We uphold the fundamental principles and rights at work, including the elimination of all forms of forced or compulsory labor, as defined by the International Labour Organization (ILO) conventions and guidelines.
                    </li>
                    <li>
                        We will not knowingly support or deal with any business involved in slavery or human trafficking.
                    </li>
                    <li>
                        Vaival Technologies will ensure that employees are treated with respect and dignity and are provided with fair and safe working conditions, in compliance with all applicable laws and regulations.
                    </li>
                    <li>
                        Vaival Technologies is committed to conducting due diligence on all new and existing suppliers and business partners to ensure they also have robust anti-slavery policies and practices in place. We will assess and monitor the risks of modern slavery within our supply chains and take appropriate actions to mitigate and address these risks.
                    </li>
                </ul>
            </section>
            <Footer />
        </>
    )
}

export default AntiSalveryPolicy