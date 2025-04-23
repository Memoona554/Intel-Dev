import React from 'react'

function LaravelDeveloperHeroSection() {
    return (
        <>
            <section className="bg-white py-36 lg:py-48 bg-center  px-4 bg-no-repeat bg-cover" style={{
                backgroundImage: "url('/laravel-bg.webp')",

            }}>
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center" data-aos="fade-up" data-aos-delay="100">
                    <div>


                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Hire Laravel Developers
                        </h1>

                        <p className="text-white mb-6">
                        Intel Devs provides highly experienced Laravel developers who are proficient in Laravel, PHP, MySQL, HTML, CSS, JavaScript, and other modern technologies.
                        </p>

                        <a
                            href="#calendly"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium px-10 py-3 rounded-full transition duration-300"
                        >
                            HIRE  LARAVEL DEVELOPER NOW
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
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                            <div className="flex flex-col font-bold shadow-lg p-6 rounded-lg bg-blue-600 items-center text-center">
                                <div className="mb-4 text-white font-extrabold">
                                    <span className='font-bold text-4xl'>10+</span>
                                </div>
                                <p className="text-base text-white leading-snug">
                                    Developer <br /> Team
                                </p>
                            </div>

                            <div className="flex flex-col shadow-lg p-6 font-bold bg-blue-600 rounded-lg  items-center text-center">
                                <div className="mb-4 font-extrabold">
                                   <span className='font-bold text-4xl text-white'> 7+</span>
                                </div>
                                <p className="text-base text-white leading-snug">
                                    Years of<br /> Experience
                                </p>
                            </div>

                            <div className="flex flex-col shadow-lg p-6 font-bold bg-blue-600 rounded-lg items-center text-center">
                                <div className="mb-4 font-extrabold">
                                   <span className='font-bold text-4xl text-white'> 100+</span>
                                </div>
                                <p className="text-base text-white leading-snug">
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

export default LaravelDeveloperHeroSection;