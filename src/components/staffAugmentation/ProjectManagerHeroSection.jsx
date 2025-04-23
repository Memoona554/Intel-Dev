import React from 'react'

function ProjectManagerHeroSection() {
    return (
        <>
            <section className="bg-white py-36 lg:py-48 bg-center  px-4 bg-no-repeat bg-cover" style={{
                backgroundImage: "url('/manager-bg.webp')",

            }}>
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center" data-aos="fade-up" data-aos-delay="100">
                    <div>


                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Hire Scrum Master/IT Project Manager
                        </h1>

                        <p className="text-white mb-6">
                            Ensure successful software development with our industry-leading scrum masters/IT project managers, well-versed in agile, scrum, and other project management models. Hire a Scrum Master with full confidence today.
                        </p>

                        <a
                            href="#calendly"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium px-10 py-3 rounded-full transition duration-300"
                        >
                            DISCOVER TOP 1% WITH INTEL DEVS
                        </a>
                    </div>

                    <div></div>
                </div>
            </section>
            <section className="py-12 bg-white">
                <div className="container  mx-auto px-4 text-center" data-aos="zoom-in" data-aos-delay="100">
                    <h2 className="text-3xl sm:text-4xl  mb-10">
                        <strong>Expertise that help you reach your</strong>
                        <br />
                       <strong> business goals faster</strong>
                    </h2>

                   <div className='max-w-7xl mx-auto'>
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 items-center">
                        <div>
                            <img
                                src="/essence_1.jpg"
                                alt="hire mern stack developers"
                                className="w-full h-auto rounded-lg"
                            />
                        </div>

                        <div className="text-center  px-4 py-6">
                            <h3 className="text-4xl font-bold text-indigo-600">7+</h3>
                            <div className='w-[50%] mx-auto p-[0.5px] bg-blue-600 '></div>
                            <p className="text-gray-700 text-2xl mt-2 leading-tight">
                                Years of<br />
                                Experience
                            </p>
                        </div>

                        <div>
                            <img
                                src="/essence_2.jpg"
                                alt="hire mern stack developers"
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                        <div className="text-center  px-4 py-6">
                            <h3 className="text-4xl font-bold text-indigo-600">10+</h3>
                            <div className='w-[50%] mx-auto p-[0.5px] bg-blue-600 '></div>

                            <p className="text-gray-700 text-2xl mt-2 leading-tight">
                                Developers<br />
                                    Team
                            </p>
                        </div>

                        <div>
                            <img
                                src="/essence_3.jpg"
                                alt="hire mern stack developers"
                                className="w-full h-auto rounded-lg"
                            />
                        </div>

                        <div className="text-center   px-4 py-6">
                            <h3 className="text-4xl font-bold text-indigo-600">100+</h3>
                            <div className='w-[50%] mx-auto p-[0.5px] bg-blue-600 '></div>

                            <p className="text-gray-700 text-2xl mt-2 leading-tight">
                                Projects<br />
                                Completed
                            </p>
                        </div>
                    </div>
                   </div>
                </div>
            </section>
        </>

    )
}

export default ProjectManagerHeroSection