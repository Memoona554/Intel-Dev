import React from "react";

const features = [
  {
    title: "Manage IT Assets with Ease",
    description: "Track, monitor, and manage your IT assets with ease in real-time from anywhere.",
    img: "https://demo.vaival.com/wp-content/uploads/2024/11/Group-1-1.png",
  },
  {
    title: "Surface Posture Anomalies",
    description: "Identify aberrations, deviations, and outliers in your assets by 24/7 analysis across your devices.",
    img: "https://www.vaival.com/wp-content/uploads/2024/11/Group-1-12.png",
  },
  {
    title: "Stay Away From Vulnerabilities",
    description: "Scan, assess, prioritize, and remediate vulnerabilities on devices with complete risk management.",
    img: "https://demo.vaival.com/wp-content/uploads/2024/11/Group-1-4.png",
  },
  {
    title: "Stay Compliant",
    description: "Regulate devices with authorities benchmarks ( i.e. GDPR, SOC 2, ISO 27001, and more).",
    img: "https://demo.vaival.com/wp-content/uploads/2024/11/Group-1-5.png",
  },
  {
    title: "Prioritize Risks",
    description: "Identify aberrations, deviations, and outliers in your assets by 24/7 analysis across your devices.",
    img: "https://demo.vaival.com/wp-content/uploads/2024/11/Group-1-6.png",
  },
  {
    title: "Patch Updates",
    description: "Keep your IT assets up-to-date to protect your system against any vulnerability with advanced patch management process.",
    img: "https://demo.vaival.com/wp-content/uploads/2024/11/Group-1-9.png",
  },
  {
    title: "Full Endpoint Control",
    description: "Avoid any threats from entering your systems and mitigate all types of risks with 100+ security controls.",
    img: "https://demo.vaival.com/wp-content/uploads/2024/11/Group-1-8.png",
  },
];

const BusinessProcessSection = () => {
  return (
    <section className="py-16 bg-[#eff5ff]" data-aos="fade-up" data-aos-delay="100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          <span className="text-blue-600">Business Process</span> with Seven Steps
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-aos="fade-up" data-aos-delay="200">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <img src={feature.img} alt={feature.title} className="w-48 h-48 object-contain mb-6" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessProcessSection;
