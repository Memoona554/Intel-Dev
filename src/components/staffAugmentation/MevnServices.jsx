import React from "react";
import {
    FaCode,
    FaLayerGroup,
    FaWifi,
    FaExchangeAlt,
    FaPlug,
    FaHandsHelping,
} from "react-icons/fa";
import {
    FaTools,
    FaSyncAlt,
    FaServer,
    FaLock,
} from "react-icons/fa";
import { FaClock, FaProjectDiagram } from "react-icons/fa";

const mevnServices = [
    {
        title: "MEVN Stack Custom App Development",
        description:
            "Craft tailored web applications with our MEVN experts. With in-depth domain knowledge and functional expertise in web app development, our MEVN developers build solutions that cater to your business goals.",
        icon: <FaCode className="text-blue-600 text-4xl mx-auto mb-4" />,
    },
    {
        title: "Single-Page App Development",
        description:
            "Experience the fluidity of single-page applications (SPAs) with our MEVN specialists. We design and develop SPAs that offer dynamic user interactions, enhancing user engagement and overall satisfaction.",
        icon: <FaLayerGroup className="text-blue-600 text-4xl mx-auto mb-4" />,
    },
    {
        title: "Real-Time App Development",
        description:
            "Power your applications with real-time capabilities. Our MEVN developers create immersive real-time applications, ensuring your users stay connected and engaged with a seamless and secure web environment.",
        icon: <FaWifi className="text-blue-600 text-4xl mx-auto mb-4" />,
    },
    {
        title: "MEVN Stack Migration Services",
        description:
            "Seamlessly transition to MEVN Stack with our migration capabilities. Whether you’re upgrading or switching frameworks, our MEVN Stack developers ensure a smooth and efficient migration, maximizing performance of your system.",
        icon: <FaExchangeAlt className="text-blue-600 text-4xl mx-auto mb-4" />,
    },
    {
        title: "Third-Party API Integration",
        description:
            "Extend the functionality of your MEVN applications by integrating third-party APIs. Our full stack MEVN developers streamline the integration process, enhancing your application’s capabilities and providing a richer user experience.",
        icon: <FaPlug className="text-blue-600 text-4xl mx-auto mb-4" />,
    },
    {
        title: "MEVN Consulting and Support",
        description:
            "Gain strategic insights and reliable support from our MEVN full stack developers. From project planning to ongoing maintenance, our experts collaborate with you, ensuring your MEVN journey is not only successful but also well-supported.",
        icon: <FaHandsHelping className="text-blue-600 text-4xl mx-auto mb-4" />,
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
        name: 'Vue.js',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
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
        title: "In-depth MEVN Expertise",
        description:
            "Leverage the extensive knowledge and skills of our MEVN developers in MongoDB, Express.js, Vue.js, and Node.js. Tackle complex challenges with confidence, backed by a team well-versed in every aspect of MEVN development.",
        icon: <FaTools className="text-blue-600 text-4xl mb-4" />,
    },
    {
        title: "Agile Development Approach",
        description:
            "Our MEVN developers bring agility in your projects by following proven Agile methodologies. They respond swiftly to changes, ensuring continuous collaboration, and delivering high-quality results with an adaptive development approach.",
        icon: <FaSyncAlt className="text-blue-600 text-4xl mb-4" />,
    },
    {
        title: "DevOps",
        description:
            "Our skilled developers use DevOps best practices to streamline workflows, automate processes and ensure shorter time to market. By enhancing collaboration between development and IT operations, we ensure faster and more reliable feature releases.",
        icon: <FaServer className="text-blue-600 text-4xl mb-4" />,
    },
    {
        title: "Enhanced Security Integration",
        description:
            "Prioritize the security of your applications with our developers who integrate robust security measures. Implement secure coding practices, encryption, and authentication to fortify your applications against potential threats.",
        icon: <FaLock className="text-blue-600 text-4xl mb-4" />,
    },
];
const MEVNDevelopmentServices = () => {
    return (
        <>
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 text-center"  data-aos="fade-up" data-aos-delay="100">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <strong>Our MEVN Stack</strong> Development Services
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto mb-12">
                        As a leading MEVN stack development company, Vaival hires top MEVN stack developers proficient in the latest tools and technologies. Our developers exhibit adaptability, ready to learn and contribute to any business project.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {mevnServices.map((service, index) => (
                            <div
                                key={index}
                                className="text-left bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition"
                            >
                                {service.icon}
                                <h3 className="text-xl font-semibold mb-2 text-center">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 text-sm">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto px-4"  data-aos="fade-left" data-aos-delay="100">
                    <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
                        <strong>Tools & Technologies We Use for</strong> <br /> Mevn Stack Development
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
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 text-center"  data-aos="fade-down" data-aos-delay="100">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <strong>Hire Our MEVN Developers to</strong> Strengthen Your In-House Team
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto mb-12">
                        Our MEVN Stack developers, backed by in-depth industry expertise, can build unique features and functionalities for your applications to help you gain your business objectives and exposure.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
                        {features.map((item, index) => (
                            <div key={index} className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition">
                                <div className="text-center flex flex-row justify-center lg:gap-10 gap-3  items-center">
                                    {item.icon}
                                    <h3 className="text-xl font-semibold mb-2 text-center">{item.title}</h3>

                                </div>
                                <p className="text-gray-600 text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className=" py-12 px-4 md:px-8 bg-gray-100">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center"  data-aos="zoom-in" data-aos-delay="100">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            <strong>Flexible Hiring Models to</strong> Hire MEVN Developers
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Explore the versatility of our hiring models and choose the most
                            fitting engagement approach for your MEVN development requirements.
                        </p>
                        <a
                            href="#calendly"
                            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                        >
                            Get Started
                        </a>
                    </div>

                    <div className="space-y-8 ">
                        <div className="flex gap-4 items-start">
                            <FaClock className="text-blue-600 text-4xl shrink-0 mt-1" />
                            <div>
                                <h3 className="text-xl font-semibold mb-1">
                                    Hour-based Hiring Model
                                </h3>
                                <p className="text-gray-600">
                                    Choose our hour-based model if your projects have evolving
                                    requirements. You can pay for the actual hours worked, allowing
                                    you to maintain smooth development and cost-effectiveness.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <FaProjectDiagram className="text-blue-600 text-4xl shrink-0 mt-1" />
                            <div>
                                <h3 className="text-xl font-semibold mb-1">
                                    Project-based Hiring Model
                                </h3>
                                <p className="text-gray-600">
                                    Our project-based model is ideal for projects with clear
                                    milestones and timelines. This ensures that you can assign a
                                    fixed budget, providing transparency for successful project
                                    execution.
                                </p>
                            </div>
                        </div>
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
                        Our  MEVN development programmers have expertise in the latest versions of MEVN stack.
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
        </>
    );
};

export default MEVNDevelopmentServices;
