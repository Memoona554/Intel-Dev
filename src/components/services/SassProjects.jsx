import React from 'react';

const projects = [
    {
        title: 'Vulcan Forged',
        subtitle: 'Web3 Gaming Ecosystem',
        image: 'https://www.vaival.com/wp-content/uploads/2024/09/Mask-group.png',
        tags: ['.Net', 'PostgreSQL'],
    },
    {
        title: 'Elysium',
        subtitle: 'Layer 1 Blockchain',
        image: 'https://www.vaival.com/wp-content/uploads/2024/09/Mask-group-1.png',
        tags: ['Rust/Mern', 'Solidity'],
    },
    {
        title: 'CareCart',
        subtitle: 'Shopify Apps Suite',
        image: 'https://www.vaival.com/wp-content/uploads/2024/09/Mask-group-2.png',
        tags: ['Codeignitor', 'MySQL'],
    },
    {
        title: 'Cartzy',
        subtitle: 'SAAS Platform',
        image: 'https://www.vaival.com/wp-content/uploads/2024/09/Mask-group-4.png',
        tags: ['Laravel', 'MySQL'],
    },
    {
        title: 'SENTI PAY',
        subtitle: 'Crypto Mobile App',
        image: 'https://www.vaival.com/wp-content/uploads/2024/09/Mask-group-5.png',
        tags: ['Angular', 'MySQL'],
    },
    {
        title: 'Aimy',
        subtitle: 'Web App',
        image: 'https://www.vaival.com/wp-content/uploads/2024/09/Rectangle-8701.png',
        tags: ['Java', 'Node JS'],
    },
];
const ProjectCard = ({ title, subtitle, image, tags }) => (
    <div className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300">
        <img src={image} alt={title} className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-blue-900 bg-opacity-40 transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-10" />

        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white p-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-xl font-bold mb-1">{title}</p>
            <p className="mb-3">{subtitle}</p>
            <div className="flex flex-wrap gap-2 justify-center">
                {tags.map((tag, idx) => (
                    <span
                        key={idx}
                        className="bg-white text-black text-sm font-medium px-3 py-1 rounded-full"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </div>
);


const SaaSProjects = () => {
    return (
        <section className="py-16 px-4 bg-white" data-aos="fade-up" data-aos-delay="100">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-4xl font-bold">
                    A Look at Our <span className="text-blue-600">SaaS</span> Projects
                </h2>
            </div>
            <div className=" lg:w-[70%] lg:mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((proj, idx) => (
                    <ProjectCard key={idx} {...proj} />
                ))}
            </div>
        </section>
    );
};

export default SaaSProjects;
