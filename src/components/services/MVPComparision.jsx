import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

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
              <li className="flex items-start space-x-3">
                <FaCheckCircle className="text-green-500 mt-1" />
                <div>
                  <strong>Investor-Ready Prototypes:</strong>
                  <p>With Intel Devs, quickly build functional MVPs that showcase your product’s value to stakeholders</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <FaCheckCircle className="text-green-500 mt-1" />
                <div>
                  <strong>Pay-As-You-Go Model:</strong>
                  <p>Pay only for the development cycles (sprints) you need, keeping your budget and timeline on track.</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <FaCheckCircle className="text-green-500 mt-1" />
                <div>
                  <strong>Progress Tracking & Visibility:</strong>
                  <p>Gain complete visibility and control with clear milestones and tracking for smooth project management.</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <FaCheckCircle className="text-green-500 mt-1" />
                <div>
                  <strong>Unlimited Requests & Revisions:</strong>
                  <p>We provide unlimited development requests and revisions, maintaining flexibility and adaptability as your project grows.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Other Companies</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start space-x-3">
                <FaCheckCircle className="text-red-500 mt-1" />
                <div>
                  <strong>Limited Functionality:</strong>
                  <p>Other providers often deliver incomplete MVPs, failing to meet your product’s full scope or attract early adopters.</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <FaCheckCircle className="text-red-500 mt-1" />
                <div>
                  <strong>High Upfront Fees:</strong>
                  <p>Many companies impose high upfront costs and long-term commitments, limiting flexibility and increasing financial risks.</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <FaCheckCircle className="text-red-500 mt-1" />
                <div>
                  <strong>Lack of Control:</strong>
                  <p>Other companies leave you uncertain about where your project stands, leading to delays and inefficiencies.</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <FaCheckCircle className="text-red-500 mt-1" />
                <div>
                  <strong>Restricted Growth:</strong>
                  <p>Many companies limit requests and revisions, making it difficult to scale and adapt as your project grows.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MVPComparison;
