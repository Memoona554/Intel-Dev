import React from 'react'

function MevnDeveloperHeroSection() {
    return (
        <>
            <section className="bg-white py-36 lg:py-48 bg-center  px-4 bg-no-repeat bg-cover" style={{
                backgroundImage: "url('/mevn.webp')",

            }}>
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center" data-aos="fade-up" data-aos-delay="100">
                    <div>


                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Hire MEVN Stack Developers
                        </h1>

                        <p className="text-white mb-6">
                            Get robust and feature-rich web applications with a dedicated team, possessing expertise in MongoDB, Express.js, Vue.js, and Node.js development. Hire MEVN Stack developers to drive innovation, efficiency, and success in your projects.
                        </p>

                        <a
                            href="#calendly"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium px-10 py-3 rounded-full transition duration-300"
                        >
                            HIRE A MEVN DEVELOPER NOW
                        </a>
                    </div>

                    <div></div>
                </div>
            </section>
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 text-center"  data-aos="zoom-in" data-aos-delay="100">
                    <h2 className="text-2xl md:text-3xl font-semibold">
                        <strong>Expertise that help you reach</strong> your business goals faster
                    </h2>

                   <div className='max-w-5xl mx-auto'>
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                        <div className="flex flex-col font-bold border-r-4 shadow p-6  border-green-600 items-center text-center">
                            <div className="mb-4 font-extrabold">
                               10+
                            </div>
                            <p className="text-base leading-snug">
                               Developer Team 
                            </p>
                        </div>

                        <div className="flex flex-col border-r-4 shadow  p-6 border-orange-600 font-bold items-center text-center">
                            <div className="mb-4 font-extrabold">
                                7+
                            </div>
                            <p className="text-base leading-snug">
                                Years of<br /> Experience
                            </p>
                        </div>

                        <div className="flex flex-col border-r-4 shadow p-6  border-blue-600 font-bold items-center text-center">
                            <div className="mb-4 font-extrabold">
                                100+
                            </div>
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

export default MevnDeveloperHeroSection