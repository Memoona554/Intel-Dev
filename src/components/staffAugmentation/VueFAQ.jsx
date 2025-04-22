import React, { useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

const faqData = [
  {
    question: "What is Vue.js and why should I hire a Vue.js developer?",
    answer:
      "Vue.js is a progressive JavaScript framework used for building user interfaces and single-page applications. Hiring a Vue.js developer ensures efficient, lightweight, and fast front-end development with easy integration and maintainability.",
  },
  {
    question: "What are the benefits of using Vue.js over other frameworks?",
    answer:
      "Vue.js offers a simpler learning curve, better documentation, lightweight structure, and great performance. It’s also highly flexible and can be integrated with other libraries or existing projects.",
  },
  
];

const VueFAQ = () => {
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

export default VueFAQ;
