import React from "react";

const stats = [
  {
    value: "7+",
    label: "Years of IT Consulting Experience",
  },
  {
    value: "10+",
    label: "IT Experts in Our Team",
  },
  {
    value: "100+",
    label: "Client Retention",
  },
];

const ITConsultingStats = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center mb-12">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-4xl font-bold text-indigo-600 mb-2">
                {item.value}
              </h3>
              <p className="text-gray-700">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="#calendly"
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold px-8 py-3 rounded-full transition duration-300"
          >
            Let’s Navigate Your Business Growth
          </a>
        </div>
      </div>
    </section>
  );
};

export default ITConsultingStats;
