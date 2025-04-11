import React from 'react';
import { Link } from "react-router-dom";

const IndustryHeroSection = () => {
  return (
    <section className="w-full py-44 px-4 md:px-10 lg:px-20 bg-no-repeat bg-cover" style={{
      backgroundImage: "url('/industry.webp')",

    }}>

      <div className="container mx-auto px-4">

        <div className="breadcrumbs mb-4">
          <p className="text-lg text-gray-600">
            <span>
              <a href="/" className="text-blue-500 hover:underline">Home</a>
            </span>{' '}
            &gt;{' '}
            <span className="text-white">Industries</span>
          </p>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">
          <strong>Industries</strong> We Serve
        </h1>

        <p className="text-lg lg:w-[40%] text-white mb-6">
          Leveraging cutting-edge technologies to develop scalable custom software and digital solutions that redefine customer experiences.
        </p>
        <Link
          to={'/contact-us'}
          className="inline-block bg-blue-500 text-white py-2 px-6 rounded-lg text-lg hover:bg-blue-600 transition duration-300"
        >
          Talk to Our Experts
        </Link>



      </div>
    </section>
  );
};

export default IndustryHeroSection;
