import React from 'react';
import { FaCode, FaClock, FaExchangeAlt, FaPalette, FaTools, FaUserTie } from 'react-icons/fa';

const vueServices = [
  {
    icon: <FaCode className="text-white text-xl" />,
    title: 'Web App Development',
    desc: 'Get responsive and feature-rich web applications. Be it progressive web apps, SPAs, dashboards, or portals – we build it all.',
  },
  {
    icon: <FaClock className="text-white text-xl" />,
    title: 'Real-Time App Development',
    desc: 'Craft seamless, responsive real-time apps with live updates, interactive notifications, and more.',
  },
  {
    icon: <FaExchangeAlt className="text-white text-xl" />,
    title: 'App Migration Engineers',
    desc: 'Smoothly migrate your apps to Vue Js with minimal disruption and maximum performance.',
  },
  {
    icon: <FaPalette className="text-white text-xl" />,
    title: 'Material Design Integrations',
    desc: 'Build sleek, intuitive interfaces using the latest Vue Js UI kits and design principles.',
  },
  {
    icon: <FaTools className="text-white text-xl" />,
    title: 'App Maintenance & Upgradation Services',
    desc: 'Keep your apps secure, up-to-date, and high-performing with our maintenance & upgrade plans.',
  },
  {
    icon: <FaUserTie className="text-white text-xl" />,
    title: 'Vue Js Consultants',
    desc: 'Get expert guidance to choose the right strategies and tools for your Vue Js projects.',
  },
];

const VueDeveloperServices = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center" data-aos="fade-right" data-aos-delay="100">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Hire Vue Js Developers For <span className="text-gray-700">Your Evolving Project Needs</span>
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          Our dedicated Vue Js developers help businesses achieve goals through dynamic and responsive web solutions. Whether building new apps or enhancing existing ones, our team turns vision into reality.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {vueServices.map((service, idx) => (
            <div key={idx} className="bg-white border border-gray-100 rounded-lg shadow-md p-6 text-left transition hover:shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
        <a
            href="#calendly"
            className="inline-block px-8 py-3 mt-7 bg-blue-700 text-white text-lg font-semibold rounded-full hover:bg-blue-800 transition"
          >
            LET'S DISCUSS YOUR PROJECT
          </a>
      </div>
    </section>
  );
};

export default VueDeveloperServices;
