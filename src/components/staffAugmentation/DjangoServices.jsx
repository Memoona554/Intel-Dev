import React from 'react';

const DjangoServices = () => {
  return (
    <section className="px-4 py-16 bg-white">
      <div className="max-w-6xl mx-auto text-center" data-aos="zoom-in" data-aos-delay="100">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <strong>Our Django</strong> Development Services
        </h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          Our Django expertise covers every aspect of Django development. Explore our Django development services and let us be your trusted partner in success through cutting-edge technology.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-2">Django Web App Development</h3>
            <p className="text-gray-600">Our skilled developers craft dynamic and scalable web solutions by leveraging the power of Django’s robust framework.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Django API Development</h3>
            <p className="text-gray-600">Our Django developers specialize in creating RESTful APIs that serve as the backbone of efficient communication between different software components.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Django Web App Development</h3>
            <p className="text-gray-600">Whether it’s data management, authentication, or server-side logic, we build a robust backend personalized to your unique requirements.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-2">SaaS Development</h3>
            <p className="text-gray-600">We design and develop scalable SaaS solutions that cater to your specific business needs and project requirements.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Migration & Integration</h3>
            <p className="text-gray-600">Our Django programmers execute smooth migrations and integrations, preserving data integrity and minimizing downtime.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Support & Maintenance</h3>
            <p className="text-gray-600">Hire dedicated Django developers to receive timely updates, bug fixes, and performance enhancements to keep your web solutions operating at peak efficiency.</p>
          </div>
        </div>

        <div>
          <a
            href="#calendly"
            className="inline-block bg-blue-600 text-white text-lg px-8 py-3 rounded-full shadow-md hover:bg-blue-700 transition"
          >
            Connect With Our Experts
          </a>
        </div>
      </div>
    </section>
  );
};

export default DjangoServices;
