import React from 'react'

function DevOPsHeroSection() {
    return (
        <>
            <section className="bg-white py-36 lg:py-48 bg-center  px-4 bg-no-repeat bg-cover" style={{
                backgroundImage: "url('/angular-bg.webp')",

            }}>
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center" data-aos="fade-up" data-aos-delay="100">
                    <div>


                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Hire DevOps Engineer
                        </h1>

                        <p className="text-white mb-6">
                            Hire seasoned DevOps engineers from Intel Devs to streamline your development pipeline, automate infrastructure, and enhance deployment efficiency.
                        </p>

                        <a
                            href="#calendly"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium px-10 py-3 rounded-full transition duration-300"
                        >
                            HIRE DEVS OPS ENGINEER NOW
                        </a>
                    </div>

                    <div></div>
                </div>
            </section>
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 text-center" data-aos="zoom-in" data-aos-delay="100">
                    <h2 className="text-2xl md:text-3xl font-semibold">
                        <strong>Expertise that help you reach your business goals faster</strong>
                    </h2>

                    <div className='max-w-5xl mx-auto'>
                        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-0 gap-4 mt-10">
                            <div className="flex flex-col font-bold shadow-lg p-6  border-l border-b border-b-green-600 border-t border-t-green-600 border-l-blue-600 items-center text-center">
                                <div className="mb-4 text-blue-600 font-extrabold">
                                    <span className='font-bold text-4xl'>10+</span>
                                </div>
                                <p className="text-base text-blue-600 leading-snug">
                                    Developer <br /> Team
                                </p>
                            </div>

                            <div className="flex flex-col shadow-lg p-6 font-bold border-l border-l-green-600 border-b border-b-blue-600 border-t border-t-blue-600   items-center text-center">
                                <div className="mb-4 font-extrabold">
                                    <span className='font-bold text-4xl text-blue-600'> 7+</span>
                                </div>
                                <p className="text-base text-blue-600 leading-snug">
                                    Years of<br /> Experience
                                </p>
                            </div>

                            <div className="flex flex-col shadow-lg p-6 font-bold border-r border-r-blue-600 border-l border-l-blue-600  border-b border-b-green-600 border-t border-t-green-600 items-center text-center">
                                <div className="mb-4 font-extrabold">
                                    <span className='font-bold text-4xl text-blue-600'> 100+</span>
                                </div>
                                <p className="text-base text-blue-600 leading-snug">
                                    Software<br /> Projects
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default DevOPsHeroSection;