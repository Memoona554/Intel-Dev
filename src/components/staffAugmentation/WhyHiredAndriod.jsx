import { FaIndustry, FaCode, FaPuzzlePiece, FaClock } from "react-icons/fa";

const WhyHireAndroid = () => {
    return (
        <>
            <section className="py-12 bg-white"  data-aos="fade-up" data-aos-delay="100">
                <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-start md:items-center gap-8">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-2xl md:text-3xl font-bold text-black">
                            <strong>Why Hire Android Developers from Intel Devs Technologies?</strong>
                        </h2>
                    </div>

                    <div className="w-full md:w-[33%] shadow-lg p-5 flex gap-4 items-start">
                        <div className="text-primary text-3xl mt-1">
                            <FaIndustry className="text-blue-600 text-4xl mb-4" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-black mb-2">
                                In-depth Industry Knowledge
                            </h3>
                            <p className="text-black">
                                Our Android developers bring not just technical expertise, but also a deep understanding of industry trends. Stay ahead in your sector with developers who grasp the nuances of your domain, ensuring your Android solutions align perfectly with market demands.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="max-w-6xl mx-auto px-4"  data-aos="fade-right" data-aos-delay="100">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-start shadow-lg p-5 space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="text-primary text-3xl mt-1">
                                    <FaCode className="text-blue-600 text-4xl mb-4" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-black mb-2">Strong Technical Abilities</h3>
                                    <p className="text-black">
                                        Developing robust Android applications requires more than just coding skills. Hire dedicated Android developers with strong technical abilities who leverage the latest tools and frameworks to build high-performing, scalable, and feature-rich Android solutions.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-start shadow-lg p-5 space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="text-primary text-3xl mt-1">
                                    <FaPuzzlePiece className="text-blue-600 text-4xl mb-4" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-black mb-2">Keen Problem Solving</h3>
                                    <p className="text-black">
                                        Mental agility is crucial for crafting innovative and intelligent solutions. Our developers are skilled problem solvers who transform challenges into opportunities. You’ll be working with a team that thrives on solving complex issues to deliver outstanding results.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-start shadow-lg p-5 space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="text-primary text-3xl mt-1">
                                    <FaClock className="text-blue-600 text-4xl mb-4" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-black mb-2">Fast-Track Delivery</h3>
                                    <p className="text-black">
                                        Time is of the essence — and our fast-track delivery approach sets us apart. Hire Android developers who not only meet deadlines but consistently exceed expectations. Accelerate your project timeline with a team committed to speed and efficiency.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-12 bg-white">
                <div className="max-w-6xl mx-auto px-4"  data-aos="fade-left" data-aos-delay="100">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-black">
                            <strong>Seamless Collaboration Through Customized Hiring Models</strong>
                        </h2>
                        <p className="mt-4 text-black max-w-2xl mx-auto">
                            Explore flexible hiring models designed to suit your project dynamics and budgetary considerations.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="shadow-lg p-6 rounded-xl bg-blue-600 hover:shadow-xl transition">
                            <h3 className="text-xl font-semibold text-white mb-2">Hour-based Hiring</h3>
                            <p className="text-white">
                                For projects with evolving requirements, our hour-based hiring model offers flexibility.
                                Pay only for the hours worked, allowing you to adapt resources according to project progress and changing needs.
                            </p>
                        </div>

                        <div className="shadow-lg p-6 rounded-xl bg-blue-600 hover:shadow-xl transition">
                            <h3 className="text-xl font-semibold text-white mb-2">Project-based Hiring</h3>
                            <p className="text-white">
                                Opt for our project-based hiring model for well-defined projects with clear deliverables.
                                Enjoy a fixed-price model with a predetermined scope, ensuring transparency and budget control throughout the project lifecycle.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-12 bg-gray-200"  data-aos="zoom-in" data-aos-delay="100">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-2xl md:text-3xl font-bold text-black">
                                Bring Your Vision to Life with Our Android Developers
                            </h2>
                            <p className="mt-4 text-black">
                                Hire developers with hands-on experience in the latest Android tools and technologies
                            </p>
                        </div>

                        <div className="w-full md:w-auto flex justify-start md:justify-end">
                            <a
                                href="#calendly"
                                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg text-lg transition"
                            >
                                Hire Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WhyHireAndroid;
