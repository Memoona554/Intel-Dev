import React from "react";

const ExpertiseSection = () => {
  const stats = [
    {
      number: "10+",
      label: "Pre-Vetted React Developers",
      borderColor: "border-blue-600",
    },
    {
      number: "7+",
      label: "Years of Experience",
      borderColor: "border-green-600",
    },
    {
      number: "100+",
      label: "Projects Completed",
      borderColor: "border-blue-600",
    },
  ];

  return (
    <section className="bg-white py-12 px-4" data-aos="fade-up" data-aos-delay="100">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl  text-black mb-12 leading-snug">
          <strong>Expertise that help you reach your</strong> <br />
          business goals faster
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`border-t-4 ${item.borderColor} rounded-xl shadow-md p-6 text-center`}
            >
              <h3 className="text-4xl font-extrabold text-blue-700 mb-2">
                {item.number}
              </h3>
              <p className="text-gray-700 text-lg whitespace-pre-line">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
