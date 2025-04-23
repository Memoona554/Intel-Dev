import React from "react";

const services = [
  {
    title: "Software Consulting Services",
    description:
      "We specialize in custom software development, providing tailored solutions for your unique business needs. Seamlessly integrate new software or modernize legacy systems. Rigorous testing assures reliability.",
  },
  {
    title: "Product Strategy Services",
    description:
      "We analyze market trends to shape a roadmap aligned with your goals. From ideation to execution, we ensure innovative product positioning and strategic market entry.",
  },
  {
    title: "Risk Assessment and Compliance",
    description:
      "We protect your assets from threats and ensure regulatory compliance. Security audits and data privacy measures help keep your business error-free and compliant.",
  },
  {
    title: "Process and Cost Optimization",
    description:
      "We streamline workflows, implement automation, and optimize resource allocation to maximize efficiency and reduce costs without compromising performance.",
  },
  {
    title: "Project Management Guidance",
    description:
      "From initiation to closure, we provide strategic planning and risk mitigation to ensure successful, timely project delivery with optimal resource use.",
  },
  {
    title: "Modernizing Core Technology",
    description:
      "We upgrade your digital infrastructure by integrating ERP, mobile, and analytics. We streamline and enhance productivity through modern IT architecture.",
  },
  
];

const ITConsultingServices = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            IT Consulting Services that We Offer
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We assist you in optimizing your business with our information technology consulting services. Our strategic planning ensures your IT infrastructure aligns seamlessly with business objectives.
          </p>
          
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 transition hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ITConsultingServices;
