import React from 'react';

const MernDevelopers = () => {
    const features = [
        {
            title: 'Full Range of MERN',
            description:
                'From MongoDB to Node Js, our expert developers cover the full range of MERN Stack to ensure comprehensive solutions for your projects as per your business need.',
        },
        {
            title: 'Full Stack Proficiency',
            description:
                'Our full Stack MERN developers are well-versed in both frontend (React Js) and backend (Node Js, Express Js) technologies, providing end-to-end development capabilities.',
        },
        {
            title: 'Technical Expertise in MERN',
            description:
                'Our developers bring in-depth technical knowledge and hands-on experience in MERN Stack, ensuring the highest standards of code quality and performance.',
        },
        {
            title: 'Scalability & Flexibility',
            description:
                'Hire MERN full stack developers who can adapt to changing project requirements. Our experts create scalable and flexible solutions that can evolve with business needs.',
        },
        {
            title: 'Continuous Reporting',
            description:
                'We keep you in the loop with regular and transparent reporting. Stay informed about the progress, milestones, and any potential adjustments throughout the development lifecycle.',
        },
        {
            title: 'On-Time Delivery',
            description:
                'Our utmost priority is to complete the project on time. We ensure that the deadlines are being met and that your projects are delivered on schedule without compromising on quality.',
        },
    ];

    return (
        <>
            <section className="px-4 py-12 md:px-8 lg:px-20 bg-blue-600">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-semibold mb-4">
                        <strong>Get Access to Full Technical Expertise with</strong>{' '}
                        <span className="text-primary">Intel Devs MERN Stack Developers</span>
                    </h2>
                    <p className="text-white mb-10">
                        Unlock the full potential of MERN Stack development with Intel Devs
                        dedicated <br className="hidden md:inline" />
                        team. Our MERN Stack developers offer
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 text-sm">{feature.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12">
                        <a
                            href="#calendly"
                            className="inline-block bg-white text-black hover:text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                        >
                            Hire MERN Stack Developer Now
                        </a>
                    </div>
                </div>
            </section>
            <section className="py-16 ">
                <div className="container mx-auto px-4 " data-aos="fade-up" data-aos-delay="100">
                    <div className="max-w-3xl mx-auto text-center bg-blue-600 p-6 rounded-lg">
                        <h3 className="text-3xl md:text-4xl text-white font-semibold mb-4">
                        Hire MERN Stack Developer for
                        <br /> Next-Gen Solutions
                        </h3>
                        <p className="text-white mb-6">
                            Reach out to us to hire the top  talent Developer
                        </p>
                        <a
                            href="#calendly"
                            className="inline-block px-8 py-3 text-xl bg-white text-blue-600 hover:text-white  rounded-lg hover:bg-blue-700 transition"
                        >
                            CONNECT NOW
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MernDevelopers;
