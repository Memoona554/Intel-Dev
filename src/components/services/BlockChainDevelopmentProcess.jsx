import React from 'react';

const BlockchainDevelopmentProcess = () => {
    return (
        <>
            <section className="py-16 bg-white" >
                <div className="max-w-[90%] mx-auto px-4"  data-aos="fade-up" data-aos-delay="100">
                    <h2 className="text-3xl font-bold text-center mb-12"  data-aos="fade-up" data-aos-delay="200">
                        <strong>Our Blockchain</strong> Development Process
                    </h2>

                    <div className="text-center mb-16 max-w-3xl mx-auto"  data-aos="zoom-in" data-aos-delay="300">
                        <h3 className="text-xl font-semibold mb-2">Prototype Development</h3>
                        <p className="text-gray-600">
                            In this phase we bring your vision to life in a tangible form. Through agile development, we create a working prototype, providing a hands-on experience of your blockchain solution. This iterative process allows for refinement based on real-time feedback.
                        </p>
                    </div>

                    <div className="relative flex flex-col gap-4 lg:justify-center lg:items-center lg:min-h-[500px]"  data-aos="fade-right" data-aos-delay="400">
                        <img
                            src="https://www.vaival.com/wp-content/uploads/2024/06/Group-57419-1024x449.webp"
                            alt="Blockchain Development Process"
                            className="hidden lg:block w-full lg:max-w-3xl 2xl:max-w-4xl"
                        />

                        <div className="w-[80%] mx-auto mb-4 shadow-lg p-4 lg:shadow-0 lg:absolute lg:top-0 lg:left-0 lg:w-80 lg:text-left">
                            <h3 className="text-lg font-semibold mb-1">Product Feasibility Study</h3>
                            <p className="text-gray-600 text-sm">
                                Our experts examine technical, financial, and operational aspects to ensure feasibility and alignment with your business goals.
                            </p>
                        </div>

                        <div className="w-[80%] mx-auto mb-4 shadow-lg lg:shadow-0 p-4 lg:absolute lg:bottom-0 lg:left-0 lg:w-80 lg:text-left">
                            <h3 className="text-lg font-semibold mb-1">Product Discovery</h3>
                            <p className="text-gray-600 text-sm">
                                We conduct an in-depth analysis of your goals, coupled with market research, to craft a tailored blockchain solution.
                            </p>
                        </div>

                        <div className="w-[80%] mx-auto mb-4 shadow-lg lg:shadow-0 p-4 lg:absolute lg:top-0 lg:right-0 lg:w-80 lg:text-right">
                            <h3 className="text-lg font-semibold mb-1">Product Development & Testing</h3>
                            <p className="text-gray-600 text-sm">
                                Our experts design, develop, and test features and functionality to ensure your product exceeds quality standards.
                            </p>
                        </div>

                        <div className="w-[80%] mx-auto mb-4 shadow-lg p-4 lg:shadow-0 lg:absolute lg:bottom-0 lg:right-0 lg:w-80 lg:text-right">
                            <h3 className="text-lg font-semibold mb-1">Project Post Launch Support</h3>
                            <p className="text-gray-600 text-sm">
                                After launch, we provide ongoing support, monitoring, and optimization to meet evolving business needs.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
            <section className="lg:py-16 py-16 bg-white"  data-aos="fade-up" data-aos-delay="400">
                <div className="lg:max-w-7xl mx-auto px-4">
                    <div className="relative w-full"  data-aos="fade-right" data-aos-delay="100">
                        <img
                            src="https://www.vaival.com/wp-content/uploads/2024/05/Group-27207-scaled.webp"
                            alt="Blockchain development services CTA"
                            className="w-full h-auto lg:max-w-6xl mx-auto"
                        />

                        <div  data-aos="fade-left" data-aos-delay="100" className="absolute inset-0 flex items-center justify-center text-center px-4 py-3">
                            <div>
                                <h2 className="text-white lg:text-3xl md:text-xl font-bold leading-tight mb-1 lg:mb-6 drop-shadow-lg">
                                    Are you Looking to Innovate<br />Blockchain
                                </h2>
                                <a
                                    href="#calendly"
                                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-8 py-3 rounded-lg transition duration-300"
                                >
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlockchainDevelopmentProcess;
