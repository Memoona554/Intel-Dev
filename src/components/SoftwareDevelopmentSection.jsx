import React from 'react';
import { Link } from 'react-router-dom';
const SoftwareDevelopmentSection = () => {
    return (
        <section className="w-full px-5 py-16 bg-white">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="100">
                <div className="flex items-center justify-center" data-aos="fade-up" data-aos-delay="200">
                    <div className="w-full">
                        <img
                            src="https://www.vaival.com/wp-content/uploads/2024/07/Group-1000004277-1024x947.webp"
                            alt="software development consulting services"
                            className="w-full h-auto object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-center space-y-6 px-6 lg:px-0" data-aos="fade-up" data-aos-delay="300">
                    <h2 className="text-3xl font-bold text-gray-900">
                        <strong>Software as a Service</strong>
                    </h2>
                    <p className="text-lg text-gray-700">
                        Scale Your Business with Custom Software Development Services
                    </p>
                    <p className="text-lg text-gray-700">
                        We offer next-gen software development services through a flexible, subscription-based model—customizable to meet your unique business needs. Our solutions help your software evolve with the ever-changing demands of your business environment.
                    </p>
                    <div className="text-center lg:text-left">
                        <Link
                            to="/services/saas"
                            className="inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>



            </div>
        </section>
    );
};

export default SoftwareDevelopmentSection;
