import React from "react";

const LagacyInfo = () => {
  return (
    <section className="px-4 py-12 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl md:text-5xl font-bold relative inline-block text-gray-900">
            <span className="relative z-10">
              Outdated Systems
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 72"
                preserveAspectRatio="none"
                className="absolute left-0 bottom-0 w-full h-6 z-0"
              >
                <path
                  fill="none"
                  stroke="#2169F7"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M 5,62.292028 C 86.143295,58.163296 150.94963,55.581544 201.92713,56.805749 240.6353,58.012017 244.45116,60.035922 251,62.292028"
                />
              </svg>
            </span>{" "}
            Slowing Your Real-Time AI Performance?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="mb-4 text-gray-700 text-lg">
              Struggling with complex upgrades and logistical nightmares?{" "}
              <strong>We offer advanced modernization solutions</strong> to help
              you overcome these challenges. We perform best if you belong to
              any of the following:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-800 font-medium">
              <li>
                You operate mission-critical legacy systems requiring
                modernization
              </li>
              <li>
                You need to integrate AI with advanced tech stacks without
                disrupting operations
              </li>
              <li>
                You seek cost-effective alternatives to expensive, in-house
                development teams
              </li>
              <li>
                You require enterprise-grade support and customization
              </li>
            </ul>
          </div>

          <div className="flex justify-center">
            <img
              src="https://www.vaival.com/wp-content/uploads/2024/11/Target-Audience-02-214x300.png"
              alt="Target Audience"
              className="w-[214px] h-auto"
            />
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="#calendly"
            className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-700 transition"
          >
            Schedule Your Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default LagacyInfo;
