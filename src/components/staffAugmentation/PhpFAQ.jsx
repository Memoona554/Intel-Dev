import React, { useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

const faqData = [
  {
    question: "What is PHP and why is it widely used?",
    answer:
      "PHP (Hypertext Preprocessor) is a popular open-source scripting language primarily used for web development. It runs on the server and is known for its flexibility, large community support, and compatibility with most databases and platforms.",
  },
  {
    question: " Is PHP still relevant in 2025?",
    answer:
      "Absolutely. PHP powers major platforms like WordPress, Drupal, and Laravel. With continued improvements (like PHP 8+), it's fast, secure, and reliable for modern web applications.",
  },
  {
    question: "Can PHP be integrated with modern front-end frameworks?",
    answer:
      "Yes! PHP can easily integrate with React, Vue, Angular, and other modern front-end frameworks via APIs or server-rendered templates.",
  },
  
  {
    question: "How does PHP compare to other back-end technologies like Node.js or Python?",
    answer:
      "Each has its strengths. PHP is often more cost-effective for web apps and content-heavy sites, while Node.js is great for real-time apps, and Python excels in data-heavy projects. We help choose the right stack based on your needs.",
  },
  
];

const PhpFAQ = () => {
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

export default PhpFAQ;
