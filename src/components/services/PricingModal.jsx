import React from "react";

const PricingModels = () => {
  return (
    <section className="px-4 py-12 bg-white"  data-aos="fade-up" data-aos-delay="100">
      <div className="max-w-4xl mx-auto text-center mb-12"  data-aos="zoom-in" data-aos-delay="200">
        <h2 className="text-3xl font-bold mb-4">At Intel Devs Technologies</h2>
        <p className="text-gray-700">
          we believe in flexibility to meet diverse client needs. Our business
          model offers a range of options, allowing you to choose what suits
          your project best.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center"  data-aos="fade-up" data-aos-delay="100">
        <div className="space-y-8">
          <div  data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-xl font-semibold mb-2">Customized Quotes</h3>
            <p className="text-gray-600">
              Tailored for projects with specific and evolving needs, our
              Customized Quotes model factors in the complexity and scope of
              your requirements, providing a nuanced pricing structure.
            </p>
          </div>

          <div  data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-semibold mb-2">Hourly Rate</h3>
            <p className="text-gray-600">
              For projects requiring adaptability and a pay-as-you-go approach,
              our Hourly Rate model ensures precise billing for the actual
              development time invested, offering flexibility for dynamic
              project scopes.
            </p>
          </div>

          <div  data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-xl font-semibold mb-2">Fixed Project Price</h3>
            <p className="text-gray-600">
              Suited for well-defined projects, our Fixed Project Price model
              establishes a predetermined cost for the entire development
              process. This model provides financial clarity and stability for
              projects with clear specifications.
              <br />
              <br />
              Choose the model that aligns with your project's nature and your
              budget preferences, and let Vaival bring your blockchain
              development vision to life.
            </p>
          </div>
        </div>

        <div className="flex justify-center"  data-aos="fade-up" data-aos-delay="100">
          <img
            src="https://www.vaival.com/wp-content/uploads/2023/12/Group-27349-1.webp"
            alt="Blockchain developer"
            className=" max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default PricingModels;
