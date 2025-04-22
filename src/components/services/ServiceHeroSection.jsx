import React from "react";

const ServiceHeroSection = () => {
  return (
    <section className="bg-white py-24 px-4 md:px-8 lg:px-16 lg:py-32 lg:bg-center text-white" style={{
      backgroundImage: "url('https://www.vaival.com/wp-content/uploads/2023/11/Group-15419.webp')",

    }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">


          <h1 className="text-3xl md:text-4xl font-bold ">
            <strong>Custom Software</strong>
            <br />Development Company
            <br />That Ignites Your Business Growth
          </h1>

          <p className="text-lg ">
            As a custom software development company, we strive for excellence in every phase of the project, utilizing the latest technologies. From concept to delivery, we provide tailored solutions for web, mobile, and cloud platforms.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceHeroSection;
