import React from "react";
import { Link } from "react-router-dom"; 

const AboutHeroSection = () => {
  return (
    <section className="bg-white py-28 bg-no-repeat bg-cover lg:bg-center"   style={{
        backgroundImage: "url('/about-bg.webp')",

      }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Transforming Businesses With Innovative Technology Solutions
        </h1>

        
      </div>
    </section>
  );
};

export default AboutHeroSection;
