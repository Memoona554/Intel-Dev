import React from 'react';

const services = [
    {
        title: 'MEAN Stack Web Development',
        description:
            'With hands-on industry experience, our MEAN stack developers for hire deliver enterprise-ready web applications tailored to your business needs. Whether you want to upgrade your existing app or build a new one from scratch, our developers can do it for you.',
        icon: '🖥️',
    },
    {
        title: 'MEAN Stack eCommerce Development',
        description:
            'Power your online business with our MEAN Stack eCommerce solutions. Benefit from a scalable and secure platform that integrates your business processes and provides a frictionless shopping experience for your customers.',
        icon: '🛒',
    },
    {
        title: 'MEAN Stack ERP Development',
        description:
            'Our Mean full stack developers design and implement customized ERP solutions that are cost-effective and run seamlessly across devices. Our solutions enhance efficiency, optimize workflows, and provide real-time insights for informed decision-making.',
        icon: '🗃️',
    },
    {
        title: 'API Development & Integration',
        description:
            'Our mean stack developers create robust APIs and seamlessly integrate them into your system, ensuring seamless communication and data exchange.',
        icon: '🔌',
    },
    {
        title: 'Migration & Porting',
        description:
            'Migrate your legacy business applications to MEAN Stack-based frameworks for improved performance and scalability.',
        icon: '🔄',
    },
    {
        title: 'Testing & QA',
        description:
            'Ensure the reliability and security of your web applications with the help of our full stack MEAN developers and their expertise in testing and quality assurance.',
        icon: '🧪',
    },
    {
        title: 'MEAN Consulting Services',
        description:
            'Leverage our MEAN Stack consulting services to make informed decisions about your development projects.',
        icon: '👨‍💼',
    },
];
const tools = [
    {
        name: 'MongoDB',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        imgAlt: 'MongoDB',
        imgWidth: 73,
        imgHeight: 160,
    },
    {
        name: 'Angular',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
        imgAlt: 'React',
        imgWidth: 173,
        imgHeight: 169,
    },
    {
        name: 'Node.js',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        imgAlt: 'Node.js',
        imgWidth: 144,
        imgHeight: 88,
    },
    {
        name: 'Express.js',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
        imgAlt: 'Express.js',
        imgWidth: 310,
        imgHeight: 118,
    },
];
const features = [
    {
        title: 'Expert & Certified Developers',
        description:
            'Hire top MEAN Stack developers who bring a wealth of expertise and industry certification to your projects. Our developers undergo rigorous training and possess the skills needed to tackle complex development challenges.',
    },
    {
        title: 'Process-Driven Development',
        description:
            'Benefit from our process-driven development methodology that ensures efficiency and quality. Our structured approach to development minimizes risks, enhances collaboration, and results in the timely delivery of high-quality MEAN Stack applications.',
    },
    {
        title: 'Flexible Engagement Model',
        description:
            'Intel Devs offers flexible engagement models, including hour-based and project-based options tailored to your unique business and project needs. We allow you to optimize resource allocation based on your development requirements.',
    },
];
export default function MeanStackServices() {
    return (
        <>
            <div className="bg-white py-16 px-4 sm:px-8 lg:px-16" data-aos="zoom-in" data-aos-delay="100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold">
                            Our <span className="text-blue-600">MEAN Stack</span> Development Services
                        </h2>
                        <p>
                            Utilize our MEAN Stack development services to develop dynamic and robust web applications.
                            Our skilled team is here to turn your ideas into reality.
                        </p>
                    </div>
                    <div className="lg:flex lg:space-x-8">

                        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="bg-white  rounded-xl shadow-sm p-5 flex flex-col gap-2 hover:shadow-md transition-shadow"
                                >
                                    <div className="text-3xl">{service.icon}</div>
                                    <h3 className="text-md font-bold">{service.title}</h3>
                                    <p className="text-sm text-gray-600">{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-center mt-10">
                        <a href='#calendly' className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
                            TALK TO OUR EXPERTS
                        </a>
                    </div>
                </div>
            </div>
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4" data-aos="fade-left" data-aos-delay="100">
                    <h2 className="text-2xl sm:text-3xl  text-center mb-10">
                        <strong>Tools & Technologies We Use for</strong> <br /> Mean Stack Development
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {tools.map((tool, index) => (
                            <div key={index} className="flex flex-col items-center text-center">
                                <img
                                    src={tool.img}
                                    alt={tool.imgAlt}

                                    className="mb-4 h-15"
                                />
                                <p className="text-lg font-medium">{tool.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="bg-white py-16 px-4 sm:px-8 lg:px-20">
                <div className="max-w-7xl mx-auto" data-aos="fade-left" data-aos-delay="100">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold">
                            <strong>Hire Dedicated MEAN Stack Developers</strong> in 3 Easy Steps
                        </h2>
                        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                            Our MEAN Stack developers, backed by in-depth industry expertise, can build unique features
                            and functionalities for your applications to help you gain your business objectives and exposure.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 shadow-sm rounded-xl p-6 hover:shadow-md transition-shadow"
                            >
                                <h3 className="text-xl font-semibold mb-3 text-blue-700">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-16 ">
                <div className="container mx-auto px-4 " data-aos="fade-up" data-aos-delay="100">
                    <div className="max-w-3xl mx-auto text-center bg-blue-600 p-6 rounded-lg">
                        <h3 className="text-3xl md:text-4xl text-white font-semibold mb-4">
                            Build Robust & Feature-Rich Applications
                        </h3>
                        <p className="text-white mb-6">
                            Build all types of Mean Stack applications by utilizing the expertise of our industry-leading developers.
                        </p>
                        <a
                            href="#calendly"
                            className="inline-block px-8 py-3 bg-white text-blue-600 hover:text-white text-lg rounded-lg hover:bg-blue-700 transition"
                        >
                            HIRE NOW
                        </a>
                    </div>
                </div>
            </section>
            <section className="bg-white py-16 px-4 lg:px-12">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Vaival’s Flexible and Affordable Hiring Models
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                        We understand that every project is unique. That’s why we offer
                        flexible and affordable hiring models to suit your specific needs.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="relative">
                            <img
                                src="/mean-model-step-1.webp"
                                alt="Hour-based Hiring"
                                className="w-full "
                            />
                            <div className="absolute top-6 left-6">
                                
                            </div>
                            <div className="absolute bottom-10 left-10   p-4 rounded-lg max-w-xs ">
                                <h3 className="text-xl font-semibold mb-2">Hour-based Hiring</h3>
                                <p className="text-gray-600 text-sm">
                                    The hour-based hiring model offers complete flexibility. It is
                                    ideal for projects with dynamic scopes and evolving
                                    requirements. Pay for the actual time spent on development
                                    tasks.
                                </p>
                            </div>
                        </div>

                        <div className="relative">
                            <img
                                src="/mean-model-step-2.webp"
                                alt="Project-based Hiring"
                                className="w-full "
                            />
                            <div className="absolute top-6 left-6">
                               
                            </div>
                            <div className="absolute bottom-10 left-10 p-4 rounded-lg max-w-xs">
                                <h3 className="text-xl font-semibold mb-2">Project-based Hiring</h3>
                                <p className="text-gray-600 text-sm">
                                    Define project scopes, timelines, and costs upfront, allowing
                                    for a structured approach to development while maintaining
                                    budgetary control with our project-based hiring model.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
