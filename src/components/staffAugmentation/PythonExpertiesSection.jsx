import React from "react";

const PythonExpertiseSection = () => {
  const services = [
    {
      title: "Custom Python Development",
      description:
        "Our python experts leverage the versatility of this language to create custom applications, ensuring optimal functionality and seamless user experiences.",
    },
    {
      title: "Python CMS Development",
      description:
        "Hire python programmers who can create scalable and intuitive content management systems that streamline your workflow and enhance your digital presence.",
    },
    {
      title: "Migration to Python",
      description:
        "Seamlessly transition your applications to Python. Our experts ensure a smooth and efficient migration process, preserving data integrity while minimizing disruptions.",
    },
    {
      title: "Python Game Development",
      description:
        "Leverage the skills of our python experts to build adventurous games and graphical user interfaces (GUIs) with cutting-edge and interactive Python modules.",
    },
    {
      title: "AI and Machine Learning Solutions",
      description:
        "We hire Python developers who have in-depth expertise in developing innovative AI and ML applications that harness the power of data to drive informed decision-making.",
    },
    {
      title: "Django Framework Development",
      description:
        "Optimize your web apps by hiring Python programmers skilled in MVC architecture. Ensure clean, organized code for dynamic, easily maintainable solutions.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center" data-aos="zoom-in" data-aos-delay="100">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <strong>Strong Python Expertise to Accelerate Your Business Growth</strong> 
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          Intel Devs unparalleled Python expertise serves as a catalyst for your business growth. From concept to deployment, we offer a comprehensive suite of Python development services designed to elevate your projects and drive success.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-2">
                {service.title.split("<br>").map((line, idx) => (
                  <span key={idx} className="block">
                    {line}
                  </span>
                ))}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <a
          href="#calendly"
          className="inline-block bg-blue-600 text-white text-lg font-semibold px-8 py-3 rounded-full hover:bg-blue-700 transition"
        >
          Discuss Your Project
        </a>
      </div>
    </section>
  );
};

export default PythonExpertiseSection;
