import React from "react";

const PhpDevelopmentServices = () => {
  const services = [
    {
      title: "Custom PHP Applications",
      description:
        "Custom solutions designed to match your unique business requirements, ensuring optimal functionality and user experience. Our PHP programmers use their in-depth skills of OOP, MVC, and core PHP to build static, dynamic, and robust PHP web apps for your business.",
    },
    {
      title: "PHP Based CMS Development",
      description:
        "Get custom PHP-based Content Management Systems with intuitive content control, extensibility, and seamless workflow management. Our offshore PHP developers have full-scale expertise in open-source CMS like WordPress, Drupal, Joomla, Magento, and many more.",
    },
    {
      title: "Custom Module Development",
      description:
        "Our PHP programmers specialize in creating modular components, seamlessly integrated into your applications to enhance functionality, scalability, and overall user experience. Elevate your project with bespoke modules crafted to meet your unique requirements.",
    },
    {
      title: "PHP Migration Services",
      description:
        "Seamlessly transition legacy systems to PHP, leveraging our expertise in ensuring data integrity, functionality preservation, and improved performance. Hire dedicated PHP developers to seamlessly migrate your app from Python or Java or any other tech stack to the PHP.",
    },
    {
      title: "PHP ECommerce Development",
      description:
        "Strengthen your online storefront with secure and feature-rich PHP eCommerce solutions, integrating payment gateways, inventory management, and user-friendly interfaces. Our skilled PHP programmers build top-notch solutions with next-gen features and functionalities.",
    },
    {
      title: "API Integration",
      description:
        "Hire PHP developers who can easily integrate public, private, and internal APIs into CMS and PHP systems. Our expert PHP developers are skilled in integrating third-party APIs into PHP websites as per the unique requirements of your projects or business.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4" data-aos="zoom-out" data-aos-delay="100">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          <strong>Top-Tier PHP Development</strong> Services to Drive Your Business Growth
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">{service.title}</h3>
              <p className="text-gray-700 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <a
            href="#calendly"
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-700 transition"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default PhpDevelopmentServices;
