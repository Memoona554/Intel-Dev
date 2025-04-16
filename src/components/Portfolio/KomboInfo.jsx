import React from "react";

const KomboInfo = () => {
    const techStack = [
        
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        
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
                            A chrome extension designed to enhance the productivity of sales professionals by providing AI-powered assistance with calling and emailing prospects. We are committed to protecting the privacy of our users and ensuring the safety of their personal data.</p>
                    </div>
                </div>
            </section>

            <section className="py-12  px-4 md:px-8 lg:px-16 bg-[#eff5ff]" data-aos="fade-up" data-aos-delay="400">
                <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
                    <div className="w-full md:w-1/2" data-aos="fade-right" data-aos-delay="500">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Requirements</h2>
                        <p className="text-gray-600 text-lg">
                            Sales professionals often face time-consuming manual processes when reaching out to prospects via calls and emails. The need was to streamline outreach efforts, improve productivity, and ensure data privacy without sacrificing personalization or efficiency.
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
                                Developed a Chrome extension leveraging AI capabilities to assist sales teams with prospect communication. The tool intelligently supported users in composing emails and managing calls, reducing the repetitive workload. Special attention was given to user data privacy and protection, aligning with industry standards and best practices.


                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Developed a Chrome extension optimized for sales workflows.</li>
                                <li>Integrated AI-powered assistance to streamline calling and emailing tasks.</li>
                                <li>Implemented natural language processing to personalize email drafts and call scripts.</li>
                                <li>Enabled real-time suggestions to improve outreach efficiency and response rates.</li>
                                <li>Ensured secure handling of user data through robust privacy measures.</li>
                                <li>Designed a clean and intuitive user interface for seamless adoption.</li>


                            </ul>
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
                    Boosted user productivity by automating routine communication tasks, enabling sales professionals to focus on high-value interactions. The extension gained positive user feedback for its ease of use, smart recommendations, and robust privacy safeguards, contributing to more efficient prospecting and engagement.                    </p>
            </section>
            <section className="bg-white py-12">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-10">
                        <strong>Project Tech Stack</strong>
                    </h2>
                    <div className="grid grid-cols-2 gap-6">
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

export default KomboInfo;
