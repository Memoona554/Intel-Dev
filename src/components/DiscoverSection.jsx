import React from "react";

const DiscoverSection = () => {
    return (
        <section className="w-full px-4 bg-white py-16" >
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="100">
                <div className="flex flex-col justify-center space-y-6 px-6 lg:px-0" data-aos="fade-up" data-aos-delay="200">
                    <h2 className="text-3xl  text-gray-900">
                        <strong>Discover the Essence</strong>
                        <br />
                        <strong>of Who We Are</strong>
                    </h2>
                    <p className="text-lg text-gray-700">
                        Intel Devs is the partner of choice for entrepreneurs, SMEs, and large enterprises. Since 2018, we’ve helped businesses unlock their potential through custom software development, Web3 & blockchain, DevOps, design innovation, and IT consulting services.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16" data-aos="fade-up" data-aos-delay="300">
                    <div className="flex items-center flex-col gap-4 justify-center space-x-6">
                        <img
                            src="/essence_2.jpg"
                            alt="software development services"
                            className="lg:w-full w-82 h-auto object-cover rounded-md"
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
                            className="lg:w-full w-82 h-auto object-cover rounded-md"
                            data-aos="fade-up" data-aos-delay="500"
                        />
                    </div>
                </div>
            </div>
        </section>



    );
};

export default DiscoverSection;
