import React from "react";

const MVPServices = () => {
  // Service data array
  const services = [
    {
      title: "MVP Strategy & Roadmap",
      description: "Developing a clear, actionable plan to guide your MVP from concept to successful market launch.",
      icon: "https://www.vaival.com/wp-content/uploads/2025/04/code-browser-svgrepo-com.svg"
    },
    {
      title: "MVP Prototyping & UI/UX",
      description: "Designing functional prototypes and intuitive UI/UX design to validate your product's core features and user experience.",
      icon: "https://www.vaival.com/wp-content/uploads/2025/04/pay-svgrepo-com.svg"
    },
    {
      title: "MVP Testing & Validation",
      description: "Conducting thorough testing to validate your MVP with real users, identifying areas for improvement.",
      icon: "https://www.vaival.com/wp-content/uploads/2025/04/time-past-svgrepo-com.svg"
    },
    {
      title: "MVP Iteration and Optimization",
      description: "Refining and improving your MVP based on real-time feedback and performance to better align with user expectations.",
      icon: "https://www.vaival.com/wp-content/uploads/2025/04/coding-data-development-svgrepo-com.svg"
    },
    {
      title: "MVP Deployment & Launch Support",
      description: "Assisting with the deployment and launch of your MVP making sure a smooth entry into the market.",
      icon: "https://www.vaival.com/wp-content/uploads/2025/04/api-svgrepo-com.svg"
    },
    {
      title: "Analytics & Performance Monitoring",
      description: "Monitoring your MVP's performance and collecting data to guide further development & enhance user engagement.",
      icon: "https://www.vaival.com/wp-content/uploads/2025/04/savings-dollar-svgrepo-com-1.svg"
    },
    {
      title: "MVP to Full-Scale Product",
      description: "Scaling your MVP to a fully-featured product by adding advanced functionalities based on market feedback & growth needs.",
      icon: "https://www.vaival.com/wp-content/uploads/2025/04/savings-dollar-svgrepo-com-1.svg"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f0f6ff]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our End-to-End{" "}
            <span className="relative inline-block">
              <span className="relative z-10">MVP Development</span>
              <svg
                className="absolute bottom-0 left-0 w-full h-2 text-blue-600"
                viewBox="0 0 256 72"
                preserveAspectRatio="none"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M 5,62.292028 C 86.143295,58.163296 150.94963,55.581544 201.92713,56.805749 240.6353,58.012017 244.45116,60.035922 251,62.292028"
                />
              </svg>
            </span>{" "}
            Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From ideation to launch, we offer complete MVP development services that cover every stage of the process. Whether you're validating your idea or scaling to a full product, our team builds your MVP to meet market needs, gather user feedback, and lay the foundation for future growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 mr-4">
                    <img 
                      src={service.icon} 
                      alt={service.title}
                      className="h-12 w-12"
                      width="48"
                      height="48"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MVPServices;