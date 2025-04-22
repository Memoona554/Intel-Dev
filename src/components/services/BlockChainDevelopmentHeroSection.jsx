import React from "react";

const BlockchainDevelopment = () => {
  return (
    <section className="bg-white py-24 px-4 md:px-8 lg:px-16 lg:py-32 bg-no-repeat"  style={{
        backgroundImage: "url('/blockchain-bg.webp')",
  
      }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10"  data-aos="fade-up" data-aos-delay="100">
        <div>
          
          <h1 className="text-4xl font-bold mb-4"  data-aos="fade-up" data-aos-delay="200">
            <strong className="text-white">Blockchain</strong> Development Services
          </h1>
          <p className="text-white mb-6"  data-aos="zoom-in" data-aos-delay="300">
            With over 10 years of experience in the IT realm, Intel Devs is your trusted source
            for exceptional blockchain development services. Transform your business with our blockchain
            solutions, tailored to your specific needs.
          </p>
          <a  data-aos="fade-up" data-aos-delay="400"
            href="#calendly"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Consult our Experts
          </a>
        </div>

        
      </div>
    </section>
  );
};

export default BlockchainDevelopment;
