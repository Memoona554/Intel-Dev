import React from 'react';

const ContactHeroSection = () => {
  return (
    <section className="bg-white py-28 px-4 md:px-10 lg:px-20 bg-no-repeat bg-cover"  style={{
        backgroundImage: "url('/contact-bg.webp')",

      }}>
      <div className="max-w-6xl mx-auto">
      <div className="breadcrumbs mb-4">
          <p className="text-lg text-gray-600">
            <span>
              <a href="/" className="text-blue-500 hover:underline">Home</a>
            </span>{' '}
            &gt;{' '}
            <span className="text-white">Contact</span>
          </p>
        </div>
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-white mb-4">
            Kickstart Your Digital Transformation Today
          </h1>
          <p className="text-lg text-white">
            Get answers to all your queries from our business development team.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHeroSection;
