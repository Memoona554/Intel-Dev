import React from "react";
import {
  FaBrain,
  FaComments,
  FaRobot,
  FaSearch,
  FaChartLine,
  FaUserTie,
} from "react-icons/fa";

const services = [
  {
    title: "Machine Learning Development",
    description:
      "Our experts in machine learning craft intelligent solutions that go beyond data analysis – they anticipate trends, recognize patterns, and adapt dynamically to changing scenarios.",
    icon: <FaBrain className="text-3xl text-blue-600 mb-3" />,
  },
  {
    title: "Natural Language Processing",
    description:
      "Our NLP services empower systems to understand, interpret, and generate human-like text using cutting-edge algorithms.",
    icon: <FaComments className="text-3xl text-blue-600 mb-3" />,
  },
  {
    title: "AI Chatbot Development",
    description:
      "AI-enabled custom chatbots for 24/7 virtual assistance, enhancing client interactions and customer satisfaction.",
    icon: <FaRobot className="text-3xl text-blue-600 mb-3" />,
  },
  {
    title: "Computer Vision",
    description:
      "Our AI accurately analyzes and interprets visual data for tasks like facial recognition, video monitoring, and image classification.",
    icon: <FaSearch className="text-3xl text-blue-600 mb-3" />,
  },
  {
    title: "Predictive Modelling",
    description:
      "We leverage ML to uncover hidden trends and forecast outcomes for data-driven decisions.",
    icon: <FaChartLine className="text-3xl text-blue-600 mb-3" />,
  },
  {
    title: "AI Consulting Services",
    description:
      "Tailored AI strategies and implementations that align with your business goals and workflows.",
    icon: <FaUserTie className="text-3xl text-blue-600 mb-3" />,
  },
];

export default function AIDevelopmentServices() {
  return (
    <section className="py-16 px-4 bg-white" data-aos="fade-up" data-aos-delay="100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Artificial Intelligence Development Services We Offer
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          Our bespoke AI services are designed to offer efficiency, intelligence and accuracy in your business
          processes, stimulating scalable growth. Explore our reliable AI services that can convert your vision into reality.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6  rounded-lg shadow-sm hover:shadow-lg transition duration-300 ease-in-out"
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mt-2">{service.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
