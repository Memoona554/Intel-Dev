import React, { useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

const faqData = [
  {
    question: "What is (SDaaS) Software Development as a Service?",
    answer:
      "Software Development as a Service, provided by Vaival, encompasses a full spectrum of software development services throughout the entire software lifecycle. This includes design, architecture, development, testing, quality assurance, production support, and managed services.",
  },
  {
    question: "Why Choose Software Development as a Service?",
    answer:
      "Software Development as a Service offers several advantages:Access to end-to-end software development and services.Reduction in the total cost of ownership of software.Accelerated time to market for your products with development outsourcingUtilization of specialist resources to optimize project outcomes.",
  },
  {
    question: "What tech stack does Vaival utilize for software development?",
    answer:
      "Vaival utilizes a robust tech stack that includes programming languages such as Python and JavaScript, frameworks like React for front-end development, and Node.js for backend operations, as well as specialized technologies in Web3, blockchain, and AI/ML.",
  },
];

const SdaasFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-white" data-aos="fade-up" data-aos-delay="100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-black">Frequently Asked </span>
          <span className="text-blue-600">Questions</span>
        </h2>

        <div className="space-y-6">
          {faqData.map((item, index) => (
            <div key={index} className="border-b pb-4">
              <button
                onClick={() => toggle(index)}
                className="w-full text-left flex justify-between items-center font-semibold text-lg text-gray-900 hover:text-blue-600 transition-all"
              >
                {item.question}
                {activeIndex === index ? (
                  <FaChevronDown className="text-blue-600" />
                ) : (
                  <FaChevronRight className="text-black" />
                )}
              </button>

              {activeIndex === index && (
                <p className="mt-4 text-gray-700 transition-all">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SdaasFAQ;
