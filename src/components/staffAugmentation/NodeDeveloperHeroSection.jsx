import React from 'react'

function NodeDeveloperHeroSection() {
    return (
        <section className="bg-white py-36 lg:py-48 bg-center  px-4 bg-no-repeat bg-cover" style={{
            backgroundImage: "url('/node-js-page-bg.webp')",

        }}>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center" data-aos="fade-up" data-aos-delay="100">
                <div>


                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Hire Node Js Developer
                    </h1>

                    <p className="text-white mb-6">
                    Get access to our hand picked Node Js experts, who can guide, optimize, and grow your next project. Vaival offers you back-end support for your mission critical application architecture. Hire a Node Js developer with great ease.
                    </p>

                    <a
                        href="#calendly"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium px-10 py-3 rounded-full transition duration-300"
                    >
                        HIRE A DEVELOPER
                    </a>
                </div>

                <div></div>
            </div>
        </section>)
}

export default NodeDeveloperHeroSection