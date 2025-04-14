import React from "react";

const MVPSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 lg:py-28 bg-no-repeat bg-cover" style={{
        backgroundImage: "url('/mvp-bg.png')",
  
      }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            Launch Your MVP in 90 Days with Pay-As-You-Go Sprints
          </h2>
          <p className="text-lg text-white max-w-3xl mx-auto text-center">
            Our structured approach to MVP development services delivers functional
            and trustworthy MVPs that attract investors and early adopters,
            providing a stronger foundation for sustained growth and securing
            funding.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 text-center transform hover:scale-105"
            >
              Get Started
            </a>
            <a
              href="#calendly"
              className="border border-blue-600 text-white hover:bg-blue-700 font-medium py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
            >
              <span>Book Meeting</span>
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default MVPSection;