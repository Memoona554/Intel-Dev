import React, { useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

const faqData = [
    {
      question: "What are the benefits of hiring Python developers?",
      answer:
        "Python developers offer versatility across web development, data analysis, machine learning, automation, and more. Hiring experts ensures efficient and scalable solutions."
    },
    {
      question: "Can I hire Python developers for short-term projects?",
      answer:
        "Yes, we offer hour-based and project-based hiring models tailored to both short-term and long-term development needs."
    },
    {
      question: "Do your Python developers have experience with Django and Flask?",
      answer:
        "Absolutely! Our developers are proficient in popular Python frameworks including Django, Flask, FastAPI, and more."
    },
    {
      question: "How do you ensure code quality and security?",
      answer:
        "We follow industry best practices, conduct regular code reviews, and enforce strict security protocols to ensure high-quality deliverables."
    }
  ];

const PythonFAQ = () => {
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

export default PythonFAQ;
