import React from 'react';

const StaffAugmentation = () => {
  return (
    <section className="w-full px-5 py-16 bg-white">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center space-y-6 px-6 lg:px-0">
          <h2 className="text-3xl font-bold text-gray-900">
            <strong>Staff Augmentation</strong>
            <br />
            Services
          </h2>
          <p className="text-lg text-gray-700">
            Propel Your Business &amp; Hire World’s Best Talent With Our IT Staff Augmentation Services
          </p>
          <p className="text-lg text-gray-700">
            We know that skill shortages are holding you back. Hire specialized expertise and skills with our IT Staff Augmentation Services and let us be your strategic partner in driving growth and achieving success.
          </p>
          <div className="text-center lg:text-left">
            <a
              href="https://www.vaival.com/staff-augmentation/"
              className="inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full">
            <img
              src="https://www.vaival.com/wp-content/uploads/2023/11/Group-15417-1.webp"
              alt="software development consulting services"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaffAugmentation;
