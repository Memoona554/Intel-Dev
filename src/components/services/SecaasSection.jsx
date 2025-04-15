import React from "react";

const SecaaSSection = () => {
  return (
    <section className="px-4 py-16 bg-white" data-aos="fade-up" data-aos-delay="100">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 text-center">
          <h2 className="text-3xl md:text-4xl text-center font-bold text-gray-900">
            Security as a Service <span className="text-blue-900">(SecaaS)</span>
          </h2>
        </div>

        <div className="mb-12 text-center" data-aos="fade-up" data-aos-delay="200">
          <p className="text-gray-700 text-center text-lg">
            A new model that’s subscription-based, demand-based, and personalized.
          </p>
        </div>

        <div className="grid grid-cols-1 text-center md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="300">
          <div className="shadow-lg p-4">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">All-in-One Coverage</h3>
            <p className="text-gray-700">
              From vulnerability assessments to 24/7 threat monitoring and instant incident response—we’ve got you covered.
            </p>
          </div>

          <div className="shadow-lg p-4">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Affordable yet Quality</h3>
            <p className="text-gray-700">
              Get the same level of quality protection as Fortune 500 companies at a fraction of the cost.
            </p>
          </div>

          <div className="shadow-lg p-4">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Flexible SecOps Plans</h3>
            <p className="text-gray-700">
              Scale your SecOps up or down monthly with no long-term contracts or hidden fees.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecaaSSection;
