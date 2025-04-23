import React, { useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
const faqData = [
    {
      question: "What is Laravel, and why should I choose it for my project?",
      answer:
        "Laravel is a popular PHP framework that is known for its elegant syntax, powerful features, and ability to streamline common web development tasks. It provides tools for routing, session management, authentication, and more, which makes it perfect for building robust, scalable web applications. It’s also highly secure and supports modern development practices like MVC architecture.",
    },
    {
      question: "What types of projects are Laravel developers suitable for?",
      answer:
        "Laravel developers are suitable for a variety of projects, including eCommerce platforms, content management systems (CMS), enterprise applications, social networks, and custom web applications. Laravel’s scalability and flexibility make it ideal for both small and large-scale projects.",
    },
    {
        question: "How long does it take to develop a Laravel project?",
        answer:
          "The timeline for a Laravel project depends on the complexity and size of the application. A simple website could take a few weeks, while a larger enterprise application may take several months. It’s important to define the project’s scope clearly to establish a realistic timeline.",
      },
  ];
function LaravelFAQ() {
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

export default LaravelFAQ