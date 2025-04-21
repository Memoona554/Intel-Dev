import React, { useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

const faqData = [
  {
    question: "Is MERN Stack enough for full stack MERN developers?",
    answer:
      "The MERN Stack is an acronym for MongoDB, Express.js, React.js, and Node.js – covering both the frontend and backend aspects of web development. A MERN full stack developer is proficient in all these technologies, enabling them to efficiently handle end-to-end development tasks.",
  },
  {
    question: " Why use the MERN Stack for web applications?",
    answer:
      "The MERN Stack is a powerful choice for web applications, combining MongoDB, Express.js, React.js, and Node.js. With a unified Javascript language for both frontend and backend, it streamlines development and ensures consistency.",
  },
  
];

const MernFAQ = () => {
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

export default MernFAQ;
