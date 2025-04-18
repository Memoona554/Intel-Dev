import React from 'react';
import { FaGlobeAmericas, FaUsers, FaProjectDiagram, FaClock, FaCode } from 'react-icons/fa';

const statsData = [
  {
    icon: <FaUsers className="text-4xl text-blue-500" />,
    title: '90+',
    description: 'Satisfied Global Clients',
    shadow: true,
  },
  {
    image: 'https://www.vaival.com/wp-content/uploads/2023/11/Rectangle-813.webp',  // Replace with your image path
    title: '',
    description: '',
    shadow: false,
  },
  {
    icon: <FaProjectDiagram className="text-4xl text-green-500" />,
    title: '100+',
    description: 'Completed Projects',
    shadow: true,
  },
  {
    icon: <FaClock className="text-4xl text-purple-500" />,
    title: '7+',
    description: 'Years of IT Excellence',
    shadow: false,
  },
  {
    icon: <FaCode className="text-4xl text-orange-500" />,
    title: '10+',
    description: 'Tech Talents',
    shadow: true,
  },
  {
    icon: <FaGlobeAmericas className="text-4xl text-red-500" />,
    title: '1',
    description: 'Global Offices',
    shadow: false,
  },
  
];

const StatsSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl  mb-10" data-aos="fade-up" data-aos-delay="100">
          <strong>Providing Reliable Custom Software</strong><br />
          Development Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3" data-aos="fade-up" data-aos-delay="200">
          {statsData.map((item, index) => (
            <div
              key={index}
              className={`${
                item.shadow ? 'bg-white shadow-xl' : ''
              }  p-6 flex flex-col items-center justify-center space-y-3 hover:shadow-lg transition duration-300`}
            >
              {item.icon ? (
                item.icon
              ) : (
                <img src={item.image} alt={item.title} className="w-full h-64 object-cover rounded-xl" />
              )}
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="text-center text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
