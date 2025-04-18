import React from 'react';

const projects = [
  {
    title: 'Vulcan Forged',
    image: 'proj_2.png',
    link: '/portfolio/dex-check',
    alt: 'Vulcan Forged'
  },
  {
    title: 'Care Cart',
    image: 'proj_1.png',
    link: '/portfolio/xana',
    alt: 'Care Cart'
  }
];

const Portfolio = () => {
  return (
    <section className="bg-white py-16" data-aos="fade-up" data-aos-delay="100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Portfolio</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-105 transition duration-300 shadow-md rounded-xl overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.alt}
                className="w-full h-auto object-cover"
              />
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.vaival.com/case-studies/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
