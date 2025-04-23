import React, { useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

const faqData = [
  {
    question: " What is Angular and why should I use it for my project?",
    answer:
      "Angular is a popular front-end web application framework developed by Google. It is ideal for building scalable, dynamic, and high-performance single-page applications (SPAs). It offers built-in tools for routing, state management, and form handling, which speeds up development and ensures maintainability.",
  },
  {
    question: "How do I know if I need an Angular developer or another front-end expert?",
    answer:
      "If you're building a web app that needs real-time updates, dynamic forms, or a structured front-end architecture, Angular is a great fit. Angular is especially effective for enterprise-level apps with complex user interfaces.",
  },
  {
    question: "Will I have direct communication with my Angular developer?",
    answer:
      "Absolutely. You will have direct access to your assigned Angular developer(s) through your preferred communication channels (Slack, email, Zoom, etc.) to ensure transparency and agile collaboration.",
  },
  
];

const AngularFAQ = () => {
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

export default AngularFAQ;
