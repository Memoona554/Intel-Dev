import React from 'react'

function AngularDeveloperHeroSection() {
    return (
        <>
            <section className="bg-white py-36 lg:py-48 bg-center  px-4 bg-no-repeat bg-cover" style={{
                backgroundImage: "url('/angular-bg.webp')",

            }}>
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center" data-aos="fade-up" data-aos-delay="100">
                    <div>


                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Hire Angular Developers
                        </h1>

                        <p className="text-white mb-6">
                            Intel Devs offers highly skilled and proficient Angular developers who can seamlessly integrate into your team, bringing their expertise in the Angular framework to enhance your projects. With a focus on delivering exceptional long-term support, you can confidently hire dedicated Angular developers to meet your development needs today.
                        </p>

                        <a
                            href="#calendly"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium px-10 py-3 rounded-full transition duration-300"
                        >
                            HIRE  ANGULAR DEVELOPER NOW
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
                            <div className="flex flex-col font-bold shadow-lg p-6  border-l border-l-blue-600 items-center text-center">
                                <div className="mb-4 text-blue-600 font-extrabold">
                                    <span className='font-bold text-4xl'>10+</span>
                                </div>
                                <p className="text-base text-blue-600 leading-snug">
                                    Developer <br /> Team
                                </p>
                            </div>

                            <div className="flex flex-col shadow-lg p-6 font-bold border-l border-l-green-600   items-center text-center">
                                <div className="mb-4 font-extrabold">
                                    <span className='font-bold text-4xl text-blue-600'> 7+</span>
                                </div>
                                <p className="text-base text-blue-600 leading-snug">
                                    Years of<br /> Experience
                                </p>
                            </div>

                            <div className="flex flex-col shadow-lg p-6 font-bold border-l border-l-blue-600  items-center text-center">
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

export default AngularDeveloperHeroSection;