import React, { useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

const faqData = [
  {
    question: "How long does it take to build an AI-based product?",
    answer:
      "The timeline to build an AI-based product is contingent on its overall complexity. For instance, a highly complex AI solution encompassing an extensive range of features may require approximately 10 to 18 months for completion. Meanwhile, a more straightforward solution with minimal features could be developed within 3 to 6 months, varying based on specific customization requirements.",
  },
  {
    question: "How to choose the best artificial intelligence development company?",
    answer:
      "To choose the best AI development company, evaluate their portfolio, client reviews, technological expertise, and ability to provide end-to-end AI services aligned with your business goals.",
  },
  {
    question: "Which AI tools do you use for AI development?",
    answer:
      "We use a wide range of AI tools including TensorFlow, PyTorch, Keras, Scikit-learn, OpenCV, and other ML, NLP, and CV libraries tailored to project requirements.",
  },
];

const FAQSection = () => {
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

export default FAQSection;
