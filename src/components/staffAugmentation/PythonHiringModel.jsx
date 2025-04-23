import React from "react";

const HiringModels = () => {
  return (
    <section className="px-4 py-12 md:px-8 lg:px-16 bg-blue-600" data-aos="fade-up" data-aos-delay="100">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl text-white font-bold mb-4">
          <strong>Flexible Hiring Models to</strong> Hire Python Developers
        </h2>
        <p className="text-white max-w-2xl mx-auto mb-10">
          Discover the perfect fit for your development needs with our flexible hiring models. Choose from the following options:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-md">
        <img
            src="/1.webp"
            alt="Hour-based Hiring"
            className=" h-20"
          />
          <h3 className="text-xl font-semibold mb-2">Hour-based Hiring</h3>
          <p className="text-gray-600 mb-4">
            Customize your engagement by hiring Python developers on an hourly basis. Ideal for short-term projects, troubleshooting, or when requirements are subject to change.
          </p>
          
        </div>

        <div className="flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-md">
        <img
            src="/2.webp"
            alt="Project-based Hiring"
            className=" h-20"
          />
          <h3 className="text-xl font-semibold mb-2">Project-based Hiring</h3>
          <p className="text-gray-600 mb-4">
            Opt for a project-based hiring model for well-defined, long-term projects. Set clear project milestones and deadlines, and pay based on the scope and deliverables.
          </p>
          
        </div>
      </div>

      <div className="text-center mt-10">
        <a
          href="#calendly"
          className="inline-block bg-white hover:bg-blue-700 text-black hover:text-white text-lg font-medium py-3 px-6 rounded-xl transition duration-300"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default HiringModels;
