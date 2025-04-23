import React from "react";

const WhyChooseIntelDevs = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white" data-aos="fade-down" data-aos-delay="100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <strong>Why Should You Choose</strong> Intel Devs to Hire
          <br className="hidden md:block" /> Python Developers?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          Being a leading Python development company, our developers have
          extensive knowledge in innovative Python frameworks. We stand out as
          your premier choice for Python development. Here’s why:
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="p-6 bg-gray-50 rounded-2xl shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Proficiency in Core Python
          </h3>
          <p className="text-gray-600">
            Our experts possess a deep understanding of core Python, ensuring a
            solid foundation for building robust and efficient web apps. Hire
            dedicated Python developers with solid expertise in exception
            handling, file handling, data structure, and object-oriented
            programming.
          </p>
        </div>

        <div className="p-6 bg-gray-50 rounded-2xl shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            In-depth Knowledge of Python Frameworks & Libraries
          </h3>
          <p className="text-gray-600">
            Our developers are well-versed in the diverse ecosystem of Python
            frameworks and libraries. Whether it's Django for web applications,
            Flask for microservices, or NumPy for scientific computing, we
            navigate the landscape to deliver tailored solutions.
          </p>
        </div>

        <div className="p-6 bg-gray-50 rounded-2xl shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Front-End Development
          </h3>
          <p className="text-gray-600">
            Beyond the backend, our Python experts excel in front-end
            development as well. With expertise in technologies like HTML, CSS,
            and JavaScript, we create seamless user interfaces that enhance the
            overall user experience.
          </p>
        </div>

        <div className="p-6 bg-gray-50 rounded-2xl shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Strong Grip on Multi-Process Architecture
          </h3>
          <p className="text-gray-600">
            Hire Python developers with a strong command of multi-process
            architecture. We leverage this expertise to design scalable and
            efficient systems capable of handling concurrent tasks, ensuring
            optimal performance for your applications.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <a
          href="#calendly"
          className="inline-block bg-blue-600 text-white text-lg font-semibold py-3 px-6 rounded-full hover:bg-blue-700 transition"
        >
          Talk to Our Experts
        </a>
      </div>
    </section>
  );
};

export default WhyChooseIntelDevs;
