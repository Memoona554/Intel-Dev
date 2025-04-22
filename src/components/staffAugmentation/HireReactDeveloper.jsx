import React from 'react';

const HireReactDevelopers = () => {
    return (
        <>
            <section className="py-12 bg-blue-600">
                <div className="max-w-7xl mx-auto px-4" data-aos="fade-up" data-aos-delay="100">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl text-white ">
                            <strong>Hire React Developers from</strong> <br />
                            <strong>Intel Devs Technologies</strong>
                        </h2>
                        <p className="mt-4 text-white max-w-2xl mx-auto">
                            Unlock the potential of your projects with our dedicated React developers, equipped with the following key attributes:
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-lg flex justify-center items-center flex-col">
                            <h3 className="text-xl flex justify-start font-semibold mb-2">Good Knowledge of JSX</h3>
                            <p className="text-wite mb-4">
                                When using ReactJs, developers often opt for JSX instead of HTML, as it is more efficient. Our developers possess a deep understanding of JSX, and can create dynamic and engaging user experiences that resonate with the latest react standards.
                            </p>
                            <a
                                href="#calendly"
                                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
                            >
                                Build Your Team Now
                            </a>
                        </div>

                        <div className="space-y-8">
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold mb-2">Proficiency of Redux and Hooks</h3>
                                <p className="text-gray-600">
                                    Leverage the power of state management with developers well-versed in Redux and Hooks. Hire react developers who have a deep understanding of both, to create seamless data flow and efficient component state management for robust React applications.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold mb-2">Skilled in Writing Clean Code</h3>
                                <p className="text-gray-600">
                                    Our developers pride themselves on writing clean, modular, and maintainable code. With clear, well-grounded concepts, and strong understanding of your project needs, they write code that is simple to read, comprehend and can be extended by other developers.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mt-10">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-2">Clear Client Communication</h3>
                            <p className="text-gray-600">
                                We ensure that the react developers we hire have good communication skills. We mentor them to further enhance their client engagement skills and make their communications honest, clear and proactive, keeping the entire development process highly transparent.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-2">Consistent Performance</h3>
                            <p className="text-gray-600">
                                Rely on a team of developers that delivers consistent and high-performance results in their work and work ethics. Our React developers are committed to meeting and exceeding expectations, ensuring your projects are executed with precision and efficiency.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4" data-aos="fade-up" data-aos-delay="100">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Choose the Best Hiring Model
                            <br />
                            for Your Business
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="relative w-full h-auto">
                            <img
                                src="/react-step-1.webp"
                                alt="Hour-based Hiring"
                                className="w-full h-auto"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 ">
                                <h3 className="text-xl md:text-2xl font-semibold text-black">Hour-based Hiring</h3>
                                <p className="text-black mt-3 max-w-md">
                                    Opt for flexibility with our hour-based hiring model. Pay for the actual
                                    hours worked, allowing you to scale resources based on project needs,
                                    providing agility and adaptability.
                                </p>
                            </div>
                        </div>

                        <div className="relative w-full h-auto">
                            <img
                                src="/react-step-2.webp"
                                alt="Project-based Hiring"
                                className="w-full h-auto"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 ">
                                <h3 className="text-xl md:text-2xl font-semibold text-black">Project-based Hiring</h3>
                                <p className="text-black mt-3 max-w-md">
                                    Perfect for well-defined projects with clear deliverables and timelines.
                                    This model provides clarity, cost predictability, and a focused approach to
                                    achieving project milestones.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mb-12">
                        <a
                            href="#calendly"
                            className="inline-block px-8 py-3 mt-7 bg-blue-700 text-white text-lg font-semibold rounded-full hover:bg-blue-800 transition"
                        >
                            LET'S DISCUSS YOUR PROJECT
                        </a>
                    </div>
                </div>
            </section>
            <section className="py-16 bg-blue-600">
                <div className="container mx-auto px-4" data-aos="fade-up" data-aos-delay="100">
                    <div className="max-w-3xl mx-auto text-center">
                        <h3 className="text-3xl md:text-4xl text-white font-semibold mb-4">
                            Need React Developers for <br /> Your Next Project?
                        </h3>
                        <p className="text-white mb-6">
                            Reach out to us to hire the top React talent in the industry
                        </p>
                        <a
                            href="#calendly"
                            className="inline-block px-8 py-3 bg-white text-black hover:text-white text-lg rounded-lg hover:bg-blue-700 transition"
                        >
                            Hire Now
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HireReactDevelopers;
