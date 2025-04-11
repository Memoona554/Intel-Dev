import React from 'react';

const AboutUsSection = () => {
  return (
    <section className="w-full py-16" >
      <div className="container mx-auto flex flex-wrap justify-between items-center" data-aos="fade-up" data-aos-delay="100">
        
        {/* Left Column: Image */}
        <div className="w-full md:w-1/2 p-4" data-aos="fade-up" data-aos-delay="200">
          <img
            className="lg:w-[80%] w-full h-auto"
            src="https://www.vaival.com/wp-content/uploads/2023/12/Group-27356-300x300.webp"
            alt="About Us"
          />
        </div>

        {/* Right Column: Text Content */}
        <div className="w-full md:w-1/2 p-4" data-aos="fade-up" data-aos-delay="300">
          
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">We Execute Our <br /> Ideas From The Start <br /> to Finish</h2>

          {/* Our Story */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold">Our Story?</h3>
            <p className="text-lg">
              Public blockchains involve a decentralized network where anyone can participate, validate transactions, and contribute to the shared ledger.
            </p>
          </div>

          {/* What We Do Best */}
          <div>
            <h3 className="text-xl font-semibold">What We Do Best?</h3>
            <p className="text-lg">
              We start by listening to you, understanding the issues, requirements, unique challenges, and objectives. We delve deep into the core of your business, your target market, and competitors. Then we combine this information with our technical knowledge, expertise, and research, to provide the best solution at the lowest cost.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
