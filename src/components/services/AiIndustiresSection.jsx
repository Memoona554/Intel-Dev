import React from 'react';

const industries = [
    { label: 'Gaming', icon: '🎮' },
    { label: 'E-commerce', icon: '🛒' },
    { label: 'Banking & Finance', icon: '🏦' },
    { label: 'Healthcare', icon: '🩺' },
    { label: 'Education', icon: '📚' },
    { label: 'Transport & Logistics', icon: '🚚' },
    { label: 'Retail & Consumer Goods', icon: '📦' },
    { label: 'Telecommunication', icon: '📡' },
    { label: 'Automotive', icon: '🚗' },
    { label: 'Energy', icon: '⚡' },
    { label: 'Manufacturing', icon: '🏭' },
    { label: 'Agriculture', icon: '🚜' },
];

const IndustriesSection = () => {
    return (
        <>
            <section className="bg-blue-600 py-16 px-4 text-white" data-aos="fade-down" data-aos-delay="100">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-10">
                        Industries That Our <span className="text-white font-bold">AI Development</span> Services Excel In
                    </h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
                        {industries.map((item, index) => (
                            <div
                                key={index}
                                className="bg-blue-500 border border-white rounded-lg p-6 w-full flex flex-col items-center justify-center hover:scale-105 transition-transform shadow-md text-white"
                            >
                                <div className="text-4xl mb-3">{item.icon}</div>
                                <p className="text-sm font-medium">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="bg-white py-16 px-4" data-aos="zoom-in" data-aos-delay="100">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
                            Unlock the True Potential <br /> of Artificial Intelligence
                        </h2>
                        <p className="text-gray-700 text-lg mb-6">
                            Don’t miss out on the transformative power of Artificial Intelligence.
                            We can help you reinvent a new era of operational efficiency for your business.
                        </p>
                        <a
                            href="#calendly"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
                        >
                            Talk to Our Consultants
                        </a>
                    </div>

                    <div className="flex justify-center">
                        <img
                            src="https://www.vaival.com/wp-content/uploads/2023/12/Group-15417.webp"
                            alt="Artificial Intelligence"
                            className="max-w-full h-auto"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default IndustriesSection;
