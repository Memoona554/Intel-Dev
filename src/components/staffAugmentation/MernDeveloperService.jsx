import React from "react";

const services = [
    {
        title: "Custom CMS Development",
        description:
            "Empower your content management with our custom CMS solutions. Our MERN stack developers build intuitive and scalable solutions to streamline your content workflow.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="58" viewBox="0 0 76 58" fill="none">
                <path
                    d="M24.12 57.96C10.36 57.96 0.12 47.48 0.12 29C0.12 10.52 10.36 0.039999 24.12 0.039999C37.96 0.039999 48.12 10.52 48.12 29C48.12 47.48 37.96 57.96 24.12 57.96ZM24.12 47C30.6 47 35.08 41.72 35.08 29C35.08 16.28 30.6 11 24.12 11C17.72 11 13.24 16.28 13.24 29C13.24 41.72 17.72 47 24.12 47ZM51.3881 0.999996H75.5481V57H62.5881V11.4H51.3881V0.999996Z"
                    fill="#2169F7"
                    fillOpacity="0.4"
                />
            </svg>
        ),
    },
    {
        title: "Web App Development",
        description:
            "Transform your ideas into powerful web applications. Our developers leverage the MERN Stack to create responsive, feature-rich, and user-friendly web experiences for your users.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="58" viewBox="0 0 96 58" fill="none">
                <path
                    d="M24.12 57.96C10.36 57.96 0.12 47.48 0.12 29C0.12 10.52 10.36 0.039999 24.12 0.039999C37.96 0.039999 48.12 10.52 48.12 29C48.12 47.48 37.96 57.96 24.12 57.96ZM24.12 47C30.6 47 35.08 41.72 35.08 29C35.08 16.28 30.6 11 24.12 11C17.72 11 13.24 16.28 13.24 29C13.24 41.72 17.72 47 24.12 47ZM71.7081 46.44H95.7881V57H53.4681V48.6L75.0681 28.2C80.0281 23.48 80.9081 20.6 80.9081 17.88C80.9081 13.48 77.8681 10.92 71.9481 10.92C67.1481 10.92 63.0681 12.76 60.3481 16.52L50.9081 10.44C55.2281 4.12 63.0681 0.039999 73.1481 0.039999C85.6281 0.039999 93.9481 6.44 93.9481 16.6C93.9481 22.04 92.4281 27 84.5881 34.28L71.7081 46.44Z"
                    fill="#23C994"
                    fillOpacity="0.5"
                />
            </svg>
        ),
    },
    {
        title: "Single-Page App Development",
        description:
            "Build seamless single-page applications to enhance your user engagement. Our MERN Stack expertise ensures fast-loading, interactive, and intuitive SPAs tailored to your requirements.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="58" viewBox="0 0 95 58" fill="none">
                <path
                    d="M24.12 57.96C10.36 57.96 0.12 47.48 0.12 29C0.12 10.52 10.36 0.039999 24.12 0.039999C37.96 0.039999 48.12 10.52 48.12 29C48.12 47.48 37.96 57.96 24.12 57.96ZM24.12 47C30.6 47 35.08 41.72 35.08 29C35.08 16.28 30.6 11 24.12 11C17.72 11 13.24 16.28 13.24 29C13.24 41.72 17.72 47 24.12 47ZM79.7956 23.8C89.8756 25.4 94.9956 31.64 94.9956 39.88C94.9956 49.32 87.7156 57.96 71.7956 57.96C63.9556 57.96 55.8756 55.8 50.4356 51.96L55.4756 42.04C59.7156 45.24 65.6356 47.08 71.4756 47.08C77.9556 47.08 81.9556 44.44 81.9556 39.88C81.9556 35.64 78.8356 33 71.4756 33H65.5556V24.44L77.0756 11.4H53.2356V0.999996H92.4356V9.4L79.7956 23.8Z"
                    fill="#2169F7"
                    fillOpacity="0.4"
                />
            </svg>
        ),
    },
    {
        title: "MERN Stack Ecommerce Development",
        description:
            "Hire MERN Stack developers to boost your online presence. We help you create scalable ecommerce platforms with secure payments gateways and custom shopping cart functionality.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="58" viewBox="0 0 106 58" fill="none"><path d="M24.12 57.96C10.36 57.96 0.12 47.48 0.12 29C0.12 10.52 10.36 0.039999 24.12 0.039999C37.96 0.039999 48.12 10.52 48.12 29C48.12 47.48 37.96 57.96 24.12 57.96ZM24.12 47C30.6 47 35.08 41.72 35.08 29C35.08 16.28 30.6 11 24.12 11C17.72 11 13.24 16.28 13.24 29C13.24 41.72 17.72 47 24.12 47ZM105.697 34.68V45.24H96.5769V57H83.9369V45.24H53.7769V36.52L80.1769 0.999996H93.7769L69.2969 34.68H84.3369V24.2H96.5769V34.68H105.697Z" fill="#23C994" fill-opacity="0.5"></path></svg>
        ),
    },
    {
        title: "Real-Time App Development",
        description:
            "Get secure real-time apps that allow users to perform seamless real-time communication and collaboration. We craft apps that deliver live updates and interactions for a dynamic experience.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="58" viewBox="0 0 97 58" fill="none"><path d="M24.12 57.96C10.36 57.96 0.12 47.48 0.12 29C0.12 10.52 10.36 0.039999 24.12 0.039999C37.96 0.039999 48.12 10.52 48.12 29C48.12 47.48 37.96 57.96 24.12 57.96ZM24.12 47C30.6 47 35.08 41.72 35.08 29C35.08 16.28 30.6 11 24.12 11C17.72 11 13.24 16.28 13.24 29C13.24 41.72 17.72 47 24.12 47ZM73.6169 22.04C90.1769 22.04 96.7369 29.48 96.7369 39.4C96.7369 49.32 89.4569 57.96 73.4569 57.96C65.6969 57.96 57.5369 55.8 52.0969 51.96L57.2169 42.04C61.4569 45.24 67.2969 47.08 73.1369 47.08C79.6169 47.08 83.6169 44.36 83.6169 39.8C83.6169 35.4 80.7369 32.52 70.5769 32.52H56.2569L59.1369 0.999996H93.2969V11.4H69.9369L69.0569 22.04H73.6169Z" fill="#2169F7" fill-opacity="0.4"></path></svg>),
    },
    {
        title: "App Maintenance & Support",
        description:
            "Ensure the longevity and optimal performance of your apps. Our MERN full stack developer team provides timely maintenance, updates, and troubleshooting for a hassle-free experience.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="58" viewBox="0 0 101 58" fill="none"><path d="M24.12 57.96C10.36 57.96 0.12 47.48 0.12 29C0.12 10.52 10.36 0.039999 24.12 0.039999C37.96 0.039999 48.12 10.52 48.12 29C48.12 47.48 37.96 57.96 24.12 57.96ZM24.12 47C30.6 47 35.08 41.72 35.08 29C35.08 16.28 30.6 11 24.12 11C17.72 11 13.24 16.28 13.24 29C13.24 41.72 17.72 47 24.12 47ZM81.3769 21.88C92.1769 21.88 100.657 28.76 100.657 39.32C100.657 50.76 91.2969 57.96 79.4569 57.96C64.0169 57.96 54.4169 48.28 54.4169 30.2C54.4169 10.84 66.0969 0.039999 82.9769 0.039999C88.8969 0.039999 94.6569 1.4 98.5769 3.88L93.7769 13.4C90.6569 11.32 87.0569 10.6 83.2969 10.6C73.9369 10.6 67.9369 16.12 67.5369 26.84C70.8169 23.56 75.5369 21.88 81.3769 21.88ZM78.7369 48.28C84.2569 48.28 88.0969 45.08 88.0969 39.96C88.0969 34.84 84.3369 31.56 78.5769 31.56C72.8969 31.56 68.8969 35.08 68.8969 39.96C68.8969 44.76 72.4969 48.28 78.7369 48.28Z" fill="#23C994" fill-opacity="0.5"></path></svg>),
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
        name: 'React',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
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

const MernDeveloperService = () => {
    return (
        <>
            <section className="w-full py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 text-center" data-aos="fade-up" data-aos-delay="100">
                    <h2 className="text-3xl md:text-4xl  mb-12">
                        <strong>Our MERN Stack  Development Services</strong> 
                    </h2>
                    <p className="py-4">Hire dedicated MERN Stack developers to unlock a spectrum of tailored solutions for your business. Our experts excel in a range of services designed to meet your specific needs:</p>
                    <div className="grid gap-10 md:grid-cols-3">
                        {services.map((service, index) => (
                            <div key={index} className="flex shadow-xl p-6 rounded-lg flex-col items-center text-left">
                                <div className="flex lg:gap-4 gap-2 lg:mb-0 mb-2  items-center  flex-col lg:flex-row">
                                    <div className="mb-4">{service.icon}</div>
                                    <h3 className="text-xl font-semibold mb-2 text-center ">{service.title}</h3>
                                </div>
                                <p className="text-gray-600 text-sm text-center lg:text-left">{service.description}</p>
                            </div>
                        ))}
                    </div>
                    <a
                        href="#calendly"
                        className="inline-block px-8 py-3 mt-7 bg-blue-700 text-white text-lg font-semibold rounded-full hover:bg-blue-800 transition"
                    >
                        TALK TO OUR EXPERTS
                    </a>
                </div>
            </section>
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
                        <strong>Tools & Technologies We Use for</strong> <br /> <strong>Mern Stack Development</strong>
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

        </>
    );
};

export default MernDeveloperService;
