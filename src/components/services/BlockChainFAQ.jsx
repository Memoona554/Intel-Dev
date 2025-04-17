import React, { useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

const faqData = [
  {
    question: "What is Blockchain Technology?",
    answer:
      "Blockchain is a decentralized ledger system where transactions are securely recorded and linked in chronological order across a network. This ensures transparency, immutability, and resistance to tampering, making it a foundational technology for various applications like cryptocurrencies and smart contracts.",
  },
  {
    question: "How long does it take to develop a blockchain application or software?",
    answer:
      "It varies based on factors like complexity, features, and project scope. Generally, it can take anywhere from a few weeks for a simple project to several months or a year for more complex solutions.",
  },
  {
    question: "What blockchain development services are offered by Intel Devs?",
    answer:
      "Intel Devs provides a range of blockchain services, including smart contract development, decentralized app creation, cryptocurrency customization, crypto wallet development, NFT marketplace design, smart contract audits, Hyperledger solutions, staff augmentation, and POC development. Our expertise covers the spectrum of blockchain technology, ensuring tailored solutions for diverse client needs.",
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
