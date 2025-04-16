import React from "react";

const DexCheckInfo = () => {
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
                            DexCheck is an AI-powered analytics platform designed for the rapidly evolving crypto and NFT markets. It delivers real-time insights, intelligent alerts, and comprehensive market analysis to empower traders and investors with actionable data.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-12  px-4 md:px-8 lg:px-16 bg-[#eff5ff]" data-aos="fade-up" data-aos-delay="400">
                <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
                    <div className="w-full md:w-1/2" data-aos="fade-right" data-aos-delay="500">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Requirements</h2>
                        <p className="text-gray-600 text-lg">
                            DexCheck was conceived to address the growing need for a reliable and intelligent platform capable of analyzing the ever-evolving crypto and NFT markets. The goal was to build a solution that could deliver real-time data, market trends, and predictive insights with the help of artificial intelligence. Additionally, the platform needed to support a high volume of concurrent users, provide a clean and intuitive user interface, and ensure the accuracy and security of sensitive market data.                        </p>
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
                                To fulfill these requirements, the frontend was built using React to ensure a highly responsive and dynamic user experience. On the backend, Python was utilized for its powerful data processing capabilities and seamless integration with AI models. Real-time market data was incorporated through WebSocket connections, while AI-powered modules enabled the delivery of intelligent alerts and predictive analytics. Interactive dashboards were designed to visualize crypto token performance, NFT collections, and market sentiment, all optimized for speed and scalability.



                            </p>

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
                    The result was a feature-rich analytics platform that quickly gained traction among crypto and NFT traders. DexCheck successfully delivered on its promise of providing accurate, real-time insights powered by AI, significantly enhancing users’ ability to make informed investment decisions. The platform’s intuitive interface, coupled with smart alerting and market analysis tools, positioned it as a trusted solution in the highly competitive crypto analytics space.

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

export default DexCheckInfo;
