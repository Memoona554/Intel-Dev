import React from "react";

const StaffAugmentationHero = () => {
  return (
    <section className="bg-no-repeat py-24 md:py-28 md:h-[70vh] bg-cover "  style={{
      backgroundImage: "url('/staff-bg.webp')",

    }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Quickest Way to Hire Remote Software Developers
          </h1>

          <p className="text-white mb-6">
            Utilize our IT staff augmentation services to tap into a pool of certified software engineers and IT experts. We enable you to seamlessly expand your team as needed, ensuring access to top talent without straining your financial resources.
          </p>

          <a
            href="#calendly"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Start Hiring
          </a>
        </div>

       
      </div>
    </section>
  );
};

export default StaffAugmentationHero;
