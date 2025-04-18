import React from 'react';

const ProjectSection = () => {
    return (
        <div className="hidden md:block" data-aos="fade-up" data-aos-delay="100">
            <section className="2xl:w-[80%] ml-auto py-10 px-4 md:px-10 lg:px-20 bg-white">
                <div className="flex  justify-between gap-6 md:gap-10">
                    <div className="w-full sm:w-[30%]">
                        <h2 className="text-xl font-semibold text-gray-800">Project Planning</h2>
                    </div>

                    <div className="w-full sm:w-[30%]">
                        <h2 className="text-xl font-semibold text-gray-800">Development</h2>
                    </div>

                    <div className="w-full sm:w-[30%]">
                        <h2 className="text-xl font-semibold text-gray-800">Delivery & Maintenance</h2>
                    </div>
                </div>
            </section>

            <section className="w-full px-4 py-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <img
                        src="proj_step.webp"
                        alt="Project Stages"
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                </div>
            </section>
            <section className="w-full lg:w-[80%] lg:mx-auto bg-white py-10 px-4 md:px-8 lg:px-16">
                <div className="flex  justify-between gap-6 md:gap-10">
                    <div className="w-full sm:w-[30%]">
                        <h2 className="text-xl font-semibold text-gray-800">Technical Requirements</h2>
                    </div>

                    <div className="w-full sm:w-[30%]">
                        <h2 className="text-xl font-semibold text-gray-800">Wireframe & Prototypes</h2>
                    </div>

                    <div className="w-full sm:w-[30%]">
                        <h2 className="text-xl font-semibold text-gray-800">Q/A Testing</h2>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectSection;
