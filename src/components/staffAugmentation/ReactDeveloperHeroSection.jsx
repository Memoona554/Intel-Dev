import React from 'react'

function ReactDeveloperHeroSection() {
  return (
<section className="bg-white py-36 lg:py-48 bg-center  px-4 bg-no-repeat bg-cover" style={{
      backgroundImage: "url('/react-developer-bg.png')",

    }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center" data-aos="fade-up" data-aos-delay="100">
        <div>
          

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Hire React Developer
          </h1>

          <p className="text-white mb-6">
            Power your front-end development by hiring our industry leading react developers.
            Our developers are fully equipped to handle all kinds of complex react development.
            Hire a react developer with full confidence today.
          </p>

          <a
            href="#calendly"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium px-6 py-3 rounded-lg transition duration-300"
          >
            Let’s discuss Your Needs
          </a>
        </div>

        <div></div>
      </div>
    </section>  )
}

export default ReactDeveloperHeroSection