import React, { useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
const faqData = [
    {
      question: "Why should I hire a MEVN stack developer?",
      answer:
        "MEVN developers can handle both front-end and back-end development using JavaScript across the stack, ensuring faster development and seamless integration.",
    },
    {
      question: " Do you provide dedicated MEVN developers?",
      answer:
        "Absolutely! We provide dedicated MEVN developers who work exclusively on your project, ensuring high commitment and faster turnaround.",
    },
    
  ];
function MevnFAQ() {
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
  </section>  )
}

export default MevnFAQ