import React from 'react';

const HireDjangoDevelopers = () => {
    const features = [
        {
            title: 'Engineering-Driven Approach',
            description:
                'Our Django engineers bring deep technical knowledge and a problem-solving mindset to architect scalable, maintainable, and secure web applications tailored to your enterprise needs.',
        },
        {
            title: 'Strategic Problem Solving',
            description:
                'We tackle business-critical challenges head-on. Our developers think beyond code—offering solutions that align with your growth roadmap and operational priorities.',
        },
        {
            title: 'Reliable Delivery Excellence',
            description:
                'Intel Devs is committed to engineering excellence. Our Django teams consistently deliver production-ready code with built-in reliability, performance, and scalability from day one.',
        },
        {
            title: 'Transparent Collaboration',
            description:
                'We prioritize open communication and real-time visibility into project milestones. Our teams stay fully aligned with your stakeholders, ensuring clarity and confidence at every stage.',
        },
    ];
    const models = [
        {
            title: 'Hour-based Hiring Model',
            description:
                'A flexible pay-as-you-go structure ideal for task-based work or on-demand engineering support. Perfect for agile environments and quick turnarounds.',
        },
        {
            title: 'Project-based Hiring Model',
            description:
                'A structured approach with predefined milestones and deliverables—ideal for full-cycle product development, from architecture to deployment.',
        },
    ];

    return (
        <>
            <section className="py-16 px-4 md:px-10 bg-white">
                <div className="max-w-7xl mx-auto text-center" data-aos="fade-left" data-aos-delay="100">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <strong>Hire Django Developers from</strong> Intel Devs for End-to-End Product Development
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto mb-12">
                        Our engagement models are designed for flexibility, speed, and alignment—helping you build digital products
                        faster with a team that integrates seamlessly into your tech ecosystem.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="text-left bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12">
                        <a
                            href="#calendly"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium px-8 py-3 rounded-full transition-colors duration-300"
                        >
                            Discuss Your Project
                        </a>
                    </div>
                </div>
            </section>
            <section className="py-16 px-4 md:px-10 bg-white">
                <div className="max-w-6xl mx-auto text-center" data-aos="fade-right" data-aos-delay="100">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <strong>Flexible Hiring Models To</strong> Meet Your
                        <br className="hidden md:block" /> Unique Development Needs
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto mb-12">
                        Intel Devs offers flexibility to ensure you get the most value from
                        your collaboration with our expert Django developers.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        {models.map((model, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                            >
                                <h3 className="text-xl font-semibold mb-2">{model.title}</h3>
                                <p className="text-gray-600">{model.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12">
                        <a
                            href="#calendly"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium px-8 py-3 rounded-full transition-colors duration-300"
                        >
                            Let’s Discuss Your Project
                        </a>
                    </div>
                </div>
            </section>
            <section className="py-16 px-4 bg-gray-100" data-aos="zoom-in" data-aos-delay="100">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                        Got a Django Project Idea?
                    </h3>
                    <p className="text-gray-600 mb-8">
                        Connect with our experts to build robust and scalable Django
                        solutions, tailored to your specific needs.
                    </p>
                    <a
                        href="#calendly"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium px-8 py-3 rounded-full transition-colors duration-300"
                    >
                        Hire Now
                    </a>
                </div>
            </section>
        </>
    );
};

export default HireDjangoDevelopers;
