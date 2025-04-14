import React, { useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

const faqData = [
  {
    question: "What types of softwares can you develop?",
    answer:
      "We specialize in developing a wide range of custom software solutions to meet your specific needs. Whether you require web applications, mobile apps, desktop software, or even embedded systems, our team of experts is equipped to handle a variety of software development projects.",
  },
  {
    question: "How long does it take to build a software?",
    answer:
      "Software development timelines vary by project complexity, with simple apps taking weeks and complex systems requiring several months. We provide precise estimates after understanding your project.",
  },
  {
    question: "How much does it cost to get custom software development services?",
    answer:
      "The cost of custom software development relies on multiple factors, including project complexity, features, and your specific requirements. We offer tailored pricing based on your project’s unique needs. To get a precise estimate, reach out to us for a free consultation and a personalized quote based on your unique requirements and budget considerations.",
  },
];

const ServiceFAQ = () => {
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

export default ServiceFAQ;
