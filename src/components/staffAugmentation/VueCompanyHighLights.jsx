import React from 'react';
import { FaProjectDiagram, FaStar, FaUsers, FaMicrochip, FaClock } from 'react-icons/fa';

const highlights = [
  {
    icon: <FaProjectDiagram className="text-white text-xl" />,
    title: 'Agile Development Process',
    desc: 'We embrace agility to respond to changing business needs quickly and deliver high-quality projects tailored to your evolving requirements.',
  },
  {
    icon: <FaStar className="text-white text-xl" />,
    title: 'Comprehensive Vue.js Expertise',
    desc: 'Our developers stay current with Vue.js trends and best practices, delivering intuitive interfaces, performance optimization, and modern features.',
  },
  {
    icon: <FaUsers className="text-white text-xl" />,
    title: 'Customer Centric Approach',
    desc: 'With a focus on understanding client needs, we craft tailored solutions to ensure value, performance, and long-term partnership success.',
  },
  {
    icon: <FaMicrochip className="text-white text-xl" />,
    title: 'State-of-the-art Technologies',
    desc: 'We integrate the latest technologies into every project, enabling scalable, secure, and cutting-edge software solutions.',
  },
  {
    icon: <FaClock className="text-white text-xl" />,
    title: 'On-Time Delivery',
    desc: 'Our commitment to punctuality ensures your project launches on schedule — without compromising on quality or functionality.',
  },
];

const CompanyHighlights = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center" data-aos="zoom-in" data-aos-delay="100">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Choose Intel Devs for <span className="text-gray-700">Your Next Vue Js Project</span>
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          At Intel Devs, we bring innovation, expertise, and customer-first thinking to every project. Whether you're building from scratch or enhancing an existing app, we deliver value-driven Vue.js solutions at scale.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, idx) => (
            <div key={idx} className="bg-white border border-gray-100 rounded-lg shadow-md p-6 text-left transition hover:shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyHighlights;
