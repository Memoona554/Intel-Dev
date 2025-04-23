import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What is IT consulting?",
    answer:
      "IT consulting involves advising businesses on how to best use technology to meet their goals. It includes services like strategy, system integration, infrastructure planning, and security assessments.",
  },
  {
    question: "How can IT consulting help my business?",
    answer:
      "IT consultants provide expert insights and solutions to optimize your IT infrastructure, reduce costs, improve efficiency, and support your digital transformation goals.",
  },
  {
    question: "What industries benefit most from IT consulting?",
    answer:
      "Virtually all industries benefit from IT consulting, including healthcare, finance, retail, manufacturing, and logistics. Each has unique technology needs that consultants help address.",
  },
  {
    question: "What makes Intel Devs IT consulting services different?",
    answer:
      "Intel Devs agile approach ensures that solutions are tailored, scalable, and continuously refined. We align tech strategies with your business goals, ensuring long-term success.",
  },
];

const ITConsultingFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          IT Consulting FAQs
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b  p-4 transition-all duration-300"
            >
              <button
                onClick={() => toggle(index)}
                className="flex justify-between items-center w-full text-left text-lg font-semibold text-gray-800"
              >
                {faq.question}
                <span>
                  {openIndex === index ? (
                    <FaChevronUp className="text-gray-500" />
                  ) : (
                    <FaChevronDown className="text-gray-500" />
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div className="mt-2 text-sm text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ITConsultingFAQ;
