import React, { useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

const faqData = [
    {
        question: "What is blockchain technology?",
        answer:
          "Blockchain is a decentralized, distributed ledger that records transactions across multiple computers, ensuring transparency and security without the need for a central authority.",
      },
      {
        question: "How is blockchain different from traditional databases?",
        answer:
          "Unlike traditional databases managed by a central authority, blockchain is decentralized. Once data is recorded in a block, it cannot be altered retroactively without altering all subsequent blocks.",
      },
      {
        question: "What industries can benefit from blockchain?",
        answer:
          "Blockchain can be applied across various industries including finance, healthcare, supply chain, real estate, and voting systems due to its transparency, traceability, and security.",
      },
      {
        question: "Is blockchain secure?",
        answer:
          "Yes, blockchain is considered highly secure. Transactions are encrypted, and each block is linked to the previous one, making unauthorized changes extremely difficult.",
      },
      {
        question: "What is a smart contract?",
        answer:
          "A smart contract is a self-executing contract with terms directly written into code. It runs on blockchain and executes automatically when conditions are met.",
      },
  
];

const BlockChainFAQ = () => {
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

export default BlockChainFAQ;
