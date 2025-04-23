import React from 'react'

function ITConsultingHeroSection() {
    return (
        <section className="bg-white py-24 px-4 md:px-8 lg:px-16 lg:py-32 lg:bg-center text-white" style={{
            backgroundImage: "url('/it-consulting-bg.webp')",

        }}>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">


                    <h1 className="text-3xl md:text-4xl font-bold ">
                        <strong>IT Consulting</strong>
                        <br /><strong>Service</strong>
                    </h1>

                    <p className="text-lg ">
                        From strategic planning to seamless execution, we offer expert IT Consulting services to optimize your technology landscape. Partner with us for innovative solutions customized for your business success.
                    </p>
                    <div className='w-[40%]'>
                    <a
                        href="#calendly"
                        className="border border-blue-600 text-white hover:bg-blue-700 font-medium py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
                    >
                        <span>Book Meeting</span>
                    </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ITConsultingHeroSection