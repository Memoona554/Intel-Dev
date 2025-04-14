import React from 'react';

const MVPType = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Headline */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          Access <span className="text-blue-600">Affordable Development Resources</span> To Build Your{' '}
          <span className="bg-transparent">Minimum Viable Product</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Our developers build your MVP in 90 days, whether it’s single-feature or multi-capability, we enable
          you to gather feedback, attract investors, and refine your product efficiently.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white  p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Single-Feature MVP</h3>
          <p className="text-gray-600">
            Focus on one main feature to solve a primary problem and gather user insights quickly.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Multi-Capability MVP</h3>
          <p className="text-gray-600">
            Create a product with both core and additional features, providing a versatile solution to meet
            various business needs.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Concierge MVP (Manual-First MVP)</h3>
          <p className="text-gray-600">
            Manually handle backend processes while focusing on frontend development, testing the viability
            before making a major investment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MVPType;
