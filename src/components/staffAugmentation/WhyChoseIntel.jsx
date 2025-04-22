import React from "react";

const WhyChooseIntel = () => {
  return (
   <>
    <section className="bg-white py-16 px-4 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <strong>Why Choose Intel Devs For IT</strong> Staff Augmentation Services
          </h2>
          <p className="text-gray-700 mb-6">
            Our IT development center specializes in IT staff augmentation services, including custom engagement models designed to cater to the unique needs of our clients, offering dedicated development support for both B2B and B2C scenarios.
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "7+ Years of Experience",
              "Get Your Product to Market Faster",
              "Scale Quickly and Flexibly",
              "Reduce Operational Cost",
            ].map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <i className="fas fa-circle text-blue-600 text-[8px] mt-1" />
                <span className="text-gray-700 text-sm">{item}</span>
              </li>
            ))}
          </ul>
         
        </div>

        <div className="flex justify-center">
          <img
            src="https://www.vaival.com/wp-content/uploads/2023/12/Group-27594.webp"
            alt="IT staff augmentation services"
            className="max-w-full h-auto rounded-xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
    <section className="bg-white py-16 px-4 lg:px-16">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="flex justify-center">
        <img
          src="https://www.vaival.com/wp-content/uploads/2023/12/Group-27407.webp"
          alt="Hire Developer"
          className="max-w-full h-auto rounded-xl"
          loading="lazy"
        />
      </div>

      <div>
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          <strong>Hire Best Remote Developers &amp; Grow</strong> Limitless with Intel Devs Technologies
        </h2>
        <p className="text-gray-700 mb-6">
          Integrate our talent to your project, or consult us first to check your exact requirements and get to the root of possible errors that might be affecting your system’s performance.
        </p>
        <a
          href="#calendly"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg text-sm transition duration-300"
        >
          Hire Now
        </a>
      </div>
    </div>
  </section>
   </>
  );
};

export default WhyChooseIntel;
