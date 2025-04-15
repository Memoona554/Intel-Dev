import React from "react";

const AIServiceSection = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-8 lg:px-16 lg:py-28 lg:bg-center text-white bg-no-repeat"  style={{
        backgroundImage: "url('/ai-bg-img.webp')",
  
      }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <p className="text-sm ">
            <a href="/" className="text-blue-600 hover:underline">Home</a> &raquo;{" "}
            <a href="/services" className="text-blue-600 hover:underline">Services</a> &raquo;{" "}
            <span className=" font-semibold">Artificial Intelligence</span>
          </p>

          <h1 className="text-3xl md:text-4xl font-bold ">
            <strong>Artificial Intelligence Development Company</strong> that Delivers
          </h1>

          <p className="text-lg ">
            Leverage our cutting-edge custom AI services that automate mundane tasks and fortify business intelligence.
          </p>

          <a
            href="#calendly"
            className="inline-block bg-blue-600 text-white text-lg px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Book a Consultation
          </a>
        </div>

        
      </div>
    </section>
  );
};

export default AIServiceSection;
