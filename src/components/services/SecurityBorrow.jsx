import React from 'react';

const BorrowOurTeamSection = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-12" data-aos="fade-up" data-aos-delay="100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          Our <span className="text-blue-600">“Borrow Our Team”</span> Guarantee
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="flex-shrink-0" data-aos="fade-left" data-aos-delay="200">
            <img
              src="https://www.vaival.com/wp-content/uploads/2024/11/Group-1171275109-1-300x277.png"
              alt="Team working"
              className="rounded-xl border-4 border-blue-600 w-[300px] h-auto"
            />
          </div>

          <div className="text-left max-w-xl" data-aos="fade-right" data-aos-delay="300">
            <p className="font-semibold text-gray-800 mb-2">So here’s the deal…</p>
            <p className="text-blue-600 mb-4">
              Go ahead and “Borrow Our Team” to experience:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>All available features</li>
              <li>24/7 security monitoring</li>
              <li>Complete vulnerability assessment</li>
              <li>Detailed security roadmap</li>
              <li>Zero commitment required</li>
            </ul>
            <p className="text-gray-800">… all without paying a single cent!</p>
          </div>
        </div>

        <p className="mt-12 text-gray-700">
          If you're not 100% satisfied, you're covered with 7-day no questions asked, money back guarantee.
        </p>

        <div className="mt-8">
          <a
            href="#calendly"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Book a Meeting
          </a>
        </div>
      </div>
    </section>
  );
};

export default BorrowOurTeamSection;
