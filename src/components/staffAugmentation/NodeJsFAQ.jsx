import React, { useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
const faqData = [
    {
      question: "What applications can be developed using Node Js framework?",
      answer:
        "Node.js is a versatile framework suitable for a spectrum of applications, including fast and scalable web apps, robust APIs, high-performance mobile apps, real-time platforms (like chat and gaming), streaming applications, modular microservices, and more.",
    },
    {
      question: "How do I choose the right Node.js developer for my project?",
      answer:
        "Start by evaluating their experience and expertise in Node.js development, ensuring they have a solid track record of delivering similar projects. Look for developers who are well-versed in the latest Node.js frameworks. Check for client reviews or testimonials to gauge their reputation. Additionally, inquire about their development process, including testing methodologies and post-deployment support.",
    },
    
  ];
function NodeJsFAQ() {
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
  )
}

export default NodeJsFAQ