import React from 'react';
const laravelData = [
    {
        id: 1,
        title: 'Custom Laravel Web Development',
        description:
            'Our top Laravel developers build high-performing, feature-rich, and secure websites to elevate your brand’s digital presence. Our Laravel experts can help you convert your visitors into loyal customers by developing eye-catching and user-friendly web solutions.',
    },
    {
        id: 2,
        title: 'ECommerce Solutions with Laravel',
        description:
            "We develop secure and scalable Laravel-based eCommerce platforms with customized features, payment gateways, and user-centric interfaces. ",
    },
    {
        id: 3,
        title: 'API and Module Development',
        description:
            "Enhance the functionality of your existing Laravel applications with our API and module development services. Our developers specialize in designing and implementing tailor-made solutions to enhance connectivity, interoperability, and scalability of your systems.",
    },
    {
        id: 4,
        title: 'Porting and Migration',
        description:
            'Hire Laravel programmes to migrate your legacy applications built on a PHP framework or Custom PHP codebase to the latest Laravel framework hassle-free. Our Laravel developers ensure glitch-free and secure transition, while preserving data integrity. ',
    },
    {
        id: 5,
        title: 'Maintenance and Testing',
        description:
            'Our dedicated team of top Laravel developers monitor, update, and optimize your systems to ensure the sustenance of your website. Furthermore, our developers follow rigorous testing protocols to guarantee the delivery of bug-free and high-performing solutions.',
    },
    {
        id: 6,
        title: 'Laravel CMS Development',
        description:
            'Whether you need a simple blog or a complex content management system, we deliver flexible Laravel CMS solutions that are easy to manage and extend.',
    },
];

const LaravelServices = () => {
    return (
        <>
            <div className='py-16' style={{
                backgroundImage: "url('/industry-bg.webp')",

            }}>
                <div className="text-center mb-8 bg-no-repeat" data-aos="fade-up" data-aos-delay="100" >
                    <h2 className="text-3xl uppercase font-bold">
                        <strong>Our Exhaustive Laravel Services For Your <br />
                            Unique Project Demands</strong>
                    </h2>
                </div>

                <div className="text-center mb-12" data-aos="fade-up" data-aos-delay="200">
                    <p className="text-lg max-w-5xl mx-auto text-gray-700">
                        Hire Laravel Developers from Intel Devs to build bespoke solutions tailored to meet the distinctive demands of your projects. Our comprehensive range of Laravel web development services cover everything, helping you transform your ideas into reality.                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto" data-aos="fade-up" data-aos-delay="300">
                    {laravelData.map((laravel) => (
                        <div
                            key={laravel.id}
                            className="relative w-full  rounded-lg overflow-hidden transition-all duration-300 bg-white shadow-lg hover:scale-105 group"
                        >
                            <div className="p-6">
                                <div className="flex items-center gap-4 mb-4">

                                    <h3 className="text-xl font-semibold text-gray-800">{laravel.title}</h3>
                                </div>
                                <p className="text-gray-600">{laravel.description}</p>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 h-2 bg-blue-600 opacity-100 transition-opacity duration-300"></div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-10">
                    <a href='#calendly' className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
                        DISCUSS YOUR PROJECT
                    </a>
                </div>
            </div>
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto text-center mb-12" data-aos="zoom-in" data-aos-delay="100">
                    <h2 className="text-3xl font-bold text-gray-800">
                        <strong>Choose Intel Devs to Fulfill</strong> Your Laravel Development Needs
                    </h2>
                </div>

                <section className="max-w-7xl  mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

                    <div className="bg-white relative p-6 rounded-xl shadow-md text-center">
                    <div className="absolute top-0 left-0 right-0 h-2 rounded-lg bg-blue-600 opacity-100 transition-opacity duration-300"></div>

                        <h4 className="text-xl font-semibold text-gray-800 mb-4">Extensive Laravel Expertise</h4>
                        <p className="text-gray-600">
                            Rely on our team of seasoned Laravel developers equipped with extensive expertise. We bring years of hands-on experience, staying ahead of the curve with the latest Laravel tools and advancements.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl relative shadow-md text-center">
                    <div className="absolute top-0 left-0 right-0 h-2 rounded-lg bg-green-600 opacity-100 transition-opacity duration-300"></div>

                        <h4 className="text-xl font-semibold text-gray-800 mb-4">Customization</h4>
                        <p className="text-gray-600">
                            We know that your project is unique. Our Laravel web development is designed to adapt and evolve according to your specific requirements, ensuring a solution that perfectly aligns with your vision.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl relative shadow-md text-center">
                    <div className="absolute top-0 left-0 right-0 h-2 rounded-lg bg-blue-600 opacity-100 transition-opacity duration-300"></div>

                        <h4 className="text-xl font-semibold text-gray-800 mb-4">Cost-Effective Solutions</h4>
                        <p className="text-gray-600">
                            Get cost-effective Laravel development without compromising on quality. Our solutions are optimized to deliver maximum value for your budget, making excellence in Laravel development accessible to all.
                        </p>
                    </div>
                </section>

                <section className=" max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    <div className="bg-white p-6 rounded-xl relative shadow-md text-center">
                    <div className="absolute top-0 left-0 right-0 h-2 rounded-lg bg-blue-600 opacity-100 transition-opacity duration-300"></div>

                        <h4 className="text-xl font-semibold text-gray-800 mb-4">Fast-Track Delivery</h4>
                        <p className="text-gray-600">
                            Time is of the essence, and our developers prioritize fast-track delivery for your projects. Our agile development approach ensures swift and efficient project timelines, allowing you to meet even the stringent deadlines.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl relative shadow-md text-center">
                    <div className="absolute top-0 left-0 right-0 h-2 rounded-lg bg-green-600 opacity-100 transition-opacity duration-300"></div>

                        <h4 className="text-xl font-semibold text-gray-800 mb-4">Client Satisfaction</h4>
                        <p className="text-gray-600">
                            Our developers prioritize open communication, transparent processes, and a client-centric approach. We are committed to exceeding your expectations to foster a partnership that goes beyond just development.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl relative shadow-md text-center">
                    <div className="absolute top-0 left-0 right-0 h-2 rounded-lg bg-blue-600 opacity-100 transition-opacity duration-300"></div>

                        <h4 className="text-xl font-semibold text-gray-800 mb-4">Support & Maintenance</h4>
                        <p className="text-gray-600">
                            Extend the life and reliability of your Laravel applications with our dedicated support and maintenance services. We ensure post-deployment support, providing timely updates, troubleshooting, and ongoing optimization.
                        </p>
                    </div>
                </section>

                <section className="text-center mt-12">
                    <a
                        href="#calendly"
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition duration-300"
                    >
                        Contact Us Now
                    </a>
                </section>
            </section>
        </>

    );
};

export default LaravelServices;
