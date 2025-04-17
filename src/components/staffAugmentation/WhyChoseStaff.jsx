import React from "react";

const engagementOptions = [
  {
    title: "Staff Augmentation",
    points: [
      "AI_Enabled Developers",
      "Large and long-term projects",
      "Change-friendly",
    ],
  },
  {
    title: "Full Outsourcing",
    points: [
      "Clear deliverables",
      "Set budget",
      "Full control over the project",
    ],
  },
  {
    title: "Self Managed Teams",
    points: [
      "Ideal for any project duration",
      "Dedicated team",
      "Budget-friendly",
    ],
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-16 px-4 lg:px-16">
      <div className="max-w-5xl mx-auto  flex flex-col lg:flex-row justify-center items-center gap-12">
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl  lg:text-4xl font-bold mb-4">
            <strong>Our Flexible</strong> <br className="hidden lg:block" />
            Engagement Model
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Our software engagement model is designed to provide <br /> our clients
            with a transparent and <br /> collaborative process that ensures their
            needs and <br /> requirements are met.
          </p>
        </div>

        <div className="order-1 lg:w-[50%] lg:mx-auto lg:order-2">

          <div className="space-y-8">
            {engagementOptions.map((option, index) => (
              <div
                key={index}
                className={`bg-white border border-gray-200 rounded-xl p-6 shadow-[8px_8px_0px_0px_#2563EB] transition-transform duration-300 hover:-translate-y-1 ${
                  index === 1 ? "ml-6 lg:ml-12" : index === 2 ? "ml-3 lg:ml-6" : ""
                }`}
              >
                <h4 className="text-lg font-semibold mb-3">{option.title}</h4>
                <ul className="space-y-2">
                  {option.points.map((point, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="pt-1">
                        <i className="fas fa-circle text-blue-600 text-[8px] mt-1"></i>
                      </span>
                      <span className="text-gray-700 text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
