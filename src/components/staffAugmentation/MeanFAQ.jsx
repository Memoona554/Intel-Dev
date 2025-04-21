import React, { useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
const faqData = [
    {
      question: "What skills do your MEAN stack developers possess?",
      answer:
        "At Intel Devs, our MEAN Stack developers for hire possess expertise in MongoDB, Express.js, AngularJS, and Node.js. They possess a deep understanding of full-stack development, JavaScript, and related technologies. Additionally, our developers are experienced in building custom MEAN applications, tailored to your requirements and business needs.",
    },
    {
      question: "  Is MEAN Stack suitable for enterprise applications?",
      answer:
        "Yes, the MEAN Stack is well-suited for scalable and maintainable enterprise-grade applications, especially those that require real-time capabilities and single-page architectures.",
    },
    
  ];
function MeanFAQ() {
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

export default MeanFAQ