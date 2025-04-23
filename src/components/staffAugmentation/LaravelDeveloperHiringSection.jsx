import React from 'react';

const LaravelDeveloperHiringSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4" data-aos="fade-down" data-aos-delay="100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">
            <strong>Flexible Hiring Models to Hire Laravel</strong> 
            <br /> <strong>Developers from Intel Devs</strong>
          </h2>
          <p className="text-lg text-black">
            Choose the hiring model that best suits your unique project needs and
            kickstart your project with our top-notch Laravel web development.
          </p>
        </div>

        <section className="flex md:flex-row flex-col justify-between gap-8">
          <div className="w-full sm:w-1/2">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-center mb-4">Hour-based Hiring Model</h3>
              <p className="text-center text-black">
                Opt for flexibility and control. Pay only for the hours worked, allowing you to
                scale resources based on the project's demands, ensuring optimal cost-effectiveness.
              </p>
            </div>
          </div>

          <div className="w-full sm:w-1/2">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-center mb-4">Project-based Hiring Model</h3>
              <p className="text-center text-black">
                Our project-based hiring model is best fitted for well-defined projects with
                clear scopes and timelines. This allows you to enjoy a fixed-price model that
                provides cost predictability.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 text-center">
          <a
            href="#calendly"
            className="inline-block bg-blue-600 text-white py-3 px-6 rounded-full text-lg hover:bg-blue-700 transition duration-300"
          >
            Book A Consultation
          </a>
        </section>
      </div>
    </section>
  );
};

export default LaravelDeveloperHiringSection;
