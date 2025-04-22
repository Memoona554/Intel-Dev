import React from "react";

const HirePhpDevelopers = () => {
    const models = [
        {
            title: "Hour-Based Hiring Model",
            description:
                "Ideal for projects with dynamic or evolving requirements. Scale your development resources up or down as needed, offering flexibility and cost-efficiency throughout your project lifecycle.",
            image: "https://www.vaival.com/wp-content/uploads/2024/04/sideicon1.webp",
        },
        {
            title: "Project-Based Hiring Model",
            description:
                "Perfect for projects with a well-defined scope and timeline. We allocate a dedicated team focused on delivering your solution within agreed parameters, ensuring predictable results and accountability.",
            image: "https://www.vaival.com/wp-content/uploads/2024/04/sideicon2-1.webp",
        },
    ];
    const features = [
        {
            title: "Highly Skilled PHP Developers",
            description:
                "Leverage the expertise of our PHP developers who write clean, efficient, and scalable code. At Intel Devs, our team stays up to date with the latest industry trends and best practices to deliver high-performance, future-ready solutions.",
        },
        {
            title: "Expertise in Leading PHP Frameworks",
            description:
                "Our developers possess deep knowledge of popular PHP frameworks. This ensures streamlined development, improved maintainability, and rapid time-to-market for your applications.",
        },
        {
            title: "Proficiency in SQL/MySQL Databases",
            description:
                "Build data-driven applications with confidence. Our developers are proficient in SQL and MySQL, enabling robust database architecture, optimized queries, and seamless backend integration tailored to your project’s needs.",
        },
        {
            title: "Strong Front-End Integration Skills",
            description:
                "Our PHP developers are also well-versed in HTML, CSS, and JavaScript, ensuring smooth integration between frontend and backend components. This full-stack proficiency reduces bottlenecks and accelerates the development lifecycle.",
        },
    ];

    return (
        <>
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4" data-aos="zoom-in" data-aos-delay="100">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-black">
                            <strong>Access Extensive PHP Expertise by Hiring Developers from Intel Devs</strong>
                        </h2>
                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                            Kickstart your project with the exceptional capabilities of our dedicated PHP developers. At Intel Devs, we engineer scalable solutions that align with your business goals.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition duration-300">
                                <h4 className="text-lg font-semibold text-blue-700 mb-3">{feature.title}</h4>
                                <p className="text-gray-700 text-sm">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4" data-aos="fade-down" data-aos-delay="100">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-black">
                            <strong>Flexible Hiring Models</strong> For Your Unique Project Needs
                        </h2>
                        <p className="text-gray-800 mt-4 max-w-2xl mx-auto">
                            Explore our adaptable hiring models designed to cater to your project’s specific requirements:
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-10">
                        {models.map((model, idx) => (
                            <div key={idx} className="flex shadow rounded-md items-center text-center">
                                <img
                                    src={model.image}
                                    alt={model.title}
                                    className="w-28 h-auto mb-6 lg:block hidden"
                                />
                                <h3 className="text-xl font-semibold text-blue-700 mb-3">
                                    {model.title}
                                </h3>
                                <p className="text-gray-700 max-w-md">{model.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <a
                            href="/contact-us"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium px-8 py-3 rounded-lg transition duration-300"
                        >
                            Get Started
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HirePhpDevelopers;
