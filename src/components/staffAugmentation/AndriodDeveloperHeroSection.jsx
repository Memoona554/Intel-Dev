import React from 'react'

function AndriodDeveloperHeroSection() {
    return (
        <>
            <section className="bg-white py-36 lg:py-48 bg-center  px-4 bg-no-repeat bg-cover" style={{
                backgroundImage: "url('/django-bg.webp')",

            }}>
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center" data-aos="fade-up" data-aos-delay="100">
                    <div>


                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Hire Android Developers
                        </h1>

                        <p className="text-white mb-6">
                            Intel Devs offers expert Android developers for hire who are highly adaptable and can seamlessly align with your project requirements. Our developers specialize in writing efficient code that runs flawlessly across all Android devices.
                        </p>
                        <a
                            href="#calendly"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium px-10 py-3 rounded-full transition duration-300"
                        >
                            HIRE  ANDROID DEVELOPER NOW
                        </a>
                    </div>

                    <div></div>
                </div>
            </section>
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 text-center" data-aos="zoom-in" data-aos-delay="100">
                    <h2 className="text-2xl md:text-3xl font-semibold">
                        <strong>Expertise that help you reach</strong> your business goals faster
                    </h2>

                    <div className='max-w-5xl mx-auto'>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                            <div className="flex flex-col font-bold p-6 items-center text-center">
                                <div className="mb-4 text-blue-700 font-extrabold">
                                    <span className='font-bold text-3xl'>10+</span>
                                </div>
                                <div className='w-[50%] mx-auto p-[0.05px] mb-2 bg-blue-600'></div>

                                <p className="text-base leading-snug">
                                    Developer <br /> Team
                                </p>
                            </div>

                            <div className="flex flex-col  p-6 font-bold items-center text-center">
                                <div className="mb-4 font-extrabold">
                                   <span className='font-bold text-3xl text-green-700'> 7+</span>
                                </div>
                                <div className='w-[50%] mx-auto p-[0.05px] mb-2 bg-green-600'></div>
                                <p className="text-base leading-snug">
                                    Years of<br /> Experience
                                </p>
                            </div>

                            <div className="flex flex-col  p-6 font-bold items-center text-center">
                                <div className="mb-4 font-extrabold">
                                   <span className='font-bold text-3xl text-blue-700'> 100+</span>
                                </div>
                                <div className='w-[50%] mx-auto p-[0.05px] mb-2 bg-blue-600'></div>

                                <p className="text-base leading-snug">
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

export default AndriodDeveloperHeroSection