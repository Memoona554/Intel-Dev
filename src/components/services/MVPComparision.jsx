import React from 'react';

const MVPComparison = () => {
  return (
    <div className=" bg-[#eff5ff] flex items-center justify-center p-8">
      <div className="  p-8 max-w-6xl w-full">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Why Intel Devs <span className="text-blue-600">Stands Out in MVP</span> Development
          </h2>
          <p className="text-gray-600 mt-2">
            We specialize in delivering MVPs to help you bring your product to market efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-blue-700 mb-4">Intel Devs</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li>✅ <strong>Investor-Ready Prototypes:</strong><br /> With Intel Devs, quickly build functional MVPs that showcase your product’s value to stakeholders</li>
              <li>✅ <strong>Pay-As-You-Go Model:</strong><br /> Pay only for the development cycles (sprints) you need, keeping your budget and timeline on track.</li>
              <li>✅ <strong>Progress Tracking & Visibility:</strong><br /> Gain complete visibility and control with clear milestones and tracking for smooth project management.</li>
              <li>✅ <strong>Unlimited Requests & Revisions:</strong><br /> We provide unlimited development requests and revisions, maintaining flexibility and adaptability as your project grows.</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Other Companies</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li>❌ <strong>Limited Functionality:</strong><br /> Other providers often deliver incomplete MVPs, failing to meet your product’s full scope or attract early adopters.</li>
              <li>❌ <strong>High Upfront Fees:</strong><br /> Many companies impose high upfront costs and long-term commitments, limiting flexibility and increasing financial risks.
              </li>
              <li>❌ <strong>Lack of Control:</strong>
              <br /> Other companies leave you uncertain about where your project stands, leading to delays and inefficiencies.</li>
              <li>❌ <strong>Restricted Growth:</strong><br /> Many companies limit requests and revisions, making it difficult to scale and adapt as your project grows.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MVPComparison;
