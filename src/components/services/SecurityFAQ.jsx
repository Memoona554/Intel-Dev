import React, { useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

const faqData = [
  {
    question: "What is SecaaS (Security as a Service)?",
    answer:
      "Vaival Technologies’ SecaaS is a full subscription-based SecOps management service that safeguards tech businesses from evolving cyber threats—from startups to enterprises.This is to enhance your existing IT infrastructure by integrating powerful, scalable security features that provide continuous protection, reduce risk, and maintain compliance with regulatory standards.We ensure you get the security features Fortune 500 companies have for themselves no matter how small scale you are… without paying for the big bucks.",
  },
  {
    question: "What’s the difference between SecaaS and the other security services?",
    answer:
      "We are flexible with our subscription plans.Whenever you need to scale up, you upgrade. Whenever you need to scale down, you downgrade.Any time of the month.",
  },
  {
    question: "What level of threat detection and prevention can we expect from your service?",
    answer:
      "Based on our track record, we deliver enterprise-grade security with proven results:Automated threat detection that reduces response time from 20 minutes to under 2 minutesAdvanced prevention systems that achieved a 95% reduction in hacking attempts within the first three monthsSaved our clients approximately $200,000 in potential losses within first 6 months",
  },
  {
    question: "How fast can you start protecting our systems?",
    answer:
      "We deploy our security suite within 24 hours of signup and most of our clients are fully protected within 48 hours.",
  },
];

const SecurityFAQ = () => {
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

export default SecurityFAQ;
