import { FaCode, FaCogs, FaTools } from "react-icons/fa";

const LegacySoftwareDevelopment = () => {
  const features = [
    {
      icon: <FaTools className="text-4xl text-blue-500" />,
      title: "All-in-One Tech Stack",
      description:
        "Access to 50+ technologies under one subscription - from legacy support to cutting-edge AI integration.",
    },
    {
      icon: <FaCogs className="text-4xl text-blue-500" />,
      title: "Zero Disruption",
      description:
        "Modernize your systems while maintaining business continuity and operational stability.",
    },
    {
      icon: <FaCode className="text-4xl text-blue-500" />,
      title: "Fully Customizable",
      description:
        "Custom AI solutions tailored to your legacy systems and business growth.",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-16 text-center" data-aos="fade-up" data-aos-delay="100">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        Introducing Software Development as a Service (SDaaS)
      </h2>
      <p className="text-lg text-gray-600 mb-12">
        Complete Legacy System Modernization with Most Advanced Tech Stacks and AI Integrations
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:w-[80%] lg:mx-auto" data-aos="fade-up" data-aos-delay="200">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white shadow-2xl rounded-xl p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
          >
            {feature.icon}
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              {feature.title}
            </h3>
            <p className="mt-2 text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LegacySoftwareDevelopment;
