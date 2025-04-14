import React from "react";

// Sample icons (replace with actual images if needed)
const techStackImages = [
    'https://www.vaival.com/wp-content/uploads/2023/12/stack1-1.webp',
    'https://www.vaival.com/wp-content/uploads/2023/12/stack2-1.webp',
    'https://www.vaival.com/wp-content/uploads/2023/12/stack3-1.webp',
    'https://www.vaival.com/wp-content/uploads/2023/12/stack4-1.webp',
    'https://www.vaival.com/wp-content/uploads/2023/12/stack5-1.webp',
    'https://www.vaival.com/wp-content/uploads/2023/12/stack6-2.webp',
    'https://www.vaival.com/wp-content/uploads/2023/12/stack7-2.webp',
    'https://www.vaival.com/wp-content/uploads/2023/12/stack8-2.webp',
    'https://www.vaival.com/wp-content/uploads/2023/12/stack9-2.webp',
    'https://www.vaival.com/wp-content/uploads/2023/12/stack10.webp',
    'https://www.vaival.com/wp-content/uploads/2023/12/stack11.webp',
  ];

const features = [
  {
    title: "Unmatched Technical Prowess",
    desc: "Our team of expert AI app developers brings unparalleled coding experience. We work with top-notch tools and technologies including Python, Java, Angular, NodeJS, and more.",
  },
  {
    title: "Security First Approach",
    desc: "We emphasize data protection and implement industry-best encryption, access controls, and security layers at every development stage.",
  },
  {
    title: "Strong R&D Expertise",
    desc: "As a dedicated AI services company, our strong research team keeps us ahead of the curve, providing innovative and efficient solutions tailored to your needs.",
  },
  {
    title: "Smart Tech Stack",
    desc: "We leverage the best-fit technologies for your solution with modern architectures to ensure scalability and longevity.",
  },
  {
    title: "Transparency & Quality",
    desc: "You can expect full project visibility, on-time deliveries, and continuous quality checks to ensure superior product outcomes.",
  },
];

export default function AITechSection() {
  return (
    <div className="bg-white px-4 py-16 text-center" data-aos="fade-up" data-aos-delay="100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Tech Stack We Use to Deliver <br />
          <span className="text-blue-600">Custom AI Solutions</span>
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mt-8 justify-items-center">
        {techStackImages.map((url, index) => (
          <a
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-[120px] aspect-square bg-white shadow hover:scale-105 transition-transform rounded"
          >
            <div
              className="w-full h-full bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${url})` }}
              role="img"
              aria-label={`Tech Stack ${index + 1}`}
            />
          </a>
        ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Partner With <span className="text-blue-600">Vaival</span> - Your Trusted Artificial Intelligence Development Company
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          We are a dedicated AI development company, utilizing extensive domain expertise to push the boundaries of what's possible. Our custom AI development services help unlock powerful outcomes.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white  rounded-lg p-6 shadow hover:shadow-md transition"
            >
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
            REQUEST A QUOTE
          </button>
        </div>
      </div>
    </div>
  );
}
