import React from 'react';

const BlockchainApproaches = () => {
  return (
    <div className="bg-white"  data-aos="fade-up" data-aos-delay="100">
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6"  data-aos="zoom-in" data-aos-delay="200">
            <strong>Blockchain</strong> Approaches
          </h2>
          <p className="text-gray-600 mb-8"  data-aos="fade-down" data-aos-delay="200">
            Discover innovative solutions for your business with the help of blockchain experts at Vaival Technologies. Our blockchain experts recommend the most suitable approach by analyzing your product and target industry.
          </p>
          <div className="space-y-6"  data-aos="fade-left" data-aos-delay="300">
            <div>
              <h3 className="text-xl font-semibold mb-2">Public</h3>
              <p className="text-gray-600">
                Public blockchains involve a decentralized network where anyone can participate, validate transactions, and contribute to the shared ledger.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Private</h3>
              <p className="text-gray-600">
                Restricted access is provided to a specific group of participants. It offers heightened privacy, control, and is often used in enterprise solutions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Hybrid</h3>
              <p className="text-gray-600">
                Hybrid approach provides a flexible solution where certain transactions or data can be kept private, while others benefit from the openness of a public blockchain.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center" data-aos="fade-right" data-aos-delay="100">
          <img
            src="https://www.vaival.com/wp-content/uploads/2023/12/Group-27347.webp"
            alt="Blockchain Approach"
            className="w-full max-w-md rounded-xl shadow-lg"
          />
        </div>
      </section>

      <section className="bg-gray-50"  data-aos="fade-up" data-aos-delay="200">
        <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center order-1 md:order-none"  data-aos="fade-left" data-aos-delay="300">
            <img
              src="https://www.vaival.com/wp-content/uploads/2023/12/Group-27348-1024x775.webp"
              alt="Hire a Blockchain Developer"
              className="w-full max-w-md rounded-xl shadow-lg"
            />
          </div>
          <div  data-aos="fade-right" data-aos-delay="300">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <strong>Why hire blockchain</strong> developers from Vaival?
            </h2>
            <p className="text-gray-600 mb-8">
              As a leading blockchain development company, Vaival Technologies bring unmatched expertise and innovation to your project.
              <br /><br />
              With a finger on the pulse of the latest blockchain advancements, our team crafts custom blockchain solutions, ensuring your project stands out in the digital landscape. Choose Vaival for a distinct advantage in blockchain development.
            </p>
            <h3 className="text-xl font-semibold mb-4">What Do You Get?</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Expertise</li>
              <li>Innovation</li>
              <li>Tailored Solutions</li>
              <li>Commitment to Excellence</li>
              <li>Strategic Advantage</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlockchainApproaches;
