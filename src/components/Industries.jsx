import React from 'react';
import {
    FaShoppingCart,
    FaChalkboardTeacher,
    FaTags,
} from 'react-icons/fa';
const industriesData = [
    {
        id: 1,
        title: 'E-commerce',
        description:
            'Prepare your e-commerce business with seamless automation and customer engagement for platforms like Shopify, Magento, and others to thrive in the digital marketplace.',
        icon: <FaShoppingCart className="text-blue-600 w-9 h-9" />,
    },
    {
        id: 4,
        title: 'Education',
        description:
            "Enhancing education through innovative digital solutions that improve learning and administrative experiences.",
        icon: <FaChalkboardTeacher className="text-yellow-600 w-9 h-9" />,
    },
   
    {
        id: 7,
        title: 'Retail & Consumer Goods',
        description:
            'Maximize sales and eliminate inefficiencies to drive customer satisfaction and business growth by unifying your data with our expertise in custom software development.',
        icon: <FaTags className="text-pink-600 w-9 h-9" />,
    },
    
    
    
   
];

const IndustryList = () => {
    return (
        <>
        <div className='py-16' style={{
                backgroundImage: "url('/industry-bg.webp')",

            }}>
                <div className="text-center mb-8 bg-no-repeat" data-aos="fade-up" data-aos-delay="100" >
                <h2 className="text-3xl uppercase font-bold">
                    <strong>Industries</strong> We Serve
                </h2>
            </div>

            <div className="text-center mb-12" data-aos="fade-up" data-aos-delay="200">
                <p className="text-lg text-gray-700">
                    Discover the transformative potential of custom software development across diverse industries customized to solve hurdles for e-commerce stakeholders.
                </p>
            </div>
            <div className="flex flex-wrap justify-center gap-8 p-6" data-aos="fade-up" data-aos-delay="300">
                {industriesData.map((industry) => (
                    <div
                        key={industry.id}
                        className="relative w-full sm:w-[300px] bg-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:bg-white hover:shadow-lg hover:scale-105 group"
                    >
                        <div className="p-6">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="industry-icon">
                                    {industry.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800">{industry.title}</h3>
                            </div>
                            <p className="text-gray-600">{industry.description}</p>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-2 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                ))}
            </div>
            </div>
            
        </>

    );
};

export default IndustryList;
