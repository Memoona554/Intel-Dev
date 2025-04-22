import React from "react";

const AndroidDevelopmentSection = () => {
  return (
    <section className="px-4 py-16 bg-gray-100 ">
      <div className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <strong>Innovation-Driven Services from </strong>Dedicated Android Developers
            </h2>
            <a
              href="#calendly"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
            >
              Discuss Your Project Idea
            </a>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-gray-300">
                <div className="w-8 h-8 bg-blue-600 rounded-md"></div>
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  <small className="block text-sm font-normal">01</small>
                  Custom Android Apps
                </h3>
                <p className="mt-2 text-gray-600">
                  Our experienced and qualified developers can craft custom Android apps
                  that perfectly align with your vision. We focus on a user-centric approach
                  and include functionalities your users need.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-gray-300">
                <div className="w-8 h-8 bg-green-500 rounded-md"></div>
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  <small className="block text-sm font-normal">02</small>
                  API Integration & Customization
                </h3>
                <p className="mt-2 text-gray-600">
                  Our dedicated Android developers ensure flexible integration of
                  third-party APIs for a seamless app experience. We optimize performance
                  and customize features to meet your application requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AndroidDevelopmentSection;
