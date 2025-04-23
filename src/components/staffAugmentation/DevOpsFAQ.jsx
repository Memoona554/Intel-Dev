import React, { useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
const faqData = [
    {
        question: "What is DevOps?",
        answer: "DevOps is a set of practices that combine software development (Dev) and IT operations (Ops), aiming to shorten the development lifecycle and provide high software quality."
    },
    {
        question: "Why is DevOps important?",
        answer: "DevOps helps organizations improve collaboration, increase efficiency, enhance productivity, and deliver higher quality software at a faster pace."
    },
    {
        question: "What are the key principles of DevOps?",
        answer: "The key principles of DevOps include collaboration, automation, continuous integration and continuous delivery (CI/CD), monitoring, and feedback loops."
    },
    {
        question: "How does DevOps differ from Agile?",
        answer: "While Agile focuses on software development and project management, DevOps extends the Agile principles into operations, focusing on automation and collaboration between developers and IT operations."
    },
    {
        question: "What tools are used in DevOps?",
        answer: "Common DevOps tools include Jenkins, Docker, Kubernetes, Git, Ansible, Terraform, and Prometheus. These tools help automate processes like code integration, testing, deployment, and monitoring."
    }
];
function DevOpsFAQ() {
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
        </section>)
}

export default DevOpsFAQ