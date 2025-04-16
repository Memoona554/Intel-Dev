import React from "react";

const XANAInfo = () => {
    const techStack = [

        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: " Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: " React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: " Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: " MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: " Solidity", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg" },
        { name: " Amazon Web Services ", logo: "https://www.vaival.com/wp-content/uploads/2024/07/download-28-1.webp" },

    ];
    return (
        <>
            <section className="py-12 lg:py-20 px-4 md:px-8 lg:px-16" data-aos="fade-up" data-aos-delay="100">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
                    <div className="w-full md:w-1/2" data-aos="fade-left" data-aos-delay="200">
                        <img
                            src="https://www.vaival.com/wp-content/uploads/2024/01/Group-27681-1.webp"
                            alt="Float Funnel"
                            className="w-full h-auto "
                        />
                    </div>

                    <div className="w-full md:w-1/2" data-aos="fade-right" data-aos-delay="300">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Overview</h2>
                        <p className="text-gray-600 text-lg">
                            XANA is a next-generation Web 3.0 Metaverse platform that integrates artificial intelligence, social networking, and decentralized finance (SocialFi) to create a fully immersive and scalable digital environment. Designed to accommodate billions of users, the platform provides a decentralized infrastructure that enables users to interact, socialize, and manage digital assets through blockchain technology.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-12  px-4 md:px-8 lg:px-16 bg-[#eff5ff]" data-aos="fade-up" data-aos-delay="400">
                <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
                    <div className="w-full md:w-1/2" data-aos="fade-right" data-aos-delay="500">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Requirements</h2>
                        <p className="text-gray-600 text-lg">
                            The project required the development of a secure, scalable, and responsive web platform capable of supporting real-time user interaction within a metaverse setting. Key requirements included the integration of blockchain functionalities for NFT minting and trading, smart contract deployment for secure transactions, and the ability to handle high volumes of users with minimal latency. Additionally, the platform needed to offer intuitive user experiences and align with Web 3.0 standards.
                        </p>
                    </div>

                    <div className="w-full md:w-1/2" data-aos="fade-left" data-aos-delay="600">
                        <img
                            src="https://www.vaival.com/wp-content/uploads/2024/01/Group-27681-1.webp"
                            alt="Float Funnel"
                            className="w-full h-auto "
                        />
                    </div>
                </div>
            </section>
            <section className="py-12 px-4 md:px-8 lg:px-16 bg-white" data-aos="fade-up" data-aos-delay="100">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="w-full md:w-1/2" data-aos="zoom-in" data-aos-delay="200">
                            <img
                                src="https://www.vaival.com/wp-content/uploads/2024/01/image-120.webp"
                                alt="Solution Preview"
                                className="w-full h-auto "
                            />
                        </div>

                        <div className="w-full md:w-1/2" data-aos="fade-left" data-aos-delay="300">
                            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Solution</h2>
                            <p className="text-gray-600 mb-6">
                                As a core developer, I utilized the MERN stack (MongoDB, Express.js, React, Node.js) to build responsive, high-performance web applications tailored to the needs of metaverse users. I implemented Solidity-based smart contracts to power secure blockchain interactions, including the creation and deployment of Non-Fungible Tokens (NFTs). I worked closely with cross-functional teams to ensure seamless integration of front-end components with blockchain systems. By optimizing the platform’s architecture, I ensured robust performance, data security, and a smooth user experience within the decentralized ecosystem.                            </p>

                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full bg-blue-700 py-8" data-aos="fade-up" data-aos-delay="100">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center">
                        <img
                            src="https://www.vaival.com/wp-content/uploads/2024/01/Group-24391-2-scaled.webp"
                            alt="Landing Page Visual"

                            className=" w-full h-auto object-cover"

                        />
                    </div>
                </div>
            </section>
            <section className="py-5 bg-[#eff5ff]" data-aos="fade-up" data-aos-delay="200">
                <h1 className="lg:text-5xl text-4xl text-center py-10 max-w-7xl mx-auto">Results</h1>
                <p className="max-w-7xl mx-auto text-center py-10">
                    The outcome was a fully functional, scalable metaverse platform that allowed users to engage in digital ownership and interaction using NFTs and smart contracts. The successful integration of Web 3.0 technologies significantly enhanced user engagement and trust, contributing to XANA’s goal of building a decentralized infrastructure for the future of digital socialization. The platform has positioned itself as a leader in the SocialFi space, offering users a secure, immersive, and AI-enhanced metaverse experience.

                </p>
            </section>
            <section className="bg-white py-12">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-10">
                        <strong>Project Tech Stack</strong>
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {techStack.map((tech, index) => (
                            <div key={index} className="flex flex-col items-center justify-center">
                                <img
                                    src={tech.logo}
                                    alt={tech.name}
                                    className="w-12 h-12 mb-2 object-contain"
                                />
                                <span className="text-sm">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default XANAInfo;
