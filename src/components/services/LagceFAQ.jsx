import React, { useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

const faqData = [
  {
    question: "How long does the modernization process typically take?",
    answer:
      "The timeline varies based on system complexity and scope. Typically, initial AI integration begins within 4-6 weeks, with full modernization completed in phases over 3-12 months (depending upon the project scope) while ensuring business continuity throughout the process.",
  },
  {
    question: "What risks are involved in modernizing our legacy systems?",
    answer:
      "Common risks include data migration challenges, system downtime, and integration complications. Our approach minimizes these risks through:Thorough preliminary assessment,Phased implementation,Continuous testing,Backup systems,Roll-back capabilities",
  },
  {
    question: "How do you ensure our operations aren't disrupted during modernization?",
    answer:
      "We implement a parallel operation strategy where new systems are built and tested alongside existing ones. This includes:,Gradual migration,Comprehensive testing,24/7 monitoring,Immediate issue resolution,Flexible rollback options",
  },
  {
    question: "What level of internal IT support do we need?",
    answer:
      "Minimal internal IT support is required. Our team handles the technical aspects, though we recommend designating a project coordinator from your team. We provide:Complete technical management,Team training,Documentation,Ongoing support,Knowledge transfer",
  },
  {
    question: "How do you handle sensitive data during modernization?",
    answer:
      "We follow strict security protocols and compliance standards:End-to-end encryption,Secure data migration,Compliance with industry standards,Regular security audits,Data backup and recovery plans",
  },
  {
    question: "What ongoing support do you provide post-modernization?",
    answer:
      "All plans include comprehensive post-modernization support:24/7 monitoring,Regular maintenance,Performance optimization,System updates,Continuous AI model training",
  },
];

const LagceFAQ = () => {
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

export default LagceFAQ;
