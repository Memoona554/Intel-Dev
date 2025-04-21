import React from 'react';

const HistorySection = () => {
    return (
        <section className="bg-white py-16" data-aos="fade-up" data-aos-delay="100">
            <div className="max-w-screen-xl mx-auto px-6">
                <div className="flex flex-col items-center text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        <strong>Our</strong> History
                    </h2>
                    <p className="text-lg mb-6">
                        Intel Devs is the partner of choice for entrepreneurs, SMEs, and major corporations. Since 2010, we’ve helped many businesses enhance their potential via custom software development, web3 & blockchain, dev-ops, design innovation, and consultancy.
                    </p>
                    <div className="w-full">
                        <img
                            src="https://www.vaival.com/wp-content/uploads/2023/12/Group-27354-scaled.webp"
                            alt="Our History"
                            className="w-full h-auto "
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HistorySection;
