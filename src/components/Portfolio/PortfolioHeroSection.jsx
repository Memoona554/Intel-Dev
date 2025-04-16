import React from "react";

const InnovateSection = () => {
  return (
    <section className="py-16 lg:py-28 lg:h-[70vh] flex flex-col justify-center items-center bg-no-repeat bg-cover"  style={{
        backgroundImage: "url('/portfolio-bg.webp')",

      }}>
      <div className="container mx-auto px-4">
        <div className="text-center  max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Innovate. Enhance. Disrupt
          </h1>
          <p className="text-lg text-white">
            Learn how startups, businesses, and global leaders have made
            innovative breakthroughs by collaborating with our technology-led,
            market-leading experts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InnovateSection;
