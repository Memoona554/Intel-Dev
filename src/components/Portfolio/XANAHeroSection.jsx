import React from "react";

const XANAHeroSection = () => {
  return (
    <section className="bg-white px-4 py-20 lg:py-32 md:px-8 lg:px-16 lg:bg-cover bg-no-repeat" style={{
        backgroundImage: "url('/portfolio-proj-bg.webp')",

      }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center" data-aos="fade-up" data-aos-delay="100">
        <div>
          <h1 className="text-3xl sm:text-4xl text-white font-bold mb-4">XANA</h1>
          <p className="text-white text-base sm:text-lg leading-relaxed">
          AI x Web 3.0 Metaverse
            <br />
            <strong>Industry</strong>: Web App
            <br />
            <strong>Solution</strong>: Custom Software Development
          </p>
        </div>

        <div data-aos="zoom-in" data-aos-delay="100">
          <img
            src="https://www.vaival.com/wp-content/uploads/2024/01/mock-1.webp"
            alt="Float Funnel Project"
            className="w-full h-auto "
          />
        </div>
      </div>
    </section>
  );
};

export default XANAHeroSection;
