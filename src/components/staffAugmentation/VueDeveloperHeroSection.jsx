import React from 'react'

function VueDeveloperHeroSection() {
    return (
        <section className="bg-white py-36 lg:py-48 bg-center  px-4 bg-no-repeat bg-cover" style={{
            backgroundImage: "url('/react-developer-bg.png')",

        }}>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center" data-aos="fade-up" data-aos-delay="100">
                <div>


                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Hire Vue Js Developers
                    </h1>

                    <p className="text-white mb-6">
                        Intel Devs has a skilled team of experienced Vue.js developers providing comprehensive web development services. We deliver innovative solutions designed to create dynamic and engaging user experiences.
                        .
                    </p>

                    <a
                        href="#calendly"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium px-6 py-3 rounded-lg transition duration-300"
                    >
                        HIRE VUE JS DEVELOPER
                    </a>
                </div>

                <div></div>
            </div>
        </section>)
}

export default VueDeveloperHeroSection