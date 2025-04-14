import React from "react";
import { FaSearch, FaPencilAlt, FaCogs, FaRocket } from "react-icons/fa";

const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "55%", label: "High Customer Satisfaction" },
  { value: "4x - 6x", label: "Faster Time to Market" },
];

const benefits = [
  {
    title: "Discover",
    description:
      "In this phase, we analyze your business intricacies, challenges, and goals to identify new business opportunities, use cases, and define a roadmap.",
    icon: <FaSearch className="text-2xl text-blue-600" />,
  },
  {
    title: "Design",
    description:
      "Next, our designers and AI app developers outline the feature architecture, finalize the tech stack, and create a working prototype for testing.",
    icon: <FaPencilAlt className="text-2xl text-blue-600" />,
  },
  {
    title: "POC (Proof of Concept)",
    description:
      "In the POC phase, we train and tune our AI algorithms while continuously testing them to validate the feasibility of our proposed solutions.",
    icon: <FaRocket className="text-2xl text-blue-600" />,
  },
  {
    title: "Implementation",
    description:
      "We engineer the AI solution using the best AI/ML development practices and integrate it into your systems to be launched in the desired environment.",
    icon: <FaCogs className="text-2xl text-blue-600" />,
  },
];

export default function AIDevOverview() {
  return (
    <div className="bg-gray-50 text-center py-16 px-4" data-aos="zoom-in" data-aos-delay="100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          The Numbers That Help you Reach
        </h2>
        <p className="text-lg text-gray-700 mb-8 font-medium">
          Your Business Goals Faster
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <h3 className="text-3xl font-bold text-blue-600">{stat.value}</h3>
              <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
          TRANSFORM YOUR BUSINESS
        </button>
      </div>

      <div className="max-w-7xl mx-auto mt-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          Benefits of Choosing <span className="text-blue-600">Our</span> AI Development Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-white  p-6 rounded-lg shadow hover:shadow-md transition"
            >
              <div className="flex justify-center mb-3">{benefit.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <button className="mt-10 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
          DEVELOP AN AI-POWERED PRODUCT
        </button>
      </div>
    </div>
  );
}
