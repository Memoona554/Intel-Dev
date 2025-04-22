import React from "react";

const ExperienceExcellence = () => {
    return (
     <>
        <section className="w-full px-4 bg-white py-16" data-aos="fade-up" data-aos-delay="100">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16" data-aos="fade-up" data-aos-delay="300">
                <div className="flex items-center flex-col gap-4 justify-center space-x-6">
                    <img
                        src="/essence_2.jpg"
                        alt="software development services"
                        className="lg:w-full w-82 h-auto object-cover rounded-lg"
                        data-aos="fade-up" data-aos-delay="200"
                    />
                    <p data-aos="fade-up" data-aos-delay="300" className=" text-2xl mb-5 text-gray-900">
                        <span className=" text-4xl text-blue-500 font-semibold">10+</span>
                        <br />
                        Skilled <br />&amp; Dedicated
                        <br />
                        Staff
                    </p>
                </div>
    
                <div className="flex items-center flex-col gap-4 justify-center space-x-6">
                    <p data-aos="fade-up" data-aos-delay="400" className="text-2xl mt-4  text-gray-900">
                        <span className=" text-4xl text-blue-500 font-semibold">100+</span>
                        <br />
                        Completed
                        <br />
                        Projects
                    </p>
                    <img
                        src="/essence_1.jpg"
                        alt="software development"
                        className="lg:w-full w-82 h-auto object-cover rounded-lg"
                        data-aos="fade-up" data-aos-delay="500"
                    />
                </div>
            </div>
            <div className="flex flex-col justify-center space-y-6 px-6 lg:px-0" data-aos="fade-up" data-aos-delay="200">
                <h2 className="text-3xl  text-gray-900">
                    <strong>Experience Excellence with Intel Devs <span className="text-blue-400">, Your Premier SaaS Partner</span></strong>
                    <br />
                    of Who We Are
                </h2>
                <p className="text-lg text-gray-700">
                Intel Devs specializes in delivering innovative solutions and high-quality software development services. Our team has extensive expertise in Web3, AI/ML, blockchain, as well as mobile and web development.                </p>
            </div>
    
            
        </div>
    </section>
    
    <section className="w-full bg-blue-400 py-16" data-aos="fade-up" data-aos-delay="100">
      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Work from Anywhere, Anytime
          </h2>
          <p className="text-lg text-white mb-6">
            Embrace the freedom of remote work with powerful tools that keep you productive and connected from wherever you are. Our platform is designed for efficiency, collaboration, and success.
          </p>
          <a href="#calendly" className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition">
            Get Started
          </a>
        </div>

        <div className="w-full lg:w-1/2">
          <img
            src="https://www.vaival.com/wp-content/uploads/2024/08/smiley-man-working-laptop-from-home-1.webp"
            alt="Smiley man working from home"
            className="w-full h-auto "
          />
        </div>
      </div>
    </section>
     </>

    );
};

export default ExperienceExcellence;
