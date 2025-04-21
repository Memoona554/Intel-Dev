import React from 'react';
import { FaCogs, FaBoxes, FaCode, FaProjectDiagram, FaChartBar } from 'react-icons/fa';

const expertiseData = [
  {
    icon: <FaCogs className="text-white text-xl" />,
    title: 'Well-Versed in Node.Js Architecture',
    description:
      'Our developers are well-acquainted with the intricacies of Node Js architecture, ensuring that your applications are structured for optimal performance and scalability.',
  },
  {
    icon: <FaBoxes className="text-white text-xl" />,
    title: 'Package Management for Node.Js',
    description:
      'Leverage our proficiency in Node Js package management to seamlessly integrate and manage dependencies, streamlining the development process of your application.',
  },
  {
    icon: <FaCode className="text-white text-xl" />,
    title: 'Strong Expertise in JSON Files',
    description:
      'Navigate the power of data interchange with our strong expertise in handling JSON files. Our developers ensure efficient parsing and manipulation for enhanced app functionality.',
  },
  {
    icon: <FaProjectDiagram className="text-white text-xl" />,
    title: 'Smart Use of TypeScript Features',
    description:
      'Leverage our smart utilization of TypeScript features within your Node Js applications to enjoy enhanced code readability, maintainability, and a reduced likelihood of error.',
  },
  {
    icon: <FaChartBar className="text-white text-xl" />,
    title: 'Knowledge of Docker and Kubernetes',
    description:
      'With the proficiency of our expert Node Js developers in Docker and Kubernetes, you can achieve scalability, flexibility and seamless deployment for your Node Js applications.',
  },
];

const NodeJsExpertise = () => {
  return (
    <>
    <section className="hidden md:block bg-white py-20 px-4" data-aos="fade-left" data-aos-delay="100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold leading-snug">
            <strong>Access the Exhaustive Node Js</strong> Abilities With Intel Devs
          </h2>
          <p className="mt-4 text-gray-600">
            Discover the full spectrum of Node.js capabilities with Intel Devs. Hire Node.Js developers who have helped businesses achieve their objectives with high performing back-end apps.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-100 via-blue-300 to-blue-100 -translate-x-1/2 rounded-full" />

          <div className="space-y-16">
            {expertiseData.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex items-center w-full ${isLeft ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`bg-white shadow-xl border border-blue-100 rounded-2xl p-6 w-full md:w-[45%] ${
                      isLeft ? 'ml-12' : 'mr-12'
                    }`}
                  >
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center shadow-lg z-10">
                    {item.icon}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
    <section className="py-16 bg-white">
                <div className="container mx-auto px-4" data-aos="zoom-in" data-aos-delay="100">
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
                            Need Node JS Developers for <br /> Your Next Project?
                        </h3>
                        <p className="text-white mb-6">
                            Reach out to us to hire the top  talent Developer
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

export default NodeJsExpertise;
