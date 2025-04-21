import React from 'react'

function MernDeveloperHeroSection() {
    return (
        <>
            <section className="bg-white py-36 lg:py-48 bg-center  px-4 bg-no-repeat bg-cover" style={{
                backgroundImage: "url('/mern-developer-bg.webp')",

            }}>
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center" data-aos="fade-up" data-aos-delay="100">
                    <div>


                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Hire MERN Stack Developers

                        </h1>

                        <p className="text-white mb-6">
                            Hire our MERN Stack developers to get dynamic, robust, and secure web applications. With their expertise in MongoDB, Express.js, React.js, and Node.js, our developers can create high performance, cross-platform applications tailored to your business needs. Whether it is ERP, CMS, or ecommerce development, our experts have you covered.                    </p>

                        <a
                            href="#calendly"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium px-10 py-3 rounded-full transition duration-300"
                        >
                            DISCUSS YOUR PROJECT
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
                        business goals faster
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
                            <p className="text-gray-700 mt-2 leading-tight">
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
                            <p className="text-gray-700 mt-2 leading-tight">
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
                            <p className="text-gray-700 mt-2 leading-tight">
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

export default MernDeveloperHeroSection